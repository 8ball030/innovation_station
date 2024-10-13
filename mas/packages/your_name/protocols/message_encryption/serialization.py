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

"""Serialization module for message_encryption protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.your_name.protocols.message_encryption import (  # type: ignore
    message_encryption_pb2,
)
from packages.your_name.protocols.message_encryption.custom_types import (  # type: ignore
    ErrorCode,
    Status,
)
from packages.your_name.protocols.message_encryption.message import (  # type: ignore
    MessageEncryptionMessage,
)


class MessageEncryptionSerializer(Serializer):
    """Serialization for the 'message_encryption' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'MessageEncryption' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(MessageEncryptionMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        message_encryption_msg = message_encryption_pb2.MessageEncryptionMessage()  # type: ignore

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == MessageEncryptionMessage.Performative.SUBMIT_MESSAGE:
            performative = message_encryption_pb2.MessageEncryptionMessage.Submit_Message_Performative()  # type: ignore
            message = msg.message
            performative.message = message
            encryption_type = msg.encryption_type
            performative.encryption_type = encryption_type
            message_encryption_msg.submit_message.CopyFrom(performative)
        elif performative_id == MessageEncryptionMessage.Performative.ENCRYPTION_RESULT:
            performative = message_encryption_pb2.MessageEncryptionMessage.Encryption_Result_Performative()  # type: ignore
            encrypted_message = msg.encrypted_message
            performative.encrypted_message = encrypted_message
            if msg.is_set("encryption_key"):
                performative.encryption_key_is_set = True
                encryption_key = msg.encryption_key
                performative.encryption_key = encryption_key
            message_encryption_msg.encryption_result.CopyFrom(performative)
        elif performative_id == MessageEncryptionMessage.Performative.DECRYPTION_RESULT:
            performative = message_encryption_pb2.MessageEncryptionMessage.Decryption_Result_Performative()  # type: ignore
            decrypted_message = msg.decrypted_message
            performative.decrypted_message = decrypted_message
            message_encryption_msg.decryption_result.CopyFrom(performative)
        elif performative_id == MessageEncryptionMessage.Performative.ERROR:
            performative = message_encryption_pb2.MessageEncryptionMessage.Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            error_msg = msg.error_msg
            performative.error_msg = error_msg
            message_encryption_msg.error.CopyFrom(performative)
        elif performative_id == MessageEncryptionMessage.Performative.STATUS_UPDATE:
            performative = message_encryption_pb2.MessageEncryptionMessage.Status_Update_Performative()  # type: ignore
            status = msg.status
            Status.encode(performative.status, status)
            message_encryption_msg.status_update.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = message_encryption_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'MessageEncryption' message.

        :param obj: the bytes object.
        :return: the 'MessageEncryption' message.
        """
        message_pb = ProtobufMessage()
        message_encryption_pb = message_encryption_pb2.MessageEncryptionMessage()  # type: ignore
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        message_encryption_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = message_encryption_pb.WhichOneof("performative")
        performative_id = MessageEncryptionMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == MessageEncryptionMessage.Performative.SUBMIT_MESSAGE:
            message = message_encryption_pb.submit_message.message
            performative_content["message"] = message
            encryption_type = message_encryption_pb.submit_message.encryption_type
            performative_content["encryption_type"] = encryption_type
        elif performative_id == MessageEncryptionMessage.Performative.ENCRYPTION_RESULT:
            encrypted_message = message_encryption_pb.encryption_result.encrypted_message
            performative_content["encrypted_message"] = encrypted_message
            if message_encryption_pb.encryption_result.encryption_key_is_set:
                encryption_key = message_encryption_pb.encryption_result.encryption_key
                performative_content["encryption_key"] = encryption_key
        elif performative_id == MessageEncryptionMessage.Performative.DECRYPTION_RESULT:
            decrypted_message = message_encryption_pb.decryption_result.decrypted_message
            performative_content["decrypted_message"] = decrypted_message
        elif performative_id == MessageEncryptionMessage.Performative.ERROR:
            pb2_error_code = message_encryption_pb.error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            error_msg = message_encryption_pb.error.error_msg
            performative_content["error_msg"] = error_msg
        elif performative_id == MessageEncryptionMessage.Performative.STATUS_UPDATE:
            pb2_status = message_encryption_pb.status_update.status
            status = Status.decode(pb2_status)
            performative_content["status"] = status
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return MessageEncryptionMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content,
        )
