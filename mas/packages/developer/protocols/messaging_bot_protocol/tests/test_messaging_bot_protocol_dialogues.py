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

"""Test dialogues module for messaging_bot_protocol protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from aea.test_tools.test_protocol import BaseProtocolDialoguesTestCase

from packages.developer.protocols.messaging_bot_protocol.dialogues import (
    MessagingBotProtocolDialogue,
    MessagingBotProtocolDialogues,
)
from packages.developer.protocols.messaging_bot_protocol.message import (
    MessagingBotProtocolMessage,
)


class TestDialoguesMessagingBotProtocol(BaseProtocolDialoguesTestCase):
    """Test for the 'messaging_bot_protocol' protocol dialogues."""

    MESSAGE_CLASS = MessagingBotProtocolMessage

    DIALOGUE_CLASS = MessagingBotProtocolDialogue

    DIALOGUES_CLASS = MessagingBotProtocolDialogues

    ROLE_FOR_THE_FIRST_MESSAGE = MessagingBotProtocolDialogue.Role.BOT  # CHECK

    def make_message_content(self) -> dict:
        """Make a dict with message contruction content for dialogues.create."""
        return dict(
            performative=MessagingBotProtocolMessage.Performative.SEND_MESSAGE,
            recipient_id="some str",
            message_content="some str",
            timestamp=12,
        )
