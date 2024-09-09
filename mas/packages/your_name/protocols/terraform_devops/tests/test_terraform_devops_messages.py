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

"""Test messages module for terraform_devops protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
import os
from typing import Any, List

import yaml
from aea.test_tools.test_protocol import BaseProtocolMessagesTestCase
from packages.your_name.protocols.terraform_devops.message import TerraformDevopsMessage
from packages.your_name.protocols.terraform_devops.custom_types import Status, ErrorCode


def load_data(custom_type):
    """Load test data."""
    with open(f"{os.path.dirname(__file__)}/dummy_data.yaml", "r", encoding="utf-8") as f:
        return yaml.safe_load(f)[custom_type]


class TestMessageTerraformDevops(BaseProtocolMessagesTestCase):
    """Test for the 'terraform_devops' protocol message."""

    MESSAGE_CLASS = TerraformDevopsMessage

    def build_messages(self) -> List[TerraformDevopsMessage]:  # type: ignore[override]
        """Build the messages to be used for testing."""
        return [
            TerraformDevopsMessage(
                performative=TerraformDevopsMessage.Performative.INIT,
                configuration_path="some str",
            ),
            TerraformDevopsMessage(
                performative=TerraformDevopsMessage.Performative.APPLY,
                configuration_path="some str",
            ),
            TerraformDevopsMessage(
                performative=TerraformDevopsMessage.Performative.DESTROY,
                configuration_path="some str",
            ),
            TerraformDevopsMessage(
                performative=TerraformDevopsMessage.Performative.VERIFY,
                deployment_id="some str",
            ),
            TerraformDevopsMessage(
                performative=TerraformDevopsMessage.Performative.RESULT,
                status=Status(0),  # check it please!
                stdout="some str",
                stderr="some str",
            ),
            TerraformDevopsMessage(
                performative=TerraformDevopsMessage.Performative.ERROR,
                error_code=ErrorCode(0),  # check it please!
                error_msg="some str",
            ),
        ]

    def build_inconsistent(self) -> List[TerraformDevopsMessage]:  # type: ignore[override]
        """Build inconsistent messages to be used for testing."""
        return [
            TerraformDevopsMessage(
                performative=TerraformDevopsMessage.Performative.INIT,
                # skip content: configuration_path
            ),
            TerraformDevopsMessage(
                performative=TerraformDevopsMessage.Performative.APPLY,
                # skip content: configuration_path
            ),
            TerraformDevopsMessage(
                performative=TerraformDevopsMessage.Performative.DESTROY,
                # skip content: configuration_path
            ),
            TerraformDevopsMessage(
                performative=TerraformDevopsMessage.Performative.VERIFY,
                # skip content: deployment_id
            ),
            TerraformDevopsMessage(
                performative=TerraformDevopsMessage.Performative.RESULT,
                # skip content: status
                stdout="some str",
                stderr="some str",
            ),
            TerraformDevopsMessage(
                performative=TerraformDevopsMessage.Performative.ERROR,
                # skip content: error_code
                error_msg="some str",
            ),
        ]
