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

"""Test messages module for encrypted_communication protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.cryptor.protocols.encrypted_communication.message import (
    EncryptedCommunicationMessage,
)
from packages.cryptor.protocols.encrypted_communication.custom_types import ErrorCode


def load_data(custom_type):
    """Load test data."""
    with open(f"{os.path.dirname(__file__)}/dummy_data.yaml", "r", encoding="utf-8") as f:
        return yaml.safe_load(f)[custom_type]


class TestMessageEncryptedCommunication(BaseProtocolMessagesTestCase):
    """Test for the 'encrypted_communication' protocol message."""

    MESSAGE_CLASS = EncryptedCommunicationMessage

    def build_messages(self) -> List[EncryptedCommunicationMessage]:  # type: ignore[override]
        """Build the messages to be used for testing."""
        return [
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.INITIATE_COMMUNICATION,
                public_key="some str",
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.COMMUNICATION_REQUEST,
                encrypted_message="some str",
                nonce="some str",
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.COMMUNICATION_RESPONSE,
                encrypted_message="some str",
                nonce="some str",
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.END_COMMUNICATION,
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.ERROR,
                error_code=ErrorCode(0),  # check it please!
                error_msg="some str",
            ),
        ]

    def build_inconsistent(self) -> List[EncryptedCommunicationMessage]:  # type: ignore[override]
        """Build inconsistent messages to be used for testing."""
        return [
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.INITIATE_COMMUNICATION,
                # skip content: public_key
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.COMMUNICATION_REQUEST,
                # skip content: encrypted_message
                nonce="some str",
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.COMMUNICATION_RESPONSE,
                # skip content: encrypted_message
                nonce="some str",
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
