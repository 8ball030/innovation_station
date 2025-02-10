# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 yourname
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

"""Serialization module for agent_identity protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.yourname.protocols.agent_identity import (  # type: ignore
    agent_identity_pb2,
)
from packages.yourname.protocols.agent_identity.custom_types import (  # type: ignore
    ErrorCode,
)
from packages.yourname.protocols.agent_identity.message import (  # type: ignore
    AgentIdentityMessage,
)


class AgentIdentitySerializer(Serializer):
    """Serialization for the 'agent_identity' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'AgentIdentity' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(AgentIdentityMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        agent_identity_msg = agent_identity_pb2.AgentIdentityMessage()  # type: ignore

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == AgentIdentityMessage.Performative.SET_IDENTITY:
            performative = agent_identity_pb2.AgentIdentityMessage.Set_Identity_Performative()  # type: ignore
            ethereum_public_address = msg.ethereum_public_address
            performative.ethereum_public_address = ethereum_public_address
            if msg.is_set("solana_public_address"):
                performative.solana_public_address_is_set = True
                solana_public_address = msg.solana_public_address
                performative.solana_public_address = solana_public_address
            if msg.is_set("cosmos_public_address"):
                performative.cosmos_public_address_is_set = True
                cosmos_public_address = msg.cosmos_public_address
                performative.cosmos_public_address = cosmos_public_address
            if msg.is_set("gpg"):
                performative.gpg_is_set = True
                gpg = msg.gpg
                performative.gpg = gpg
            if msg.is_set("rsa"):
                performative.rsa_is_set = True
                rsa = msg.rsa
                performative.rsa = rsa
            if msg.is_set("role"):
                performative.role_is_set = True
                role = msg.role
                performative.role = role
            if msg.is_set("public_endpoint"):
                performative.public_endpoint_is_set = True
                public_endpoint = msg.public_endpoint
                performative.public_endpoint = public_endpoint
            if msg.is_set("private_endpoint"):
                performative.private_endpoint_is_set = True
                private_endpoint = msg.private_endpoint
                performative.private_endpoint = private_endpoint
            if msg.is_set("public_ws_endpoint"):
                performative.public_ws_endpoint_is_set = True
                public_ws_endpoint = msg.public_ws_endpoint
                performative.public_ws_endpoint = public_ws_endpoint
            if msg.is_set("private_ws_endpoint"):
                performative.private_ws_endpoint_is_set = True
                private_ws_endpoint = msg.private_ws_endpoint
                performative.private_ws_endpoint = private_ws_endpoint
            agent_identity_msg.set_identity.CopyFrom(performative)
        elif performative_id == AgentIdentityMessage.Performative.GET_IDENTITY:
            performative = agent_identity_pb2.AgentIdentityMessage.Get_Identity_Performative()  # type: ignore
            identity_type = msg.identity_type
            performative.identity_type = identity_type
            agent_identity_msg.get_identity.CopyFrom(performative)
        elif performative_id == AgentIdentityMessage.Performative.IDENTITY_RESPONSE:
            performative = agent_identity_pb2.AgentIdentityMessage.Identity_Response_Performative()  # type: ignore
            ethereum_public_address = msg.ethereum_public_address
            performative.ethereum_public_address = ethereum_public_address
            if msg.is_set("solana_public_address"):
                performative.solana_public_address_is_set = True
                solana_public_address = msg.solana_public_address
                performative.solana_public_address = solana_public_address
            if msg.is_set("cosmos_public_address"):
                performative.cosmos_public_address_is_set = True
                cosmos_public_address = msg.cosmos_public_address
                performative.cosmos_public_address = cosmos_public_address
            if msg.is_set("gpg"):
                performative.gpg_is_set = True
                gpg = msg.gpg
                performative.gpg = gpg
            if msg.is_set("rsa"):
                performative.rsa_is_set = True
                rsa = msg.rsa
                performative.rsa = rsa
            if msg.is_set("role"):
                performative.role_is_set = True
                role = msg.role
                performative.role = role
            if msg.is_set("public_endpoint"):
                performative.public_endpoint_is_set = True
                public_endpoint = msg.public_endpoint
                performative.public_endpoint = public_endpoint
            if msg.is_set("private_endpoint"):
                performative.private_endpoint_is_set = True
                private_endpoint = msg.private_endpoint
                performative.private_endpoint = private_endpoint
            if msg.is_set("public_ws_endpoint"):
                performative.public_ws_endpoint_is_set = True
                public_ws_endpoint = msg.public_ws_endpoint
                performative.public_ws_endpoint = public_ws_endpoint
            if msg.is_set("private_ws_endpoint"):
                performative.private_ws_endpoint_is_set = True
                private_ws_endpoint = msg.private_ws_endpoint
                performative.private_ws_endpoint = private_ws_endpoint
            agent_identity_msg.identity_response.CopyFrom(performative)
        elif performative_id == AgentIdentityMessage.Performative.ERROR:
            performative = agent_identity_pb2.AgentIdentityMessage.Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            error_msg = msg.error_msg
            performative.error_msg = error_msg
            agent_identity_msg.error.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = agent_identity_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'AgentIdentity' message.

        :param obj: the bytes object.
        :return: the 'AgentIdentity' message.
        """
        message_pb = ProtobufMessage()
        agent_identity_pb = agent_identity_pb2.AgentIdentityMessage()  # type: ignore
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        agent_identity_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = agent_identity_pb.WhichOneof("performative")
        performative_id = AgentIdentityMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == AgentIdentityMessage.Performative.SET_IDENTITY:
            ethereum_public_address = agent_identity_pb.set_identity.ethereum_public_address
            performative_content["ethereum_public_address"] = ethereum_public_address
            if agent_identity_pb.set_identity.solana_public_address_is_set:
                solana_public_address = agent_identity_pb.set_identity.solana_public_address
                performative_content["solana_public_address"] = solana_public_address
            if agent_identity_pb.set_identity.cosmos_public_address_is_set:
                cosmos_public_address = agent_identity_pb.set_identity.cosmos_public_address
                performative_content["cosmos_public_address"] = cosmos_public_address
            if agent_identity_pb.set_identity.gpg_is_set:
                gpg = agent_identity_pb.set_identity.gpg
                performative_content["gpg"] = gpg
            if agent_identity_pb.set_identity.rsa_is_set:
                rsa = agent_identity_pb.set_identity.rsa
                performative_content["rsa"] = rsa
            if agent_identity_pb.set_identity.role_is_set:
                role = agent_identity_pb.set_identity.role
                performative_content["role"] = role
            if agent_identity_pb.set_identity.public_endpoint_is_set:
                public_endpoint = agent_identity_pb.set_identity.public_endpoint
                performative_content["public_endpoint"] = public_endpoint
            if agent_identity_pb.set_identity.private_endpoint_is_set:
                private_endpoint = agent_identity_pb.set_identity.private_endpoint
                performative_content["private_endpoint"] = private_endpoint
            if agent_identity_pb.set_identity.public_ws_endpoint_is_set:
                public_ws_endpoint = agent_identity_pb.set_identity.public_ws_endpoint
                performative_content["public_ws_endpoint"] = public_ws_endpoint
            if agent_identity_pb.set_identity.private_ws_endpoint_is_set:
                private_ws_endpoint = agent_identity_pb.set_identity.private_ws_endpoint
                performative_content["private_ws_endpoint"] = private_ws_endpoint
        elif performative_id == AgentIdentityMessage.Performative.GET_IDENTITY:
            identity_type = agent_identity_pb.get_identity.identity_type
            performative_content["identity_type"] = identity_type
        elif performative_id == AgentIdentityMessage.Performative.IDENTITY_RESPONSE:
            ethereum_public_address = agent_identity_pb.identity_response.ethereum_public_address
            performative_content["ethereum_public_address"] = ethereum_public_address
            if agent_identity_pb.identity_response.solana_public_address_is_set:
                solana_public_address = agent_identity_pb.identity_response.solana_public_address
                performative_content["solana_public_address"] = solana_public_address
            if agent_identity_pb.identity_response.cosmos_public_address_is_set:
                cosmos_public_address = agent_identity_pb.identity_response.cosmos_public_address
                performative_content["cosmos_public_address"] = cosmos_public_address
            if agent_identity_pb.identity_response.gpg_is_set:
                gpg = agent_identity_pb.identity_response.gpg
                performative_content["gpg"] = gpg
            if agent_identity_pb.identity_response.rsa_is_set:
                rsa = agent_identity_pb.identity_response.rsa
                performative_content["rsa"] = rsa
            if agent_identity_pb.identity_response.role_is_set:
                role = agent_identity_pb.identity_response.role
                performative_content["role"] = role
            if agent_identity_pb.identity_response.public_endpoint_is_set:
                public_endpoint = agent_identity_pb.identity_response.public_endpoint
                performative_content["public_endpoint"] = public_endpoint
            if agent_identity_pb.identity_response.private_endpoint_is_set:
                private_endpoint = agent_identity_pb.identity_response.private_endpoint
                performative_content["private_endpoint"] = private_endpoint
            if agent_identity_pb.identity_response.public_ws_endpoint_is_set:
                public_ws_endpoint = agent_identity_pb.identity_response.public_ws_endpoint
                performative_content["public_ws_endpoint"] = public_ws_endpoint
            if agent_identity_pb.identity_response.private_ws_endpoint_is_set:
                private_ws_endpoint = agent_identity_pb.identity_response.private_ws_endpoint
                performative_content["private_ws_endpoint"] = private_ws_endpoint
        elif performative_id == AgentIdentityMessage.Performative.ERROR:
            pb2_error_code = agent_identity_pb.error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            error_msg = agent_identity_pb.error.error_msg
            performative_content["error_msg"] = error_msg
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return AgentIdentityMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content,
        )
