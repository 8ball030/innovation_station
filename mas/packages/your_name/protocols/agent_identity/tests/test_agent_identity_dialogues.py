# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 your_name
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

"""Test dialogues module for agent_identity protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from aea.test_tools.test_protocol import BaseProtocolDialoguesTestCase

from packages.your_name.protocols.agent_identity.dialogues import (
    AgentIdentityDialogue,
    AgentIdentityDialogues,
)
from packages.your_name.protocols.agent_identity.message import AgentIdentityMessage


class TestDialoguesAgentIdentity(BaseProtocolDialoguesTestCase):
    """Test for the 'agent_identity' protocol dialogues."""

    MESSAGE_CLASS = AgentIdentityMessage

    DIALOGUE_CLASS = AgentIdentityDialogue

    DIALOGUES_CLASS = AgentIdentityDialogues

    ROLE_FOR_THE_FIRST_MESSAGE = AgentIdentityDialogue.Role.AGENT  # CHECK

    def make_message_content(self) -> dict:
        """Make a dict with message contruction content for dialogues.create."""
        return dict(
            performative=AgentIdentityMessage.Performative.REQUEST_IDENTITY,
            identity_type="some str",
        )
