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

"""Test messages module for hackathon_competition_workflow protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.eightballer.protocols.hackathon_competition_workflow.message import (
    HackathonCompetitionWorkflowMessage,
)
from packages.eightballer.protocols.hackathon_competition_workflow.custom_types import (
    ErrorCode,
)


def load_data(custom_type):
    """Load test data."""
    with open(f"{os.path.dirname(__file__)}/dummy_data.yaml", "r", encoding="utf-8") as f:
        return yaml.safe_load(f)[custom_type]


class TestMessageHackathonCompetitionWorkflow(BaseProtocolMessagesTestCase):
    """Test for the 'hackathon_competition_workflow' protocol message."""

    MESSAGE_CLASS = HackathonCompetitionWorkflowMessage

    def build_messages(self) -> List[HackathonCompetitionWorkflowMessage]:  # type: ignore[override]
        """Build the messages to be used for testing."""
        return [
            HackathonCompetitionWorkflowMessage(
                performative=HackathonCompetitionWorkflowMessage.Performative.IDEA_GENERATION,
                participant_id="some str",
                idea_description="some str",
            ),
            HackathonCompetitionWorkflowMessage(
                performative=HackathonCompetitionWorkflowMessage.Performative.TEAM_FORMATION,
                participant_ids=("some str",),
                team_name="some str",
                idea_description="some str",
            ),
            HackathonCompetitionWorkflowMessage(
                performative=HackathonCompetitionWorkflowMessage.Performative.IDEA_SELECTION,
                team_id="some str",
                selected_idea="some str",
            ),
            HackathonCompetitionWorkflowMessage(
                performative=HackathonCompetitionWorkflowMessage.Performative.PROGRESS_UPDATE,
                team_id="some str",
                update_description="some str",
            ),
            HackathonCompetitionWorkflowMessage(
                performative=HackathonCompetitionWorkflowMessage.Performative.FINAL_SUBMISSION,
                team_id="some str",
                project_link="some str",
                presentation_link="some str",
                documentation_link="some str",
            ),
            HackathonCompetitionWorkflowMessage(
                performative=HackathonCompetitionWorkflowMessage.Performative.FEEDBACK,
                team_id="some str",
                feedback="some str",
            ),
            HackathonCompetitionWorkflowMessage(
                performative=HackathonCompetitionWorkflowMessage.Performative.ERROR,
                error_code=ErrorCode(0),  # check it please!
                error_msg="some str",
            ),
        ]

    def build_inconsistent(self) -> List[HackathonCompetitionWorkflowMessage]:  # type: ignore[override]
        """Build inconsistent messages to be used for testing."""
        return [
            HackathonCompetitionWorkflowMessage(
                performative=HackathonCompetitionWorkflowMessage.Performative.IDEA_GENERATION,
                # skip content: participant_id
                idea_description="some str",
            ),
            HackathonCompetitionWorkflowMessage(
                performative=HackathonCompetitionWorkflowMessage.Performative.TEAM_FORMATION,
                # skip content: participant_ids
                team_name="some str",
                idea_description="some str",
            ),
            HackathonCompetitionWorkflowMessage(
                performative=HackathonCompetitionWorkflowMessage.Performative.IDEA_SELECTION,
                # skip content: team_id
                selected_idea="some str",
            ),
            HackathonCompetitionWorkflowMessage(
                performative=HackathonCompetitionWorkflowMessage.Performative.PROGRESS_UPDATE,
                # skip content: team_id
                update_description="some str",
            ),
            HackathonCompetitionWorkflowMessage(
                performative=HackathonCompetitionWorkflowMessage.Performative.FINAL_SUBMISSION,
                # skip content: team_id
                project_link="some str",
                presentation_link="some str",
                documentation_link="some str",
            ),
            HackathonCompetitionWorkflowMessage(
                performative=HackathonCompetitionWorkflowMessage.Performative.FEEDBACK,
                # skip content: team_id
                feedback="some str",
            ),
            HackathonCompetitionWorkflowMessage(
                performative=HackathonCompetitionWorkflowMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
