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

"""Serialization module for cross_chain_arbitrage protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.your_name.protocols.cross_chain_arbitrage import (  # type: ignore
    cross_chain_arbitrage_pb2,
)
from packages.your_name.protocols.cross_chain_arbitrage.custom_types import (  # type: ignore
    ErrorCode,
)
from packages.your_name.protocols.cross_chain_arbitrage.message import (  # type: ignore
    CrossChainArbitrageMessage,
)


class CrossChainArbitrageSerializer(Serializer):
    """Serialization for the 'cross_chain_arbitrage' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'CrossChainArbitrage' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(CrossChainArbitrageMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        cross_chain_arbitrage_msg = cross_chain_arbitrage_pb2.CrossChainArbitrageMessage()  # type: ignore

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == CrossChainArbitrageMessage.Performative.ARBITRAGE_OPPORTUNITY:
            performative = cross_chain_arbitrage_pb2.CrossChainArbitrageMessage.Arbitrage_Opportunity_Performative()  # type: ignore
            exchange_id = msg.exchange_id
            performative.exchange_id = exchange_id
            ledger_id = msg.ledger_id
            performative.ledger_id = ledger_id
            available_volume = msg.available_volume
            performative.available_volume = available_volume
            prices = msg.prices
            performative.prices.update(prices)
            cross_chain_arbitrage_msg.arbitrage_opportunity.CopyFrom(performative)
        elif performative_id == CrossChainArbitrageMessage.Performative.BUY_EXECUTION:
            performative = cross_chain_arbitrage_pb2.CrossChainArbitrageMessage.Buy_Execution_Performative()  # type: ignore
            exchange_id = msg.exchange_id
            performative.exchange_id = exchange_id
            ledger_id = msg.ledger_id
            performative.ledger_id = ledger_id
            volume = msg.volume
            performative.volume = volume
            price = msg.price
            performative.price = price
            tx_hash = msg.tx_hash
            performative.tx_hash = tx_hash
            cross_chain_arbitrage_msg.buy_execution.CopyFrom(performative)
        elif performative_id == CrossChainArbitrageMessage.Performative.SELL_EXECUTION:
            performative = cross_chain_arbitrage_pb2.CrossChainArbitrageMessage.Sell_Execution_Performative()  # type: ignore
            exchange_id = msg.exchange_id
            performative.exchange_id = exchange_id
            ledger_id = msg.ledger_id
            performative.ledger_id = ledger_id
            volume = msg.volume
            performative.volume = volume
            price = msg.price
            performative.price = price
            tx_hash = msg.tx_hash
            performative.tx_hash = tx_hash
            cross_chain_arbitrage_msg.sell_execution.CopyFrom(performative)
        elif performative_id == CrossChainArbitrageMessage.Performative.ARBITRAGE_RESULT:
            performative = cross_chain_arbitrage_pb2.CrossChainArbitrageMessage.Arbitrage_Result_Performative()  # type: ignore
            profit = msg.profit
            performative.profit = profit
            summary = msg.summary
            performative.summary = summary
            cross_chain_arbitrage_msg.arbitrage_result.CopyFrom(performative)
        elif performative_id == CrossChainArbitrageMessage.Performative.REJECTION:
            performative = cross_chain_arbitrage_pb2.CrossChainArbitrageMessage.Rejection_Performative()  # type: ignore
            reason = msg.reason
            performative.reason = reason
            cross_chain_arbitrage_msg.rejection.CopyFrom(performative)
        elif performative_id == CrossChainArbitrageMessage.Performative.ERROR:
            performative = cross_chain_arbitrage_pb2.CrossChainArbitrageMessage.Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            error_msg = msg.error_msg
            performative.error_msg = error_msg
            cross_chain_arbitrage_msg.error.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = cross_chain_arbitrage_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'CrossChainArbitrage' message.

        :param obj: the bytes object.
        :return: the 'CrossChainArbitrage' message.
        """
        message_pb = ProtobufMessage()
        cross_chain_arbitrage_pb = cross_chain_arbitrage_pb2.CrossChainArbitrageMessage()  # type: ignore
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        cross_chain_arbitrage_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = cross_chain_arbitrage_pb.WhichOneof("performative")
        performative_id = CrossChainArbitrageMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == CrossChainArbitrageMessage.Performative.ARBITRAGE_OPPORTUNITY:
            exchange_id = cross_chain_arbitrage_pb.arbitrage_opportunity.exchange_id
            performative_content["exchange_id"] = exchange_id
            ledger_id = cross_chain_arbitrage_pb.arbitrage_opportunity.ledger_id
            performative_content["ledger_id"] = ledger_id
            available_volume = cross_chain_arbitrage_pb.arbitrage_opportunity.available_volume
            performative_content["available_volume"] = available_volume
            prices = cross_chain_arbitrage_pb.arbitrage_opportunity.prices
            prices_dict = dict(prices)
            performative_content["prices"] = prices_dict
        elif performative_id == CrossChainArbitrageMessage.Performative.BUY_EXECUTION:
            exchange_id = cross_chain_arbitrage_pb.buy_execution.exchange_id
            performative_content["exchange_id"] = exchange_id
            ledger_id = cross_chain_arbitrage_pb.buy_execution.ledger_id
            performative_content["ledger_id"] = ledger_id
            volume = cross_chain_arbitrage_pb.buy_execution.volume
            performative_content["volume"] = volume
            price = cross_chain_arbitrage_pb.buy_execution.price
            performative_content["price"] = price
            tx_hash = cross_chain_arbitrage_pb.buy_execution.tx_hash
            performative_content["tx_hash"] = tx_hash
        elif performative_id == CrossChainArbitrageMessage.Performative.SELL_EXECUTION:
            exchange_id = cross_chain_arbitrage_pb.sell_execution.exchange_id
            performative_content["exchange_id"] = exchange_id
            ledger_id = cross_chain_arbitrage_pb.sell_execution.ledger_id
            performative_content["ledger_id"] = ledger_id
            volume = cross_chain_arbitrage_pb.sell_execution.volume
            performative_content["volume"] = volume
            price = cross_chain_arbitrage_pb.sell_execution.price
            performative_content["price"] = price
            tx_hash = cross_chain_arbitrage_pb.sell_execution.tx_hash
            performative_content["tx_hash"] = tx_hash
        elif performative_id == CrossChainArbitrageMessage.Performative.ARBITRAGE_RESULT:
            profit = cross_chain_arbitrage_pb.arbitrage_result.profit
            performative_content["profit"] = profit
            summary = cross_chain_arbitrage_pb.arbitrage_result.summary
            performative_content["summary"] = summary
        elif performative_id == CrossChainArbitrageMessage.Performative.REJECTION:
            reason = cross_chain_arbitrage_pb.rejection.reason
            performative_content["reason"] = reason
        elif performative_id == CrossChainArbitrageMessage.Performative.ERROR:
            pb2_error_code = cross_chain_arbitrage_pb.error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            error_msg = cross_chain_arbitrage_pb.error.error_msg
            performative_content["error_msg"] = error_msg
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return CrossChainArbitrageMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content,
        )
