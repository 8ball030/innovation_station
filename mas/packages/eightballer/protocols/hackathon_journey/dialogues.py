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
This module contains the classes required for hackathon_journey dialogue management.

- HackathonJourneyDialogue: The dialogue class maintains state of a dialogue and manages it.
- HackathonJourneyDialogues: The dialogues class keeps track of all dialogues.
"""

from abc import ABC
from typing import Callable, Dict, FrozenSet, Type, cast

from aea.common import Address
from aea.protocols.base import Message
from aea.protocols.dialogue.base import Dialogue, DialogueLabel, Dialogues

from packages.eightballer.protocols.hackathon_journey.message import (
    HackathonJourneyMessage,
)


class HackathonJourneyDialogue(Dialogue):
    """The hackathon_journey dialogue class maintains state of a dialogue and manages it."""

    INITIAL_PERFORMATIVES: FrozenSet[Message.Performative] = frozenset(
        {
            HackathonJourneyMessage.Performative.IDEA_GENERATION,
            HackathonJourneyMessage.Performative.TEAM_FORMATION,
            HackathonJourneyMessage.Performative.IDEA_SELECTION,
            HackathonJourneyMessage.Performative.PROGRESS_UPDATE,
            HackathonJourneyMessage.Performative.FINAL_SUBMISSION,
        }
    )
    TERMINAL_PERFORMATIVES: FrozenSet[Message.Performative] = frozenset(
        {HackathonJourneyMessage.Performative.OPERATION_RESPONSE, HackathonJourneyMessage.Performative.ERROR}
    )
    VALID_REPLIES: Dict[Message.Performative, FrozenSet[Message.Performative]] = {
        HackathonJourneyMessage.Performative.ERROR: frozenset(),
        HackathonJourneyMessage.Performative.FINAL_SUBMISSION: frozenset(
            {HackathonJourneyMessage.Performative.OPERATION_RESPONSE, HackathonJourneyMessage.Performative.ERROR}
        ),
        HackathonJourneyMessage.Performative.IDEA_GENERATION: frozenset(
            {HackathonJourneyMessage.Performative.OPERATION_RESPONSE, HackathonJourneyMessage.Performative.ERROR}
        ),
        HackathonJourneyMessage.Performative.IDEA_SELECTION: frozenset(
            {HackathonJourneyMessage.Performative.OPERATION_RESPONSE, HackathonJourneyMessage.Performative.ERROR}
        ),
        HackathonJourneyMessage.Performative.OPERATION_RESPONSE: frozenset(),
        HackathonJourneyMessage.Performative.PROGRESS_UPDATE: frozenset(
            {HackathonJourneyMessage.Performative.OPERATION_RESPONSE, HackathonJourneyMessage.Performative.ERROR}
        ),
        HackathonJourneyMessage.Performative.TEAM_FORMATION: frozenset(
            {HackathonJourneyMessage.Performative.OPERATION_RESPONSE, HackathonJourneyMessage.Performative.ERROR}
        ),
    }

    class Role(Dialogue.Role):
        """This class defines the agent's role in a hackathon_journey dialogue."""

        ORGANIZER = "organizer"
        PARTICIPANT = "participant"

    class EndState(Dialogue.EndState):
        """This class defines the end states of a hackathon_journey dialogue."""

        OPERATION_RESPONSE = 0
        ERROR = 1

    def __init__(
        self,
        dialogue_label: DialogueLabel,
        self_address: Address,
        role: Dialogue.Role,
        message_class: Type[HackathonJourneyMessage] = HackathonJourneyMessage,
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


class HackathonJourneyDialogues(Dialogues, ABC):
    """This class keeps track of all hackathon_journey dialogues."""

    END_STATES = frozenset(
        {HackathonJourneyDialogue.EndState.OPERATION_RESPONSE, HackathonJourneyDialogue.EndState.ERROR}
    )

    _keep_terminal_state_dialogues = False

    def __init__(
        self,
        self_address: Address,
        role_from_first_message: Callable[[Message, Address], Dialogue.Role],
        dialogue_class: Type[HackathonJourneyDialogue] = HackathonJourneyDialogue,
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
            message_class=HackathonJourneyMessage,
            dialogue_class=dialogue_class,
            role_from_first_message=role_from_first_message,
        )
