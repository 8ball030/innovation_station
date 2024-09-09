# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 devteam
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

"""Serialization module for lint_protocol protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.devteam.protocols.lint_protocol import lint_protocol_pb2  # type: ignore
from packages.devteam.protocols.lint_protocol.custom_types import (  # type: ignore
    ErrorCode,
    Severity,
)
from packages.devteam.protocols.lint_protocol.message import (  # type: ignore
    LintProtocolMessage,
)


class LintProtocolSerializer(Serializer):
    """Serialization for the 'lint_protocol' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'LintProtocol' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(LintProtocolMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        lint_protocol_msg = lint_protocol_pb2.LintProtocolMessage()  # type: ignore

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == LintProtocolMessage.Performative.INITIATE_LINT:
            performative = lint_protocol_pb2.LintProtocolMessage.Initiate_Lint_Performative()  # type: ignore
            project_path = msg.project_path
            performative.project_path = project_path
            if msg.is_set("config"):
                performative.config_is_set = True
                config = msg.config
                performative.config = config
            lint_protocol_msg.initiate_lint.CopyFrom(performative)
        elif performative_id == LintProtocolMessage.Performative.LINT_ISSUE:
            performative = lint_protocol_pb2.LintProtocolMessage.Lint_Issue_Performative()  # type: ignore
            issue_id = msg.issue_id
            performative.issue_id = issue_id
            severity = msg.severity
            Severity.encode(performative.severity, severity)
            message = msg.message
            performative.message = message
            line = msg.line
            performative.line = line
            column = msg.column
            performative.column = column
            file_path = msg.file_path
            performative.file_path = file_path
            lint_protocol_msg.lint_issue.CopyFrom(performative)
        elif performative_id == LintProtocolMessage.Performative.LINT_COMPLETE:
            performative = lint_protocol_pb2.LintProtocolMessage.Lint_Complete_Performative()  # type: ignore
            summary = msg.summary
            performative.summary = summary
            lint_protocol_msg.lint_complete.CopyFrom(performative)
        elif performative_id == LintProtocolMessage.Performative.LINT_ERROR:
            performative = lint_protocol_pb2.LintProtocolMessage.Lint_Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            error_msg = msg.error_msg
            performative.error_msg = error_msg
            lint_protocol_msg.lint_error.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = lint_protocol_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'LintProtocol' message.

        :param obj: the bytes object.
        :return: the 'LintProtocol' message.
        """
        message_pb = ProtobufMessage()
        lint_protocol_pb = lint_protocol_pb2.LintProtocolMessage()  # type: ignore
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        lint_protocol_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = lint_protocol_pb.WhichOneof("performative")
        performative_id = LintProtocolMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == LintProtocolMessage.Performative.INITIATE_LINT:
            project_path = lint_protocol_pb.initiate_lint.project_path
            performative_content["project_path"] = project_path
            if lint_protocol_pb.initiate_lint.config_is_set:
                config = lint_protocol_pb.initiate_lint.config
                performative_content["config"] = config
        elif performative_id == LintProtocolMessage.Performative.LINT_ISSUE:
            issue_id = lint_protocol_pb.lint_issue.issue_id
            performative_content["issue_id"] = issue_id
            pb2_severity = lint_protocol_pb.lint_issue.severity
            severity = Severity.decode(pb2_severity)
            performative_content["severity"] = severity
            message = lint_protocol_pb.lint_issue.message
            performative_content["message"] = message
            line = lint_protocol_pb.lint_issue.line
            performative_content["line"] = line
            column = lint_protocol_pb.lint_issue.column
            performative_content["column"] = column
            file_path = lint_protocol_pb.lint_issue.file_path
            performative_content["file_path"] = file_path
        elif performative_id == LintProtocolMessage.Performative.LINT_COMPLETE:
            summary = lint_protocol_pb.lint_complete.summary
            performative_content["summary"] = summary
        elif performative_id == LintProtocolMessage.Performative.LINT_ERROR:
            pb2_error_code = lint_protocol_pb.lint_error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            error_msg = lint_protocol_pb.lint_error.error_msg
            performative_content["error_msg"] = error_msg
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return LintProtocolMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content,
        )
