# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 developer
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

"""Serialization module for messaging_bot_protocol protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.developer.protocols.messaging_bot_protocol import (  # type: ignore
    messaging_bot_protocol_pb2,
)
from packages.developer.protocols.messaging_bot_protocol.custom_types import (  # type: ignore
    ErrorCode,
)
from packages.developer.protocols.messaging_bot_protocol.message import (  # type: ignore
    MessagingBotProtocolMessage,
)


class MessagingBotProtocolSerializer(Serializer):
    """Serialization for the 'messaging_bot_protocol' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'MessagingBotProtocol' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(MessagingBotProtocolMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        messaging_bot_protocol_msg = messaging_bot_protocol_pb2.MessagingBotProtocolMessage()  # type: ignore

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == MessagingBotProtocolMessage.Performative.SEND_MESSAGE:
            performative = messaging_bot_protocol_pb2.MessagingBotProtocolMessage.Send_Message_Performative()  # type: ignore
            recipient_id = msg.recipient_id
            performative.recipient_id = recipient_id
            message_content = msg.message_content
            performative.message_content = message_content
            timestamp = msg.timestamp
            performative.timestamp = timestamp
            messaging_bot_protocol_msg.send_message.CopyFrom(performative)
        elif performative_id == MessagingBotProtocolMessage.Performative.RECEIVE_MESSAGE:
            performative = messaging_bot_protocol_pb2.MessagingBotProtocolMessage.Receive_Message_Performative()  # type: ignore
            sender_id = msg.sender_id
            performative.sender_id = sender_id
            message_content = msg.message_content
            performative.message_content = message_content
            timestamp = msg.timestamp
            performative.timestamp = timestamp
            messaging_bot_protocol_msg.receive_message.CopyFrom(performative)
        elif performative_id == MessagingBotProtocolMessage.Performative.BOT_RESPONSE:
            performative = messaging_bot_protocol_pb2.MessagingBotProtocolMessage.Bot_Response_Performative()  # type: ignore
            bot_id = msg.bot_id
            performative.bot_id = bot_id
            response_content = msg.response_content
            performative.response_content = response_content
            timestamp = msg.timestamp
            performative.timestamp = timestamp
            messaging_bot_protocol_msg.bot_response.CopyFrom(performative)
        elif performative_id == MessagingBotProtocolMessage.Performative.ERROR:
            performative = messaging_bot_protocol_pb2.MessagingBotProtocolMessage.Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            if msg.is_set("error_msg"):
                performative.error_msg_is_set = True
                error_msg = msg.error_msg
                performative.error_msg = error_msg
            messaging_bot_protocol_msg.error.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = messaging_bot_protocol_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'MessagingBotProtocol' message.

        :param obj: the bytes object.
        :return: the 'MessagingBotProtocol' message.
        """
        message_pb = ProtobufMessage()
        messaging_bot_protocol_pb = messaging_bot_protocol_pb2.MessagingBotProtocolMessage()  # type: ignore
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        messaging_bot_protocol_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = messaging_bot_protocol_pb.WhichOneof("performative")
        performative_id = MessagingBotProtocolMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == MessagingBotProtocolMessage.Performative.SEND_MESSAGE:
            recipient_id = messaging_bot_protocol_pb.send_message.recipient_id
            performative_content["recipient_id"] = recipient_id
            message_content = messaging_bot_protocol_pb.send_message.message_content
            performative_content["message_content"] = message_content
            timestamp = messaging_bot_protocol_pb.send_message.timestamp
            performative_content["timestamp"] = timestamp
        elif performative_id == MessagingBotProtocolMessage.Performative.RECEIVE_MESSAGE:
            sender_id = messaging_bot_protocol_pb.receive_message.sender_id
            performative_content["sender_id"] = sender_id
            message_content = messaging_bot_protocol_pb.receive_message.message_content
            performative_content["message_content"] = message_content
            timestamp = messaging_bot_protocol_pb.receive_message.timestamp
            performative_content["timestamp"] = timestamp
        elif performative_id == MessagingBotProtocolMessage.Performative.BOT_RESPONSE:
            bot_id = messaging_bot_protocol_pb.bot_response.bot_id
            performative_content["bot_id"] = bot_id
            response_content = messaging_bot_protocol_pb.bot_response.response_content
            performative_content["response_content"] = response_content
            timestamp = messaging_bot_protocol_pb.bot_response.timestamp
            performative_content["timestamp"] = timestamp
        elif performative_id == MessagingBotProtocolMessage.Performative.ERROR:
            pb2_error_code = messaging_bot_protocol_pb.error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            if messaging_bot_protocol_pb.error.error_msg_is_set:
                error_msg = messaging_bot_protocol_pb.error.error_msg
                performative_content["error_msg"] = error_msg
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return MessagingBotProtocolMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content,
        )
