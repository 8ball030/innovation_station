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

"""This module contains terraform_devops's message definition."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,too-many-branches,not-an-iterable,unidiomatic-typecheck,unsubscriptable-object
import logging
from typing import Any, Set, Tuple, cast

from aea.configurations.base import PublicId
from aea.exceptions import AEAEnforceError, enforce
from aea.protocols.base import Message  # type: ignore

from packages.your_name.protocols.terraform_devops.custom_types import (
    ErrorCode as CustomErrorCode,
)
from packages.your_name.protocols.terraform_devops.custom_types import (
    Status as CustomStatus,
)


_default_logger = logging.getLogger("aea.packages.your_name.protocols.terraform_devops.message")

DEFAULT_BODY_SIZE = 4


class TerraformDevopsMessage(Message):
    """A protocol for managing and verifying Terraform-based infrastructure deployments."""

    protocol_id = PublicId.from_str("your_name/terraform_devops:0.1.0")
    protocol_specification_id = PublicId.from_str("your_name/terraform_devops:0.1.0")

    ErrorCode = CustomErrorCode

    Status = CustomStatus

    class Performative(Message.Performative):
        """Performatives for the terraform_devops protocol."""

        APPLY = "apply"
        DESTROY = "destroy"
        ERROR = "error"
        INIT = "init"
        RESULT = "result"
        VERIFY = "verify"

        def __str__(self) -> str:
            """Get the string representation."""
            return str(self.value)

    _performatives = {"apply", "destroy", "error", "init", "result", "verify"}
    __slots__: Tuple[str, ...] = tuple()

    class _SlotsCls:
        __slots__ = (
            "configuration_path",
            "deployment_id",
            "dialogue_reference",
            "error_code",
            "error_msg",
            "message_id",
            "performative",
            "status",
            "stderr",
            "stdout",
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
        Initialise an instance of TerraformDevopsMessage.

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
            performative=TerraformDevopsMessage.Performative(performative),
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
        return cast(TerraformDevopsMessage.Performative, self.get("performative"))

    @property
    def target(self) -> int:
        """Get the target of the message."""
        enforce(self.is_set("target"), "target is not set.")
        return cast(int, self.get("target"))

    @property
    def configuration_path(self) -> str:
        """Get the 'configuration_path' content from the message."""
        enforce(self.is_set("configuration_path"), "'configuration_path' content is not set.")
        return cast(str, self.get("configuration_path"))

    @property
    def deployment_id(self) -> str:
        """Get the 'deployment_id' content from the message."""
        enforce(self.is_set("deployment_id"), "'deployment_id' content is not set.")
        return cast(str, self.get("deployment_id"))

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
    def status(self) -> CustomStatus:
        """Get the 'status' content from the message."""
        enforce(self.is_set("status"), "'status' content is not set.")
        return cast(CustomStatus, self.get("status"))

    @property
    def stderr(self) -> str:
        """Get the 'stderr' content from the message."""
        enforce(self.is_set("stderr"), "'stderr' content is not set.")
        return cast(str, self.get("stderr"))

    @property
    def stdout(self) -> str:
        """Get the 'stdout' content from the message."""
        enforce(self.is_set("stdout"), "'stdout' content is not set.")
        return cast(str, self.get("stdout"))

    def _is_consistent(self) -> bool:
        """Check that the message follows the terraform_devops protocol."""
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
                isinstance(self.performative, TerraformDevopsMessage.Performative),
                "Invalid 'performative'. Expected either of '{}'. Found '{}'.".format(
                    self.valid_performatives, self.performative
                ),
            )

            # Check correct contents
            actual_nb_of_contents = len(self._body) - DEFAULT_BODY_SIZE
            expected_nb_of_contents = 0
            if self.performative == TerraformDevopsMessage.Performative.INIT:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.configuration_path, str),
                    "Invalid type for content 'configuration_path'. Expected 'str'. Found '{}'.".format(
                        type(self.configuration_path)
                    ),
                )
            elif self.performative == TerraformDevopsMessage.Performative.APPLY:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.configuration_path, str),
                    "Invalid type for content 'configuration_path'. Expected 'str'. Found '{}'.".format(
                        type(self.configuration_path)
                    ),
                )
            elif self.performative == TerraformDevopsMessage.Performative.DESTROY:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.configuration_path, str),
                    "Invalid type for content 'configuration_path'. Expected 'str'. Found '{}'.".format(
                        type(self.configuration_path)
                    ),
                )
            elif self.performative == TerraformDevopsMessage.Performative.VERIFY:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.deployment_id, str),
                    "Invalid type for content 'deployment_id'. Expected 'str'. Found '{}'.".format(
                        type(self.deployment_id)
                    ),
                )
            elif self.performative == TerraformDevopsMessage.Performative.RESULT:
                expected_nb_of_contents = 3
                enforce(
                    isinstance(self.status, CustomStatus),
                    "Invalid type for content 'status'. Expected 'Status'. Found '{}'.".format(type(self.status)),
                )
                enforce(
                    isinstance(self.stdout, str),
                    "Invalid type for content 'stdout'. Expected 'str'. Found '{}'.".format(type(self.stdout)),
                )
                enforce(
                    isinstance(self.stderr, str),
                    "Invalid type for content 'stderr'. Expected 'str'. Found '{}'.".format(type(self.stderr)),
                )
            elif self.performative == TerraformDevopsMessage.Performative.ERROR:
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
