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

"""This module contains hackathon_competition's message definition."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,too-many-branches,not-an-iterable,unidiomatic-typecheck,unsubscriptable-object
import logging
from typing import Any, Optional, Set, Tuple, cast

from aea.configurations.base import PublicId
from aea.exceptions import AEAEnforceError, enforce
from aea.protocols.base import Message  # type: ignore

from packages.eightballer.protocols.hackathon_competition.custom_types import (
    ErrorCode as CustomErrorCode,
)
from packages.eightballer.protocols.hackathon_competition.custom_types import (
    Status as CustomStatus,
)
from packages.eightballer.protocols.hackathon_competition.custom_types import (
    SubmissionType as CustomSubmissionType,
)


_default_logger = logging.getLogger("aea.packages.eightballer.protocols.hackathon_competition.message")

DEFAULT_BODY_SIZE = 4


class HackathonCompetitionMessage(Message):
    """A protocol for managing interactions during a hackathon competition between participants and the organizing entity."""

    protocol_id = PublicId.from_str("eightballer/hackathon_competition:0.1.0")
    protocol_specification_id = PublicId.from_str("eightballer/hackathon_competition:0.1.0")

    ErrorCode = CustomErrorCode

    Status = CustomStatus

    SubmissionType = CustomSubmissionType

    class Performative(Message.Performative):
        """Performatives for the hackathon_competition protocol."""

        ERROR = "error"
        FINAL_SUBMISSION = "final_submission"
        IDEA_SUBMISSION = "idea_submission"
        PROGRESS_UPDATE = "progress_update"
        REGISTER_TEAM = "register_team"
        REGISTRATION_ACKNOWLEDGEMENT = "registration_acknowledgement"
        SUBMISSION_RESPONSE = "submission_response"

        def __str__(self) -> str:
            """Get the string representation."""
            return str(self.value)

    _performatives = {
        "error",
        "final_submission",
        "idea_submission",
        "progress_update",
        "register_team",
        "registration_acknowledgement",
        "submission_response",
    }
    __slots__: Tuple[str, ...] = tuple()

    class _SlotsCls:
        __slots__ = (
            "dialogue_reference",
            "error_code",
            "error_msg",
            "idea_description",
            "members",
            "message_id",
            "performative",
            "presentation_link",
            "project_link",
            "status",
            "submission_type",
            "target",
            "team_id",
            "team_name",
            "update_description",
        )

    def __init__(
        self,
        performative: Performative,
        dialogue_reference: Tuple[str, str] = ("", ""),
        message_id: int = 1,
        target: int = 0,
        **kwargs: Any,
    ):
        """
        Initialise an instance of HackathonCompetitionMessage.

        :param message_id: the message id.
        :param dialogue_reference: the dialogue reference.
        :param target: the message target.
        :param performative: the message performative.
        :param **kwargs: extra options.
        """
        super().__init__(
            dialogue_reference=dialogue_reference,
            message_id=message_id,
            target=target,
            performative=HackathonCompetitionMessage.Performative(performative),
            **kwargs,
        )

    @property
    def valid_performatives(self) -> Set[str]:
        """Get valid performatives."""
        return self._performatives

    @property
    def dialogue_reference(self) -> Tuple[str, str]:
        """Get the dialogue_reference of the message."""
        enforce(self.is_set("dialogue_reference"), "dialogue_reference is not set.")
        return cast(Tuple[str, str], self.get("dialogue_reference"))

    @property
    def message_id(self) -> int:
        """Get the message_id of the message."""
        enforce(self.is_set("message_id"), "message_id is not set.")
        return cast(int, self.get("message_id"))

    @property
    def performative(self) -> Performative:  # type: ignore # noqa: F821
        """Get the performative of the message."""
        enforce(self.is_set("performative"), "performative is not set.")
        return cast(HackathonCompetitionMessage.Performative, self.get("performative"))

    @property
    def target(self) -> int:
        """Get the target of the message."""
        enforce(self.is_set("target"), "target is not set.")
        return cast(int, self.get("target"))

    @property
    def error_code(self) -> CustomErrorCode:
        """Get the 'error_code' content from the message."""
        enforce(self.is_set("error_code"), "'error_code' content is not set.")
        return cast(CustomErrorCode, self.get("error_code"))

    @property
    def error_msg(self) -> str:
        """Get the 'error_msg' content from the message."""
        enforce(self.is_set("error_msg"), "'error_msg' content is not set.")
        return cast(str, self.get("error_msg"))

    @property
    def idea_description(self) -> str:
        """Get the 'idea_description' content from the message."""
        enforce(self.is_set("idea_description"), "'idea_description' content is not set.")
        return cast(str, self.get("idea_description"))

    @property
    def members(self) -> Tuple[str, ...]:
        """Get the 'members' content from the message."""
        enforce(self.is_set("members"), "'members' content is not set.")
        return cast(Tuple[str, ...], self.get("members"))

    @property
    def presentation_link(self) -> Optional[str]:
        """Get the 'presentation_link' content from the message."""
        return cast(Optional[str], self.get("presentation_link"))

    @property
    def project_link(self) -> str:
        """Get the 'project_link' content from the message."""
        enforce(self.is_set("project_link"), "'project_link' content is not set.")
        return cast(str, self.get("project_link"))

    @property
    def status(self) -> CustomStatus:
        """Get the 'status' content from the message."""
        enforce(self.is_set("status"), "'status' content is not set.")
        return cast(CustomStatus, self.get("status"))

    @property
    def submission_type(self) -> CustomSubmissionType:
        """Get the 'submission_type' content from the message."""
        enforce(self.is_set("submission_type"), "'submission_type' content is not set.")
        return cast(CustomSubmissionType, self.get("submission_type"))

    @property
    def team_id(self) -> str:
        """Get the 'team_id' content from the message."""
        enforce(self.is_set("team_id"), "'team_id' content is not set.")
        return cast(str, self.get("team_id"))

    @property
    def team_name(self) -> str:
        """Get the 'team_name' content from the message."""
        enforce(self.is_set("team_name"), "'team_name' content is not set.")
        return cast(str, self.get("team_name"))

    @property
    def update_description(self) -> str:
        """Get the 'update_description' content from the message."""
        enforce(self.is_set("update_description"), "'update_description' content is not set.")
        return cast(str, self.get("update_description"))

    def _is_consistent(self) -> bool:
        """Check that the message follows the hackathon_competition protocol."""
        try:
            enforce(
                isinstance(self.dialogue_reference, tuple),
                "Invalid type for 'dialogue_reference'. Expected 'tuple'. Found '{}'.".format(
                    type(self.dialogue_reference)
                ),
            )
            enforce(
                isinstance(self.dialogue_reference[0], str),
                "Invalid type for 'dialogue_reference[0]'. Expected 'str'. Found '{}'.".format(
                    type(self.dialogue_reference[0])
                ),
            )
            enforce(
                isinstance(self.dialogue_reference[1], str),
                "Invalid type for 'dialogue_reference[1]'. Expected 'str'. Found '{}'.".format(
                    type(self.dialogue_reference[1])
                ),
            )
            enforce(
                type(self.message_id) is int,
                "Invalid type for 'message_id'. Expected 'int'. Found '{}'.".format(type(self.message_id)),
            )
            enforce(
                type(self.target) is int,
                "Invalid type for 'target'. Expected 'int'. Found '{}'.".format(type(self.target)),
            )

            # Light Protocol Rule 2
            # Check correct performative
            enforce(
                isinstance(self.performative, HackathonCompetitionMessage.Performative),
                "Invalid 'performative'. Expected either of '{}'. Found '{}'.".format(
                    self.valid_performatives, self.performative
                ),
            )

            # Check correct contents
            actual_nb_of_contents = len(self._body) - DEFAULT_BODY_SIZE
            expected_nb_of_contents = 0
            if self.performative == HackathonCompetitionMessage.Performative.REGISTER_TEAM:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.team_name, str),
                    "Invalid type for content 'team_name'. Expected 'str'. Found '{}'.".format(type(self.team_name)),
                )
                enforce(
                    isinstance(self.members, tuple),
                    "Invalid type for content 'members'. Expected 'tuple'. Found '{}'.".format(type(self.members)),
                )
                enforce(
                    all(isinstance(element, str) for element in self.members),
                    "Invalid type for tuple elements in content 'members'. Expected 'str'.",
                )
            elif self.performative == HackathonCompetitionMessage.Performative.IDEA_SUBMISSION:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.team_id, str),
                    "Invalid type for content 'team_id'. Expected 'str'. Found '{}'.".format(type(self.team_id)),
                )
                enforce(
                    isinstance(self.idea_description, str),
                    "Invalid type for content 'idea_description'. Expected 'str'. Found '{}'.".format(
                        type(self.idea_description)
                    ),
                )
            elif self.performative == HackathonCompetitionMessage.Performative.PROGRESS_UPDATE:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.team_id, str),
                    "Invalid type for content 'team_id'. Expected 'str'. Found '{}'.".format(type(self.team_id)),
                )
                enforce(
                    isinstance(self.update_description, str),
                    "Invalid type for content 'update_description'. Expected 'str'. Found '{}'.".format(
                        type(self.update_description)
                    ),
                )
            elif self.performative == HackathonCompetitionMessage.Performative.FINAL_SUBMISSION:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.team_id, str),
                    "Invalid type for content 'team_id'. Expected 'str'. Found '{}'.".format(type(self.team_id)),
                )
                enforce(
                    isinstance(self.project_link, str),
                    "Invalid type for content 'project_link'. Expected 'str'. Found '{}'.".format(
                        type(self.project_link)
                    ),
                )
                if self.is_set("presentation_link"):
                    expected_nb_of_contents += 1
                    presentation_link = cast(str, self.presentation_link)
                    enforce(
                        isinstance(presentation_link, str),
                        "Invalid type for content 'presentation_link'. Expected 'str'. Found '{}'.".format(
                            type(presentation_link)
                        ),
                    )
            elif self.performative == HackathonCompetitionMessage.Performative.REGISTRATION_ACKNOWLEDGEMENT:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.team_id, str),
                    "Invalid type for content 'team_id'. Expected 'str'. Found '{}'.".format(type(self.team_id)),
                )
                enforce(
                    isinstance(self.status, CustomStatus),
                    "Invalid type for content 'status'. Expected 'Status'. Found '{}'.".format(type(self.status)),
                )
            elif self.performative == HackathonCompetitionMessage.Performative.SUBMISSION_RESPONSE:
                expected_nb_of_contents = 3
                enforce(
                    isinstance(self.team_id, str),
                    "Invalid type for content 'team_id'. Expected 'str'. Found '{}'.".format(type(self.team_id)),
                )
                enforce(
                    isinstance(self.submission_type, CustomSubmissionType),
                    "Invalid type for content 'submission_type'. Expected 'SubmissionType'. Found '{}'.".format(
                        type(self.submission_type)
                    ),
                )
                enforce(
                    isinstance(self.status, CustomStatus),
                    "Invalid type for content 'status'. Expected 'Status'. Found '{}'.".format(type(self.status)),
                )
            elif self.performative == HackathonCompetitionMessage.Performative.ERROR:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.error_code, CustomErrorCode),
                    "Invalid type for content 'error_code'. Expected 'ErrorCode'. Found '{}'.".format(
                        type(self.error_code)
                    ),
                )
                enforce(
                    isinstance(self.error_msg, str),
                    "Invalid type for content 'error_msg'. Expected 'str'. Found '{}'.".format(type(self.error_msg)),
                )

            # Check correct content count
            enforce(
                expected_nb_of_contents == actual_nb_of_contents,
                "Incorrect number of contents. Expected {}. Found {}".format(
                    expected_nb_of_contents, actual_nb_of_contents
                ),
            )

            # Light Protocol Rule 3
            if self.message_id == 1:
                enforce(
                    self.target == 0,
                    "Invalid 'target'. Expected 0 (because 'message_id' is 1). Found {}.".format(self.target),
                )
        except (AEAEnforceError, ValueError, KeyError) as e:
            _default_logger.error(str(e))
            return False

        return True
