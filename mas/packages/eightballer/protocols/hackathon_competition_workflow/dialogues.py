# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 eightballer
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
This module contains the classes required for hackathon_competition_workflow dialogue management.

- HackathonCompetitionWorkflowDialogue: The dialogue class maintains state of a dialogue and manages it.
- HackathonCompetitionWorkflowDialogues: The dialogues class keeps track of all dialogues.
"""

from abc import ABC
from typing import Callable, Dict, FrozenSet, Type, cast

from aea.common import Address
from aea.protocols.base import Message
from aea.protocols.dialogue.base import Dialogue, DialogueLabel, Dialogues

from packages.eightballer.protocols.hackathon_competition_workflow.message import (
    HackathonCompetitionWorkflowMessage,
)


class HackathonCompetitionWorkflowDialogue(Dialogue):
    """The hackathon_competition_workflow dialogue class maintains state of a dialogue and manages it."""

    INITIAL_PERFORMATIVES: FrozenSet[Message.Performative] = frozenset(
        {
            HackathonCompetitionWorkflowMessage.Performative.IDEA_GENERATION,
            HackathonCompetitionWorkflowMessage.Performative.TEAM_FORMATION,
            HackathonCompetitionWorkflowMessage.Performative.IDEA_SELECTION,
        }
    )
    TERMINAL_PERFORMATIVES: FrozenSet[Message.Performative] = frozenset(
        {
            HackathonCompetitionWorkflowMessage.Performative.FEEDBACK,
            HackathonCompetitionWorkflowMessage.Performative.ERROR,
        }
    )
    VALID_REPLIES: Dict[Message.Performative, FrozenSet[Message.Performative]] = {
        HackathonCompetitionWorkflowMessage.Performative.ERROR: frozenset(),
        HackathonCompetitionWorkflowMessage.Performative.FEEDBACK: frozenset(),
        HackathonCompetitionWorkflowMessage.Performative.FINAL_SUBMISSION: frozenset(
            {
                HackathonCompetitionWorkflowMessage.Performative.FEEDBACK,
                HackathonCompetitionWorkflowMessage.Performative.ERROR,
            }
        ),
        HackathonCompetitionWorkflowMessage.Performative.IDEA_GENERATION: frozenset(
            {
                HackathonCompetitionWorkflowMessage.Performative.TEAM_FORMATION,
                HackathonCompetitionWorkflowMessage.Performative.ERROR,
            }
        ),
        HackathonCompetitionWorkflowMessage.Performative.IDEA_SELECTION: frozenset(
            {
                HackathonCompetitionWorkflowMessage.Performative.PROGRESS_UPDATE,
                HackathonCompetitionWorkflowMessage.Performative.FINAL_SUBMISSION,
                HackathonCompetitionWorkflowMessage.Performative.ERROR,
            }
        ),
        HackathonCompetitionWorkflowMessage.Performative.PROGRESS_UPDATE: frozenset(
            {
                HackathonCompetitionWorkflowMessage.Performative.PROGRESS_UPDATE,
                HackathonCompetitionWorkflowMessage.Performative.FINAL_SUBMISSION,
                HackathonCompetitionWorkflowMessage.Performative.ERROR,
            }
        ),
        HackathonCompetitionWorkflowMessage.Performative.TEAM_FORMATION: frozenset(
            {
                HackathonCompetitionWorkflowMessage.Performative.IDEA_SELECTION,
                HackathonCompetitionWorkflowMessage.Performative.ERROR,
            }
        ),
    }

    class Role(Dialogue.Role):
        """This class defines the agent's role in a hackathon_competition_workflow dialogue."""

        ORGANIZER = "organizer"
        PARTICIPANT = "participant"

    class EndState(Dialogue.EndState):
        """This class defines the end states of a hackathon_competition_workflow dialogue."""

        FEEDBACK = 0
        ERROR = 1

    def __init__(
        self,
        dialogue_label: DialogueLabel,
        self_address: Address,
        role: Dialogue.Role,
        message_class: Type[HackathonCompetitionWorkflowMessage] = HackathonCompetitionWorkflowMessage,
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


class HackathonCompetitionWorkflowDialogues(Dialogues, ABC):
    """This class keeps track of all hackathon_competition_workflow dialogues."""

    END_STATES = frozenset(
        {HackathonCompetitionWorkflowDialogue.EndState.FEEDBACK, HackathonCompetitionWorkflowDialogue.EndState.ERROR}
    )

    _keep_terminal_state_dialogues = False

    def __init__(
        self,
        self_address: Address,
        role_from_first_message: Callable[[Message, Address], Dialogue.Role],
        dialogue_class: Type[HackathonCompetitionWorkflowDialogue] = HackathonCompetitionWorkflowDialogue,
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
            message_class=HackathonCompetitionWorkflowMessage,
            dialogue_class=dialogue_class,
            role_from_first_message=role_from_first_message,
        )
