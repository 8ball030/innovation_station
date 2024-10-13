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

"""Test messages module for todo_list protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.your_name.protocols.todo_list.message import TodoListMessage
from packages.your_name.protocols.todo_list.custom_types import ErrorCode, TaskStatus


def load_data(custom_type):
    """Load test data."""
    with open(f"{os.path.dirname(__file__)}/dummy_data.yaml", "r", encoding="utf-8") as f:
        return yaml.safe_load(f)[custom_type]


class TestMessageTodoList(BaseProtocolMessagesTestCase):
    """Test for the 'todo_list' protocol message."""

    MESSAGE_CLASS = TodoListMessage

    def build_messages(self) -> List[TodoListMessage]:  # type: ignore[override]
        """Build the messages to be used for testing."""
        return [
            TodoListMessage(
                performative=TodoListMessage.Performative.CREATE_TASK,
                task_description="some str",
                due_date=12,
            ),
            TodoListMessage(
                performative=TodoListMessage.Performative.UPDATE_TASK,
                task_id="some str",
                new_description="some str",
                new_due_date=12,
                new_status=TaskStatus(0),
            ),
            TodoListMessage(
                performative=TodoListMessage.Performative.COMPLETE_TASK,
                task_id="some str",
            ),
            TodoListMessage(
                performative=TodoListMessage.Performative.DELETE_TASK,
                task_id="some str",
            ),
            TodoListMessage(
                performative=TodoListMessage.Performative.TASK_INFO,
                task_id="some str",
                task_description="some str",
                due_date=12,
                status=TaskStatus(0),  # check it please!
            ),
            TodoListMessage(
                performative=TodoListMessage.Performative.ERROR,
                error_code=ErrorCode(0),  # check it please!
                error_msg="some str",
            ),
        ]

    def build_inconsistent(self) -> List[TodoListMessage]:  # type: ignore[override]
        """Build inconsistent messages to be used for testing."""
        return [
            TodoListMessage(
                performative=TodoListMessage.Performative.CREATE_TASK,
                # skip content: task_description
                due_date=12,
            ),
            TodoListMessage(
                performative=TodoListMessage.Performative.UPDATE_TASK,
                # skip content: task_id
                new_description="some str",
                new_due_date=12,
                new_status=TaskStatus(0),
            ),
            TodoListMessage(
                performative=TodoListMessage.Performative.COMPLETE_TASK,
                # skip content: task_id
            ),
            TodoListMessage(
                performative=TodoListMessage.Performative.DELETE_TASK,
                # skip content: task_id
            ),
            TodoListMessage(
                performative=TodoListMessage.Performative.TASK_INFO,
                # skip content: task_id
                task_description="some str",
                due_date=12,
                status=TaskStatus(0),  # check it please!
            ),
            TodoListMessage(
                performative=TodoListMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
