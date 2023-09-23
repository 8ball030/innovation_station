# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2023 zarathustra
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

"""Serialization module for sql_crud protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage
from aea.mail.base_pb2 import Message as ProtobufMessage
from aea.protocols.base import Message, Serializer

from packages.zarathustra.protocols.sql_crud import sql_crud_pb2
from packages.zarathustra.protocols.sql_crud.custom_types import ErrorCode
from packages.zarathustra.protocols.sql_crud.message import SqlCrudMessage


class SqlCrudSerializer(Serializer):
    """Serialization for the 'sql_crud' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'SqlCrud' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(SqlCrudMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        sql_crud_msg = sql_crud_pb2.SqlCrudMessage()

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == SqlCrudMessage.Performative.CREATE:
            performative = sql_crud_pb2.SqlCrudMessage.Create_Performative()  # type: ignore
            table_name = msg.table_name
            performative.table_name = table_name
            data = msg.data
            performative.data.update(data)
            sql_crud_msg.create.CopyFrom(performative)
        elif performative_id == SqlCrudMessage.Performative.READ:
            performative = sql_crud_pb2.SqlCrudMessage.Read_Performative()  # type: ignore
            table_name = msg.table_name
            performative.table_name = table_name
            if msg.is_set("condition"):
                performative.condition_is_set = True
                condition = msg.condition
                performative.condition = condition
            sql_crud_msg.read.CopyFrom(performative)
        elif performative_id == SqlCrudMessage.Performative.UPDATE:
            performative = sql_crud_pb2.SqlCrudMessage.Update_Performative()  # type: ignore
            table_name = msg.table_name
            performative.table_name = table_name
            if msg.is_set("condition"):
                performative.condition_is_set = True
                condition = msg.condition
                performative.condition = condition
            data = msg.data
            performative.data.update(data)
            sql_crud_msg.update.CopyFrom(performative)
        elif performative_id == SqlCrudMessage.Performative.DELETE:
            performative = sql_crud_pb2.SqlCrudMessage.Delete_Performative()  # type: ignore
            table_name = msg.table_name
            performative.table_name = table_name
            if msg.is_set("condition"):
                performative.condition_is_set = True
                condition = msg.condition
                performative.condition = condition
            sql_crud_msg.delete.CopyFrom(performative)
        elif performative_id == SqlCrudMessage.Performative.RESULT:
            performative = sql_crud_pb2.SqlCrudMessage.Result_Performative()  # type: ignore
            result = msg.result
            performative.result.update(result)
            sql_crud_msg.result.CopyFrom(performative)
        elif performative_id == SqlCrudMessage.Performative.ERROR:
            performative = sql_crud_pb2.SqlCrudMessage.Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            error_msg = msg.error_msg
            performative.error_msg = error_msg
            sql_crud_msg.error.CopyFrom(performative)
        elif performative_id == SqlCrudMessage.Performative.END:
            performative = sql_crud_pb2.SqlCrudMessage.End_Performative()  # type: ignore
            sql_crud_msg.end.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = sql_crud_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'SqlCrud' message.

        :param obj: the bytes object.
        :return: the 'SqlCrud' message.
        """
        message_pb = ProtobufMessage()
        sql_crud_pb = sql_crud_pb2.SqlCrudMessage()
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        sql_crud_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = sql_crud_pb.WhichOneof("performative")
        performative_id = SqlCrudMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == SqlCrudMessage.Performative.CREATE:
            table_name = sql_crud_pb.create.table_name
            performative_content["table_name"] = table_name
            data = sql_crud_pb.create.data
            data_dict = dict(data)
            performative_content["data"] = data_dict
        elif performative_id == SqlCrudMessage.Performative.READ:
            table_name = sql_crud_pb.read.table_name
            performative_content["table_name"] = table_name
            if sql_crud_pb.read.condition_is_set:
                condition = sql_crud_pb.read.condition
                performative_content["condition"] = condition
        elif performative_id == SqlCrudMessage.Performative.UPDATE:
            table_name = sql_crud_pb.update.table_name
            performative_content["table_name"] = table_name
            if sql_crud_pb.update.condition_is_set:
                condition = sql_crud_pb.update.condition
                performative_content["condition"] = condition
            data = sql_crud_pb.update.data
            data_dict = dict(data)
            performative_content["data"] = data_dict
        elif performative_id == SqlCrudMessage.Performative.DELETE:
            table_name = sql_crud_pb.delete.table_name
            performative_content["table_name"] = table_name
            if sql_crud_pb.delete.condition_is_set:
                condition = sql_crud_pb.delete.condition
                performative_content["condition"] = condition
        elif performative_id == SqlCrudMessage.Performative.RESULT:
            result = sql_crud_pb.result.result
            result_dict = dict(result)
            performative_content["result"] = result_dict
        elif performative_id == SqlCrudMessage.Performative.ERROR:
            pb2_error_code = sql_crud_pb.error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            error_msg = sql_crud_pb.error.error_msg
            performative_content["error_msg"] = error_msg
        elif performative_id == SqlCrudMessage.Performative.END:
            pass
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return SqlCrudMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content
        )
