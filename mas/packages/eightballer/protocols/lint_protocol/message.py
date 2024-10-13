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

"""This module contains lint_protocol's message definition."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,too-many-branches,not-an-iterable,unidiomatic-typecheck,unsubscriptable-object
import logging
from typing import Any, Set, Tuple, cast

from aea.configurations.base import PublicId
from aea.exceptions import AEAEnforceError, enforce
from aea.protocols.base import Message  # type: ignore

from packages.eightballer.protocols.lint_protocol.custom_types import (
    ErrorCode as CustomErrorCode,
)
from packages.eightballer.protocols.lint_protocol.custom_types import (
    Severity as CustomSeverity,
)


_default_logger = logging.getLogger("aea.packages.eightballer.protocols.lint_protocol.message")

DEFAULT_BODY_SIZE = 4


class LintProtocolMessage(Message):
    """A protocol for managing lint tasks in the development flow."""

    protocol_id = PublicId.from_str("eightballer/lint_protocol:0.1.0")
    protocol_specification_id = PublicId.from_str("eightballer/lint_protocol:0.1.0")

    ErrorCode = CustomErrorCode

    Severity = CustomSeverity

    class Performative(Message.Performative):
        """Performatives for the lint_protocol protocol."""

        ERROR = "error"
        INITIATE_LINT = "initiate_lint"
        LINT_COMPLETED = "lint_completed"
        LINT_ISSUE = "lint_issue"

        def __str__(self) -> str:
            """Get the string representation."""
            return str(self.value)

    _performatives = {"error", "initiate_lint", "lint_completed", "lint_issue"}
    __slots__: Tuple[str, ...] = tuple()

    class _SlotsCls:
        __slots__ = (
            "column",
            "dialogue_reference",
            "error_code",
            "error_msg",
            "file",
            "issues_count",
            "line",
            "message",
            "message_id",
            "performative",
            "severity",
            "source_code_path",
            "success",
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
        Initialise an instance of LintProtocolMessage.

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
            performative=LintProtocolMessage.Performative(performative),
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
        return cast(LintProtocolMessage.Performative, self.get("performative"))

    @property
    def target(self) -> int:
        """Get the target of the message."""
        enforce(self.is_set("target"), "target is not set.")
        return cast(int, self.get("target"))

    @property
    def column(self) -> int:
        """Get the 'column' content from the message."""
        enforce(self.is_set("column"), "'column' content is not set.")
        return cast(int, self.get("column"))

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
    def file(self) -> str:
        """Get the 'file' content from the message."""
        enforce(self.is_set("file"), "'file' content is not set.")
        return cast(str, self.get("file"))

    @property
    def issues_count(self) -> int:
        """Get the 'issues_count' content from the message."""
        enforce(self.is_set("issues_count"), "'issues_count' content is not set.")
        return cast(int, self.get("issues_count"))

    @property
    def line(self) -> int:
        """Get the 'line' content from the message."""
        enforce(self.is_set("line"), "'line' content is not set.")
        return cast(int, self.get("line"))

    @property
    def message(self) -> str:
        """Get the 'message' content from the message."""
        enforce(self.is_set("message"), "'message' content is not set.")
        return cast(str, self.get("message"))

    @property
    def severity(self) -> CustomSeverity:
        """Get the 'severity' content from the message."""
        enforce(self.is_set("severity"), "'severity' content is not set.")
        return cast(CustomSeverity, self.get("severity"))

    @property
    def source_code_path(self) -> str:
        """Get the 'source_code_path' content from the message."""
        enforce(self.is_set("source_code_path"), "'source_code_path' content is not set.")
        return cast(str, self.get("source_code_path"))

    @property
    def success(self) -> bool:
        """Get the 'success' content from the message."""
        enforce(self.is_set("success"), "'success' content is not set.")
        return cast(bool, self.get("success"))

    def _is_consistent(self) -> bool:
        """Check that the message follows the lint_protocol protocol."""
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
                isinstance(self.performative, LintProtocolMessage.Performative),
                "Invalid 'performative'. Expected either of '{}'. Found '{}'.".format(
                    self.valid_performatives, self.performative
                ),
            )

            # Check correct contents
            actual_nb_of_contents = len(self._body) - DEFAULT_BODY_SIZE
            expected_nb_of_contents = 0
            if self.performative == LintProtocolMessage.Performative.INITIATE_LINT:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.source_code_path, str),
                    "Invalid type for content 'source_code_path'. Expected 'str'. Found '{}'.".format(
                        type(self.source_code_path)
                    ),
                )
            elif self.performative == LintProtocolMessage.Performative.LINT_ISSUE:
                expected_nb_of_contents = 5
                enforce(
                    isinstance(self.file, str),
                    "Invalid type for content 'file'. Expected 'str'. Found '{}'.".format(type(self.file)),
                )
                enforce(
                    type(self.line) is int,
                    "Invalid type for content 'line'. Expected 'int'. Found '{}'.".format(type(self.line)),
                )
                enforce(
                    type(self.column) is int,
                    "Invalid type for content 'column'. Expected 'int'. Found '{}'.".format(type(self.column)),
                )
                enforce(
                    isinstance(self.severity, CustomSeverity),
                    "Invalid type for content 'severity'. Expected 'Severity'. Found '{}'.".format(type(self.severity)),
                )
                enforce(
                    isinstance(self.message, str),
                    "Invalid type for content 'message'. Expected 'str'. Found '{}'.".format(type(self.message)),
                )
            elif self.performative == LintProtocolMessage.Performative.LINT_COMPLETED:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.success, bool),
                    "Invalid type for content 'success'. Expected 'bool'. Found '{}'.".format(type(self.success)),
                )
                enforce(
                    type(self.issues_count) is int,
                    "Invalid type for content 'issues_count'. Expected 'int'. Found '{}'.".format(
                        type(self.issues_count)
                    ),
                )
            elif self.performative == LintProtocolMessage.Performative.ERROR:
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
