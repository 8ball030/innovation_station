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

"""Serialization module for terraform_devops protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.your_name.protocols.terraform_devops import (  # type: ignore
    terraform_devops_pb2,
)
from packages.your_name.protocols.terraform_devops.custom_types import (  # type: ignore
    ErrorCode,
    Status,
)
from packages.your_name.protocols.terraform_devops.message import (  # type: ignore
    TerraformDevopsMessage,
)


class TerraformDevopsSerializer(Serializer):
    """Serialization for the 'terraform_devops' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'TerraformDevops' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(TerraformDevopsMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        terraform_devops_msg = terraform_devops_pb2.TerraformDevopsMessage()  # type: ignore

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == TerraformDevopsMessage.Performative.INIT:
            performative = terraform_devops_pb2.TerraformDevopsMessage.Init_Performative()  # type: ignore
            configuration_path = msg.configuration_path
            performative.configuration_path = configuration_path
            terraform_devops_msg.init.CopyFrom(performative)
        elif performative_id == TerraformDevopsMessage.Performative.APPLY:
            performative = terraform_devops_pb2.TerraformDevopsMessage.Apply_Performative()  # type: ignore
            configuration_path = msg.configuration_path
            performative.configuration_path = configuration_path
            terraform_devops_msg.apply.CopyFrom(performative)
        elif performative_id == TerraformDevopsMessage.Performative.DESTROY:
            performative = terraform_devops_pb2.TerraformDevopsMessage.Destroy_Performative()  # type: ignore
            configuration_path = msg.configuration_path
            performative.configuration_path = configuration_path
            terraform_devops_msg.destroy.CopyFrom(performative)
        elif performative_id == TerraformDevopsMessage.Performative.VERIFY:
            performative = terraform_devops_pb2.TerraformDevopsMessage.Verify_Performative()  # type: ignore
            deployment_id = msg.deployment_id
            performative.deployment_id = deployment_id
            terraform_devops_msg.verify.CopyFrom(performative)
        elif performative_id == TerraformDevopsMessage.Performative.RESULT:
            performative = terraform_devops_pb2.TerraformDevopsMessage.Result_Performative()  # type: ignore
            status = msg.status
            Status.encode(performative.status, status)
            stdout = msg.stdout
            performative.stdout = stdout
            stderr = msg.stderr
            performative.stderr = stderr
            terraform_devops_msg.result.CopyFrom(performative)
        elif performative_id == TerraformDevopsMessage.Performative.ERROR:
            performative = terraform_devops_pb2.TerraformDevopsMessage.Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            error_msg = msg.error_msg
            performative.error_msg = error_msg
            terraform_devops_msg.error.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = terraform_devops_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'TerraformDevops' message.

        :param obj: the bytes object.
        :return: the 'TerraformDevops' message.
        """
        message_pb = ProtobufMessage()
        terraform_devops_pb = terraform_devops_pb2.TerraformDevopsMessage()  # type: ignore
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        terraform_devops_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = terraform_devops_pb.WhichOneof("performative")
        performative_id = TerraformDevopsMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == TerraformDevopsMessage.Performative.INIT:
            configuration_path = terraform_devops_pb.init.configuration_path
            performative_content["configuration_path"] = configuration_path
        elif performative_id == TerraformDevopsMessage.Performative.APPLY:
            configuration_path = terraform_devops_pb.apply.configuration_path
            performative_content["configuration_path"] = configuration_path
        elif performative_id == TerraformDevopsMessage.Performative.DESTROY:
            configuration_path = terraform_devops_pb.destroy.configuration_path
            performative_content["configuration_path"] = configuration_path
        elif performative_id == TerraformDevopsMessage.Performative.VERIFY:
            deployment_id = terraform_devops_pb.verify.deployment_id
            performative_content["deployment_id"] = deployment_id
        elif performative_id == TerraformDevopsMessage.Performative.RESULT:
            pb2_status = terraform_devops_pb.result.status
            status = Status.decode(pb2_status)
            performative_content["status"] = status
            stdout = terraform_devops_pb.result.stdout
            performative_content["stdout"] = stdout
            stderr = terraform_devops_pb.result.stderr
            performative_content["stderr"] = stderr
        elif performative_id == TerraformDevopsMessage.Performative.ERROR:
            pb2_error_code = terraform_devops_pb.error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            error_msg = terraform_devops_pb.error.error_msg
            performative_content["error_msg"] = error_msg
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return TerraformDevopsMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content,
        )
