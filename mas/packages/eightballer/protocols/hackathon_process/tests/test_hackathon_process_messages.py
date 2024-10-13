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

"""Test messages module for hackathon_process protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.eightballer.protocols.hackathon_process.message import (
    HackathonProcessMessage,
)
from packages.eightballer.protocols.hackathon_process.custom_types import (
    ErrorCode,
    SubmissionType,
    SubmissionStatus,
)


def load_data(custom_type):
    """Load test data."""
    with open(f"{os.path.dirname(__file__)}/dummy_data.yaml", "r", encoding="utf-8") as f:
        return yaml.safe_load(f)[custom_type]


class TestMessageHackathonProcess(BaseProtocolMessagesTestCase):
    """Test for the 'hackathon_process' protocol message."""

    MESSAGE_CLASS = HackathonProcessMessage

    def build_messages(self) -> List[HackathonProcessMessage]:  # type: ignore[override]
        """Build the messages to be used for testing."""
        return [
            HackathonProcessMessage(
                performative=HackathonProcessMessage.Performative.IDEA_PROPOSAL,
                team_id="some str",
                idea_title="some str",
                idea_description="some str",
            ),
            HackathonProcessMessage(
                performative=HackathonProcessMessage.Performative.IDEA_FEEDBACK,
                team_id="some str",
                feedback="some str",
                approved=True,
            ),
            HackathonProcessMessage(
                performative=HackathonProcessMessage.Performative.PROJECT_UPDATE,
                team_id="some str",
                update_description="some str",
            ),
            HackathonProcessMessage(
                performative=HackathonProcessMessage.Performative.FINAL_SUBMISSION,
                team_id="some str",
                project_repo="some str",
                presentation_link="some str",
            ),
            HackathonProcessMessage(
                performative=HackathonProcessMessage.Performative.SUBMISSION_ACKNOWLEDGEMENT,
                team_id="some str",
                submission_type=SubmissionType(0),  # check it please!
                status=SubmissionStatus(0),  # check it please!
            ),
            HackathonProcessMessage(
                performative=HackathonProcessMessage.Performative.ERROR,
                error_code=ErrorCode(0),  # check it please!
                error_msg="some str",
            ),
        ]

    def build_inconsistent(self) -> List[HackathonProcessMessage]:  # type: ignore[override]
        """Build inconsistent messages to be used for testing."""
        return [
            HackathonProcessMessage(
                performative=HackathonProcessMessage.Performative.IDEA_PROPOSAL,
                # skip content: team_id
                idea_title="some str",
                idea_description="some str",
            ),
            HackathonProcessMessage(
                performative=HackathonProcessMessage.Performative.IDEA_FEEDBACK,
                # skip content: team_id
                feedback="some str",
                approved=True,
            ),
            HackathonProcessMessage(
                performative=HackathonProcessMessage.Performative.PROJECT_UPDATE,
                # skip content: team_id
                update_description="some str",
            ),
            HackathonProcessMessage(
                performative=HackathonProcessMessage.Performative.FINAL_SUBMISSION,
                # skip content: team_id
                project_repo="some str",
                presentation_link="some str",
            ),
            HackathonProcessMessage(
                performative=HackathonProcessMessage.Performative.SUBMISSION_ACKNOWLEDGEMENT,
                # skip content: team_id
                submission_type=SubmissionType(0),  # check it please!
                status=SubmissionStatus(0),  # check it please!
            ),
            HackathonProcessMessage(
                performative=HackathonProcessMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
