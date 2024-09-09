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

"""Test dialogues module for lint_protocol protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from aea.test_tools.test_protocol import BaseProtocolDialoguesTestCase

from packages.eightballer.protocols.lint_protocol.dialogues import (
    LintProtocolDialogue,
    LintProtocolDialogues,
)
from packages.eightballer.protocols.lint_protocol.message import LintProtocolMessage


class TestDialoguesLintProtocol(BaseProtocolDialoguesTestCase):
    """Test for the 'lint_protocol' protocol dialogues."""

    MESSAGE_CLASS = LintProtocolMessage

    DIALOGUE_CLASS = LintProtocolDialogue

    DIALOGUES_CLASS = LintProtocolDialogues

    ROLE_FOR_THE_FIRST_MESSAGE = LintProtocolDialogue.Role.AGENT  # CHECK

    def make_message_content(self) -> dict:
        """Make a dict with message contruction content for dialogues.create."""
        return dict(
            performative=LintProtocolMessage.Performative.INITIATE_LINT,
            source_code_path="some str",
        )
