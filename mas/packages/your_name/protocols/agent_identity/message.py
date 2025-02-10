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

"""This module contains agent_identity's message definition."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,too-many-branches,not-an-iterable,unidiomatic-typecheck,unsubscriptable-object
import logging
from typing import Any, Optional, Set, Tuple, cast

from aea.configurations.base import PublicId
from aea.exceptions import AEAEnforceError, enforce
from aea.protocols.base import Message  # type: ignore

from packages.your_name.protocols.agent_identity.custom_types import (
    ErrorCode as CustomErrorCode,
)
from packages.your_name.protocols.agent_identity.custom_types import (
    EthAddress as CustomEthAddress,
)


_default_logger = logging.getLogger("aea.packages.your_name.protocols.agent_identity.message")

DEFAULT_BODY_SIZE = 4


class AgentIdentityMessage(Message):
    """A protocol for representing various public identities of an agent."""

    protocol_id = PublicId.from_str("your_name/agent_identity:0.1.0")
    protocol_specification_id = PublicId.from_str("your_name/agent_identity:0.1.0")

    ErrorCode = CustomErrorCode

    EthAddress = CustomEthAddress

    class Performative(Message.Performative):
        """Performatives for the agent_identity protocol."""

        ERROR = "error"
        PROVIDE_IDENTITY = "provide_identity"
        REQUEST_IDENTITY = "request_identity"

        def __str__(self) -> str:
            """Get the string representation."""
            return str(self.value)

    _performatives = {"error", "provide_identity", "request_identity"}
    __slots__: Tuple[str, ...] = tuple()

    class _SlotsCls:
        __slots__ = (
            "cosmos_public_address",
            "dialogue_reference",
            "error_code",
            "error_msg",
            "ethereum_public_address",
            "gpg",
            "identity_type",
            "message_id",
            "performative",
            "private_endpoint",
            "private_ws_endpoint",
            "public_endpoint",
            "public_ws_endpoint",
            "role",
            "rsa",
            "solana_public_address",
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
        Initialise an instance of AgentIdentityMessage.

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
            performative=AgentIdentityMessage.Performative(performative),
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
        return cast(AgentIdentityMessage.Performative, self.get("performative"))

    @property
    def target(self) -> int:
        """Get the target of the message."""
        enforce(self.is_set("target"), "target is not set.")
        return cast(int, self.get("target"))

    @property
    def cosmos_public_address(self) -> Optional[str]:
        """Get the 'cosmos_public_address' content from the message."""
        return cast(Optional[str], self.get("cosmos_public_address"))

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
    def ethereum_public_address(self) -> CustomEthAddress:
        """Get the 'ethereum_public_address' content from the message."""
        enforce(self.is_set("ethereum_public_address"), "'ethereum_public_address' content is not set.")
        return cast(CustomEthAddress, self.get("ethereum_public_address"))

    @property
    def gpg(self) -> Optional[str]:
        """Get the 'gpg' content from the message."""
        return cast(Optional[str], self.get("gpg"))

    @property
    def identity_type(self) -> str:
        """Get the 'identity_type' content from the message."""
        enforce(self.is_set("identity_type"), "'identity_type' content is not set.")
        return cast(str, self.get("identity_type"))

    @property
    def private_endpoint(self) -> Optional[str]:
        """Get the 'private_endpoint' content from the message."""
        return cast(Optional[str], self.get("private_endpoint"))

    @property
    def private_ws_endpoint(self) -> Optional[str]:
        """Get the 'private_ws_endpoint' content from the message."""
        return cast(Optional[str], self.get("private_ws_endpoint"))

    @property
    def public_endpoint(self) -> Optional[str]:
        """Get the 'public_endpoint' content from the message."""
        return cast(Optional[str], self.get("public_endpoint"))

    @property
    def public_ws_endpoint(self) -> Optional[str]:
        """Get the 'public_ws_endpoint' content from the message."""
        return cast(Optional[str], self.get("public_ws_endpoint"))

    @property
    def role(self) -> Optional[str]:
        """Get the 'role' content from the message."""
        return cast(Optional[str], self.get("role"))

    @property
    def rsa(self) -> Optional[str]:
        """Get the 'rsa' content from the message."""
        return cast(Optional[str], self.get("rsa"))

    @property
    def solana_public_address(self) -> Optional[str]:
        """Get the 'solana_public_address' content from the message."""
        return cast(Optional[str], self.get("solana_public_address"))

    def _is_consistent(self) -> bool:
        """Check that the message follows the agent_identity protocol."""
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
                isinstance(self.performative, AgentIdentityMessage.Performative),
                "Invalid 'performative'. Expected either of '{}'. Found '{}'.".format(
                    self.valid_performatives, self.performative
                ),
            )

            # Check correct contents
            actual_nb_of_contents = len(self._body) - DEFAULT_BODY_SIZE
            expected_nb_of_contents = 0
            if self.performative == AgentIdentityMessage.Performative.REQUEST_IDENTITY:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.identity_type, str),
                    "Invalid type for content 'identity_type'. Expected 'str'. Found '{}'.".format(
                        type(self.identity_type)
                    ),
                )
            elif self.performative == AgentIdentityMessage.Performative.PROVIDE_IDENTITY:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.ethereum_public_address, CustomEthAddress),
                    "Invalid type for content 'ethereum_public_address'. Expected 'EthAddress'. Found '{}'.".format(
                        type(self.ethereum_public_address)
                    ),
                )
                if self.is_set("solana_public_address"):
                    expected_nb_of_contents += 1
                    solana_public_address = cast(str, self.solana_public_address)
                    enforce(
                        isinstance(solana_public_address, str),
                        "Invalid type for content 'solana_public_address'. Expected 'str'. Found '{}'.".format(
                            type(solana_public_address)
                        ),
                    )
                if self.is_set("cosmos_public_address"):
                    expected_nb_of_contents += 1
                    cosmos_public_address = cast(str, self.cosmos_public_address)
                    enforce(
                        isinstance(cosmos_public_address, str),
                        "Invalid type for content 'cosmos_public_address'. Expected 'str'. Found '{}'.".format(
                            type(cosmos_public_address)
                        ),
                    )
                if self.is_set("gpg"):
                    expected_nb_of_contents += 1
                    gpg = cast(str, self.gpg)
                    enforce(
                        isinstance(gpg, str),
                        "Invalid type for content 'gpg'. Expected 'str'. Found '{}'.".format(type(gpg)),
                    )
                if self.is_set("rsa"):
                    expected_nb_of_contents += 1
                    rsa = cast(str, self.rsa)
                    enforce(
                        isinstance(rsa, str),
                        "Invalid type for content 'rsa'. Expected 'str'. Found '{}'.".format(type(rsa)),
                    )
                if self.is_set("role"):
                    expected_nb_of_contents += 1
                    role = cast(str, self.role)
                    enforce(
                        isinstance(role, str),
                        "Invalid type for content 'role'. Expected 'str'. Found '{}'.".format(type(role)),
                    )
                if self.is_set("public_endpoint"):
                    expected_nb_of_contents += 1
                    public_endpoint = cast(str, self.public_endpoint)
                    enforce(
                        isinstance(public_endpoint, str),
                        "Invalid type for content 'public_endpoint'. Expected 'str'. Found '{}'.".format(
                            type(public_endpoint)
                        ),
                    )
                if self.is_set("private_endpoint"):
                    expected_nb_of_contents += 1
                    private_endpoint = cast(str, self.private_endpoint)
                    enforce(
                        isinstance(private_endpoint, str),
                        "Invalid type for content 'private_endpoint'. Expected 'str'. Found '{}'.".format(
                            type(private_endpoint)
                        ),
                    )
                if self.is_set("public_ws_endpoint"):
                    expected_nb_of_contents += 1
                    public_ws_endpoint = cast(str, self.public_ws_endpoint)
                    enforce(
                        isinstance(public_ws_endpoint, str),
                        "Invalid type for content 'public_ws_endpoint'. Expected 'str'. Found '{}'.".format(
                            type(public_ws_endpoint)
                        ),
                    )
                if self.is_set("private_ws_endpoint"):
                    expected_nb_of_contents += 1
                    private_ws_endpoint = cast(str, self.private_ws_endpoint)
                    enforce(
                        isinstance(private_ws_endpoint, str),
                        "Invalid type for content 'private_ws_endpoint'. Expected 'str'. Found '{}'.".format(
                            type(private_ws_endpoint)
                        ),
                    )
            elif self.performative == AgentIdentityMessage.Performative.ERROR:
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
