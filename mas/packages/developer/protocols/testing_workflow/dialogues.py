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

"""
This module contains the classes required for testing_workflow dialogue management.

- TestingWorkflowDialogue: The dialogue class maintains state of a dialogue and manages it.
- TestingWorkflowDialogues: The dialogues class keeps track of all dialogues.
"""

from abc import ABC
from typing import Callable, Dict, FrozenSet, Type, cast

from aea.common import Address
from aea.protocols.base import Message
from aea.protocols.dialogue.base import Dialogue, DialogueLabel, Dialogues

from packages.developer.protocols.testing_workflow.message import TestingWorkflowMessage


class TestingWorkflowDialogue(Dialogue):
    """The testing_workflow dialogue class maintains state of a dialogue and manages it."""

    INITIAL_PERFORMATIVES: FrozenSet[Message.Performative] = frozenset(
        {TestingWorkflowMessage.Performative.START_TESTS}
    )
    TERMINAL_PERFORMATIVES: FrozenSet[Message.Performative] = frozenset(
        {TestingWorkflowMessage.Performative.TESTS_COMPLETED, TestingWorkflowMessage.Performative.ERROR}
    )
    VALID_REPLIES: Dict[Message.Performative, FrozenSet[Message.Performative]] = {
        TestingWorkflowMessage.Performative.ERROR: frozenset(),
        TestingWorkflowMessage.Performative.START_TESTS: frozenset(
            {
                TestingWorkflowMessage.Performative.TEST_CASE_RESULT,
                TestingWorkflowMessage.Performative.TESTS_COMPLETED,
                TestingWorkflowMessage.Performative.ERROR,
            }
        ),
        TestingWorkflowMessage.Performative.TEST_CASE_RESULT: frozenset(
            {
                TestingWorkflowMessage.Performative.TEST_CASE_RESULT,
                TestingWorkflowMessage.Performative.TESTS_COMPLETED,
                TestingWorkflowMessage.Performative.ERROR,
            }
        ),
        TestingWorkflowMessage.Performative.TESTS_COMPLETED: frozenset(),
    }

    class Role(Dialogue.Role):
        """This class defines the agent's role in a testing_workflow dialogue."""

        SYSTEM = "system"
        TESTER = "tester"

    class EndState(Dialogue.EndState):
        """This class defines the end states of a testing_workflow dialogue."""

        TESTS_COMPLETED = 0
        ERROR = 1

    def __init__(
        self,
        dialogue_label: DialogueLabel,
        self_address: Address,
        role: Dialogue.Role,
        message_class: Type[TestingWorkflowMessage] = TestingWorkflowMessage,
    ) -> None:
        """
        Initialize a dialogue.

        :param dialogue_label: the identifier of the dialogue
        :param self_address: the address of the entity for whom this dialogue is maintained
        :param role: the role of the agent this dialogue is maintained for
        :param message_class: the message class used
        """
        Dialogue.__init__(
            self,
            dialogue_label=dialogue_label,
            message_class=message_class,
            self_address=self_address,
            role=role,
        )


class TestingWorkflowDialogues(Dialogues, ABC):
    """This class keeps track of all testing_workflow dialogues."""

    END_STATES = frozenset({TestingWorkflowDialogue.EndState.TESTS_COMPLETED, TestingWorkflowDialogue.EndState.ERROR})

    _keep_terminal_state_dialogues = False

    def __init__(
        self,
        self_address: Address,
        role_from_first_message: Callable[[Message, Address], Dialogue.Role],
        dialogue_class: Type[TestingWorkflowDialogue] = TestingWorkflowDialogue,
    ) -> None:
        """
        Initialize dialogues.

        :param self_address: the address of the entity for whom dialogues are maintained
        :param dialogue_class: the dialogue class used
        :param role_from_first_message: the callable determining role from first message
        """
        Dialogues.__init__(
            self,
            self_address=self_address,
            end_states=cast(FrozenSet[Dialogue.EndState], self.END_STATES),
            message_class=TestingWorkflowMessage,
            dialogue_class=dialogue_class,
            role_from_first_message=role_from_first_message,
        )
