# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 dev_assistant
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
This module contains the classes required for development_flow dialogue management.

- DevelopmentFlowDialogue: The dialogue class maintains state of a dialogue and manages it.
- DevelopmentFlowDialogues: The dialogues class keeps track of all dialogues.
"""

from abc import ABC
from typing import Callable, Dict, FrozenSet, Type, cast

from aea.common import Address
from aea.protocols.base import Message
from aea.protocols.dialogue.base import Dialogue, DialogueLabel, Dialogues

from packages.dev_assistant.protocols.development_flow.message import (
    DevelopmentFlowMessage,
)


class DevelopmentFlowDialogue(Dialogue):
    """The development_flow dialogue class maintains state of a dialogue and manages it."""

    INITIAL_PERFORMATIVES: FrozenSet[Message.Performative] = frozenset(
        {
            DevelopmentFlowMessage.Performative.REQUEST_FEATURE,
            DevelopmentFlowMessage.Performative.FEATURE_SPEC,
            DevelopmentFlowMessage.Performative.PROGRESS_UPDATE,
            DevelopmentFlowMessage.Performative.FEATURE_REVIEW,
        }
    )
    TERMINAL_PERFORMATIVES: FrozenSet[Message.Performative] = frozenset(
        {DevelopmentFlowMessage.Performative.FEATURE_APPROVED, DevelopmentFlowMessage.Performative.ERROR}
    )
    VALID_REPLIES: Dict[Message.Performative, FrozenSet[Message.Performative]] = {
        DevelopmentFlowMessage.Performative.ERROR: frozenset(),
        DevelopmentFlowMessage.Performative.FEATURE_APPROVED: frozenset(),
        DevelopmentFlowMessage.Performative.FEATURE_REVIEW: frozenset(
            {DevelopmentFlowMessage.Performative.FEATURE_APPROVED, DevelopmentFlowMessage.Performative.ERROR}
        ),
        DevelopmentFlowMessage.Performative.FEATURE_SPEC: frozenset(
            {DevelopmentFlowMessage.Performative.PROGRESS_UPDATE, DevelopmentFlowMessage.Performative.ERROR}
        ),
        DevelopmentFlowMessage.Performative.PROGRESS_UPDATE: frozenset(
            {DevelopmentFlowMessage.Performative.FEATURE_REVIEW, DevelopmentFlowMessage.Performative.ERROR}
        ),
        DevelopmentFlowMessage.Performative.REQUEST_FEATURE: frozenset(
            {DevelopmentFlowMessage.Performative.FEATURE_SPEC, DevelopmentFlowMessage.Performative.ERROR}
        ),
    }

    class Role(Dialogue.Role):
        """This class defines the agent's role in a development_flow dialogue."""

        DEVELOPER = "developer"
        PROJECT_MANAGER = "project_manager"

    class EndState(Dialogue.EndState):
        """This class defines the end states of a development_flow dialogue."""

        FEATURE_APPROVED = 0
        ERROR = 1

    def __init__(
        self,
        dialogue_label: DialogueLabel,
        self_address: Address,
        role: Dialogue.Role,
        message_class: Type[DevelopmentFlowMessage] = DevelopmentFlowMessage,
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


class DevelopmentFlowDialogues(Dialogues, ABC):
    """This class keeps track of all development_flow dialogues."""

    END_STATES = frozenset({DevelopmentFlowDialogue.EndState.FEATURE_APPROVED, DevelopmentFlowDialogue.EndState.ERROR})

    _keep_terminal_state_dialogues = True

    def __init__(
        self,
        self_address: Address,
        role_from_first_message: Callable[[Message, Address], Dialogue.Role],
        dialogue_class: Type[DevelopmentFlowDialogue] = DevelopmentFlowDialogue,
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
            message_class=DevelopmentFlowMessage,
            dialogue_class=dialogue_class,
            role_from_first_message=role_from_first_message,
        )
