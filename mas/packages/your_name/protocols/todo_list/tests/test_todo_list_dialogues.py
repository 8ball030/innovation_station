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

"""Test dialogues module for todo_list protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from aea.test_tools.test_protocol import BaseProtocolDialoguesTestCase

from packages.your_name.protocols.todo_list.dialogues import (
    TodoListDialogue,
    TodoListDialogues,
)
from packages.your_name.protocols.todo_list.message import TodoListMessage


class TestDialoguesTodoList(BaseProtocolDialoguesTestCase):
    """Test for the 'todo_list' protocol dialogues."""

    MESSAGE_CLASS = TodoListMessage

    DIALOGUE_CLASS = TodoListDialogue

    DIALOGUES_CLASS = TodoListDialogues

    ROLE_FOR_THE_FIRST_MESSAGE = TodoListDialogue.Role.SYSTEM  # CHECK

    def make_message_content(self) -> dict:
        """Make a dict with message contruction content for dialogues.create."""
        return dict(
            performative=TodoListMessage.Performative.CREATE_TASK,
            task_description="some str",
            due_date=12,
        )
