# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 your_name
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

"""This module contains message_encryption's message definition."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,too-many-branches,not-an-iterable,unidiomatic-typecheck,unsubscriptable-object
import logging
from typing import Any, Optional, Set, Tuple, cast

from aea.configurations.base import PublicId
from aea.exceptions import AEAEnforceError, enforce
from aea.protocols.base import Message  # type: ignore

from packages.your_name.protocols.message_encryption.custom_types import (
    ErrorCode as CustomErrorCode,
)
from packages.your_name.protocols.message_encryption.custom_types import (
    Status as CustomStatus,
)


_default_logger = logging.getLogger("aea.packages.your_name.protocols.message_encryption.message")

DEFAULT_BODY_SIZE = 4


class MessageEncryptionMessage(Message):
    """A protocol for encrypting a message through interactions between a user and an encryption service."""

    protocol_id = PublicId.from_str("your_name/message_encryption:0.1.0")
    protocol_specification_id = PublicId.from_str("your_name/message_encryption:0.1.0")

    ErrorCode = CustomErrorCode

    Status = CustomStatus

    class Performative(Message.Performative):
        """Performatives for the message_encryption protocol."""

        DECRYPTION_RESULT = "decryption_result"
        ENCRYPTION_RESULT = "encryption_result"
        ERROR = "error"
        STATUS_UPDATE = "status_update"
        SUBMIT_MESSAGE = "submit_message"

        def __str__(self) -> str:
            """Get the string representation."""
            return str(self.value)

    _performatives = {"decryption_result", "encryption_result", "error", "status_update", "submit_message"}
    __slots__: Tuple[str, ...] = tuple()

    class _SlotsCls:
        __slots__ = (
            "decrypted_message",
            "dialogue_reference",
            "encrypted_message",
            "encryption_key",
            "encryption_type",
            "error_code",
            "error_msg",
            "message",
            "message_id",
            "performative",
            "status",
            "target",
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
        Initialise an instance of MessageEncryptionMessage.

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
            performative=MessageEncryptionMessage.Performative(performative),
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
        return cast(MessageEncryptionMessage.Performative, self.get("performative"))

    @property
    def target(self) -> int:
        """Get the target of the message."""
        enforce(self.is_set("target"), "target is not set.")
        return cast(int, self.get("target"))

    @property
    def decrypted_message(self) -> str:
        """Get the 'decrypted_message' content from the message."""
        enforce(self.is_set("decrypted_message"), "'decrypted_message' content is not set.")
        return cast(str, self.get("decrypted_message"))

    @property
    def encrypted_message(self) -> str:
        """Get the 'encrypted_message' content from the message."""
        enforce(self.is_set("encrypted_message"), "'encrypted_message' content is not set.")
        return cast(str, self.get("encrypted_message"))

    @property
    def encryption_key(self) -> Optional[str]:
        """Get the 'encryption_key' content from the message."""
        return cast(Optional[str], self.get("encryption_key"))

    @property
    def encryption_type(self) -> str:
        """Get the 'encryption_type' content from the message."""
        enforce(self.is_set("encryption_type"), "'encryption_type' content is not set.")
        return cast(str, self.get("encryption_type"))

    @property
    def error_code(self) -> CustomErrorCode:
        """Get the 'error_code' content from the message."""
        enforce(self.is_set("error_code"), "'error_code' content is not set.")
        return cast(CustomErrorCode, self.get("error_code"))

    @property
    def error_msg(self) -> str:
        """Get the 'error_msg' content from the message."""
        enforce(self.is_set("error_msg"), "'error_msg' content is not set.")
        return cast(str, self.get("error_msg"))

    @property
    def message(self) -> str:
        """Get the 'message' content from the message."""
        enforce(self.is_set("message"), "'message' content is not set.")
        return cast(str, self.get("message"))

    @property
    def status(self) -> CustomStatus:
        """Get the 'status' content from the message."""
        enforce(self.is_set("status"), "'status' content is not set.")
        return cast(CustomStatus, self.get("status"))

    def _is_consistent(self) -> bool:
        """Check that the message follows the message_encryption protocol."""
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
                isinstance(self.performative, MessageEncryptionMessage.Performative),
                "Invalid 'performative'. Expected either of '{}'. Found '{}'.".format(
                    self.valid_performatives, self.performative
                ),
            )

            # Check correct contents
            actual_nb_of_contents = len(self._body) - DEFAULT_BODY_SIZE
            expected_nb_of_contents = 0
            if self.performative == MessageEncryptionMessage.Performative.SUBMIT_MESSAGE:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.message, str),
                    "Invalid type for content 'message'. Expected 'str'. Found '{}'.".format(type(self.message)),
                )
                enforce(
                    isinstance(self.encryption_type, str),
                    "Invalid type for content 'encryption_type'. Expected 'str'. Found '{}'.".format(
                        type(self.encryption_type)
                    ),
                )
            elif self.performative == MessageEncryptionMessage.Performative.ENCRYPTION_RESULT:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.encrypted_message, str),
                    "Invalid type for content 'encrypted_message'. Expected 'str'. Found '{}'.".format(
                        type(self.encrypted_message)
                    ),
                )
                if self.is_set("encryption_key"):
                    expected_nb_of_contents += 1
                    encryption_key = cast(str, self.encryption_key)
                    enforce(
                        isinstance(encryption_key, str),
                        "Invalid type for content 'encryption_key'. Expected 'str'. Found '{}'.".format(
                            type(encryption_key)
                        ),
                    )
            elif self.performative == MessageEncryptionMessage.Performative.DECRYPTION_RESULT:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.decrypted_message, str),
                    "Invalid type for content 'decrypted_message'. Expected 'str'. Found '{}'.".format(
                        type(self.decrypted_message)
                    ),
                )
            elif self.performative == MessageEncryptionMessage.Performative.ERROR:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.error_code, CustomErrorCode),
                    "Invalid type for content 'error_code'. Expected 'ErrorCode'. Found '{}'.".format(
                        type(self.error_code)
                    ),
                )
                enforce(
                    isinstance(self.error_msg, str),
                    "Invalid type for content 'error_msg'. Expected 'str'. Found '{}'.".format(type(self.error_msg)),
                )
            elif self.performative == MessageEncryptionMessage.Performative.STATUS_UPDATE:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.status, CustomStatus),
                    "Invalid type for content 'status'. Expected 'Status'. Found '{}'.".format(type(self.status)),
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
