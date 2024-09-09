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

"""Test messages module for testing_workflow protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.developer.protocols.testing_workflow.message import TestingWorkflowMessage
from packages.developer.protocols.testing_workflow.custom_types import ErrorCode


def load_data(custom_type):
    """Load test data."""
    with open(f"{os.path.dirname(__file__)}/dummy_data.yaml", "r", encoding="utf-8") as f:
        return yaml.safe_load(f)[custom_type]


class TestMessageTestingWorkflow(BaseProtocolMessagesTestCase):
    """Test for the 'testing_workflow' protocol message."""

    MESSAGE_CLASS = TestingWorkflowMessage

    def build_messages(self) -> List[TestingWorkflowMessage]:  # type: ignore[override]
        """Build the messages to be used for testing."""
        return [
            TestingWorkflowMessage(
                performative=TestingWorkflowMessage.Performative.START_TESTS,
                test_suite_name="some str",
                test_cases=("some str",),
            ),
            TestingWorkflowMessage(
                performative=TestingWorkflowMessage.Performative.TEST_CASE_RESULT,
                test_case_name="some str",
                success=True,
                output="some str",
                errors=("some str",),
            ),
            TestingWorkflowMessage(
                performative=TestingWorkflowMessage.Performative.TESTS_COMPLETED,
                test_suite_name="some str",
                total_tests=12,
                passed_tests=12,
                failed_tests=12,
                summary="some str",
            ),
            TestingWorkflowMessage(
                performative=TestingWorkflowMessage.Performative.ERROR,
                error_code=ErrorCode(0),  # check it please!
                error_msg="some str",
            ),
        ]

    def build_inconsistent(self) -> List[TestingWorkflowMessage]:  # type: ignore[override]
        """Build inconsistent messages to be used for testing."""
        return [
            TestingWorkflowMessage(
                performative=TestingWorkflowMessage.Performative.START_TESTS,
                # skip content: test_suite_name
                test_cases=("some str",),
            ),
            TestingWorkflowMessage(
                performative=TestingWorkflowMessage.Performative.TEST_CASE_RESULT,
                # skip content: test_case_name
                success=True,
                output="some str",
                errors=("some str",),
            ),
            TestingWorkflowMessage(
                performative=TestingWorkflowMessage.Performative.TESTS_COMPLETED,
                # skip content: test_suite_name
                total_tests=12,
                passed_tests=12,
                failed_tests=12,
                summary="some str",
            ),
            TestingWorkflowMessage(
                performative=TestingWorkflowMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
