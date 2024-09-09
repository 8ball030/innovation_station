# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 dev_assistant
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

"""Test messages module for development_flow protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.dev_assistant.protocols.development_flow.message import (
    DevelopmentFlowMessage,
)
from packages.dev_assistant.protocols.development_flow.custom_types import ErrorCode


def load_data(custom_type):
    """Load test data."""
    with open(f"{os.path.dirname(__file__)}/dummy_data.yaml", "r", encoding="utf-8") as f:
        return yaml.safe_load(f)[custom_type]


class TestMessageDevelopmentFlow(BaseProtocolMessagesTestCase):
    """Test for the 'development_flow' protocol message."""

    MESSAGE_CLASS = DevelopmentFlowMessage

    def build_messages(self) -> List[DevelopmentFlowMessage]:  # type: ignore[override]
        """Build the messages to be used for testing."""
        return [
            DevelopmentFlowMessage(
                performative=DevelopmentFlowMessage.Performative.REQUEST_FEATURE,
                feature_description="some str",
            ),
            DevelopmentFlowMessage(
                performative=DevelopmentFlowMessage.Performative.FEATURE_SPEC,
                feature_id="some str",
                spec_description="some str",
            ),
            DevelopmentFlowMessage(
                performative=DevelopmentFlowMessage.Performative.PROGRESS_UPDATE,
                feature_id="some str",
                update_description="some str",
            ),
            DevelopmentFlowMessage(
                performative=DevelopmentFlowMessage.Performative.FEATURE_REVIEW,
                feature_id="some str",
                reviewer_comments="some str",
            ),
            DevelopmentFlowMessage(
                performative=DevelopmentFlowMessage.Performative.FEATURE_APPROVED,
                feature_id="some str",
            ),
            DevelopmentFlowMessage(
                performative=DevelopmentFlowMessage.Performative.ERROR,
                error_code=ErrorCode(0),  # check it please!
                error_msg="some str",
            ),
        ]

    def build_inconsistent(self) -> List[DevelopmentFlowMessage]:  # type: ignore[override]
        """Build inconsistent messages to be used for testing."""
        return [
            DevelopmentFlowMessage(
                performative=DevelopmentFlowMessage.Performative.REQUEST_FEATURE,
                # skip content: feature_description
            ),
            DevelopmentFlowMessage(
                performative=DevelopmentFlowMessage.Performative.FEATURE_SPEC,
                # skip content: feature_id
                spec_description="some str",
            ),
            DevelopmentFlowMessage(
                performative=DevelopmentFlowMessage.Performative.PROGRESS_UPDATE,
                # skip content: feature_id
                update_description="some str",
            ),
            DevelopmentFlowMessage(
                performative=DevelopmentFlowMessage.Performative.FEATURE_REVIEW,
                # skip content: feature_id
                reviewer_comments="some str",
            ),
            DevelopmentFlowMessage(
                performative=DevelopmentFlowMessage.Performative.FEATURE_APPROVED,
                # skip content: feature_id
            ),
            DevelopmentFlowMessage(
                performative=DevelopmentFlowMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
