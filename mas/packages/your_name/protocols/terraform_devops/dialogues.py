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

"""
This module contains the classes required for terraform_devops dialogue management.

- TerraformDevopsDialogue: The dialogue class maintains state of a dialogue and manages it.
- TerraformDevopsDialogues: The dialogues class keeps track of all dialogues.
"""

from abc import ABC
from typing import Callable, Dict, FrozenSet, Type, cast

from aea.common import Address
from aea.protocols.base import Message
from aea.protocols.dialogue.base import Dialogue, DialogueLabel, Dialogues

from packages.your_name.protocols.terraform_devops.message import TerraformDevopsMessage


class TerraformDevopsDialogue(Dialogue):
    """The terraform_devops dialogue class maintains state of a dialogue and manages it."""

    INITIAL_PERFORMATIVES: FrozenSet[Message.Performative] = frozenset(
        {
            TerraformDevopsMessage.Performative.INIT,
            TerraformDevopsMessage.Performative.APPLY,
            TerraformDevopsMessage.Performative.DESTROY,
            TerraformDevopsMessage.Performative.VERIFY,
        }
    )
    TERMINAL_PERFORMATIVES: FrozenSet[Message.Performative] = frozenset(
        {TerraformDevopsMessage.Performative.RESULT, TerraformDevopsMessage.Performative.ERROR}
    )
    VALID_REPLIES: Dict[Message.Performative, FrozenSet[Message.Performative]] = {
        TerraformDevopsMessage.Performative.APPLY: frozenset(
            {TerraformDevopsMessage.Performative.RESULT, TerraformDevopsMessage.Performative.ERROR}
        ),
        TerraformDevopsMessage.Performative.DESTROY: frozenset(
            {TerraformDevopsMessage.Performative.RESULT, TerraformDevopsMessage.Performative.ERROR}
        ),
        TerraformDevopsMessage.Performative.ERROR: frozenset(),
        TerraformDevopsMessage.Performative.INIT: frozenset(
            {TerraformDevopsMessage.Performative.RESULT, TerraformDevopsMessage.Performative.ERROR}
        ),
        TerraformDevopsMessage.Performative.RESULT: frozenset(),
        TerraformDevopsMessage.Performative.VERIFY: frozenset(
            {TerraformDevopsMessage.Performative.RESULT, TerraformDevopsMessage.Performative.ERROR}
        ),
    }

    class Role(Dialogue.Role):
        """This class defines the agent's role in a terraform_devops dialogue."""

        DEVOPS_AGENT = "devops_agent"

    class EndState(Dialogue.EndState):
        """This class defines the end states of a terraform_devops dialogue."""

        RESULT = 0
        ERROR = 1

    def __init__(
        self,
        dialogue_label: DialogueLabel,
        self_address: Address,
        role: Dialogue.Role,
        message_class: Type[TerraformDevopsMessage] = TerraformDevopsMessage,
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


class TerraformDevopsDialogues(Dialogues, ABC):
    """This class keeps track of all terraform_devops dialogues."""

    END_STATES = frozenset({TerraformDevopsDialogue.EndState.RESULT, TerraformDevopsDialogue.EndState.ERROR})

    _keep_terminal_state_dialogues = True

    def __init__(
        self,
        self_address: Address,
        role_from_first_message: Callable[[Message, Address], Dialogue.Role],
        dialogue_class: Type[TerraformDevopsDialogue] = TerraformDevopsDialogue,
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
            message_class=TerraformDevopsMessage,
            dialogue_class=dialogue_class,
            role_from_first_message=role_from_first_message,
        )
