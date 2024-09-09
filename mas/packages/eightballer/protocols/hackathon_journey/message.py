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

"""This module contains hackathon_journey's message definition."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,too-many-branches,not-an-iterable,unidiomatic-typecheck,unsubscriptable-object
import logging
from typing import Any, Optional, Set, Tuple, cast

from aea.configurations.base import PublicId
from aea.exceptions import AEAEnforceError, enforce
from aea.protocols.base import Message  # type: ignore

from packages.eightballer.protocols.hackathon_journey.custom_types import (
    ErrorCode as CustomErrorCode,
)
from packages.eightballer.protocols.hackathon_journey.custom_types import (
    OperationType as CustomOperationType,
)
from packages.eightballer.protocols.hackathon_journey.custom_types import (
    Status as CustomStatus,
)


_default_logger = logging.getLogger("aea.packages.eightballer.protocols.hackathon_journey.message")

DEFAULT_BODY_SIZE = 4


class HackathonJourneyMessage(Message):
    """A protocol for managing and documenting the journey of participants in a hackathon, from initial idea generation to final project submission."""

    protocol_id = PublicId.from_str("eightballer/hackathon_journey:0.1.1")
    protocol_specification_id = PublicId.from_str("eightballer/hackathon_journey:0.1.1")

    ErrorCode = CustomErrorCode

    OperationType = CustomOperationType

    Status = CustomStatus

    class Performative(Message.Performative):
        """Performatives for the hackathon_journey protocol."""

        ERROR = "error"
        FINAL_SUBMISSION = "final_submission"
        IDEA_GENERATION = "idea_generation"
        IDEA_SELECTION = "idea_selection"
        OPERATION_RESPONSE = "operation_response"
        PROGRESS_UPDATE = "progress_update"
        TEAM_FORMATION = "team_formation"

        def __str__(self) -> str:
            """Get the string representation."""
            return str(self.value)

    _performatives = {
        "error",
        "final_submission",
        "idea_generation",
        "idea_selection",
        "operation_response",
        "progress_update",
        "team_formation",
    }
    __slots__: Tuple[str, ...] = tuple()

    class _SlotsCls:
        __slots__ = (
            "dialogue_reference",
            "error_code",
            "error_msg",
            "idea_description",
            "message",
            "message_id",
            "operation_type",
            "participant_id",
            "performative",
            "presentation_link",
            "project_link",
            "selected_idea",
            "status",
            "target",
            "team_id",
            "team_members",
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
        Initialise an instance of HackathonJourneyMessage.

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
            performative=HackathonJourneyMessage.Performative(performative),
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
        return cast(HackathonJourneyMessage.Performative, self.get("performative"))

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
    def message(self) -> Optional[str]:
        """Get the 'message' content from the message."""
        return cast(Optional[str], self.get("message"))

    @property
    def operation_type(self) -> CustomOperationType:
        """Get the 'operation_type' content from the message."""
        enforce(self.is_set("operation_type"), "'operation_type' content is not set.")
        return cast(CustomOperationType, self.get("operation_type"))

    @property
    def participant_id(self) -> str:
        """Get the 'participant_id' content from the message."""
        enforce(self.is_set("participant_id"), "'participant_id' content is not set.")
        return cast(str, self.get("participant_id"))

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
    def selected_idea(self) -> str:
        """Get the 'selected_idea' content from the message."""
        enforce(self.is_set("selected_idea"), "'selected_idea' content is not set.")
        return cast(str, self.get("selected_idea"))

    @property
    def status(self) -> CustomStatus:
        """Get the 'status' content from the message."""
        enforce(self.is_set("status"), "'status' content is not set.")
        return cast(CustomStatus, self.get("status"))

    @property
    def team_id(self) -> str:
        """Get the 'team_id' content from the message."""
        enforce(self.is_set("team_id"), "'team_id' content is not set.")
        return cast(str, self.get("team_id"))

    @property
    def team_members(self) -> Tuple[str, ...]:
        """Get the 'team_members' content from the message."""
        enforce(self.is_set("team_members"), "'team_members' content is not set.")
        return cast(Tuple[str, ...], self.get("team_members"))

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
        """Check that the message follows the hackathon_journey protocol."""
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
                isinstance(self.performative, HackathonJourneyMessage.Performative),
                "Invalid 'performative'. Expected either of '{}'. Found '{}'.".format(
                    self.valid_performatives, self.performative
                ),
            )

            # Check correct contents
            actual_nb_of_contents = len(self._body) - DEFAULT_BODY_SIZE
            expected_nb_of_contents = 0
            if self.performative == HackathonJourneyMessage.Performative.IDEA_GENERATION:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.participant_id, str),
                    "Invalid type for content 'participant_id'. Expected 'str'. Found '{}'.".format(
                        type(self.participant_id)
                    ),
                )
                enforce(
                    isinstance(self.idea_description, str),
                    "Invalid type for content 'idea_description'. Expected 'str'. Found '{}'.".format(
                        type(self.idea_description)
                    ),
                )
            elif self.performative == HackathonJourneyMessage.Performative.TEAM_FORMATION:
                expected_nb_of_contents = 3
                enforce(
                    isinstance(self.participant_id, str),
                    "Invalid type for content 'participant_id'. Expected 'str'. Found '{}'.".format(
                        type(self.participant_id)
                    ),
                )
                enforce(
                    isinstance(self.team_name, str),
                    "Invalid type for content 'team_name'. Expected 'str'. Found '{}'.".format(type(self.team_name)),
                )
                enforce(
                    isinstance(self.team_members, tuple),
                    "Invalid type for content 'team_members'. Expected 'tuple'. Found '{}'.".format(
                        type(self.team_members)
                    ),
                )
                enforce(
                    all(isinstance(element, str) for element in self.team_members),
                    "Invalid type for tuple elements in content 'team_members'. Expected 'str'.",
                )
            elif self.performative == HackathonJourneyMessage.Performative.IDEA_SELECTION:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.team_id, str),
                    "Invalid type for content 'team_id'. Expected 'str'. Found '{}'.".format(type(self.team_id)),
                )
                enforce(
                    isinstance(self.selected_idea, str),
                    "Invalid type for content 'selected_idea'. Expected 'str'. Found '{}'.".format(
                        type(self.selected_idea)
                    ),
                )
            elif self.performative == HackathonJourneyMessage.Performative.PROGRESS_UPDATE:
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
            elif self.performative == HackathonJourneyMessage.Performative.FINAL_SUBMISSION:
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
            elif self.performative == HackathonJourneyMessage.Performative.OPERATION_RESPONSE:
                expected_nb_of_contents = 3
                enforce(
                    isinstance(self.operation_type, CustomOperationType),
                    "Invalid type for content 'operation_type'. Expected 'OperationType'. Found '{}'.".format(
                        type(self.operation_type)
                    ),
                )
                enforce(
                    isinstance(self.team_id, str),
                    "Invalid type for content 'team_id'. Expected 'str'. Found '{}'.".format(type(self.team_id)),
                )
                enforce(
                    isinstance(self.status, CustomStatus),
                    "Invalid type for content 'status'. Expected 'Status'. Found '{}'.".format(type(self.status)),
                )
                if self.is_set("message"):
                    expected_nb_of_contents += 1
                    message = cast(str, self.message)
                    enforce(
                        isinstance(message, str),
                        "Invalid type for content 'message'. Expected 'str'. Found '{}'.".format(type(message)),
                    )
            elif self.performative == HackathonJourneyMessage.Performative.ERROR:
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
