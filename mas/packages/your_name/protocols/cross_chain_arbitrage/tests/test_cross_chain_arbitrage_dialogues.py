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

"""Test dialogues module for cross_chain_arbitrage protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from aea.test_tools.test_protocol import BaseProtocolDialoguesTestCase

from packages.your_name.protocols.cross_chain_arbitrage.dialogues import (
    CrossChainArbitrageDialogue,
    CrossChainArbitrageDialogues,
)
from packages.your_name.protocols.cross_chain_arbitrage.message import (
    CrossChainArbitrageMessage,
)


class TestDialoguesCrossChainArbitrage(BaseProtocolDialoguesTestCase):
    """Test for the 'cross_chain_arbitrage' protocol dialogues."""

    MESSAGE_CLASS = CrossChainArbitrageMessage

    DIALOGUE_CLASS = CrossChainArbitrageDialogue

    DIALOGUES_CLASS = CrossChainArbitrageDialogues

    ROLE_FOR_THE_FIRST_MESSAGE = CrossChainArbitrageDialogue.Role.ARBITRAGE_AGENT  # CHECK

    def make_message_content(self) -> dict:
        """Make a dict with message contruction content for dialogues.create."""
        return dict(
            performative=CrossChainArbitrageMessage.Performative.ARBITRAGE_OPPORTUNITY,
            exchange_id="some str",
            ledger_id="some str",
            available_volume=1.0,
            prices={"some str": 1.0},
        )
