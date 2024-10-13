# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 cryptor
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
This module contains the classes required for encrypted_communication dialogue management.

- EncryptedCommunicationDialogue: The dialogue class maintains state of a dialogue and manages it.
- EncryptedCommunicationDialogues: The dialogues class keeps track of all dialogues.
"""

from abc import ABC
from typing import Callable, Dict, FrozenSet, Type, cast

from aea.common import Address
from aea.protocols.base import Message
from aea.protocols.dialogue.base import Dialogue, DialogueLabel, Dialogues

from packages.cryptor.protocols.encrypted_communication.message import (
    EncryptedCommunicationMessage,
)


class EncryptedCommunicationDialogue(Dialogue):
    """The encrypted_communication dialogue class maintains state of a dialogue and manages it."""

    INITIAL_PERFORMATIVES: FrozenSet[Message.Performative] = frozenset(
        {EncryptedCommunicationMessage.Performative.INITIATE_COMMUNICATION}
    )
    TERMINAL_PERFORMATIVES: FrozenSet[Message.Performative] = frozenset(
        {EncryptedCommunicationMessage.Performative.END_COMMUNICATION, EncryptedCommunicationMessage.Performative.ERROR}
    )
    VALID_REPLIES: Dict[Message.Performative, FrozenSet[Message.Performative]] = {
        EncryptedCommunicationMessage.Performative.COMMUNICATION_REQUEST: frozenset(
            {
                EncryptedCommunicationMessage.Performative.COMMUNICATION_RESPONSE,
                EncryptedCommunicationMessage.Performative.END_COMMUNICATION,
                EncryptedCommunicationMessage.Performative.ERROR,
            }
        ),
        EncryptedCommunicationMessage.Performative.COMMUNICATION_RESPONSE: frozenset(
            {
                EncryptedCommunicationMessage.Performative.COMMUNICATION_REQUEST,
                EncryptedCommunicationMessage.Performative.END_COMMUNICATION,
                EncryptedCommunicationMessage.Performative.ERROR,
            }
        ),
        EncryptedCommunicationMessage.Performative.END_COMMUNICATION: frozenset(),
        EncryptedCommunicationMessage.Performative.ERROR: frozenset(),
        EncryptedCommunicationMessage.Performative.INITIATE_COMMUNICATION: frozenset(
            {
                EncryptedCommunicationMessage.Performative.COMMUNICATION_REQUEST,
                EncryptedCommunicationMessage.Performative.ERROR,
            }
        ),
    }

    class Role(Dialogue.Role):
        """This class defines the agent's role in a encrypted_communication dialogue."""

        PARTY_A = "party_a"
        PARTY_B = "party_b"

    class EndState(Dialogue.EndState):
        """This class defines the end states of a encrypted_communication dialogue."""

        END_COMMUNICATION = 0
        ERROR = 1

    def __init__(
        self,
        dialogue_label: DialogueLabel,
        self_address: Address,
        role: Dialogue.Role,
        message_class: Type[EncryptedCommunicationMessage] = EncryptedCommunicationMessage,
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


class EncryptedCommunicationDialogues(Dialogues, ABC):
    """This class keeps track of all encrypted_communication dialogues."""

    END_STATES = frozenset(
        {EncryptedCommunicationDialogue.EndState.END_COMMUNICATION, EncryptedCommunicationDialogue.EndState.ERROR}
    )

    _keep_terminal_state_dialogues = False

    def __init__(
        self,
        self_address: Address,
        role_from_first_message: Callable[[Message, Address], Dialogue.Role],
        dialogue_class: Type[EncryptedCommunicationDialogue] = EncryptedCommunicationDialogue,
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
            message_class=EncryptedCommunicationMessage,
            dialogue_class=dialogue_class,
            role_from_first_message=role_from_first_message,
        )
