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

"""Test messages module for hackathon_competition protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.eightballer.protocols.hackathon_competition.message import (
    HackathonCompetitionMessage,
)
from packages.eightballer.protocols.hackathon_competition.custom_types import (
    Status,
    ErrorCode,
    SubmissionType,
)


def load_data(custom_type):
    """Load test data."""
    with open(f"{os.path.dirname(__file__)}/dummy_data.yaml", "r", encoding="utf-8") as f:
        return yaml.safe_load(f)[custom_type]


class TestMessageHackathonCompetition(BaseProtocolMessagesTestCase):
    """Test for the 'hackathon_competition' protocol message."""

    MESSAGE_CLASS = HackathonCompetitionMessage

    def build_messages(self) -> List[HackathonCompetitionMessage]:  # type: ignore[override]
        """Build the messages to be used for testing."""
        return [
            HackathonCompetitionMessage(
                performative=HackathonCompetitionMessage.Performative.REGISTER_TEAM,
                team_name="some str",
                members=("some str",),
            ),
            HackathonCompetitionMessage(
                performative=HackathonCompetitionMessage.Performative.IDEA_SUBMISSION,
                team_id="some str",
                idea_description="some str",
            ),
            HackathonCompetitionMessage(
                performative=HackathonCompetitionMessage.Performative.PROGRESS_UPDATE,
                team_id="some str",
                update_description="some str",
            ),
            HackathonCompetitionMessage(
                performative=HackathonCompetitionMessage.Performative.FINAL_SUBMISSION,
                team_id="some str",
                project_link="some str",
                presentation_link="some str",
            ),
            HackathonCompetitionMessage(
                performative=HackathonCompetitionMessage.Performative.REGISTRATION_ACKNOWLEDGEMENT,
                team_id="some str",
                status=Status(0),  # check it please!
            ),
            HackathonCompetitionMessage(
                performative=HackathonCompetitionMessage.Performative.SUBMISSION_RESPONSE,
                team_id="some str",
                submission_type=SubmissionType(0),  # check it please!
                status=Status(0),  # check it please!
            ),
            HackathonCompetitionMessage(
                performative=HackathonCompetitionMessage.Performative.ERROR,
                error_code=ErrorCode(0),  # check it please!
                error_msg="some str",
            ),
        ]

    def build_inconsistent(self) -> List[HackathonCompetitionMessage]:  # type: ignore[override]
        """Build inconsistent messages to be used for testing."""
        return [
            HackathonCompetitionMessage(
                performative=HackathonCompetitionMessage.Performative.REGISTER_TEAM,
                # skip content: team_name
                members=("some str",),
            ),
            HackathonCompetitionMessage(
                performative=HackathonCompetitionMessage.Performative.IDEA_SUBMISSION,
                # skip content: team_id
                idea_description="some str",
            ),
            HackathonCompetitionMessage(
                performative=HackathonCompetitionMessage.Performative.PROGRESS_UPDATE,
                # skip content: team_id
                update_description="some str",
            ),
            HackathonCompetitionMessage(
                performative=HackathonCompetitionMessage.Performative.FINAL_SUBMISSION,
                # skip content: team_id
                project_link="some str",
                presentation_link="some str",
            ),
            HackathonCompetitionMessage(
                performative=HackathonCompetitionMessage.Performative.REGISTRATION_ACKNOWLEDGEMENT,
                # skip content: team_id
                status=Status(0),  # check it please!
            ),
            HackathonCompetitionMessage(
                performative=HackathonCompetitionMessage.Performative.SUBMISSION_RESPONSE,
                # skip content: team_id
                submission_type=SubmissionType(0),  # check it please!
                status=Status(0),  # check it please!
            ),
            HackathonCompetitionMessage(
                performative=HackathonCompetitionMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
