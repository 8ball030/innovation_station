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

"""Test messages module for hackathon_workflow protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.eightballer.protocols.hackathon_workflow.message import (
    HackathonWorkflowMessage,
)
from packages.eightballer.protocols.hackathon_workflow.custom_types import ErrorCode


def load_data(custom_type):
    """Load test data."""
    with open(f"{os.path.dirname(__file__)}/dummy_data.yaml", "r", encoding="utf-8") as f:
        return yaml.safe_load(f)[custom_type]


class TestMessageHackathonWorkflow(BaseProtocolMessagesTestCase):
    """Test for the 'hackathon_workflow' protocol message."""

    MESSAGE_CLASS = HackathonWorkflowMessage

    def build_messages(self) -> List[HackathonWorkflowMessage]:  # type: ignore[override]
        """Build the messages to be used for testing."""
        return [
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.ANNOUNCE_EVENT,
                event_details="some str",
                registration_deadline="some str",
            ),
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.INITIATE_IDEA_GENERATION,
                topic="some str",
            ),
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.FORM_TEAM,
                team_name="some str",
                member_ids=("some str",),
            ),
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.SUBMIT_IDEA,
                team_id="some str",
                idea_description="some str",
            ),
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.SELECT_IDEA,
                team_id="some str",
                idea_approved=True,
                feedback="some str",
            ),
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.PROJECT_PROGRESS_UPDATE,
                team_id="some str",
                update_details="some str",
            ),
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.SUBMIT_FINAL_PROJECT,
                team_id="some str",
                project_link="some str",
                presentation_link="some str",
            ),
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.ACKNOWLEDGEMENT,
                received=True,
                message="some str",
            ),
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.ERROR,
                error_code=ErrorCode(0),  # check it please!
                error_msg="some str",
            ),
        ]

    def build_inconsistent(self) -> List[HackathonWorkflowMessage]:  # type: ignore[override]
        """Build inconsistent messages to be used for testing."""
        return [
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.ANNOUNCE_EVENT,
                # skip content: event_details
                registration_deadline="some str",
            ),
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.INITIATE_IDEA_GENERATION,
                # skip content: topic
            ),
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.FORM_TEAM,
                # skip content: team_name
                member_ids=("some str",),
            ),
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.SUBMIT_IDEA,
                # skip content: team_id
                idea_description="some str",
            ),
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.SELECT_IDEA,
                # skip content: team_id
                idea_approved=True,
                feedback="some str",
            ),
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.PROJECT_PROGRESS_UPDATE,
                # skip content: team_id
                update_details="some str",
            ),
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.SUBMIT_FINAL_PROJECT,
                # skip content: team_id
                project_link="some str",
                presentation_link="some str",
            ),
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.ACKNOWLEDGEMENT,
                # skip content: received
                message="some str",
            ),
            HackathonWorkflowMessage(
                performative=HackathonWorkflowMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
