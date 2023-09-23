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

"""SQL Alchemy connection and channel."""

from typing import Any, Optional
from dataclasses import dataclass

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session, sessionmaker
from sqlalchemy import (
    BigInteger,
    Boolean,
    Column,
    DateTime,
    Float,
    String,
    create_engine,
    func,
)

from aea.configurations.base import PublicId
from aea.connectionzarathustrazarathustrazarathustras.base import Connection, ConnectionStates
from aea.mail.base import Envelope


CONNECTION_ID = PublicId.from_str("zarathustra/sql_alchemy:0.1.0")


@dataclass
class Agent:
    """This class scaffolds an agent."""


class SQLAchemyConnection(Connection):
    """SQL Alchemy connection."""

    object_to_model = {}
    connection_id = CONNECTION_ID

    def __init__(self, **kwargs: Any) -> None:
        """
        Initialize the SQL Alchemy connection.

        The configuration must be specified if and only if the following
        parameters are None: connection_id, excluded_protocols or restricted_to_protocols.

        Possible keyword arguments:
        - configuration: the connection configuration.
        - data_dir: directory where to put local files.
        - identity: the identity object held by the agent.
        - crypto_store: the crypto store for encrypted communication.
        - restricted_to_protocols: the set of protocols ids of the only supported protocols for this connection.
        - excluded_protocols: the set of protocols ids that we want to exclude for this connection.

        :param kwargs: keyword arguments passed to component base
        """
        super().__init__(**kwargs)
        self.context.logger.info("Setting up SQLAchemyConnection.")
        self.base = declarative_base()
        for model in [Agent]:
            self.object_to_model[model] = self._create_sqlalchemy_model(model)
        
        self._connection_string = kwargs.pop("connection_string")
        if self._connection_string is None:
            raise ValueError("Connection string must be provided!")

        self.engine = create_engine(self._connection_string, echo=False)
        self.session: Session = sessionmaker(bind=self.engine, expire_on_commit=False)
        self.agent_model = self._get_agent_model()
        self.context.logger.info("SQLAchemyConnection successfully set up.")        

    def _create_sqlalchemy_model(self, data_class):
        """Create a sqlalchemy model from a dataclass."""

        class_name = data_class.__name__

        class Model(self.base):
            """This class scaffolds a model."""

            __tablename__ = class_name.lower()
            __table_args__ = {}
            id = Column(String, primary_key=True)
            agent_address = Column(String)
            latest_update = Column(
                DateTime,
                default=func.now(),  # pylint: disable=E1102
                onupdate=func.now(),  # pylint: disable=E1102
            )

        for field, data in data_class.__dataclass_fields__.items():
            if field == "id":
                continue
            if data.type in {Optional[bool], bool}:
                setattr(Model, field, Column(Boolean))
            elif data.type in {Optional[str], str}:
                setattr(Model, field, Column(String))
            elif data.type in {Optional[int], int}:
                setattr(Model, field, Column(BigInteger))
            elif data.type in {Optional[float], float}:
                setattr(Model, field, Column(Float))
            else:
                raise ValueError(f"Type {data.type} not supported!")

        Model.__name__ = class_name
        return Model

    def _get_agent_model(self):
        """Check if the agent is already in the database, if not add it. Use the agent address as the unique identifier."""
        with self.session.begin() as session:  # pylint: disable=E1101
            agent = (
                session.query(self.object_to_model[Agent])
                .filter_by(agent_address=self.context.agent_address)
                .first()
            )
            if agent:
                return agent
        return self.get_model(Agent)(
            id=self.context.agent_name, agent_address=self.context.agent_address
        )

    def get_model(self, data_class):
        """We make a generic function to get the model for a dataclass"""
        return self.object_to_model[data_class]

    async def connect(self) -> None:
        """
        Set up the connection.

        In the implementation, remember to update 'connection_status' accordingly.
        """
        if self.is_connected:  # pragma: nocover
            return

        self._loop = loop
        self._in_queue = asyncio.Queue()
        # self.is_connected = False

        with self._connect_context():
            self.channel.logger = self.logger
            await self.channel.connect(self.loop)

    async def disconnect(self) -> None:
        """Disconnect from a SQL server."""
        if self.is_disconnected:
            return  # pragma: nocover
        self.state = ConnectionStates.disconnecting
        await self.channel.disconnect()
        self.state = ConnectionStates.disconnected

    async def send(self, envelope: Envelope) -> None:
        """
        Send an envelope.

        :param envelope: the envelope to send.
        """
        raise NotImplementedError  # pragma: no cover

    async def receive(self, *args: Any, **kwargs: Any) -> Optional[Envelope]:
        """
        Receive an envelope. Blocking.

        :param args: arguments to receive
        :param kwargs: keyword arguments to receive
        :return: the envelope received, if present.  # noqa: DAR202
        """
        raise NotImplementedError  # pragma: no cover
