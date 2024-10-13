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

"""Test dialogues module for trello_interaction protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from aea.test_tools.test_protocol import BaseProtocolDialoguesTestCase

from packages.your_name.protocols.trello_interaction.dialogues import (
    TrelloInteractionDialogue,
    TrelloInteractionDialogues,
)
from packages.your_name.protocols.trello_interaction.message import (
    TrelloInteractionMessage,
)


class TestDialoguesTrelloInteraction(BaseProtocolDialoguesTestCase):
    """Test for the 'trello_interaction' protocol dialogues."""

    MESSAGE_CLASS = TrelloInteractionMessage

    DIALOGUE_CLASS = TrelloInteractionDialogue

    DIALOGUES_CLASS = TrelloInteractionDialogues

    ROLE_FOR_THE_FIRST_MESSAGE = TrelloInteractionDialogue.Role.TRELLO  # CHECK

    def make_message_content(self) -> dict:
        """Make a dict with message contruction content for dialogues.create."""
        return dict(
            performative=TrelloInteractionMessage.Performative.CREATE_BOARD,
            board_name="some str",
            organization_id="some str",
            permission_level="some str",
        )
