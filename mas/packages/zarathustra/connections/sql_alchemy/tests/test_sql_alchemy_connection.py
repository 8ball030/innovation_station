# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2023 zarathustra
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.
#
# ------------------------------------------------------------------------------

"""Tests for zarathustra/sql_alchemy connection."""

# pylint: skip-file

import asyncio
import logging
from asyncio import CancelledError
from typing import Any, cast
from unittest.mock import MagicMock, Mock, patch

import aiohttp
import pytest
from aea.common import Address
from aea.configurations.base import ConnectionConfig
from aea.identity.base import Identity
from aea.mail.base import Envelope, Message
from aea.protocols.dialogue.base import Dialogue as BaseDialogue
from aea.test_tools.constants import UNKNOWN_PROTOCOL_PUBLIC_ID
from aea.test_tools.mocks import AnyStringWith
from aea.test_tools.network import get_host, get_unused_tcp_port

from packages.zarathustra.connections.sql_alchemy.connection import SQLAchemyConnection
from packages.zarathustra.protocols.sql_crud.dialogues import SqlCrudDialogue
from packages.zarathustra.protocols.sql_crud.dialogues import SqlCrudDialogues as BaseSqlCrudDialogues

from packages.valory.protocols.http.message import HttpMessage

logger = logging.getLogger(__name__)


class _MockRequest:
    """Fake request for aiohttp client session."""

    def __init__(self, response: Mock) -> None:
        """Init with mock response."""
        self.response = response

    async def __aenter__(self) -> Mock:
        """Enter async context."""
        return self.response

    async def __aexit__(self, *args: Any, **kwargs: Any) -> None:
        """Exit async context."""
        return None


class SqlCrudDialogues(BaseSqlCrudDialogues):
    """The dialogues class keeps track of all SQL Alchemy dialogues."""

    def __init__(self, self_address: Address, **kwargs: Any) -> None:
        """
        Initialize dialogues.

        :param self_address: the address
        :param kwargs: keyword arguments
        """

        def role_from_first_message(  # pylint: disable=unused-argument
            message: Message, receiver_address: Address
        ) -> BaseDialogue.Role:
            """Infer the role of the agent from an incoming/outgoing first message

            :param message: an incoming/outgoing first message
            :param receiver_address: the address of the receiving agent
            :return: The role of the agent
            """
            return SqlCrudDialogue.Role.AGENT

        BaseSqlCrudDialogues.__init__(
            self,
            self_address=self_address,
            role_from_first_message=role_from_first_message,
        )


@pytest.mark.asyncio
class TestSqlAlchemyConnect:
    """Tests the SQL Alchemy connection's 'connect' functionality."""

    def setup(self) -> None:
        """Initialise the class."""
        self.address = get_host()
        self.port = get_unused_tcp_port()
        self.agent_identity = Identity(
            "name", address="some string", public_key="some public_key"
        )
        self.client_skill_id = "some/skill:0.1.0"
        configuration = ConnectionConfig(
            host=self.address,
            port=self.port,
            connection_id=SQLAchemyConnection.connection_id,
        )
        self.sql_alchemy_connection = SQLAchemyConnection(
            configuration=configuration,
            data_dir=MagicMock(),
            identity=self.agent_identity,
        )
        self.connection_address = str(SQLAchemyConnection.connection_id)
        self.sql_crud_dialogs = SqlCrudDialogues(self.client_skill_id)

    @pytest.mark.asyncio
    async def test_initialization(self) -> None:
        """Test the initialisation of the class."""
        assert self.sql_alchemy_connection.address == self.agent_identity.address

    @pytest.mark.asyncio
    async def test_connection(self) -> None:
        """Test the connect functionality of the http client connection."""
        await self.sql_alchemy_connection.connect()
        assert self.sql_alchemy_connection.is_connected is True

    @pytest.mark.asyncio
    async def test_disconnect(self) -> None:
        """Test the disconnect functionality of the http client connection."""
        await self.sql_alchemy_connection.connect()
        assert self.sql_alchemy_connection.is_connected is True

        await self.sql_alchemy_connection.disconnect()
        assert self.sql_alchemy_connection.is_connected is False

    @pytest.mark.asyncio
    async def test_http_send_error(self) -> None:
        """Test request fails and send back result with code 600."""
        await self.sql_alchemy_connection.connect()
        request_http_message, _ = self.sql_crud_dialogs.create(
            counterparty=self.connection_address,
            performative=HttpMessage.Performative.REQUEST,
            method="get",
            url="bad url",
            headers="",
            version="",
            body=b"",
        )
        request_envelope = Envelope(
            to=self.connection_address,
            sender=self.client_skill_id,
            protocol_specification_id=UNKNOWN_PROTOCOL_PUBLIC_ID,
            message=request_http_message,
        )

        connection_response_mock = Mock()
        connection_response_mock.status_code = 200

        await self.sql_alchemy_connection.send(envelope=request_envelope)
        # TODO: Consider returning the response from the server in order to be able to assert that the message send!
        envelope = await asyncio.wait_for(
            self.sql_alchemy_connection.receive(), timeout=10
        )
        assert envelope
        assert isinstance(envelope.message, HttpMessage)
        assert envelope.message.status_code == 600

        await self.sql_alchemy_connection.disconnect()

    @pytest.mark.asyncio
    async def test_http_client_send_not_connected_error(self) -> None:
        """Test connection.send error if not conencted."""
        with pytest.raises(ConnectionError):
            await self.sql_alchemy_connection.send(Mock())

    @pytest.mark.asyncio
    async def test_http_channel_send_not_connected_error(self) -> None:
        """Test channel.send error if not conencted."""
        with pytest.raises(ValueError):
            self.sql_alchemy_connection.channel.send(Mock())

    @pytest.mark.asyncio
    async def test_send_empty_envelope_skip(self) -> None:
        """Test skip on empty envelope request sent."""
        await self.sql_alchemy_connection.connect()
        with patch.object(
            self.sql_alchemy_connection.channel, "_http_request_task"
        ) as mock:
            await self.sql_alchemy_connection.send(None)  # type: ignore
        mock.assert_not_called()

    @pytest.mark.asyncio
    async def test_channel_get_message_not_connected(self) -> None:
        """Test errro on message get if not connected."""
        with pytest.raises(ValueError):
            await self.sql_alchemy_connection.channel.get_message()

    @pytest.mark.asyncio
    async def test_channel_cancel_tasks_on_disconnect(self) -> None:
        """Test requests tasks cancelled on disconnect."""
        await self.sql_alchemy_connection.connect()
        request_http_message, _ = self.sql_crud_dialogs.create(
            counterparty=self.connection_address,
            performative=HttpMessage.Performative.REQUEST,
            method="get",
            url="https://not-a-google.com",
            headers="Host: https://not-a-google.com",
            version="",
            body=b"",
        )
        request_envelope = Envelope(
            to=self.connection_address,
            sender=self.client_skill_id,
            protocol_specification_id=UNKNOWN_PROTOCOL_PUBLIC_ID,
            message=request_http_message,
        )

        connection_response_mock = Mock()
        connection_response_mock.status_code = 200

        response_mock = Mock()
        response_mock.status = 200
        response_mock.headers = {"headers": "some header"}
        response_mock.reason = "OK"
        response_mock._body = b"Some content"
        response_mock.read.return_value = asyncio.Future()

        with patch.object(
            aiohttp.ClientSession,
            "request",
            return_value=_MockRequest(response_mock),
        ):
            await self.sql_alchemy_connection.send(envelope=request_envelope)

            assert self.sql_alchemy_connection.channel._tasks
            task = list(self.sql_alchemy_connection.channel._tasks)[0]
            assert not task.done()
        await self.sql_alchemy_connection.disconnect()

        assert not self.sql_alchemy_connection.channel._tasks
        assert task.done()
        with pytest.raises(CancelledError):
            await task

    @pytest.mark.asyncio
    async def test_http_send_ok(self) -> None:
        """Test request is ok cause mocked."""
        await self.sql_alchemy_connection.connect()
        request_http_message, sending_dialogue = self.sql_crud_dialogs.create(
            counterparty=self.connection_address,
            performative=HttpMessage.Performative.REQUEST,
            method="get",
            url="https://not-a-google.com",
            headers="",
            version="",
            body=b"",
        )
        request_envelope = Envelope(
            to=self.connection_address,
            sender=self.client_skill_id,
            message=request_http_message,
        )

        connection_response_mock = Mock()
        connection_response_mock.status_code = 200

        response_mock = Mock()
        response_mock.status = 200
        response_mock.headers = {"headers": "some header"}
        response_mock.reason = "OK"
        response_mock._body = b"Some content"
        response_mock.read.return_value = asyncio.Future()
        response_mock.read.return_value.set_result("")

        with patch.object(
            aiohttp.ClientSession,
            "request",
            return_value=_MockRequest(response_mock),
        ):
            await self.sql_alchemy_connection.send(envelope=request_envelope)
            # TODO: Consider returning the response from the server in order to be able to assert that the message send!
            envelope = await asyncio.wait_for(
                self.sql_alchemy_connection.receive(), timeout=10
            )

        assert envelope is not None and envelope.message is not None
        message = envelope.message
        assert isinstance(message, HttpMessage)
        response_dialogue = self.sql_crud_dialogs.update(message)
        assert message.status_code == response_mock.status, message.body.decode("utf-8")
        assert sending_dialogue == response_dialogue
        await self.sql_alchemy_connection.disconnect()

    @pytest.mark.asyncio
    async def test_http_dialogue_construct_fail(self) -> None:
        """Test dialogue not properly constructed."""
        await self.sql_alchemy_connection.connect()

        incorrect_http_message = HttpMessage(
            dialogue_reference=self.sql_crud_dialogs.new_self_initiated_dialogue_reference(),
            performative=HttpMessage.Performative.RESPONSE,  # type: ignore
            status_code=500,
            headers="",
            status_text="",
            body=b"",
            version="",
        )
        incorrect_http_message.to = self.connection_address
        incorrect_http_message.sender = self.client_skill_id

        # the incorrect message cannot be sent into a dialogue, so this is omitted.

        envelope = Envelope(
            to=incorrect_http_message.to,
            sender=incorrect_http_message.sender,
            message=incorrect_http_message,
        )
        with patch.object(
            self.sql_alchemy_connection.channel.logger, "warning"
        ) as mock_logger:
            await self.sql_alchemy_connection.channel._http_request_task(envelope)
            mock_logger.assert_any_call(
                AnyStringWith("Could not create dialogue for message=")
            )

    @pytest.mark.asyncio
    async def test_http_send_exception(self) -> None:
        """Test request is ok cause mocked."""
        await self.sql_alchemy_connection.connect()
        request_http_message, sending_dialogue = self.sql_crud_dialogs.create(
            counterparty=self.connection_address,
            performative=HttpMessage.Performative.REQUEST,  # type: ignore
            method="get",
            url="https://not-a-google.com",
            headers="Host: https://not-a-google.com",
            version="",
            body=b"",
        )
        request_envelope = Envelope(
            to=self.connection_address,
            sender=self.client_skill_id,
            message=request_http_message,
        )

        with patch.object(
            aiohttp.ClientSession,
            "request",
            side_effect=asyncio.TimeoutError("expected exception"),
        ):
            await self.sql_alchemy_connection.send(envelope=request_envelope)
            envelope = await asyncio.wait_for(
                self.sql_alchemy_connection.receive(), timeout=10
            )

        assert envelope
        message = cast(HttpMessage, envelope.message)
        assert message.performative == HttpMessage.Performative.RESPONSE
        assert b"expected exception" in message.body