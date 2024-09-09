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

"""Test messages module for format_stage protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.developer.protocols.format_stage.message import FormatStageMessage
from packages.developer.protocols.format_stage.custom_types import ErrorCode


def load_data(custom_type):
    """Load test data."""
    with open(f"{os.path.dirname(__file__)}/dummy_data.yaml", "r", encoding="utf-8") as f:
        return yaml.safe_load(f)[custom_type]


class TestMessageFormatStage(BaseProtocolMessagesTestCase):
    """Test for the 'format_stage' protocol message."""

    MESSAGE_CLASS = FormatStageMessage

    def build_messages(self) -> List[FormatStageMessage]:  # type: ignore[override]
        """Build the messages to be used for testing."""
        return [
            FormatStageMessage(
                performative=FormatStageMessage.Performative.FORMAT_REQUEST,
                file_path="some str",
                formatter_options={"some str": "some str"},
            ),
            FormatStageMessage(
                performative=FormatStageMessage.Performative.FORMAT_RESULT,
                file_path="some str",
                formatted=True,
                changes_made=12,
            ),
            FormatStageMessage(
                performative=FormatStageMessage.Performative.VALIDATE_CODE,
                file_path="some str",
                validation_rules=("some str",),
            ),
            FormatStageMessage(
                performative=FormatStageMessage.Performative.VALIDATION_RESULT,
                file_path="some str",
                valid=True,
                errors=("some str",),
            ),
            FormatStageMessage(
                performative=FormatStageMessage.Performative.ERROR,
                error_code=ErrorCode(0),  # check it please!
                error_msg="some str",
            ),
        ]

    def build_inconsistent(self) -> List[FormatStageMessage]:  # type: ignore[override]
        """Build inconsistent messages to be used for testing."""
        return [
            FormatStageMessage(
                performative=FormatStageMessage.Performative.FORMAT_REQUEST,
                # skip content: file_path
                formatter_options={"some str": "some str"},
            ),
            FormatStageMessage(
                performative=FormatStageMessage.Performative.FORMAT_RESULT,
                # skip content: file_path
                formatted=True,
                changes_made=12,
            ),
            FormatStageMessage(
                performative=FormatStageMessage.Performative.VALIDATE_CODE,
                # skip content: file_path
                validation_rules=("some str",),
            ),
            FormatStageMessage(
                performative=FormatStageMessage.Performative.VALIDATION_RESULT,
                # skip content: file_path
                valid=True,
                errors=("some str",),
            ),
            FormatStageMessage(
                performative=FormatStageMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
