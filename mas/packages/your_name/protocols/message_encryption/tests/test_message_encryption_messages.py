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

"""Test messages module for message_encryption protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.your_name.protocols.message_encryption.message import (
    MessageEncryptionMessage,
)
from packages.your_name.protocols.message_encryption.custom_types import (
    Status,
    ErrorCode,
)


def load_data(custom_type):
    """Load test data."""
    with open(f"{os.path.dirname(__file__)}/dummy_data.yaml", "r", encoding="utf-8") as f:
        return yaml.safe_load(f)[custom_type]


class TestMessageMessageEncryption(BaseProtocolMessagesTestCase):
    """Test for the 'message_encryption' protocol message."""

    MESSAGE_CLASS = MessageEncryptionMessage

    def build_messages(self) -> List[MessageEncryptionMessage]:  # type: ignore[override]
        """Build the messages to be used for testing."""
        return [
            MessageEncryptionMessage(
                performative=MessageEncryptionMessage.Performative.SUBMIT_MESSAGE,
                message="some str",
                encryption_type="some str",
            ),
            MessageEncryptionMessage(
                performative=MessageEncryptionMessage.Performative.ENCRYPTION_RESULT,
                encrypted_message="some str",
                encryption_key="some str",
            ),
            MessageEncryptionMessage(
                performative=MessageEncryptionMessage.Performative.DECRYPTION_RESULT,
                decrypted_message="some str",
            ),
            MessageEncryptionMessage(
                performative=MessageEncryptionMessage.Performative.ERROR,
                error_code=ErrorCode(0),  # check it please!
                error_msg="some str",
            ),
            MessageEncryptionMessage(
                performative=MessageEncryptionMessage.Performative.STATUS_UPDATE,
                status=Status(0),  # check it please!
            ),
        ]

    def build_inconsistent(self) -> List[MessageEncryptionMessage]:  # type: ignore[override]
        """Build inconsistent messages to be used for testing."""
        return [
            MessageEncryptionMessage(
                performative=MessageEncryptionMessage.Performative.SUBMIT_MESSAGE,
                # skip content: message
                encryption_type="some str",
            ),
            MessageEncryptionMessage(
                performative=MessageEncryptionMessage.Performative.ENCRYPTION_RESULT,
                # skip content: encrypted_message
                encryption_key="some str",
            ),
            MessageEncryptionMessage(
                performative=MessageEncryptionMessage.Performative.DECRYPTION_RESULT,
                # skip content: decrypted_message
            ),
            MessageEncryptionMessage(
                performative=MessageEncryptionMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
            MessageEncryptionMessage(
                performative=MessageEncryptionMessage.Performative.STATUS_UPDATE,
                # skip content: status
            ),
        ]
