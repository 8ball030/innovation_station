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

"""Test messages module for hackathon_journey protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.eightballer.protocols.hackathon_journey.message import (
    HackathonJourneyMessage,
)
from packages.eightballer.protocols.hackathon_journey.custom_types import (
    Status,
    ErrorCode,
    OperationType,
)


def load_data(custom_type):
    """Load test data."""
    with open(f"{os.path.dirname(__file__)}/dummy_data.yaml", "r", encoding="utf-8") as f:
        return yaml.safe_load(f)[custom_type]


class TestMessageHackathonJourney(BaseProtocolMessagesTestCase):
    """Test for the 'hackathon_journey' protocol message."""

    MESSAGE_CLASS = HackathonJourneyMessage

    def build_messages(self) -> List[HackathonJourneyMessage]:  # type: ignore[override]
        """Build the messages to be used for testing."""
        return [
            HackathonJourneyMessage(
                performative=HackathonJourneyMessage.Performative.IDEA_GENERATION,
                participant_id="some str",
                idea_description="some str",
            ),
            HackathonJourneyMessage(
                performative=HackathonJourneyMessage.Performative.TEAM_FORMATION,
                participant_id="some str",
                team_name="some str",
                team_members=("some str",),
            ),
            HackathonJourneyMessage(
                performative=HackathonJourneyMessage.Performative.IDEA_SELECTION,
                team_id="some str",
                selected_idea="some str",
            ),
            HackathonJourneyMessage(
                performative=HackathonJourneyMessage.Performative.PROGRESS_UPDATE,
                team_id="some str",
                update_description="some str",
            ),
            HackathonJourneyMessage(
                performative=HackathonJourneyMessage.Performative.FINAL_SUBMISSION,
                team_id="some str",
                project_link="some str",
                presentation_link="some str",
            ),
            HackathonJourneyMessage(
                performative=HackathonJourneyMessage.Performative.OPERATION_RESPONSE,
                operation_type=OperationType(0),  # check it please!
                team_id="some str",
                status=Status(0),  # check it please!
                message="some str",
            ),
            HackathonJourneyMessage(
                performative=HackathonJourneyMessage.Performative.ERROR,
                error_code=ErrorCode(0),  # check it please!
                error_msg="some str",
            ),
        ]

    def build_inconsistent(self) -> List[HackathonJourneyMessage]:  # type: ignore[override]
        """Build inconsistent messages to be used for testing."""
        return [
            HackathonJourneyMessage(
                performative=HackathonJourneyMessage.Performative.IDEA_GENERATION,
                # skip content: participant_id
                idea_description="some str",
            ),
            HackathonJourneyMessage(
                performative=HackathonJourneyMessage.Performative.TEAM_FORMATION,
                # skip content: participant_id
                team_name="some str",
                team_members=("some str",),
            ),
            HackathonJourneyMessage(
                performative=HackathonJourneyMessage.Performative.IDEA_SELECTION,
                # skip content: team_id
                selected_idea="some str",
            ),
            HackathonJourneyMessage(
                performative=HackathonJourneyMessage.Performative.PROGRESS_UPDATE,
                # skip content: team_id
                update_description="some str",
            ),
            HackathonJourneyMessage(
                performative=HackathonJourneyMessage.Performative.FINAL_SUBMISSION,
                # skip content: team_id
                project_link="some str",
                presentation_link="some str",
            ),
            HackathonJourneyMessage(
                performative=HackathonJourneyMessage.Performative.OPERATION_RESPONSE,
                # skip content: operation_type
                team_id="some str",
                status=Status(0),  # check it please!
                message="some str",
            ),
            HackathonJourneyMessage(
                performative=HackathonJourneyMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
