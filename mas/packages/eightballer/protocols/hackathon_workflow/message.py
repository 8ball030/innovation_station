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

"""This module contains hackathon_workflow's message definition."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,too-many-branches,not-an-iterable,unidiomatic-typecheck,unsubscriptable-object
import logging
from typing import Any, Optional, Set, Tuple, cast

from aea.configurations.base import PublicId
from aea.exceptions import AEAEnforceError, enforce
from aea.protocols.base import Message  # type: ignore

from packages.eightballer.protocols.hackathon_workflow.custom_types import (
    ErrorCode as CustomErrorCode,
)


_default_logger = logging.getLogger("aea.packages.eightballer.protocols.hackathon_workflow.message")

DEFAULT_BODY_SIZE = 4


class HackathonWorkflowMessage(Message):
    """A protocol for managing hackathon competition phases, including team formation, idea submission, and project development stages."""

    protocol_id = PublicId.from_str("eightballer/hackathon_workflow:0.2.0")
    protocol_specification_id = PublicId.from_str("eightballer/hackathon_workflow:0.2.0")

    ErrorCode = CustomErrorCode

    class Performative(Message.Performative):
        """Performatives for the hackathon_workflow protocol."""

        ACKNOWLEDGEMENT = "acknowledgement"
        ANNOUNCE_EVENT = "announce_event"
        ERROR = "error"
        FORM_TEAM = "form_team"
        INITIATE_IDEA_GENERATION = "initiate_idea_generation"
        PROJECT_PROGRESS_UPDATE = "project_progress_update"
        SELECT_IDEA = "select_idea"
        SUBMIT_FINAL_PROJECT = "submit_final_project"
        SUBMIT_IDEA = "submit_idea"

        def __str__(self) -> str:
            """Get the string representation."""
            return str(self.value)

    _performatives = {
        "acknowledgement",
        "announce_event",
        "error",
        "form_team",
        "initiate_idea_generation",
        "project_progress_update",
        "select_idea",
        "submit_final_project",
        "submit_idea",
    }
    __slots__: Tuple[str, ...] = tuple()

    class _SlotsCls:
        __slots__ = (
            "dialogue_reference",
            "error_code",
            "error_msg",
            "event_details",
            "feedback",
            "idea_approved",
            "idea_description",
            "member_ids",
            "message",
            "message_id",
            "performative",
            "presentation_link",
            "project_link",
            "received",
            "registration_deadline",
            "target",
            "team_id",
            "team_name",
            "topic",
            "update_details",
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
        Initialise an instance of HackathonWorkflowMessage.

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
            performative=HackathonWorkflowMessage.Performative(performative),
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
        return cast(HackathonWorkflowMessage.Performative, self.get("performative"))

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
    def event_details(self) -> str:
        """Get the 'event_details' content from the message."""
        enforce(self.is_set("event_details"), "'event_details' content is not set.")
        return cast(str, self.get("event_details"))

    @property
    def feedback(self) -> Optional[str]:
        """Get the 'feedback' content from the message."""
        return cast(Optional[str], self.get("feedback"))

    @property
    def idea_approved(self) -> bool:
        """Get the 'idea_approved' content from the message."""
        enforce(self.is_set("idea_approved"), "'idea_approved' content is not set.")
        return cast(bool, self.get("idea_approved"))

    @property
    def idea_description(self) -> str:
        """Get the 'idea_description' content from the message."""
        enforce(self.is_set("idea_description"), "'idea_description' content is not set.")
        return cast(str, self.get("idea_description"))

    @property
    def member_ids(self) -> Tuple[str, ...]:
        """Get the 'member_ids' content from the message."""
        enforce(self.is_set("member_ids"), "'member_ids' content is not set.")
        return cast(Tuple[str, ...], self.get("member_ids"))

    @property
    def message(self) -> Optional[str]:
        """Get the 'message' content from the message."""
        return cast(Optional[str], self.get("message"))

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
    def received(self) -> bool:
        """Get the 'received' content from the message."""
        enforce(self.is_set("received"), "'received' content is not set.")
        return cast(bool, self.get("received"))

    @property
    def registration_deadline(self) -> str:
        """Get the 'registration_deadline' content from the message."""
        enforce(self.is_set("registration_deadline"), "'registration_deadline' content is not set.")
        return cast(str, self.get("registration_deadline"))

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
    def topic(self) -> str:
        """Get the 'topic' content from the message."""
        enforce(self.is_set("topic"), "'topic' content is not set.")
        return cast(str, self.get("topic"))

    @property
    def update_details(self) -> str:
        """Get the 'update_details' content from the message."""
        enforce(self.is_set("update_details"), "'update_details' content is not set.")
        return cast(str, self.get("update_details"))

    def _is_consistent(self) -> bool:
        """Check that the message follows the hackathon_workflow protocol."""
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
                isinstance(self.performative, HackathonWorkflowMessage.Performative),
                "Invalid 'performative'. Expected either of '{}'. Found '{}'.".format(
                    self.valid_performatives, self.performative
                ),
            )

            # Check correct contents
            actual_nb_of_contents = len(self._body) - DEFAULT_BODY_SIZE
            expected_nb_of_contents = 0
            if self.performative == HackathonWorkflowMessage.Performative.ANNOUNCE_EVENT:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.event_details, str),
                    "Invalid type for content 'event_details'. Expected 'str'. Found '{}'.".format(
                        type(self.event_details)
                    ),
                )
                enforce(
                    isinstance(self.registration_deadline, str),
                    "Invalid type for content 'registration_deadline'. Expected 'str'. Found '{}'.".format(
                        type(self.registration_deadline)
                    ),
                )
            elif self.performative == HackathonWorkflowMessage.Performative.INITIATE_IDEA_GENERATION:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.topic, str),
                    "Invalid type for content 'topic'. Expected 'str'. Found '{}'.".format(type(self.topic)),
                )
            elif self.performative == HackathonWorkflowMessage.Performative.FORM_TEAM:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.team_name, str),
                    "Invalid type for content 'team_name'. Expected 'str'. Found '{}'.".format(type(self.team_name)),
                )
                enforce(
                    isinstance(self.member_ids, tuple),
                    "Invalid type for content 'member_ids'. Expected 'tuple'. Found '{}'.".format(
                        type(self.member_ids)
                    ),
                )
                enforce(
                    all(isinstance(element, str) for element in self.member_ids),
                    "Invalid type for tuple elements in content 'member_ids'. Expected 'str'.",
                )
            elif self.performative == HackathonWorkflowMessage.Performative.SUBMIT_IDEA:
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
            elif self.performative == HackathonWorkflowMessage.Performative.SELECT_IDEA:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.team_id, str),
                    "Invalid type for content 'team_id'. Expected 'str'. Found '{}'.".format(type(self.team_id)),
                )
                enforce(
                    isinstance(self.idea_approved, bool),
                    "Invalid type for content 'idea_approved'. Expected 'bool'. Found '{}'.".format(
                        type(self.idea_approved)
                    ),
                )
                if self.is_set("feedback"):
                    expected_nb_of_contents += 1
                    feedback = cast(str, self.feedback)
                    enforce(
                        isinstance(feedback, str),
                        "Invalid type for content 'feedback'. Expected 'str'. Found '{}'.".format(type(feedback)),
                    )
            elif self.performative == HackathonWorkflowMessage.Performative.PROJECT_PROGRESS_UPDATE:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.team_id, str),
                    "Invalid type for content 'team_id'. Expected 'str'. Found '{}'.".format(type(self.team_id)),
                )
                enforce(
                    isinstance(self.update_details, str),
                    "Invalid type for content 'update_details'. Expected 'str'. Found '{}'.".format(
                        type(self.update_details)
                    ),
                )
            elif self.performative == HackathonWorkflowMessage.Performative.SUBMIT_FINAL_PROJECT:
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
            elif self.performative == HackathonWorkflowMessage.Performative.ACKNOWLEDGEMENT:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.received, bool),
                    "Invalid type for content 'received'. Expected 'bool'. Found '{}'.".format(type(self.received)),
                )
                if self.is_set("message"):
                    expected_nb_of_contents += 1
                    message = cast(str, self.message)
                    enforce(
                        isinstance(message, str),
                        "Invalid type for content 'message'. Expected 'str'. Found '{}'.".format(type(message)),
                    )
            elif self.performative == HackathonWorkflowMessage.Performative.ERROR:
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
