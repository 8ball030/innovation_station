# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 devteam
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

"""Test messages module for lint_protocol protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.devteam.protocols.lint_protocol.message import LintProtocolMessage
from packages.devteam.protocols.lint_protocol.custom_types import Severity, ErrorCode


def load_data(custom_type):
    """Load test data."""
    with open(f"{os.path.dirname(__file__)}/dummy_data.yaml", "r", encoding="utf-8") as f:
        return yaml.safe_load(f)[custom_type]


class TestMessageLintProtocol(BaseProtocolMessagesTestCase):
    """Test for the 'lint_protocol' protocol message."""

    MESSAGE_CLASS = LintProtocolMessage

    def build_messages(self) -> List[LintProtocolMessage]:  # type: ignore[override]
        """Build the messages to be used for testing."""
        return [
            LintProtocolMessage(
                performative=LintProtocolMessage.Performative.INITIATE_LINT,
                project_path="some str",
                config="some str",
            ),
            LintProtocolMessage(
                performative=LintProtocolMessage.Performative.LINT_ISSUE,
                issue_id="some str",
                severity=Severity(0),  # check it please!
                message="some str",
                line=12,
                column=12,
                file_path="some str",
            ),
            LintProtocolMessage(
                performative=LintProtocolMessage.Performative.LINT_COMPLETE,
                summary="some str",
            ),
            LintProtocolMessage(
                performative=LintProtocolMessage.Performative.LINT_ERROR,
                error_code=ErrorCode(0),  # check it please!
                error_msg="some str",
            ),
        ]

    def build_inconsistent(self) -> List[LintProtocolMessage]:  # type: ignore[override]
        """Build inconsistent messages to be used for testing."""
        return [
            LintProtocolMessage(
                performative=LintProtocolMessage.Performative.INITIATE_LINT,
                # skip content: project_path
                config="some str",
            ),
            LintProtocolMessage(
                performative=LintProtocolMessage.Performative.LINT_ISSUE,
                # skip content: issue_id
                severity=Severity(0),  # check it please!
                message="some str",
                line=12,
                column=12,
                file_path="some str",
            ),
            LintProtocolMessage(
                performative=LintProtocolMessage.Performative.LINT_COMPLETE,
                # skip content: summary
            ),
            LintProtocolMessage(
                performative=LintProtocolMessage.Performative.LINT_ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
