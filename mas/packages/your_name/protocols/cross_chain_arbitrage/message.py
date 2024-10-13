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

"""This module contains cross_chain_arbitrage's message definition."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,too-many-branches,not-an-iterable,unidiomatic-typecheck,unsubscriptable-object
import logging
from typing import Any, Dict, Set, Tuple, cast

from aea.configurations.base import PublicId
from aea.exceptions import AEAEnforceError, enforce
from aea.protocols.base import Message  # type: ignore

from packages.your_name.protocols.cross_chain_arbitrage.custom_types import (
    ErrorCode as CustomErrorCode,
)


_default_logger = logging.getLogger("aea.packages.your_name.protocols.cross_chain_arbitrage.message")

DEFAULT_BODY_SIZE = 4


class CrossChainArbitrageMessage(Message):
    """A protocol for managing cross-chain arbitrage transactions between multiple platforms."""

    protocol_id = PublicId.from_str("your_name/cross_chain_arbitrage:0.1.0")
    protocol_specification_id = PublicId.from_str("your_name/cross_chain_arbitrage:0.1.0")

    ErrorCode = CustomErrorCode

    class Performative(Message.Performative):
        """Performatives for the cross_chain_arbitrage protocol."""

        ARBITRAGE_OPPORTUNITY = "arbitrage_opportunity"
        ARBITRAGE_RESULT = "arbitrage_result"
        BUY_EXECUTION = "buy_execution"
        ERROR = "error"
        REJECTION = "rejection"
        SELL_EXECUTION = "sell_execution"

        def __str__(self) -> str:
            """Get the string representation."""
            return str(self.value)

    _performatives = {
        "arbitrage_opportunity",
        "arbitrage_result",
        "buy_execution",
        "error",
        "rejection",
        "sell_execution",
    }
    __slots__: Tuple[str, ...] = tuple()

    class _SlotsCls:
        __slots__ = (
            "available_volume",
            "dialogue_reference",
            "error_code",
            "error_msg",
            "exchange_id",
            "ledger_id",
            "message_id",
            "performative",
            "price",
            "prices",
            "profit",
            "reason",
            "summary",
            "target",
            "tx_hash",
            "volume",
        )

    def __init__(
        self,
        performative: Performative,
        dialogue_reference: Tuple[str, str] = ("", ""),
        message_id: int = 1,
        target: int = 0,
        **kwargs: Any,
    ):
        """
        Initialise an instance of CrossChainArbitrageMessage.

        :param message_id: the message id.
        :param dialogue_reference: the dialogue reference.
        :param target: the message target.
        :param performative: the message performative.
        :param **kwargs: extra options.
        """
        super().__init__(
            dialogue_reference=dialogue_reference,
            message_id=message_id,
            target=target,
            performative=CrossChainArbitrageMessage.Performative(performative),
            **kwargs,
        )

    @property
    def valid_performatives(self) -> Set[str]:
        """Get valid performatives."""
        return self._performatives

    @property
    def dialogue_reference(self) -> Tuple[str, str]:
        """Get the dialogue_reference of the message."""
        enforce(self.is_set("dialogue_reference"), "dialogue_reference is not set.")
        return cast(Tuple[str, str], self.get("dialogue_reference"))

    @property
    def message_id(self) -> int:
        """Get the message_id of the message."""
        enforce(self.is_set("message_id"), "message_id is not set.")
        return cast(int, self.get("message_id"))

    @property
    def performative(self) -> Performative:  # type: ignore # noqa: F821
        """Get the performative of the message."""
        enforce(self.is_set("performative"), "performative is not set.")
        return cast(CrossChainArbitrageMessage.Performative, self.get("performative"))

    @property
    def target(self) -> int:
        """Get the target of the message."""
        enforce(self.is_set("target"), "target is not set.")
        return cast(int, self.get("target"))

    @property
    def available_volume(self) -> float:
        """Get the 'available_volume' content from the message."""
        enforce(self.is_set("available_volume"), "'available_volume' content is not set.")
        return cast(float, self.get("available_volume"))

    @property
    def error_code(self) -> CustomErrorCode:
        """Get the 'error_code' content from the message."""
        enforce(self.is_set("error_code"), "'error_code' content is not set.")
        return cast(CustomErrorCode, self.get("error_code"))

    @property
    def error_msg(self) -> str:
        """Get the 'error_msg' content from the message."""
        enforce(self.is_set("error_msg"), "'error_msg' content is not set.")
        return cast(str, self.get("error_msg"))

    @property
    def exchange_id(self) -> str:
        """Get the 'exchange_id' content from the message."""
        enforce(self.is_set("exchange_id"), "'exchange_id' content is not set.")
        return cast(str, self.get("exchange_id"))

    @property
    def ledger_id(self) -> str:
        """Get the 'ledger_id' content from the message."""
        enforce(self.is_set("ledger_id"), "'ledger_id' content is not set.")
        return cast(str, self.get("ledger_id"))

    @property
    def price(self) -> float:
        """Get the 'price' content from the message."""
        enforce(self.is_set("price"), "'price' content is not set.")
        return cast(float, self.get("price"))

    @property
    def prices(self) -> Dict[str, float]:
        """Get the 'prices' content from the message."""
        enforce(self.is_set("prices"), "'prices' content is not set.")
        return cast(Dict[str, float], self.get("prices"))

    @property
    def profit(self) -> float:
        """Get the 'profit' content from the message."""
        enforce(self.is_set("profit"), "'profit' content is not set.")
        return cast(float, self.get("profit"))

    @property
    def reason(self) -> str:
        """Get the 'reason' content from the message."""
        enforce(self.is_set("reason"), "'reason' content is not set.")
        return cast(str, self.get("reason"))

    @property
    def summary(self) -> str:
        """Get the 'summary' content from the message."""
        enforce(self.is_set("summary"), "'summary' content is not set.")
        return cast(str, self.get("summary"))

    @property
    def tx_hash(self) -> str:
        """Get the 'tx_hash' content from the message."""
        enforce(self.is_set("tx_hash"), "'tx_hash' content is not set.")
        return cast(str, self.get("tx_hash"))

    @property
    def volume(self) -> float:
        """Get the 'volume' content from the message."""
        enforce(self.is_set("volume"), "'volume' content is not set.")
        return cast(float, self.get("volume"))

    def _is_consistent(self) -> bool:
        """Check that the message follows the cross_chain_arbitrage protocol."""
        try:
            enforce(
                isinstance(self.dialogue_reference, tuple),
                "Invalid type for 'dialogue_reference'. Expected 'tuple'. Found '{}'.".format(
                    type(self.dialogue_reference)
                ),
            )
            enforce(
                isinstance(self.dialogue_reference[0], str),
                "Invalid type for 'dialogue_reference[0]'. Expected 'str'. Found '{}'.".format(
                    type(self.dialogue_reference[0])
                ),
            )
            enforce(
                isinstance(self.dialogue_reference[1], str),
                "Invalid type for 'dialogue_reference[1]'. Expected 'str'. Found '{}'.".format(
                    type(self.dialogue_reference[1])
                ),
            )
            enforce(
                type(self.message_id) is int,
                "Invalid type for 'message_id'. Expected 'int'. Found '{}'.".format(type(self.message_id)),
            )
            enforce(
                type(self.target) is int,
                "Invalid type for 'target'. Expected 'int'. Found '{}'.".format(type(self.target)),
            )

            # Light Protocol Rule 2
            # Check correct performative
            enforce(
                isinstance(self.performative, CrossChainArbitrageMessage.Performative),
                "Invalid 'performative'. Expected either of '{}'. Found '{}'.".format(
                    self.valid_performatives, self.performative
                ),
            )

            # Check correct contents
            actual_nb_of_contents = len(self._body) - DEFAULT_BODY_SIZE
            expected_nb_of_contents = 0
            if self.performative == CrossChainArbitrageMessage.Performative.ARBITRAGE_OPPORTUNITY:
                expected_nb_of_contents = 4
                enforce(
                    isinstance(self.exchange_id, str),
                    "Invalid type for content 'exchange_id'. Expected 'str'. Found '{}'.".format(
                        type(self.exchange_id)
                    ),
                )
                enforce(
                    isinstance(self.ledger_id, str),
                    "Invalid type for content 'ledger_id'. Expected 'str'. Found '{}'.".format(type(self.ledger_id)),
                )
                enforce(
                    isinstance(self.available_volume, float),
                    "Invalid type for content 'available_volume'. Expected 'float'. Found '{}'.".format(
                        type(self.available_volume)
                    ),
                )
                enforce(
                    isinstance(self.prices, dict),
                    "Invalid type for content 'prices'. Expected 'dict'. Found '{}'.".format(type(self.prices)),
                )
                for key_of_prices, value_of_prices in self.prices.items():
                    enforce(
                        isinstance(key_of_prices, str),
                        "Invalid type for dictionary keys in content 'prices'. Expected 'str'. Found '{}'.".format(
                            type(key_of_prices)
                        ),
                    )
                    enforce(
                        isinstance(value_of_prices, float),
                        "Invalid type for dictionary values in content 'prices'. Expected 'float'. Found '{}'.".format(
                            type(value_of_prices)
                        ),
                    )
            elif self.performative == CrossChainArbitrageMessage.Performative.BUY_EXECUTION:
                expected_nb_of_contents = 5
                enforce(
                    isinstance(self.exchange_id, str),
                    "Invalid type for content 'exchange_id'. Expected 'str'. Found '{}'.".format(
                        type(self.exchange_id)
                    ),
                )
                enforce(
                    isinstance(self.ledger_id, str),
                    "Invalid type for content 'ledger_id'. Expected 'str'. Found '{}'.".format(type(self.ledger_id)),
                )
                enforce(
                    isinstance(self.volume, float),
                    "Invalid type for content 'volume'. Expected 'float'. Found '{}'.".format(type(self.volume)),
                )
                enforce(
                    isinstance(self.price, float),
                    "Invalid type for content 'price'. Expected 'float'. Found '{}'.".format(type(self.price)),
                )
                enforce(
                    isinstance(self.tx_hash, str),
                    "Invalid type for content 'tx_hash'. Expected 'str'. Found '{}'.".format(type(self.tx_hash)),
                )
            elif self.performative == CrossChainArbitrageMessage.Performative.SELL_EXECUTION:
                expected_nb_of_contents = 5
                enforce(
                    isinstance(self.exchange_id, str),
                    "Invalid type for content 'exchange_id'. Expected 'str'. Found '{}'.".format(
                        type(self.exchange_id)
                    ),
                )
                enforce(
                    isinstance(self.ledger_id, str),
                    "Invalid type for content 'ledger_id'. Expected 'str'. Found '{}'.".format(type(self.ledger_id)),
                )
                enforce(
                    isinstance(self.volume, float),
                    "Invalid type for content 'volume'. Expected 'float'. Found '{}'.".format(type(self.volume)),
                )
                enforce(
                    isinstance(self.price, float),
                    "Invalid type for content 'price'. Expected 'float'. Found '{}'.".format(type(self.price)),
                )
                enforce(
                    isinstance(self.tx_hash, str),
                    "Invalid type for content 'tx_hash'. Expected 'str'. Found '{}'.".format(type(self.tx_hash)),
                )
            elif self.performative == CrossChainArbitrageMessage.Performative.ARBITRAGE_RESULT:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.profit, float),
                    "Invalid type for content 'profit'. Expected 'float'. Found '{}'.".format(type(self.profit)),
                )
                enforce(
                    isinstance(self.summary, str),
                    "Invalid type for content 'summary'. Expected 'str'. Found '{}'.".format(type(self.summary)),
                )
            elif self.performative == CrossChainArbitrageMessage.Performative.REJECTION:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.reason, str),
                    "Invalid type for content 'reason'. Expected 'str'. Found '{}'.".format(type(self.reason)),
                )
            elif self.performative == CrossChainArbitrageMessage.Performative.ERROR:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.error_code, CustomErrorCode),
                    "Invalid type for content 'error_code'. Expected 'ErrorCode'. Found '{}'.".format(
                        type(self.error_code)
                    ),
                )
                enforce(
                    isinstance(self.error_msg, str),
                    "Invalid type for content 'error_msg'. Expected 'str'. Found '{}'.".format(type(self.error_msg)),
                )

            # Check correct content count
            enforce(
                expected_nb_of_contents == actual_nb_of_contents,
                "Incorrect number of contents. Expected {}. Found {}".format(
                    expected_nb_of_contents, actual_nb_of_contents
                ),
            )

            # Light Protocol Rule 3
            if self.message_id == 1:
                enforce(
                    self.target == 0,
                    "Invalid 'target'. Expected 0 (because 'message_id' is 1). Found {}.".format(self.target),
                )
        except (AEAEnforceError, ValueError, KeyError) as e:
            _default_logger.error(str(e))
            return False

        return True
