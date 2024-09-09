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

"""Test messages module for trello_interaction protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.your_name.protocols.trello_interaction.message import (
    TrelloInteractionMessage,
)
from packages.your_name.protocols.trello_interaction.custom_types import (
    Status,
    ErrorCode,
)


def load_data(custom_type):
    """Load test data."""
    with open(f"{os.path.dirname(__file__)}/dummy_data.yaml", "r", encoding="utf-8") as f:
        return yaml.safe_load(f)[custom_type]


class TestMessageTrelloInteraction(BaseProtocolMessagesTestCase):
    """Test for the 'trello_interaction' protocol message."""

    MESSAGE_CLASS = TrelloInteractionMessage

    def build_messages(self) -> List[TrelloInteractionMessage]:  # type: ignore[override]
        """Build the messages to be used for testing."""
        return [
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.CREATE_BOARD,
                board_name="some str",
                organization_id="some str",
                permission_level="some str",
            ),
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.FETCH_BOARD,
                board_id="some str",
            ),
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.LIST_BOARDS,
                board_filter="some str",
            ),
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.ADD_MEMBER,
                board_id="some str",
                member_id="some str",
                member_type="some str",
            ),
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.LIST_CARDS,
                board_id="some str",
                card_filter="some str",
            ),
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.ADD_CARD,
                list_id="some str",
                card_name="some str",
                desc="some str",
                labels=("some str",),
                due="some str",
            ),
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.FETCH_ACTIONS,
                board_id="some str",
                action_filter="some str",
            ),
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.ACTION_RESULT,
                status=Status(0),  # check it please!
                result_data=b"some_bytes",
            ),
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.ERROR,
                error_code=ErrorCode(0),  # check it please!
                error_msg="some str",
            ),
        ]

    def build_inconsistent(self) -> List[TrelloInteractionMessage]:  # type: ignore[override]
        """Build inconsistent messages to be used for testing."""
        return [
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.CREATE_BOARD,
                # skip content: board_name
                organization_id="some str",
                permission_level="some str",
            ),
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.FETCH_BOARD,
                # skip content: board_id
            ),
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.LIST_BOARDS,
                # skip content: board_filter
            ),
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.ADD_MEMBER,
                # skip content: board_id
                member_id="some str",
                member_type="some str",
            ),
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.LIST_CARDS,
                # skip content: board_id
                card_filter="some str",
            ),
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.ADD_CARD,
                # skip content: list_id
                card_name="some str",
                desc="some str",
                labels=("some str",),
                due="some str",
            ),
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.FETCH_ACTIONS,
                # skip content: board_id
                action_filter="some str",
            ),
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.ACTION_RESULT,
                # skip content: status
                result_data=b"some_bytes",
            ),
            TrelloInteractionMessage(
                performative=TrelloInteractionMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
