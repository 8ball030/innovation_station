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

"""Serialization module for todo_list protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.your_name.protocols.todo_list import todo_list_pb2  # type: ignore
from packages.your_name.protocols.todo_list.custom_types import (  # type: ignore
    ErrorCode,
    TaskStatus,
)
from packages.your_name.protocols.todo_list.message import (  # type: ignore
    TodoListMessage,
)


class TodoListSerializer(Serializer):
    """Serialization for the 'todo_list' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'TodoList' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(TodoListMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        todo_list_msg = todo_list_pb2.TodoListMessage()  # type: ignore

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == TodoListMessage.Performative.CREATE_TASK:
            performative = todo_list_pb2.TodoListMessage.Create_Task_Performative()  # type: ignore
            task_description = msg.task_description
            performative.task_description = task_description
            if msg.is_set("due_date"):
                performative.due_date_is_set = True
                due_date = msg.due_date
                performative.due_date = due_date
            todo_list_msg.create_task.CopyFrom(performative)
        elif performative_id == TodoListMessage.Performative.UPDATE_TASK:
            performative = todo_list_pb2.TodoListMessage.Update_Task_Performative()  # type: ignore
            task_id = msg.task_id
            performative.task_id = task_id
            if msg.is_set("new_description"):
                performative.new_description_is_set = True
                new_description = msg.new_description
                performative.new_description = new_description
            if msg.is_set("new_due_date"):
                performative.new_due_date_is_set = True
                new_due_date = msg.new_due_date
                performative.new_due_date = new_due_date
            if msg.is_set("new_status"):
                performative.new_status_is_set = True
                new_status = msg.new_status
                TaskStatus.encode(performative.new_status, new_status)
            todo_list_msg.update_task.CopyFrom(performative)
        elif performative_id == TodoListMessage.Performative.COMPLETE_TASK:
            performative = todo_list_pb2.TodoListMessage.Complete_Task_Performative()  # type: ignore
            task_id = msg.task_id
            performative.task_id = task_id
            todo_list_msg.complete_task.CopyFrom(performative)
        elif performative_id == TodoListMessage.Performative.DELETE_TASK:
            performative = todo_list_pb2.TodoListMessage.Delete_Task_Performative()  # type: ignore
            task_id = msg.task_id
            performative.task_id = task_id
            todo_list_msg.delete_task.CopyFrom(performative)
        elif performative_id == TodoListMessage.Performative.TASK_INFO:
            performative = todo_list_pb2.TodoListMessage.Task_Info_Performative()  # type: ignore
            task_id = msg.task_id
            performative.task_id = task_id
            task_description = msg.task_description
            performative.task_description = task_description
            if msg.is_set("due_date"):
                performative.due_date_is_set = True
                due_date = msg.due_date
                performative.due_date = due_date
            status = msg.status
            TaskStatus.encode(performative.status, status)
            todo_list_msg.task_info.CopyFrom(performative)
        elif performative_id == TodoListMessage.Performative.ERROR:
            performative = todo_list_pb2.TodoListMessage.Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            error_msg = msg.error_msg
            performative.error_msg = error_msg
            todo_list_msg.error.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = todo_list_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'TodoList' message.

        :param obj: the bytes object.
        :return: the 'TodoList' message.
        """
        message_pb = ProtobufMessage()
        todo_list_pb = todo_list_pb2.TodoListMessage()  # type: ignore
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        todo_list_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = todo_list_pb.WhichOneof("performative")
        performative_id = TodoListMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == TodoListMessage.Performative.CREATE_TASK:
            task_description = todo_list_pb.create_task.task_description
            performative_content["task_description"] = task_description
            if todo_list_pb.create_task.due_date_is_set:
                due_date = todo_list_pb.create_task.due_date
                performative_content["due_date"] = due_date
        elif performative_id == TodoListMessage.Performative.UPDATE_TASK:
            task_id = todo_list_pb.update_task.task_id
            performative_content["task_id"] = task_id
            if todo_list_pb.update_task.new_description_is_set:
                new_description = todo_list_pb.update_task.new_description
                performative_content["new_description"] = new_description
            if todo_list_pb.update_task.new_due_date_is_set:
                new_due_date = todo_list_pb.update_task.new_due_date
                performative_content["new_due_date"] = new_due_date
            if todo_list_pb.update_task.new_status_is_set:
                pb2_new_status = todo_list_pb.update_task.new_status
                new_status = TaskStatus.decode(pb2_new_status)
                performative_content["new_status"] = new_status
        elif performative_id == TodoListMessage.Performative.COMPLETE_TASK:
            task_id = todo_list_pb.complete_task.task_id
            performative_content["task_id"] = task_id
        elif performative_id == TodoListMessage.Performative.DELETE_TASK:
            task_id = todo_list_pb.delete_task.task_id
            performative_content["task_id"] = task_id
        elif performative_id == TodoListMessage.Performative.TASK_INFO:
            task_id = todo_list_pb.task_info.task_id
            performative_content["task_id"] = task_id
            task_description = todo_list_pb.task_info.task_description
            performative_content["task_description"] = task_description
            if todo_list_pb.task_info.due_date_is_set:
                due_date = todo_list_pb.task_info.due_date
                performative_content["due_date"] = due_date
            pb2_status = todo_list_pb.task_info.status
            status = TaskStatus.decode(pb2_status)
            performative_content["status"] = status
        elif performative_id == TodoListMessage.Performative.ERROR:
            pb2_error_code = todo_list_pb.error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            error_msg = todo_list_pb.error.error_msg
            performative_content["error_msg"] = error_msg
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return TodoListMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content,
        )
