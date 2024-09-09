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

"""Test messages module for cross_chain_arbitrage protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.eightballer.protocols.cross_chain_arbitrage.message import (
    CrossChainArbitrageMessage,
)
from packages.eightballer.protocols.cross_chain_arbitrage.custom_types import (
    ErrorCode,
    RejectionReason,
)


def load_data(custom_type):
    """Load test data."""
    with open(f"{os.path.dirname(__file__)}/dummy_data.yaml", "r", encoding="utf-8") as f:
        return yaml.safe_load(f)[custom_type]


class TestMessageCrossChainArbitrage(BaseProtocolMessagesTestCase):
    """Test for the 'cross_chain_arbitrage' protocol message."""

    MESSAGE_CLASS = CrossChainArbitrageMessage

    def build_messages(self) -> List[CrossChainArbitrageMessage]:  # type: ignore[override]
        """Build the messages to be used for testing."""
        return [
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.ARBITRAGE_OPPORTUNITY,
                buy_side_exchange_id="some str",
                sell_side_exchange_id="some str",
                market_name="some str",
                available_volume=1.0,
                buy_price=1.0,
                sell_price=1.0,
                note="some str",
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.REJECTED,
                reason=RejectionReason(0),  # check it please!
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.BUY_EXECUTION,
                exchange_id="some str",
                ledger_id="some str",
                tx_hash="some str",
                volume=1.0,
                price=1.0,
                token_a_address="some str",
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.SELL_EXECUTION,
                exchange_id="some str",
                ledger_id="some str",
                tx_hash="some str",
                volume=1.0,
                price=1.0,
                token_b_address="some str",
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.ARBITRAGE_RESULT,
                profit=1.0,
                note="some str",
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.ERROR,
                error_code=ErrorCode(0),  # check it please!
                error_msg="some str",
            ),
        ]

    def build_inconsistent(self) -> List[CrossChainArbitrageMessage]:  # type: ignore[override]
        """Build inconsistent messages to be used for testing."""
        return [
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.ARBITRAGE_OPPORTUNITY,
                # skip content: buy_side_exchange_id
                sell_side_exchange_id="some str",
                market_name="some str",
                available_volume=1.0,
                buy_price=1.0,
                sell_price=1.0,
                note="some str",
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.REJECTED,
                # skip content: reason
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.BUY_EXECUTION,
                # skip content: exchange_id
                ledger_id="some str",
                tx_hash="some str",
                volume=1.0,
                price=1.0,
                token_a_address="some str",
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.SELL_EXECUTION,
                # skip content: exchange_id
                ledger_id="some str",
                tx_hash="some str",
                volume=1.0,
                price=1.0,
                token_b_address="some str",
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.ARBITRAGE_RESULT,
                # skip content: profit
                note="some str",
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
