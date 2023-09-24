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

"""
This module contains the classes required for sql_crud dialogue management.

- SqlCrudDialogue: The dialogue class maintains state of a dialogue and manages it.
- SqlCrudDialogues: The dialogues class keeps track of all dialogues.
"""

from abc import ABC
from typing import Callable, Dict, FrozenSet, Type, cast

from aea.common import Address
from aea.protocols.base import Message
from aea.protocols.dialogue.base import Dialogue, DialogueLabel, Dialogues

from packages.zarathustra.protocols.sql_crud.message import SqlCrudMessage


class SqlCrudDialogue(Dialogue):
    """The sql_crud dialogue class maintains state of a dialogue and manages it."""

    INITIAL_PERFORMATIVES: FrozenSet[Message.Performative] = frozenset(
        {
            SqlCrudMessage.Performative.CREATE,
            SqlCrudMessage.Performative.READ,
            SqlCrudMessage.Performative.UPDATE,
            SqlCrudMessage.Performative.DELETE,
        }
    )
    TERMINAL_PERFORMATIVES: FrozenSet[Message.Performative] = frozenset(
        {
            SqlCrudMessage.Performative.RESULT,
            SqlCrudMessage.Performative.END,
            SqlCrudMessage.Performative.ERROR,
        }
    )
    VALID_REPLIES: Dict[Message.Performative, FrozenSet[Message.Performative]] = {
        SqlCrudMessage.Performative.CREATE: frozenset(
            {SqlCrudMessage.Performative.RESULT, SqlCrudMessage.Performative.ERROR}
        ),
        SqlCrudMessage.Performative.DELETE: frozenset(
            {SqlCrudMessage.Performative.RESULT, SqlCrudMessage.Performative.ERROR}
        ),
        SqlCrudMessage.Performative.END: frozenset(),
        SqlCrudMessage.Performative.ERROR: frozenset(),
        SqlCrudMessage.Performative.READ: frozenset(
            {SqlCrudMessage.Performative.RESULT, SqlCrudMessage.Performative.ERROR}
        ),
        SqlCrudMessage.Performative.RESULT: frozenset(),
        SqlCrudMessage.Performative.UPDATE: frozenset(
            {SqlCrudMessage.Performative.RESULT, SqlCrudMessage.Performative.ERROR}
        ),
    }

    class Role(Dialogue.Role):
        """This class defines the agent's role in a sql_crud dialogue."""

        AGENT = "agent"

    class EndState(Dialogue.EndState):
        """This class defines the end states of a sql_crud dialogue."""

        END = 0
        ERROR = 1
        RESULT = 2

    def __init__(
        self,
        dialogue_label: DialogueLabel,
        self_address: Address,
        role: Dialogue.Role,
        message_class: Type[SqlCrudMessage] = SqlCrudMessage,
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


class SqlCrudDialogues(Dialogues, ABC):
    """This class keeps track of all sql_crud dialogues."""

    END_STATES = frozenset(
        {
            SqlCrudDialogue.EndState.END,
            SqlCrudDialogue.EndState.ERROR,
            SqlCrudDialogue.EndState.RESULT,
        }
    )

    _keep_terminal_state_dialogues = True

    def __init__(
        self,
        self_address: Address,
        role_from_first_message: Callable[[Message, Address], Dialogue.Role],
        dialogue_class: Type[SqlCrudDialogue] = SqlCrudDialogue,
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
            message_class=SqlCrudMessage,
            dialogue_class=dialogue_class,
            role_from_first_message=role_from_first_message,
        )
