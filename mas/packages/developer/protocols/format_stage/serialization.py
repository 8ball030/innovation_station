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

"""Serialization module for format_stage protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.developer.protocols.format_stage import format_stage_pb2  # type: ignore
from packages.developer.protocols.format_stage.custom_types import (  # type: ignore
    ErrorCode,
)
from packages.developer.protocols.format_stage.message import (  # type: ignore
    FormatStageMessage,
)


class FormatStageSerializer(Serializer):
    """Serialization for the 'format_stage' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'FormatStage' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(FormatStageMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        format_stage_msg = format_stage_pb2.FormatStageMessage()  # type: ignore

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == FormatStageMessage.Performative.FORMAT_REQUEST:
            performative = format_stage_pb2.FormatStageMessage.Format_Request_Performative()  # type: ignore
            file_path = msg.file_path
            performative.file_path = file_path
            formatter_options = msg.formatter_options
            performative.formatter_options.update(formatter_options)
            format_stage_msg.format_request.CopyFrom(performative)
        elif performative_id == FormatStageMessage.Performative.FORMAT_RESULT:
            performative = format_stage_pb2.FormatStageMessage.Format_Result_Performative()  # type: ignore
            file_path = msg.file_path
            performative.file_path = file_path
            formatted = msg.formatted
            performative.formatted = formatted
            changes_made = msg.changes_made
            performative.changes_made = changes_made
            format_stage_msg.format_result.CopyFrom(performative)
        elif performative_id == FormatStageMessage.Performative.VALIDATE_CODE:
            performative = format_stage_pb2.FormatStageMessage.Validate_Code_Performative()  # type: ignore
            file_path = msg.file_path
            performative.file_path = file_path
            validation_rules = msg.validation_rules
            performative.validation_rules.extend(validation_rules)
            format_stage_msg.validate_code.CopyFrom(performative)
        elif performative_id == FormatStageMessage.Performative.VALIDATION_RESULT:
            performative = format_stage_pb2.FormatStageMessage.Validation_Result_Performative()  # type: ignore
            file_path = msg.file_path
            performative.file_path = file_path
            valid = msg.valid
            performative.valid = valid
            errors = msg.errors
            performative.errors.extend(errors)
            format_stage_msg.validation_result.CopyFrom(performative)
        elif performative_id == FormatStageMessage.Performative.ERROR:
            performative = format_stage_pb2.FormatStageMessage.Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            error_msg = msg.error_msg
            performative.error_msg = error_msg
            format_stage_msg.error.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = format_stage_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'FormatStage' message.

        :param obj: the bytes object.
        :return: the 'FormatStage' message.
        """
        message_pb = ProtobufMessage()
        format_stage_pb = format_stage_pb2.FormatStageMessage()  # type: ignore
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        format_stage_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = format_stage_pb.WhichOneof("performative")
        performative_id = FormatStageMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == FormatStageMessage.Performative.FORMAT_REQUEST:
            file_path = format_stage_pb.format_request.file_path
            performative_content["file_path"] = file_path
            formatter_options = format_stage_pb.format_request.formatter_options
            formatter_options_dict = dict(formatter_options)
            performative_content["formatter_options"] = formatter_options_dict
        elif performative_id == FormatStageMessage.Performative.FORMAT_RESULT:
            file_path = format_stage_pb.format_result.file_path
            performative_content["file_path"] = file_path
            formatted = format_stage_pb.format_result.formatted
            performative_content["formatted"] = formatted
            changes_made = format_stage_pb.format_result.changes_made
            performative_content["changes_made"] = changes_made
        elif performative_id == FormatStageMessage.Performative.VALIDATE_CODE:
            file_path = format_stage_pb.validate_code.file_path
            performative_content["file_path"] = file_path
            validation_rules = format_stage_pb.validate_code.validation_rules
            validation_rules_tuple = tuple(validation_rules)
            performative_content["validation_rules"] = validation_rules_tuple
        elif performative_id == FormatStageMessage.Performative.VALIDATION_RESULT:
            file_path = format_stage_pb.validation_result.file_path
            performative_content["file_path"] = file_path
            valid = format_stage_pb.validation_result.valid
            performative_content["valid"] = valid
            errors = format_stage_pb.validation_result.errors
            errors_tuple = tuple(errors)
            performative_content["errors"] = errors_tuple
        elif performative_id == FormatStageMessage.Performative.ERROR:
            pb2_error_code = format_stage_pb.error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            error_msg = format_stage_pb.error.error_msg
            performative_content["error_msg"] = error_msg
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return FormatStageMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content,
        )
