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

"""Serialization module for trello_interaction protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.your_name.protocols.trello_interaction import (  # type: ignore
    trello_interaction_pb2,
)
from packages.your_name.protocols.trello_interaction.custom_types import (  # type: ignore
    ErrorCode,
    Status,
)
from packages.your_name.protocols.trello_interaction.message import (  # type: ignore
    TrelloInteractionMessage,
)


class TrelloInteractionSerializer(Serializer):
    """Serialization for the 'trello_interaction' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'TrelloInteraction' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(TrelloInteractionMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        trello_interaction_msg = trello_interaction_pb2.TrelloInteractionMessage()  # type: ignore

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == TrelloInteractionMessage.Performative.CREATE_BOARD:
            performative = trello_interaction_pb2.TrelloInteractionMessage.Create_Board_Performative()  # type: ignore
            board_name = msg.board_name
            performative.board_name = board_name
            if msg.is_set("organization_id"):
                performative.organization_id_is_set = True
                organization_id = msg.organization_id
                performative.organization_id = organization_id
            if msg.is_set("permission_level"):
                performative.permission_level_is_set = True
                permission_level = msg.permission_level
                performative.permission_level = permission_level
            trello_interaction_msg.create_board.CopyFrom(performative)
        elif performative_id == TrelloInteractionMessage.Performative.FETCH_BOARD:
            performative = trello_interaction_pb2.TrelloInteractionMessage.Fetch_Board_Performative()  # type: ignore
            board_id = msg.board_id
            performative.board_id = board_id
            trello_interaction_msg.fetch_board.CopyFrom(performative)
        elif performative_id == TrelloInteractionMessage.Performative.LIST_BOARDS:
            performative = trello_interaction_pb2.TrelloInteractionMessage.List_Boards_Performative()  # type: ignore
            if msg.is_set("board_filter"):
                performative.board_filter_is_set = True
                board_filter = msg.board_filter
                performative.board_filter = board_filter
            trello_interaction_msg.list_boards.CopyFrom(performative)
        elif performative_id == TrelloInteractionMessage.Performative.ADD_MEMBER:
            performative = trello_interaction_pb2.TrelloInteractionMessage.Add_Member_Performative()  # type: ignore
            board_id = msg.board_id
            performative.board_id = board_id
            member_id = msg.member_id
            performative.member_id = member_id
            if msg.is_set("member_type"):
                performative.member_type_is_set = True
                member_type = msg.member_type
                performative.member_type = member_type
            trello_interaction_msg.add_member.CopyFrom(performative)
        elif performative_id == TrelloInteractionMessage.Performative.LIST_CARDS:
            performative = trello_interaction_pb2.TrelloInteractionMessage.List_Cards_Performative()  # type: ignore
            board_id = msg.board_id
            performative.board_id = board_id
            if msg.is_set("card_filter"):
                performative.card_filter_is_set = True
                card_filter = msg.card_filter
                performative.card_filter = card_filter
            trello_interaction_msg.list_cards.CopyFrom(performative)
        elif performative_id == TrelloInteractionMessage.Performative.ADD_CARD:
            performative = trello_interaction_pb2.TrelloInteractionMessage.Add_Card_Performative()  # type: ignore
            list_id = msg.list_id
            performative.list_id = list_id
            card_name = msg.card_name
            performative.card_name = card_name
            if msg.is_set("desc"):
                performative.desc_is_set = True
                desc = msg.desc
                performative.desc = desc
            if msg.is_set("labels"):
                performative.labels_is_set = True
                labels = msg.labels
                performative.labels.extend(labels)
            if msg.is_set("due"):
                performative.due_is_set = True
                due = msg.due
                performative.due = due
            trello_interaction_msg.add_card.CopyFrom(performative)
        elif performative_id == TrelloInteractionMessage.Performative.FETCH_ACTIONS:
            performative = trello_interaction_pb2.TrelloInteractionMessage.Fetch_Actions_Performative()  # type: ignore
            board_id = msg.board_id
            performative.board_id = board_id
            if msg.is_set("action_filter"):
                performative.action_filter_is_set = True
                action_filter = msg.action_filter
                performative.action_filter = action_filter
            trello_interaction_msg.fetch_actions.CopyFrom(performative)
        elif performative_id == TrelloInteractionMessage.Performative.ACTION_RESULT:
            performative = trello_interaction_pb2.TrelloInteractionMessage.Action_Result_Performative()  # type: ignore
            status = msg.status
            Status.encode(performative.status, status)
            if msg.is_set("result_data"):
                performative.result_data_is_set = True
                result_data = msg.result_data
                performative.result_data = result_data
            trello_interaction_msg.action_result.CopyFrom(performative)
        elif performative_id == TrelloInteractionMessage.Performative.ERROR:
            performative = trello_interaction_pb2.TrelloInteractionMessage.Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            error_msg = msg.error_msg
            performative.error_msg = error_msg
            trello_interaction_msg.error.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = trello_interaction_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'TrelloInteraction' message.

        :param obj: the bytes object.
        :return: the 'TrelloInteraction' message.
        """
        message_pb = ProtobufMessage()
        trello_interaction_pb = trello_interaction_pb2.TrelloInteractionMessage()  # type: ignore
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        trello_interaction_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = trello_interaction_pb.WhichOneof("performative")
        performative_id = TrelloInteractionMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == TrelloInteractionMessage.Performative.CREATE_BOARD:
            board_name = trello_interaction_pb.create_board.board_name
            performative_content["board_name"] = board_name
            if trello_interaction_pb.create_board.organization_id_is_set:
                organization_id = trello_interaction_pb.create_board.organization_id
                performative_content["organization_id"] = organization_id
            if trello_interaction_pb.create_board.permission_level_is_set:
                permission_level = trello_interaction_pb.create_board.permission_level
                performative_content["permission_level"] = permission_level
        elif performative_id == TrelloInteractionMessage.Performative.FETCH_BOARD:
            board_id = trello_interaction_pb.fetch_board.board_id
            performative_content["board_id"] = board_id
        elif performative_id == TrelloInteractionMessage.Performative.LIST_BOARDS:
            if trello_interaction_pb.list_boards.board_filter_is_set:
                board_filter = trello_interaction_pb.list_boards.board_filter
                performative_content["board_filter"] = board_filter
        elif performative_id == TrelloInteractionMessage.Performative.ADD_MEMBER:
            board_id = trello_interaction_pb.add_member.board_id
            performative_content["board_id"] = board_id
            member_id = trello_interaction_pb.add_member.member_id
            performative_content["member_id"] = member_id
            if trello_interaction_pb.add_member.member_type_is_set:
                member_type = trello_interaction_pb.add_member.member_type
                performative_content["member_type"] = member_type
        elif performative_id == TrelloInteractionMessage.Performative.LIST_CARDS:
            board_id = trello_interaction_pb.list_cards.board_id
            performative_content["board_id"] = board_id
            if trello_interaction_pb.list_cards.card_filter_is_set:
                card_filter = trello_interaction_pb.list_cards.card_filter
                performative_content["card_filter"] = card_filter
        elif performative_id == TrelloInteractionMessage.Performative.ADD_CARD:
            list_id = trello_interaction_pb.add_card.list_id
            performative_content["list_id"] = list_id
            card_name = trello_interaction_pb.add_card.card_name
            performative_content["card_name"] = card_name
            if trello_interaction_pb.add_card.desc_is_set:
                desc = trello_interaction_pb.add_card.desc
                performative_content["desc"] = desc
            if trello_interaction_pb.add_card.labels_is_set:
                labels = trello_interaction_pb.add_card.labels
                labels_tuple = tuple(labels)
                performative_content["labels"] = labels_tuple
            if trello_interaction_pb.add_card.due_is_set:
                due = trello_interaction_pb.add_card.due
                performative_content["due"] = due
        elif performative_id == TrelloInteractionMessage.Performative.FETCH_ACTIONS:
            board_id = trello_interaction_pb.fetch_actions.board_id
            performative_content["board_id"] = board_id
            if trello_interaction_pb.fetch_actions.action_filter_is_set:
                action_filter = trello_interaction_pb.fetch_actions.action_filter
                performative_content["action_filter"] = action_filter
        elif performative_id == TrelloInteractionMessage.Performative.ACTION_RESULT:
            pb2_status = trello_interaction_pb.action_result.status
            status = Status.decode(pb2_status)
            performative_content["status"] = status
            if trello_interaction_pb.action_result.result_data_is_set:
                result_data = trello_interaction_pb.action_result.result_data
                performative_content["result_data"] = result_data
        elif performative_id == TrelloInteractionMessage.Performative.ERROR:
            pb2_error_code = trello_interaction_pb.error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            error_msg = trello_interaction_pb.error.error_msg
            performative_content["error_msg"] = error_msg
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return TrelloInteractionMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content,
        )
