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

"""This module contains testing_workflow's message definition."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,too-many-branches,not-an-iterable,unidiomatic-typecheck,unsubscriptable-object
import logging
from typing import Any, Optional, Set, Tuple, cast

from aea.configurations.base import PublicId
from aea.exceptions import AEAEnforceError, enforce
from aea.protocols.base import Message  # type: ignore

from packages.developer.protocols.testing_workflow.custom_types import (
    ErrorCode as CustomErrorCode,
)


_default_logger = logging.getLogger("aea.packages.developer.protocols.testing_workflow.message")

DEFAULT_BODY_SIZE = 4


class TestingWorkflowMessage(Message):
    """A protocol for managing a testing workflow between a tester and a testing system."""

    protocol_id = PublicId.from_str("developer/testing_workflow:0.1.0")
    protocol_specification_id = PublicId.from_str("developer/testing_workflow:0.1.0")

    ErrorCode = CustomErrorCode

    class Performative(Message.Performative):
        """Performatives for the testing_workflow protocol."""

        ERROR = "error"
        START_TESTS = "start_tests"
        TEST_CASE_RESULT = "test_case_result"
        TESTS_COMPLETED = "tests_completed"

        def __str__(self) -> str:
            """Get the string representation."""
            return str(self.value)

    _performatives = {"error", "start_tests", "test_case_result", "tests_completed"}
    __slots__: Tuple[str, ...] = tuple()

    class _SlotsCls:
        __slots__ = (
            "dialogue_reference",
            "error_code",
            "error_msg",
            "errors",
            "failed_tests",
            "message_id",
            "output",
            "passed_tests",
            "performative",
            "success",
            "summary",
            "target",
            "test_case_name",
            "test_cases",
            "test_suite_name",
            "total_tests",
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
        Initialise an instance of TestingWorkflowMessage.

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
            performative=TestingWorkflowMessage.Performative(performative),
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
        return cast(TestingWorkflowMessage.Performative, self.get("performative"))

    @property
    def target(self) -> int:
        """Get the target of the message."""
        enforce(self.is_set("target"), "target is not set.")
        return cast(int, self.get("target"))

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
    def errors(self) -> Optional[Tuple[str, ...]]:
        """Get the 'errors' content from the message."""
        return cast(Optional[Tuple[str, ...]], self.get("errors"))

    @property
    def failed_tests(self) -> int:
        """Get the 'failed_tests' content from the message."""
        enforce(self.is_set("failed_tests"), "'failed_tests' content is not set.")
        return cast(int, self.get("failed_tests"))

    @property
    def output(self) -> Optional[str]:
        """Get the 'output' content from the message."""
        return cast(Optional[str], self.get("output"))

    @property
    def passed_tests(self) -> int:
        """Get the 'passed_tests' content from the message."""
        enforce(self.is_set("passed_tests"), "'passed_tests' content is not set.")
        return cast(int, self.get("passed_tests"))

    @property
    def success(self) -> bool:
        """Get the 'success' content from the message."""
        enforce(self.is_set("success"), "'success' content is not set.")
        return cast(bool, self.get("success"))

    @property
    def summary(self) -> Optional[str]:
        """Get the 'summary' content from the message."""
        return cast(Optional[str], self.get("summary"))

    @property
    def test_case_name(self) -> str:
        """Get the 'test_case_name' content from the message."""
        enforce(self.is_set("test_case_name"), "'test_case_name' content is not set.")
        return cast(str, self.get("test_case_name"))

    @property
    def test_cases(self) -> Tuple[str, ...]:
        """Get the 'test_cases' content from the message."""
        enforce(self.is_set("test_cases"), "'test_cases' content is not set.")
        return cast(Tuple[str, ...], self.get("test_cases"))

    @property
    def test_suite_name(self) -> str:
        """Get the 'test_suite_name' content from the message."""
        enforce(self.is_set("test_suite_name"), "'test_suite_name' content is not set.")
        return cast(str, self.get("test_suite_name"))

    @property
    def total_tests(self) -> int:
        """Get the 'total_tests' content from the message."""
        enforce(self.is_set("total_tests"), "'total_tests' content is not set.")
        return cast(int, self.get("total_tests"))

    def _is_consistent(self) -> bool:
        """Check that the message follows the testing_workflow protocol."""
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
                isinstance(self.performative, TestingWorkflowMessage.Performative),
                "Invalid 'performative'. Expected either of '{}'. Found '{}'.".format(
                    self.valid_performatives, self.performative
                ),
            )

            # Check correct contents
            actual_nb_of_contents = len(self._body) - DEFAULT_BODY_SIZE
            expected_nb_of_contents = 0
            if self.performative == TestingWorkflowMessage.Performative.START_TESTS:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.test_suite_name, str),
                    "Invalid type for content 'test_suite_name'. Expected 'str'. Found '{}'.".format(
                        type(self.test_suite_name)
                    ),
                )
                enforce(
                    isinstance(self.test_cases, tuple),
                    "Invalid type for content 'test_cases'. Expected 'tuple'. Found '{}'.".format(
                        type(self.test_cases)
                    ),
                )
                enforce(
                    all(isinstance(element, str) for element in self.test_cases),
                    "Invalid type for tuple elements in content 'test_cases'. Expected 'str'.",
                )
            elif self.performative == TestingWorkflowMessage.Performative.TEST_CASE_RESULT:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.test_case_name, str),
                    "Invalid type for content 'test_case_name'. Expected 'str'. Found '{}'.".format(
                        type(self.test_case_name)
                    ),
                )
                enforce(
                    isinstance(self.success, bool),
                    "Invalid type for content 'success'. Expected 'bool'. Found '{}'.".format(type(self.success)),
                )
                if self.is_set("output"):
                    expected_nb_of_contents += 1
                    output = cast(str, self.output)
                    enforce(
                        isinstance(output, str),
                        "Invalid type for content 'output'. Expected 'str'. Found '{}'.".format(type(output)),
                    )
                if self.is_set("errors"):
                    expected_nb_of_contents += 1
                    errors = cast(Tuple[str, ...], self.errors)
                    enforce(
                        isinstance(errors, tuple),
                        "Invalid type for content 'errors'. Expected 'tuple'. Found '{}'.".format(type(errors)),
                    )
                    enforce(
                        all(isinstance(element, str) for element in errors),
                        "Invalid type for tuple elements in content 'errors'. Expected 'str'.",
                    )
            elif self.performative == TestingWorkflowMessage.Performative.TESTS_COMPLETED:
                expected_nb_of_contents = 4
                enforce(
                    isinstance(self.test_suite_name, str),
                    "Invalid type for content 'test_suite_name'. Expected 'str'. Found '{}'.".format(
                        type(self.test_suite_name)
                    ),
                )
                enforce(
                    type(self.total_tests) is int,
                    "Invalid type for content 'total_tests'. Expected 'int'. Found '{}'.".format(
                        type(self.total_tests)
                    ),
                )
                enforce(
                    type(self.passed_tests) is int,
                    "Invalid type for content 'passed_tests'. Expected 'int'. Found '{}'.".format(
                        type(self.passed_tests)
                    ),
                )
                enforce(
                    type(self.failed_tests) is int,
                    "Invalid type for content 'failed_tests'. Expected 'int'. Found '{}'.".format(
                        type(self.failed_tests)
                    ),
                )
                if self.is_set("summary"):
                    expected_nb_of_contents += 1
                    summary = cast(str, self.summary)
                    enforce(
                        isinstance(summary, str),
                        "Invalid type for content 'summary'. Expected 'str'. Found '{}'.".format(type(summary)),
                    )
            elif self.performative == TestingWorkflowMessage.Performative.ERROR:
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
