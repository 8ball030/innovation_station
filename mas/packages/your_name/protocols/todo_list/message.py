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

"""This module contains todo_list's message definition."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,too-many-branches,not-an-iterable,unidiomatic-typecheck,unsubscriptable-object
import logging
from typing import Any, Optional, Set, Tuple, cast

from aea.configurations.base import PublicId
from aea.exceptions import AEAEnforceError, enforce
from aea.protocols.base import Message  # type: ignore

from packages.your_name.protocols.todo_list.custom_types import (
    ErrorCode as CustomErrorCode,
)
from packages.your_name.protocols.todo_list.custom_types import (
    TaskStatus as CustomTaskStatus,
)


_default_logger = logging.getLogger("aea.packages.your_name.protocols.todo_list.message")

DEFAULT_BODY_SIZE = 4


class TodoListMessage(Message):
    """A protocol for managing a to-do list between a user and a system."""

    protocol_id = PublicId.from_str("your_name/todo_list:0.1.0")
    protocol_specification_id = PublicId.from_str("your_name/todo_list:0.1.0")

    ErrorCode = CustomErrorCode

    TaskStatus = CustomTaskStatus

    class Performative(Message.Performative):
        """Performatives for the todo_list protocol."""

        COMPLETE_TASK = "complete_task"
        CREATE_TASK = "create_task"
        DELETE_TASK = "delete_task"
        ERROR = "error"
        TASK_INFO = "task_info"
        UPDATE_TASK = "update_task"

        def __str__(self) -> str:
            """Get the string representation."""
            return str(self.value)

    _performatives = {"complete_task", "create_task", "delete_task", "error", "task_info", "update_task"}
    __slots__: Tuple[str, ...] = tuple()

    class _SlotsCls:
        __slots__ = (
            "dialogue_reference",
            "due_date",
            "error_code",
            "error_msg",
            "message_id",
            "new_description",
            "new_due_date",
            "new_status",
            "performative",
            "status",
            "target",
            "task_description",
            "task_id",
        )

    def __init__(
        self,
        performative: Performative,
        dialogue_reference: Tuple[str, str] = ("", ""),
        message_id: int = 1,
        target: int = 0,
        **kwargs: Any,
    ):
        """
        Initialise an instance of TodoListMessage.

        :param message_id: the message id.
        :param dialogue_reference: the dialogue reference.
        :param target: the message target.
        :param performative: the message performative.
        :param **kwargs: extra options.
        """
        super().__init__(
            dialogue_reference=dialogue_reference,
            message_id=message_id,
            target=target,
            performative=TodoListMessage.Performative(performative),
            **kwargs,
        )

    @property
    def valid_performatives(self) -> Set[str]:
        """Get valid performatives."""
        return self._performatives

    @property
    def dialogue_reference(self) -> Tuple[str, str]:
        """Get the dialogue_reference of the message."""
        enforce(self.is_set("dialogue_reference"), "dialogue_reference is not set.")
        return cast(Tuple[str, str], self.get("dialogue_reference"))

    @property
    def message_id(self) -> int:
        """Get the message_id of the message."""
        enforce(self.is_set("message_id"), "message_id is not set.")
        return cast(int, self.get("message_id"))

    @property
    def performative(self) -> Performative:  # type: ignore # noqa: F821
        """Get the performative of the message."""
        enforce(self.is_set("performative"), "performative is not set.")
        return cast(TodoListMessage.Performative, self.get("performative"))

    @property
    def target(self) -> int:
        """Get the target of the message."""
        enforce(self.is_set("target"), "target is not set.")
        return cast(int, self.get("target"))

    @property
    def due_date(self) -> Optional[int]:
        """Get the 'due_date' content from the message."""
        return cast(Optional[int], self.get("due_date"))

    @property
    def error_code(self) -> CustomErrorCode:
        """Get the 'error_code' content from the message."""
        enforce(self.is_set("error_code"), "'error_code' content is not set.")
        return cast(CustomErrorCode, self.get("error_code"))

    @property
    def error_msg(self) -> str:
        """Get the 'error_msg' content from the message."""
        enforce(self.is_set("error_msg"), "'error_msg' content is not set.")
        return cast(str, self.get("error_msg"))

    @property
    def new_description(self) -> Optional[str]:
        """Get the 'new_description' content from the message."""
        return cast(Optional[str], self.get("new_description"))

    @property
    def new_due_date(self) -> Optional[int]:
        """Get the 'new_due_date' content from the message."""
        return cast(Optional[int], self.get("new_due_date"))

    @property
    def new_status(self) -> Optional[CustomTaskStatus]:
        """Get the 'new_status' content from the message."""
        return cast(Optional[CustomTaskStatus], self.get("new_status"))

    @property
    def status(self) -> CustomTaskStatus:
        """Get the 'status' content from the message."""
        enforce(self.is_set("status"), "'status' content is not set.")
        return cast(CustomTaskStatus, self.get("status"))

    @property
    def task_description(self) -> str:
        """Get the 'task_description' content from the message."""
        enforce(self.is_set("task_description"), "'task_description' content is not set.")
        return cast(str, self.get("task_description"))

    @property
    def task_id(self) -> str:
        """Get the 'task_id' content from the message."""
        enforce(self.is_set("task_id"), "'task_id' content is not set.")
        return cast(str, self.get("task_id"))

    def _is_consistent(self) -> bool:
        """Check that the message follows the todo_list protocol."""
        try:
            enforce(
                isinstance(self.dialogue_reference, tuple),
                "Invalid type for 'dialogue_reference'. Expected 'tuple'. Found '{}'.".format(
                    type(self.dialogue_reference)
                ),
            )
            enforce(
                isinstance(self.dialogue_reference[0], str),
                "Invalid type for 'dialogue_reference[0]'. Expected 'str'. Found '{}'.".format(
                    type(self.dialogue_reference[0])
                ),
            )
            enforce(
                isinstance(self.dialogue_reference[1], str),
                "Invalid type for 'dialogue_reference[1]'. Expected 'str'. Found '{}'.".format(
                    type(self.dialogue_reference[1])
                ),
            )
            enforce(
                type(self.message_id) is int,
                "Invalid type for 'message_id'. Expected 'int'. Found '{}'.".format(type(self.message_id)),
            )
            enforce(
                type(self.target) is int,
                "Invalid type for 'target'. Expected 'int'. Found '{}'.".format(type(self.target)),
            )

            # Light Protocol Rule 2
            # Check correct performative
            enforce(
                isinstance(self.performative, TodoListMessage.Performative),
                "Invalid 'performative'. Expected either of '{}'. Found '{}'.".format(
                    self.valid_performatives, self.performative
                ),
            )

            # Check correct contents
            actual_nb_of_contents = len(self._body) - DEFAULT_BODY_SIZE
            expected_nb_of_contents = 0
            if self.performative == TodoListMessage.Performative.CREATE_TASK:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.task_description, str),
                    "Invalid type for content 'task_description'. Expected 'str'. Found '{}'.".format(
                        type(self.task_description)
                    ),
                )
                if self.is_set("due_date"):
                    expected_nb_of_contents += 1
                    due_date = cast(int, self.due_date)
                    enforce(
                        type(due_date) is int,
                        "Invalid type for content 'due_date'. Expected 'int'. Found '{}'.".format(type(due_date)),
                    )
            elif self.performative == TodoListMessage.Performative.UPDATE_TASK:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.task_id, str),
                    "Invalid type for content 'task_id'. Expected 'str'. Found '{}'.".format(type(self.task_id)),
                )
                if self.is_set("new_description"):
                    expected_nb_of_contents += 1
                    new_description = cast(str, self.new_description)
                    enforce(
                        isinstance(new_description, str),
                        "Invalid type for content 'new_description'. Expected 'str'. Found '{}'.".format(
                            type(new_description)
                        ),
                    )
                if self.is_set("new_due_date"):
                    expected_nb_of_contents += 1
                    new_due_date = cast(int, self.new_due_date)
                    enforce(
                        type(new_due_date) is int,
                        "Invalid type for content 'new_due_date'. Expected 'int'. Found '{}'.".format(
                            type(new_due_date)
                        ),
                    )
                if self.is_set("new_status"):
                    expected_nb_of_contents += 1
                    new_status = cast(CustomTaskStatus, self.new_status)
                    enforce(
                        isinstance(new_status, CustomTaskStatus),
                        "Invalid type for content 'new_status'. Expected 'TaskStatus'. Found '{}'.".format(
                            type(new_status)
                        ),
                    )
            elif self.performative == TodoListMessage.Performative.COMPLETE_TASK:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.task_id, str),
                    "Invalid type for content 'task_id'. Expected 'str'. Found '{}'.".format(type(self.task_id)),
                )
            elif self.performative == TodoListMessage.Performative.DELETE_TASK:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.task_id, str),
                    "Invalid type for content 'task_id'. Expected 'str'. Found '{}'.".format(type(self.task_id)),
                )
            elif self.performative == TodoListMessage.Performative.TASK_INFO:
                expected_nb_of_contents = 3
                enforce(
                    isinstance(self.task_id, str),
                    "Invalid type for content 'task_id'. Expected 'str'. Found '{}'.".format(type(self.task_id)),
                )
                enforce(
                    isinstance(self.task_description, str),
                    "Invalid type for content 'task_description'. Expected 'str'. Found '{}'.".format(
                        type(self.task_description)
                    ),
                )
                if self.is_set("due_date"):
                    expected_nb_of_contents += 1
                    due_date = cast(int, self.due_date)
                    enforce(
                        type(due_date) is int,
                        "Invalid type for content 'due_date'. Expected 'int'. Found '{}'.".format(type(due_date)),
                    )
                enforce(
                    isinstance(self.status, CustomTaskStatus),
                    "Invalid type for content 'status'. Expected 'TaskStatus'. Found '{}'.".format(type(self.status)),
                )
            elif self.performative == TodoListMessage.Performative.ERROR:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.error_code, CustomErrorCode),
                    "Invalid type for content 'error_code'. Expected 'ErrorCode'. Found '{}'.".format(
                        type(self.error_code)
                    ),
                )
                enforce(
                    isinstance(self.error_msg, str),
                    "Invalid type for content 'error_msg'. Expected 'str'. Found '{}'.".format(type(self.error_msg)),
                )

            # Check correct content count
            enforce(
                expected_nb_of_contents == actual_nb_of_contents,
                "Incorrect number of contents. Expected {}. Found {}".format(
                    expected_nb_of_contents, actual_nb_of_contents
                ),
            )

            # Light Protocol Rule 3
            if self.message_id == 1:
                enforce(
                    self.target == 0,
                    "Invalid 'target'. Expected 0 (because 'message_id' is 1). Found {}.".format(self.target),
                )
        except (AEAEnforceError, ValueError, KeyError) as e:
            _default_logger.error(str(e))
            return False

        return True
