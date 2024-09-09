# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 cryptor
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

"""Serialization module for encrypted_communication protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.cryptor.protocols.encrypted_communication import (  # type: ignore
    encrypted_communication_pb2,
)
from packages.cryptor.protocols.encrypted_communication.custom_types import (  # type: ignore
    ErrorCode,
)
from packages.cryptor.protocols.encrypted_communication.message import (  # type: ignore
    EncryptedCommunicationMessage,
)


class EncryptedCommunicationSerializer(Serializer):
    """Serialization for the 'encrypted_communication' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'EncryptedCommunication' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(EncryptedCommunicationMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        encrypted_communication_msg = encrypted_communication_pb2.EncryptedCommunicationMessage()  # type: ignore

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == EncryptedCommunicationMessage.Performative.INITIATE_COMMUNICATION:
            performative = encrypted_communication_pb2.EncryptedCommunicationMessage.Initiate_Communication_Performative()  # type: ignore
            public_key = msg.public_key
            performative.public_key = public_key
            encrypted_communication_msg.initiate_communication.CopyFrom(performative)
        elif performative_id == EncryptedCommunicationMessage.Performative.COMMUNICATION_REQUEST:
            performative = encrypted_communication_pb2.EncryptedCommunicationMessage.Communication_Request_Performative()  # type: ignore
            encrypted_message = msg.encrypted_message
            performative.encrypted_message = encrypted_message
            nonce = msg.nonce
            performative.nonce = nonce
            encrypted_communication_msg.communication_request.CopyFrom(performative)
        elif performative_id == EncryptedCommunicationMessage.Performative.COMMUNICATION_RESPONSE:
            performative = encrypted_communication_pb2.EncryptedCommunicationMessage.Communication_Response_Performative()  # type: ignore
            encrypted_message = msg.encrypted_message
            performative.encrypted_message = encrypted_message
            nonce = msg.nonce
            performative.nonce = nonce
            encrypted_communication_msg.communication_response.CopyFrom(performative)
        elif performative_id == EncryptedCommunicationMessage.Performative.END_COMMUNICATION:
            performative = encrypted_communication_pb2.EncryptedCommunicationMessage.End_Communication_Performative()  # type: ignore
            encrypted_communication_msg.end_communication.CopyFrom(performative)
        elif performative_id == EncryptedCommunicationMessage.Performative.ERROR:
            performative = encrypted_communication_pb2.EncryptedCommunicationMessage.Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            error_msg = msg.error_msg
            performative.error_msg = error_msg
            encrypted_communication_msg.error.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = encrypted_communication_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'EncryptedCommunication' message.

        :param obj: the bytes object.
        :return: the 'EncryptedCommunication' message.
        """
        message_pb = ProtobufMessage()
        encrypted_communication_pb = encrypted_communication_pb2.EncryptedCommunicationMessage()  # type: ignore
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        encrypted_communication_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = encrypted_communication_pb.WhichOneof("performative")
        performative_id = EncryptedCommunicationMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == EncryptedCommunicationMessage.Performative.INITIATE_COMMUNICATION:
            public_key = encrypted_communication_pb.initiate_communication.public_key
            performative_content["public_key"] = public_key
        elif performative_id == EncryptedCommunicationMessage.Performative.COMMUNICATION_REQUEST:
            encrypted_message = encrypted_communication_pb.communication_request.encrypted_message
            performative_content["encrypted_message"] = encrypted_message
            nonce = encrypted_communication_pb.communication_request.nonce
            performative_content["nonce"] = nonce
        elif performative_id == EncryptedCommunicationMessage.Performative.COMMUNICATION_RESPONSE:
            encrypted_message = encrypted_communication_pb.communication_response.encrypted_message
            performative_content["encrypted_message"] = encrypted_message
            nonce = encrypted_communication_pb.communication_response.nonce
            performative_content["nonce"] = nonce
        elif performative_id == EncryptedCommunicationMessage.Performative.END_COMMUNICATION:
            pass
        elif performative_id == EncryptedCommunicationMessage.Performative.ERROR:
            pb2_error_code = encrypted_communication_pb.error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            error_msg = encrypted_communication_pb.error.error_msg
            performative_content["error_msg"] = error_msg
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return EncryptedCommunicationMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content,
        )
