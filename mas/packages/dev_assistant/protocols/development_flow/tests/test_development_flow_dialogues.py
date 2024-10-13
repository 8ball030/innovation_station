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

"""Test dialogues module for development_flow protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from aea.test_tools.test_protocol import BaseProtocolDialoguesTestCase

from packages.dev_assistant.protocols.development_flow.dialogues import (
    DevelopmentFlowDialogue,
    DevelopmentFlowDialogues,
)
from packages.dev_assistant.protocols.development_flow.message import (
    DevelopmentFlowMessage,
)


class TestDialoguesDevelopmentFlow(BaseProtocolDialoguesTestCase):
    """Test for the 'development_flow' protocol dialogues."""

    MESSAGE_CLASS = DevelopmentFlowMessage

    DIALOGUE_CLASS = DevelopmentFlowDialogue

    DIALOGUES_CLASS = DevelopmentFlowDialogues

    ROLE_FOR_THE_FIRST_MESSAGE = DevelopmentFlowDialogue.Role.DEVELOPER  # CHECK

    def make_message_content(self) -> dict:
        """Make a dict with message contruction content for dialogues.create."""
        return dict(
            performative=DevelopmentFlowMessage.Performative.REQUEST_FEATURE,
            feature_description="some str",
        )
