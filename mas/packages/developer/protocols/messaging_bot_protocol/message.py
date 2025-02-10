# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 developer
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

"""This module contains messaging_bot_protocol's message definition."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,too-many-branches,not-an-iterable,unidiomatic-typecheck,unsubscriptable-object
import logging
from typing import Any, Optional, Set, Tuple, cast

from aea.configurations.base import PublicId
from aea.exceptions import AEAEnforceError, enforce
from aea.protocols.base import Message  # type: ignore

from packages.developer.protocols.messaging_bot_protocol.custom_types import (
    ErrorCode as CustomErrorCode,
)


_default_logger = logging.getLogger("aea.packages.developer.protocols.messaging_bot_protocol.message")

DEFAULT_BODY_SIZE = 4


class MessagingBotProtocolMessage(Message):
    """A protocol for building and managing messaging bots on XMTP using MessageKit, which simplifies the process of creating messaging interactions."""

    protocol_id = PublicId.from_str("developer/messaging_bot_protocol:0.1.0")
    protocol_specification_id = PublicId.from_str("developer/messaging_bot_protocol:0.1.0")

    ErrorCode = CustomErrorCode

    class Performative(Message.Performative):
        """Performatives for the messaging_bot_protocol protocol."""

        BOT_RESPONSE = "bot_response"
        ERROR = "error"
        RECEIVE_MESSAGE = "receive_message"
        SEND_MESSAGE = "send_message"

        def __str__(self) -> str:
            """Get the string representation."""
            return str(self.value)

    _performatives = {"bot_response", "error", "receive_message", "send_message"}
    __slots__: Tuple[str, ...] = tuple()

    class _SlotsCls:
        __slots__ = (
            "bot_id",
            "dialogue_reference",
            "error_code",
            "error_msg",
            "message_content",
            "message_id",
            "performative",
            "recipient_id",
            "response_content",
            "sender_id",
            "target",
            "timestamp",
        )

    def __init__(
        self,
        performative: Performative,
        dialogue_reference: Tuple[str, str] = ("", ""),
        message_id: int = 1,
        target: int = 0,
        **kwargs: Any,
    ):
        """
        Initialise an instance of MessagingBotProtocolMessage.

        :param message_id: the message id.
        :param dialogue_reference: the dialogue reference.
        :param target: the message target.
        :param performative: the message performative.
        :param **kwargs: extra options.
        """
        super().__init__(
            dialogue_reference=dialogue_reference,
            message_id=message_id,
            target=target,
            performative=MessagingBotProtocolMessage.Performative(performative),
            **kwargs,
        )

    @property
    def valid_performatives(self) -> Set[str]:
        """Get valid performatives."""
        return self._performatives

    @property
    def dialogue_reference(self) -> Tuple[str, str]:
        """Get the dialogue_reference of the message."""
        enforce(self.is_set("dialogue_reference"), "dialogue_reference is not set.")
        return cast(Tuple[str, str], self.get("dialogue_reference"))

    @property
    def message_id(self) -> int:
        """Get the message_id of the message."""
        enforce(self.is_set("message_id"), "message_id is not set.")
        return cast(int, self.get("message_id"))

    @property
    def performative(self) -> Performative:  # type: ignore # noqa: F821
        """Get the performative of the message."""
        enforce(self.is_set("performative"), "performative is not set.")
        return cast(MessagingBotProtocolMessage.Performative, self.get("performative"))

    @property
    def target(self) -> int:
        """Get the target of the message."""
        enforce(self.is_set("target"), "target is not set.")
        return cast(int, self.get("target"))

    @property
    def bot_id(self) -> str:
        """Get the 'bot_id' content from the message."""
        enforce(self.is_set("bot_id"), "'bot_id' content is not set.")
        return cast(str, self.get("bot_id"))

    @property
    def error_code(self) -> CustomErrorCode:
        """Get the 'error_code' content from the message."""
        enforce(self.is_set("error_code"), "'error_code' content is not set.")
        return cast(CustomErrorCode, self.get("error_code"))

    @property
    def error_msg(self) -> Optional[str]:
        """Get the 'error_msg' content from the message."""
        return cast(Optional[str], self.get("error_msg"))

    @property
    def message_content(self) -> str:
        """Get the 'message_content' content from the message."""
        enforce(self.is_set("message_content"), "'message_content' content is not set.")
        return cast(str, self.get("message_content"))

    @property
    def recipient_id(self) -> str:
        """Get the 'recipient_id' content from the message."""
        enforce(self.is_set("recipient_id"), "'recipient_id' content is not set.")
        return cast(str, self.get("recipient_id"))

    @property
    def response_content(self) -> str:
        """Get the 'response_content' content from the message."""
        enforce(self.is_set("response_content"), "'response_content' content is not set.")
        return cast(str, self.get("response_content"))

    @property
    def sender_id(self) -> str:
        """Get the 'sender_id' content from the message."""
        enforce(self.is_set("sender_id"), "'sender_id' content is not set.")
        return cast(str, self.get("sender_id"))

    @property
    def timestamp(self) -> int:
        """Get the 'timestamp' content from the message."""
        enforce(self.is_set("timestamp"), "'timestamp' content is not set.")
        return cast(int, self.get("timestamp"))

    def _is_consistent(self) -> bool:
        """Check that the message follows the messaging_bot_protocol protocol."""
        try:
            enforce(
                isinstance(self.dialogue_reference, tuple),
                "Invalid type for 'dialogue_reference'. Expected 'tuple'. Found '{}'.".format(
                    type(self.dialogue_reference)
                ),
            )
            enforce(
                isinstance(self.dialogue_reference[0], str),
                "Invalid type for 'dialogue_reference[0]'. Expected 'str'. Found '{}'.".format(
                    type(self.dialogue_reference[0])
                ),
            )
            enforce(
                isinstance(self.dialogue_reference[1], str),
                "Invalid type for 'dialogue_reference[1]'. Expected 'str'. Found '{}'.".format(
                    type(self.dialogue_reference[1])
                ),
            )
            enforce(
                type(self.message_id) is int,
                "Invalid type for 'message_id'. Expected 'int'. Found '{}'.".format(type(self.message_id)),
            )
            enforce(
                type(self.target) is int,
                "Invalid type for 'target'. Expected 'int'. Found '{}'.".format(type(self.target)),
            )

            # Light Protocol Rule 2
            # Check correct performative
            enforce(
                isinstance(self.performative, MessagingBotProtocolMessage.Performative),
                "Invalid 'performative'. Expected either of '{}'. Found '{}'.".format(
                    self.valid_performatives, self.performative
                ),
            )

            # Check correct contents
            actual_nb_of_contents = len(self._body) - DEFAULT_BODY_SIZE
            expected_nb_of_contents = 0
            if self.performative == MessagingBotProtocolMessage.Performative.SEND_MESSAGE:
                expected_nb_of_contents = 3
                enforce(
                    isinstance(self.recipient_id, str),
                    "Invalid type for content 'recipient_id'. Expected 'str'. Found '{}'.".format(
                        type(self.recipient_id)
                    ),
                )
                enforce(
                    isinstance(self.message_content, str),
                    "Invalid type for content 'message_content'. Expected 'str'. Found '{}'.".format(
                        type(self.message_content)
                    ),
                )
                enforce(
                    type(self.timestamp) is int,
                    "Invalid type for content 'timestamp'. Expected 'int'. Found '{}'.".format(type(self.timestamp)),
                )
            elif self.performative == MessagingBotProtocolMessage.Performative.RECEIVE_MESSAGE:
                expected_nb_of_contents = 3
                enforce(
                    isinstance(self.sender_id, str),
                    "Invalid type for content 'sender_id'. Expected 'str'. Found '{}'.".format(type(self.sender_id)),
                )
                enforce(
                    isinstance(self.message_content, str),
                    "Invalid type for content 'message_content'. Expected 'str'. Found '{}'.".format(
                        type(self.message_content)
                    ),
                )
                enforce(
                    type(self.timestamp) is int,
                    "Invalid type for content 'timestamp'. Expected 'int'. Found '{}'.".format(type(self.timestamp)),
                )
            elif self.performative == MessagingBotProtocolMessage.Performative.BOT_RESPONSE:
                expected_nb_of_contents = 3
                enforce(
                    isinstance(self.bot_id, str),
                    "Invalid type for content 'bot_id'. Expected 'str'. Found '{}'.".format(type(self.bot_id)),
                )
                enforce(
                    isinstance(self.response_content, str),
                    "Invalid type for content 'response_content'. Expected 'str'. Found '{}'.".format(
                        type(self.response_content)
                    ),
                )
                enforce(
                    type(self.timestamp) is int,
                    "Invalid type for content 'timestamp'. Expected 'int'. Found '{}'.".format(type(self.timestamp)),
                )
            elif self.performative == MessagingBotProtocolMessage.Performative.ERROR:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.error_code, CustomErrorCode),
                    "Invalid type for content 'error_code'. Expected 'ErrorCode'. Found '{}'.".format(
                        type(self.error_code)
                    ),
                )
                if self.is_set("error_msg"):
                    expected_nb_of_contents += 1
                    error_msg = cast(str, self.error_msg)
                    enforce(
                        isinstance(error_msg, str),
                        "Invalid type for content 'error_msg'. Expected 'str'. Found '{}'.".format(type(error_msg)),
                    )

            # Check correct content count
            enforce(
                expected_nb_of_contents == actual_nb_of_contents,
                "Incorrect number of contents. Expected {}. Found {}".format(
                    expected_nb_of_contents, actual_nb_of_contents
                ),
            )

            # Light Protocol Rule 3
            if self.message_id == 1:
                enforce(
                    self.target == 0,
                    "Invalid 'target'. Expected 0 (because 'message_id' is 1). Found {}.".format(self.target),
                )
        except (AEAEnforceError, ValueError, KeyError) as e:
            _default_logger.error(str(e))
            return False

        return True
