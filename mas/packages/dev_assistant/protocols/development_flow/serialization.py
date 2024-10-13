# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 dev_assistant
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

"""Serialization module for development_flow protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.dev_assistant.protocols.development_flow import (  # type: ignore
    development_flow_pb2,
)
from packages.dev_assistant.protocols.development_flow.custom_types import (  # type: ignore
    ErrorCode,
)
from packages.dev_assistant.protocols.development_flow.message import (  # type: ignore
    DevelopmentFlowMessage,
)


class DevelopmentFlowSerializer(Serializer):
    """Serialization for the 'development_flow' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'DevelopmentFlow' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(DevelopmentFlowMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        development_flow_msg = development_flow_pb2.DevelopmentFlowMessage()  # type: ignore

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == DevelopmentFlowMessage.Performative.REQUEST_FEATURE:
            performative = development_flow_pb2.DevelopmentFlowMessage.Request_Feature_Performative()  # type: ignore
            feature_description = msg.feature_description
            performative.feature_description = feature_description
            development_flow_msg.request_feature.CopyFrom(performative)
        elif performative_id == DevelopmentFlowMessage.Performative.FEATURE_SPEC:
            performative = development_flow_pb2.DevelopmentFlowMessage.Feature_Spec_Performative()  # type: ignore
            feature_id = msg.feature_id
            performative.feature_id = feature_id
            spec_description = msg.spec_description
            performative.spec_description = spec_description
            development_flow_msg.feature_spec.CopyFrom(performative)
        elif performative_id == DevelopmentFlowMessage.Performative.PROGRESS_UPDATE:
            performative = development_flow_pb2.DevelopmentFlowMessage.Progress_Update_Performative()  # type: ignore
            feature_id = msg.feature_id
            performative.feature_id = feature_id
            update_description = msg.update_description
            performative.update_description = update_description
            development_flow_msg.progress_update.CopyFrom(performative)
        elif performative_id == DevelopmentFlowMessage.Performative.FEATURE_REVIEW:
            performative = development_flow_pb2.DevelopmentFlowMessage.Feature_Review_Performative()  # type: ignore
            feature_id = msg.feature_id
            performative.feature_id = feature_id
            reviewer_comments = msg.reviewer_comments
            performative.reviewer_comments = reviewer_comments
            development_flow_msg.feature_review.CopyFrom(performative)
        elif performative_id == DevelopmentFlowMessage.Performative.FEATURE_APPROVED:
            performative = development_flow_pb2.DevelopmentFlowMessage.Feature_Approved_Performative()  # type: ignore
            feature_id = msg.feature_id
            performative.feature_id = feature_id
            development_flow_msg.feature_approved.CopyFrom(performative)
        elif performative_id == DevelopmentFlowMessage.Performative.ERROR:
            performative = development_flow_pb2.DevelopmentFlowMessage.Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            error_msg = msg.error_msg
            performative.error_msg = error_msg
            development_flow_msg.error.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = development_flow_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'DevelopmentFlow' message.

        :param obj: the bytes object.
        :return: the 'DevelopmentFlow' message.
        """
        message_pb = ProtobufMessage()
        development_flow_pb = development_flow_pb2.DevelopmentFlowMessage()  # type: ignore
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        development_flow_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = development_flow_pb.WhichOneof("performative")
        performative_id = DevelopmentFlowMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == DevelopmentFlowMessage.Performative.REQUEST_FEATURE:
            feature_description = development_flow_pb.request_feature.feature_description
            performative_content["feature_description"] = feature_description
        elif performative_id == DevelopmentFlowMessage.Performative.FEATURE_SPEC:
            feature_id = development_flow_pb.feature_spec.feature_id
            performative_content["feature_id"] = feature_id
            spec_description = development_flow_pb.feature_spec.spec_description
            performative_content["spec_description"] = spec_description
        elif performative_id == DevelopmentFlowMessage.Performative.PROGRESS_UPDATE:
            feature_id = development_flow_pb.progress_update.feature_id
            performative_content["feature_id"] = feature_id
            update_description = development_flow_pb.progress_update.update_description
            performative_content["update_description"] = update_description
        elif performative_id == DevelopmentFlowMessage.Performative.FEATURE_REVIEW:
            feature_id = development_flow_pb.feature_review.feature_id
            performative_content["feature_id"] = feature_id
            reviewer_comments = development_flow_pb.feature_review.reviewer_comments
            performative_content["reviewer_comments"] = reviewer_comments
        elif performative_id == DevelopmentFlowMessage.Performative.FEATURE_APPROVED:
            feature_id = development_flow_pb.feature_approved.feature_id
            performative_content["feature_id"] = feature_id
        elif performative_id == DevelopmentFlowMessage.Performative.ERROR:
            pb2_error_code = development_flow_pb.error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            error_msg = development_flow_pb.error.error_msg
            performative_content["error_msg"] = error_msg
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return DevelopmentFlowMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content,
        )
