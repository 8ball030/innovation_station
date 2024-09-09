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

"""Test messages module for encrypted_communication protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.eightballer.protocols.encrypted_communication.message import (
    EncryptedCommunicationMessage,
)
from packages.eightballer.protocols.encrypted_communication.custom_types import (
    ErrorCode,
)


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
                performative=EncryptedCommunicationMessage.Performative.ISSUE_CHALLENGE,
                challenge="some str",
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.RESPOND_CHALLENGE,
                challenge_response="some str",
                requester_public_key="some str",
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.VERIFY_RESPONSE,
                verification_result=True,
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.PROVIDE_ENCRYPTION_KEY,
                encryption_key="some str",
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.VERIFY_MESSAGE,
                message_signature="some str",
                message="some str",
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.VERIFICATION_RESULT,
                result=True,
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.ENCRYPTION_READY,
                status=True,
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
                performative=EncryptedCommunicationMessage.Performative.ISSUE_CHALLENGE,
                # skip content: challenge
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.RESPOND_CHALLENGE,
                # skip content: challenge_response
                requester_public_key="some str",
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.VERIFY_RESPONSE,
                # skip content: verification_result
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.PROVIDE_ENCRYPTION_KEY,
                # skip content: encryption_key
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.VERIFY_MESSAGE,
                # skip content: message_signature
                message="some str",
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.VERIFICATION_RESULT,
                # skip content: result
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.ENCRYPTION_READY,
                # skip content: status
            ),
            EncryptedCommunicationMessage(
                performative=EncryptedCommunicationMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
