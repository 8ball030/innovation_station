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

"""Serialization module for encrypted_communication protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.eightballer.protocols.encrypted_communication import (  # type: ignore
    encrypted_communication_pb2,
)
from packages.eightballer.protocols.encrypted_communication.custom_types import (  # type: ignore
    ErrorCode,
)
from packages.eightballer.protocols.encrypted_communication.message import (  # type: ignore
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
        if performative_id == EncryptedCommunicationMessage.Performative.ISSUE_CHALLENGE:
            performative = encrypted_communication_pb2.EncryptedCommunicationMessage.Issue_Challenge_Performative()  # type: ignore
            challenge = msg.challenge
            performative.challenge = challenge
            encrypted_communication_msg.issue_challenge.CopyFrom(performative)
        elif performative_id == EncryptedCommunicationMessage.Performative.RESPOND_CHALLENGE:
            performative = encrypted_communication_pb2.EncryptedCommunicationMessage.Respond_Challenge_Performative()  # type: ignore
            challenge_response = msg.challenge_response
            performative.challenge_response = challenge_response
            requester_public_key = msg.requester_public_key
            performative.requester_public_key = requester_public_key
            encrypted_communication_msg.respond_challenge.CopyFrom(performative)
        elif performative_id == EncryptedCommunicationMessage.Performative.VERIFY_RESPONSE:
            performative = encrypted_communication_pb2.EncryptedCommunicationMessage.Verify_Response_Performative()  # type: ignore
            verification_result = msg.verification_result
            performative.verification_result = verification_result
            encrypted_communication_msg.verify_response.CopyFrom(performative)
        elif performative_id == EncryptedCommunicationMessage.Performative.PROVIDE_ENCRYPTION_KEY:
            performative = encrypted_communication_pb2.EncryptedCommunicationMessage.Provide_Encryption_Key_Performative()  # type: ignore
            encryption_key = msg.encryption_key
            performative.encryption_key = encryption_key
            encrypted_communication_msg.provide_encryption_key.CopyFrom(performative)
        elif performative_id == EncryptedCommunicationMessage.Performative.VERIFY_MESSAGE:
            performative = encrypted_communication_pb2.EncryptedCommunicationMessage.Verify_Message_Performative()  # type: ignore
            message_signature = msg.message_signature
            performative.message_signature = message_signature
            message = msg.message
            performative.message = message
            encrypted_communication_msg.verify_message.CopyFrom(performative)
        elif performative_id == EncryptedCommunicationMessage.Performative.VERIFICATION_RESULT:
            performative = encrypted_communication_pb2.EncryptedCommunicationMessage.Verification_Result_Performative()  # type: ignore
            result = msg.result
            performative.result = result
            encrypted_communication_msg.verification_result.CopyFrom(performative)
        elif performative_id == EncryptedCommunicationMessage.Performative.ENCRYPTION_READY:
            performative = encrypted_communication_pb2.EncryptedCommunicationMessage.Encryption_Ready_Performative()  # type: ignore
            status = msg.status
            performative.status = status
            encrypted_communication_msg.encryption_ready.CopyFrom(performative)
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
        if performative_id == EncryptedCommunicationMessage.Performative.ISSUE_CHALLENGE:
            challenge = encrypted_communication_pb.issue_challenge.challenge
            performative_content["challenge"] = challenge
        elif performative_id == EncryptedCommunicationMessage.Performative.RESPOND_CHALLENGE:
            challenge_response = encrypted_communication_pb.respond_challenge.challenge_response
            performative_content["challenge_response"] = challenge_response
            requester_public_key = encrypted_communication_pb.respond_challenge.requester_public_key
            performative_content["requester_public_key"] = requester_public_key
        elif performative_id == EncryptedCommunicationMessage.Performative.VERIFY_RESPONSE:
            verification_result = encrypted_communication_pb.verify_response.verification_result
            performative_content["verification_result"] = verification_result
        elif performative_id == EncryptedCommunicationMessage.Performative.PROVIDE_ENCRYPTION_KEY:
            encryption_key = encrypted_communication_pb.provide_encryption_key.encryption_key
            performative_content["encryption_key"] = encryption_key
        elif performative_id == EncryptedCommunicationMessage.Performative.VERIFY_MESSAGE:
            message_signature = encrypted_communication_pb.verify_message.message_signature
            performative_content["message_signature"] = message_signature
            message = encrypted_communication_pb.verify_message.message
            performative_content["message"] = message
        elif performative_id == EncryptedCommunicationMessage.Performative.VERIFICATION_RESULT:
            result = encrypted_communication_pb.verification_result.result
            performative_content["result"] = result
        elif performative_id == EncryptedCommunicationMessage.Performative.ENCRYPTION_READY:
            status = encrypted_communication_pb.encryption_ready.status
            performative_content["status"] = status
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
