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

"""Test messages module for cross_chain_arbitrage protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.your_name.protocols.cross_chain_arbitrage.message import (
    CrossChainArbitrageMessage,
)
from packages.your_name.protocols.cross_chain_arbitrage.custom_types import ErrorCode


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
                exchange_id="some str",
                ledger_id="some str",
                available_volume=1.0,
                prices={"some str": 1.0},
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.BUY_EXECUTION,
                exchange_id="some str",
                ledger_id="some str",
                volume=1.0,
                price=1.0,
                tx_hash="some str",
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.SELL_EXECUTION,
                exchange_id="some str",
                ledger_id="some str",
                volume=1.0,
                price=1.0,
                tx_hash="some str",
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.ARBITRAGE_RESULT,
                profit=1.0,
                summary="some str",
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.REJECTION,
                reason="some str",
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
                # skip content: exchange_id
                ledger_id="some str",
                available_volume=1.0,
                prices={"some str": 1.0},
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.BUY_EXECUTION,
                # skip content: exchange_id
                ledger_id="some str",
                volume=1.0,
                price=1.0,
                tx_hash="some str",
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.SELL_EXECUTION,
                # skip content: exchange_id
                ledger_id="some str",
                volume=1.0,
                price=1.0,
                tx_hash="some str",
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.ARBITRAGE_RESULT,
                # skip content: profit
                summary="some str",
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.REJECTION,
                # skip content: reason
            ),
            CrossChainArbitrageMessage(
                performative=CrossChainArbitrageMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
