# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 yourname
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

"""Test messages module for agent_identity protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.yourname.protocols.agent_identity.message import AgentIdentityMessage
from packages.yourname.protocols.agent_identity.custom_types import ErrorCode


def load_data(custom_type):
    """Load test data."""
    with open(f"{os.path.dirname(__file__)}/dummy_data.yaml", "r", encoding="utf-8") as f:
        return yaml.safe_load(f)[custom_type]


class TestMessageAgentIdentity(BaseProtocolMessagesTestCase):
    """Test for the 'agent_identity' protocol message."""

    MESSAGE_CLASS = AgentIdentityMessage

    def build_messages(self) -> List[AgentIdentityMessage]:  # type: ignore[override]
        """Build the messages to be used for testing."""
        return [
            AgentIdentityMessage(
                performative=AgentIdentityMessage.Performative.SET_IDENTITY,
                ethereum_public_address="some str",
                solana_public_address="some str",
                cosmos_public_address="some str",
                gpg="some str",
                rsa="some str",
                role="some str",
                public_endpoint="some str",
                private_endpoint="some str",
                public_ws_endpoint="some str",
                private_ws_endpoint="some str",
            ),
            AgentIdentityMessage(
                performative=AgentIdentityMessage.Performative.GET_IDENTITY,
                identity_type="some str",
            ),
            AgentIdentityMessage(
                performative=AgentIdentityMessage.Performative.IDENTITY_RESPONSE,
                ethereum_public_address="some str",
                solana_public_address="some str",
                cosmos_public_address="some str",
                gpg="some str",
                rsa="some str",
                role="some str",
                public_endpoint="some str",
                private_endpoint="some str",
                public_ws_endpoint="some str",
                private_ws_endpoint="some str",
            ),
            AgentIdentityMessage(
                performative=AgentIdentityMessage.Performative.ERROR,
                error_code=ErrorCode(0),  # check it please!
                error_msg="some str",
            ),
        ]

    def build_inconsistent(self) -> List[AgentIdentityMessage]:  # type: ignore[override]
        """Build inconsistent messages to be used for testing."""
        return [
            AgentIdentityMessage(
                performative=AgentIdentityMessage.Performative.SET_IDENTITY,
                # skip content: ethereum_public_address
                solana_public_address="some str",
                cosmos_public_address="some str",
                gpg="some str",
                rsa="some str",
                role="some str",
                public_endpoint="some str",
                private_endpoint="some str",
                public_ws_endpoint="some str",
                private_ws_endpoint="some str",
            ),
            AgentIdentityMessage(
                performative=AgentIdentityMessage.Performative.GET_IDENTITY,
                # skip content: identity_type
            ),
            AgentIdentityMessage(
                performative=AgentIdentityMessage.Performative.IDENTITY_RESPONSE,
                # skip content: ethereum_public_address
                solana_public_address="some str",
                cosmos_public_address="some str",
                gpg="some str",
                rsa="some str",
                role="some str",
                public_endpoint="some str",
                private_endpoint="some str",
                public_ws_endpoint="some str",
                private_ws_endpoint="some str",
            ),
            AgentIdentityMessage(
                performative=AgentIdentityMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
