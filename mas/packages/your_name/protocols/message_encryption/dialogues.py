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
This module contains the classes required for message_encryption dialogue management.

- MessageEncryptionDialogue: The dialogue class maintains state of a dialogue and manages it.
- MessageEncryptionDialogues: The dialogues class keeps track of all dialogues.
"""

from abc import ABC
from typing import Callable, Dict, FrozenSet, Type, cast

from aea.common import Address
from aea.protocols.base import Message
from aea.protocols.dialogue.base import Dialogue, DialogueLabel, Dialogues

from packages.your_name.protocols.message_encryption.message import (
    MessageEncryptionMessage,
)


class MessageEncryptionDialogue(Dialogue):
    """The message_encryption dialogue class maintains state of a dialogue and manages it."""

    INITIAL_PERFORMATIVES: FrozenSet[Message.Performative] = frozenset(
        {MessageEncryptionMessage.Performative.SUBMIT_MESSAGE}
    )
    TERMINAL_PERFORMATIVES: FrozenSet[Message.Performative] = frozenset(
        {
            MessageEncryptionMessage.Performative.ENCRYPTION_RESULT,
            MessageEncryptionMessage.Performative.DECRYPTION_RESULT,
            MessageEncryptionMessage.Performative.ERROR,
        }
    )
    VALID_REPLIES: Dict[Message.Performative, FrozenSet[Message.Performative]] = {
        MessageEncryptionMessage.Performative.DECRYPTION_RESULT: frozenset(),
        MessageEncryptionMessage.Performative.ENCRYPTION_RESULT: frozenset(),
        MessageEncryptionMessage.Performative.ERROR: frozenset(),
        MessageEncryptionMessage.Performative.STATUS_UPDATE: frozenset(
            {MessageEncryptionMessage.Performative.DECRYPTION_RESULT, MessageEncryptionMessage.Performative.ERROR}
        ),
        MessageEncryptionMessage.Performative.SUBMIT_MESSAGE: frozenset(
            {
                MessageEncryptionMessage.Performative.ENCRYPTION_RESULT,
                MessageEncryptionMessage.Performative.ERROR,
                MessageEncryptionMessage.Performative.STATUS_UPDATE,
            }
        ),
    }

    class Role(Dialogue.Role):
        """This class defines the agent's role in a message_encryption dialogue."""

        ENCRYPTION_SERVICE = "encryption_service"
        USER = "user"

    class EndState(Dialogue.EndState):
        """This class defines the end states of a message_encryption dialogue."""

        ENCRYPTION_RESULT = 0
        DECRYPTION_RESULT = 1
        ERROR = 2

    def __init__(
        self,
        dialogue_label: DialogueLabel,
        self_address: Address,
        role: Dialogue.Role,
        message_class: Type[MessageEncryptionMessage] = MessageEncryptionMessage,
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


class MessageEncryptionDialogues(Dialogues, ABC):
    """This class keeps track of all message_encryption dialogues."""

    END_STATES = frozenset(
        {
            MessageEncryptionDialogue.EndState.ENCRYPTION_RESULT,
            MessageEncryptionDialogue.EndState.DECRYPTION_RESULT,
            MessageEncryptionDialogue.EndState.ERROR,
        }
    )

    _keep_terminal_state_dialogues = True

    def __init__(
        self,
        self_address: Address,
        role_from_first_message: Callable[[Message, Address], Dialogue.Role],
        dialogue_class: Type[MessageEncryptionDialogue] = MessageEncryptionDialogue,
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
            message_class=MessageEncryptionMessage,
            dialogue_class=dialogue_class,
            role_from_first_message=role_from_first_message,
        )
