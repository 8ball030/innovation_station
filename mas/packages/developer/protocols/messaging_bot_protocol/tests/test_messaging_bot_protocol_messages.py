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

"""Test messages module for messaging_bot_protocol protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.developer.protocols.messaging_bot_protocol.message import (
    MessagingBotProtocolMessage,
)
from packages.developer.protocols.messaging_bot_protocol.custom_types import ErrorCode


def load_data(custom_type):
    """Load test data."""
    with open(f"{os.path.dirname(__file__)}/dummy_data.yaml", "r", encoding="utf-8") as f:
        return yaml.safe_load(f)[custom_type]


class TestMessageMessagingBotProtocol(BaseProtocolMessagesTestCase):
    """Test for the 'messaging_bot_protocol' protocol message."""

    MESSAGE_CLASS = MessagingBotProtocolMessage

    def build_messages(self) -> List[MessagingBotProtocolMessage]:  # type: ignore[override]
        """Build the messages to be used for testing."""
        return [
            MessagingBotProtocolMessage(
                performative=MessagingBotProtocolMessage.Performative.SEND_MESSAGE,
                recipient_id="some str",
                message_content="some str",
                timestamp=12,
            ),
            MessagingBotProtocolMessage(
                performative=MessagingBotProtocolMessage.Performative.RECEIVE_MESSAGE,
                sender_id="some str",
                message_content="some str",
                timestamp=12,
            ),
            MessagingBotProtocolMessage(
                performative=MessagingBotProtocolMessage.Performative.BOT_RESPONSE,
                bot_id="some str",
                response_content="some str",
                timestamp=12,
            ),
            MessagingBotProtocolMessage(
                performative=MessagingBotProtocolMessage.Performative.ERROR,
                error_code=ErrorCode(0),  # check it please!
                error_msg="some str",
            ),
        ]

    def build_inconsistent(self) -> List[MessagingBotProtocolMessage]:  # type: ignore[override]
        """Build inconsistent messages to be used for testing."""
        return [
            MessagingBotProtocolMessage(
                performative=MessagingBotProtocolMessage.Performative.SEND_MESSAGE,
                # skip content: recipient_id
                message_content="some str",
                timestamp=12,
            ),
            MessagingBotProtocolMessage(
                performative=MessagingBotProtocolMessage.Performative.RECEIVE_MESSAGE,
                # skip content: sender_id
                message_content="some str",
                timestamp=12,
            ),
            MessagingBotProtocolMessage(
                performative=MessagingBotProtocolMessage.Performative.BOT_RESPONSE,
                # skip content: bot_id
                response_content="some str",
                timestamp=12,
            ),
            MessagingBotProtocolMessage(
                performative=MessagingBotProtocolMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
