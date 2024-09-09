# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 eightballer
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

"""This module contains encrypted_communication's message definition."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,too-many-branches,not-an-iterable,unidiomatic-typecheck,unsubscriptable-object
import logging
from typing import Any, Set, Tuple, cast

from aea.configurations.base import PublicId
from aea.exceptions import AEAEnforceError, enforce
from aea.protocols.base import Message  # type: ignore

from packages.eightballer.protocols.encrypted_communication.custom_types import (
    ErrorCode as CustomErrorCode,
)


_default_logger = logging.getLogger("aea.packages.eightballer.protocols.encrypted_communication.message")

DEFAULT_BODY_SIZE = 4


class EncryptedCommunicationMessage(Message):
    """A protocol for establishing encrypted communication between two parties using a challenge-response mechanism and web3 keys."""

    protocol_id = PublicId.from_str("eightballer/encrypted_communication:0.1.0")
    protocol_specification_id = PublicId.from_str("eightballer/encrypted_communication:0.1.0")

    ErrorCode = CustomErrorCode

    class Performative(Message.Performative):
        """Performatives for the encrypted_communication protocol."""

        ENCRYPTION_READY = "encryption_ready"
        ERROR = "error"
        ISSUE_CHALLENGE = "issue_challenge"
        PROVIDE_ENCRYPTION_KEY = "provide_encryption_key"
        RESPOND_CHALLENGE = "respond_challenge"
        VERIFICATION_RESULT = "verification_result"
        VERIFY_MESSAGE = "verify_message"
        VERIFY_RESPONSE = "verify_response"

        def __str__(self) -> str:
            """Get the string representation."""
            return str(self.value)

    _performatives = {
        "encryption_ready",
        "error",
        "issue_challenge",
        "provide_encryption_key",
        "respond_challenge",
        "verification_result",
        "verify_message",
        "verify_response",
    }
    __slots__: Tuple[str, ...] = tuple()

    class _SlotsCls:
        __slots__ = (
            "challenge",
            "challenge_response",
            "dialogue_reference",
            "encryption_key",
            "error_code",
            "error_msg",
            "message",
            "message_id",
            "message_signature",
            "performative",
            "requester_public_key",
            "result",
            "status",
            "target",
            "verification_result",
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
        Initialise an instance of EncryptedCommunicationMessage.

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
            performative=EncryptedCommunicationMessage.Performative(performative),
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
        return cast(EncryptedCommunicationMessage.Performative, self.get("performative"))

    @property
    def target(self) -> int:
        """Get the target of the message."""
        enforce(self.is_set("target"), "target is not set.")
        return cast(int, self.get("target"))

    @property
    def challenge(self) -> str:
        """Get the 'challenge' content from the message."""
        enforce(self.is_set("challenge"), "'challenge' content is not set.")
        return cast(str, self.get("challenge"))

    @property
    def challenge_response(self) -> str:
        """Get the 'challenge_response' content from the message."""
        enforce(self.is_set("challenge_response"), "'challenge_response' content is not set.")
        return cast(str, self.get("challenge_response"))

    @property
    def encryption_key(self) -> str:
        """Get the 'encryption_key' content from the message."""
        enforce(self.is_set("encryption_key"), "'encryption_key' content is not set.")
        return cast(str, self.get("encryption_key"))

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
    def message_signature(self) -> str:
        """Get the 'message_signature' content from the message."""
        enforce(self.is_set("message_signature"), "'message_signature' content is not set.")
        return cast(str, self.get("message_signature"))

    @property
    def requester_public_key(self) -> str:
        """Get the 'requester_public_key' content from the message."""
        enforce(self.is_set("requester_public_key"), "'requester_public_key' content is not set.")
        return cast(str, self.get("requester_public_key"))

    @property
    def result(self) -> bool:
        """Get the 'result' content from the message."""
        enforce(self.is_set("result"), "'result' content is not set.")
        return cast(bool, self.get("result"))

    @property
    def status(self) -> bool:
        """Get the 'status' content from the message."""
        enforce(self.is_set("status"), "'status' content is not set.")
        return cast(bool, self.get("status"))

    @property
    def verification_result(self) -> bool:
        """Get the 'verification_result' content from the message."""
        enforce(self.is_set("verification_result"), "'verification_result' content is not set.")
        return cast(bool, self.get("verification_result"))

    def _is_consistent(self) -> bool:
        """Check that the message follows the encrypted_communication protocol."""
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
                isinstance(self.performative, EncryptedCommunicationMessage.Performative),
                "Invalid 'performative'. Expected either of '{}'. Found '{}'.".format(
                    self.valid_performatives, self.performative
                ),
            )

            # Check correct contents
            actual_nb_of_contents = len(self._body) - DEFAULT_BODY_SIZE
            expected_nb_of_contents = 0
            if self.performative == EncryptedCommunicationMessage.Performative.ISSUE_CHALLENGE:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.challenge, str),
                    "Invalid type for content 'challenge'. Expected 'str'. Found '{}'.".format(type(self.challenge)),
                )
            elif self.performative == EncryptedCommunicationMessage.Performative.RESPOND_CHALLENGE:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.challenge_response, str),
                    "Invalid type for content 'challenge_response'. Expected 'str'. Found '{}'.".format(
                        type(self.challenge_response)
                    ),
                )
                enforce(
                    isinstance(self.requester_public_key, str),
                    "Invalid type for content 'requester_public_key'. Expected 'str'. Found '{}'.".format(
                        type(self.requester_public_key)
                    ),
                )
            elif self.performative == EncryptedCommunicationMessage.Performative.VERIFY_RESPONSE:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.verification_result, bool),
                    "Invalid type for content 'verification_result'. Expected 'bool'. Found '{}'.".format(
                        type(self.verification_result)
                    ),
                )
            elif self.performative == EncryptedCommunicationMessage.Performative.PROVIDE_ENCRYPTION_KEY:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.encryption_key, str),
                    "Invalid type for content 'encryption_key'. Expected 'str'. Found '{}'.".format(
                        type(self.encryption_key)
                    ),
                )
            elif self.performative == EncryptedCommunicationMessage.Performative.VERIFY_MESSAGE:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.message_signature, str),
                    "Invalid type for content 'message_signature'. Expected 'str'. Found '{}'.".format(
                        type(self.message_signature)
                    ),
                )
                enforce(
                    isinstance(self.message, str),
                    "Invalid type for content 'message'. Expected 'str'. Found '{}'.".format(type(self.message)),
                )
            elif self.performative == EncryptedCommunicationMessage.Performative.VERIFICATION_RESULT:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.result, bool),
                    "Invalid type for content 'result'. Expected 'bool'. Found '{}'.".format(type(self.result)),
                )
            elif self.performative == EncryptedCommunicationMessage.Performative.ENCRYPTION_READY:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.status, bool),
                    "Invalid type for content 'status'. Expected 'bool'. Found '{}'.".format(type(self.status)),
                )
            elif self.performative == EncryptedCommunicationMessage.Performative.ERROR:
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
