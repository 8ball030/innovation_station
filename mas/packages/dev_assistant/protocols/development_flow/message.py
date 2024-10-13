# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 dev_assistant
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

"""This module contains development_flow's message definition."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,too-many-branches,not-an-iterable,unidiomatic-typecheck,unsubscriptable-object
import logging
from typing import Any, Set, Tuple, cast

from aea.configurations.base import PublicId
from aea.exceptions import AEAEnforceError, enforce
from aea.protocols.base import Message  # type: ignore

from packages.dev_assistant.protocols.development_flow.custom_types import (
    ErrorCode as CustomErrorCode,
)


_default_logger = logging.getLogger("aea.packages.dev_assistant.protocols.development_flow.message")

DEFAULT_BODY_SIZE = 4


class DevelopmentFlowMessage(Message):
    """A protocol for managing interactions involved in a simple development workflow between a developer and a project manager."""

    protocol_id = PublicId.from_str("dev_assistant/development_flow:0.1.0")
    protocol_specification_id = PublicId.from_str("dev_assistant/development_flow:0.1.0")

    ErrorCode = CustomErrorCode

    class Performative(Message.Performative):
        """Performatives for the development_flow protocol."""

        ERROR = "error"
        FEATURE_APPROVED = "feature_approved"
        FEATURE_REVIEW = "feature_review"
        FEATURE_SPEC = "feature_spec"
        PROGRESS_UPDATE = "progress_update"
        REQUEST_FEATURE = "request_feature"

        def __str__(self) -> str:
            """Get the string representation."""
            return str(self.value)

    _performatives = {
        "error",
        "feature_approved",
        "feature_review",
        "feature_spec",
        "progress_update",
        "request_feature",
    }
    __slots__: Tuple[str, ...] = tuple()

    class _SlotsCls:
        __slots__ = (
            "dialogue_reference",
            "error_code",
            "error_msg",
            "feature_description",
            "feature_id",
            "message_id",
            "performative",
            "reviewer_comments",
            "spec_description",
            "target",
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
        Initialise an instance of DevelopmentFlowMessage.

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
            performative=DevelopmentFlowMessage.Performative(performative),
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
        return cast(DevelopmentFlowMessage.Performative, self.get("performative"))

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
    def feature_description(self) -> str:
        """Get the 'feature_description' content from the message."""
        enforce(self.is_set("feature_description"), "'feature_description' content is not set.")
        return cast(str, self.get("feature_description"))

    @property
    def feature_id(self) -> str:
        """Get the 'feature_id' content from the message."""
        enforce(self.is_set("feature_id"), "'feature_id' content is not set.")
        return cast(str, self.get("feature_id"))

    @property
    def reviewer_comments(self) -> str:
        """Get the 'reviewer_comments' content from the message."""
        enforce(self.is_set("reviewer_comments"), "'reviewer_comments' content is not set.")
        return cast(str, self.get("reviewer_comments"))

    @property
    def spec_description(self) -> str:
        """Get the 'spec_description' content from the message."""
        enforce(self.is_set("spec_description"), "'spec_description' content is not set.")
        return cast(str, self.get("spec_description"))

    @property
    def update_description(self) -> str:
        """Get the 'update_description' content from the message."""
        enforce(self.is_set("update_description"), "'update_description' content is not set.")
        return cast(str, self.get("update_description"))

    def _is_consistent(self) -> bool:
        """Check that the message follows the development_flow protocol."""
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
                isinstance(self.performative, DevelopmentFlowMessage.Performative),
                "Invalid 'performative'. Expected either of '{}'. Found '{}'.".format(
                    self.valid_performatives, self.performative
                ),
            )

            # Check correct contents
            actual_nb_of_contents = len(self._body) - DEFAULT_BODY_SIZE
            expected_nb_of_contents = 0
            if self.performative == DevelopmentFlowMessage.Performative.REQUEST_FEATURE:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.feature_description, str),
                    "Invalid type for content 'feature_description'. Expected 'str'. Found '{}'.".format(
                        type(self.feature_description)
                    ),
                )
            elif self.performative == DevelopmentFlowMessage.Performative.FEATURE_SPEC:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.feature_id, str),
                    "Invalid type for content 'feature_id'. Expected 'str'. Found '{}'.".format(type(self.feature_id)),
                )
                enforce(
                    isinstance(self.spec_description, str),
                    "Invalid type for content 'spec_description'. Expected 'str'. Found '{}'.".format(
                        type(self.spec_description)
                    ),
                )
            elif self.performative == DevelopmentFlowMessage.Performative.PROGRESS_UPDATE:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.feature_id, str),
                    "Invalid type for content 'feature_id'. Expected 'str'. Found '{}'.".format(type(self.feature_id)),
                )
                enforce(
                    isinstance(self.update_description, str),
                    "Invalid type for content 'update_description'. Expected 'str'. Found '{}'.".format(
                        type(self.update_description)
                    ),
                )
            elif self.performative == DevelopmentFlowMessage.Performative.FEATURE_REVIEW:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.feature_id, str),
                    "Invalid type for content 'feature_id'. Expected 'str'. Found '{}'.".format(type(self.feature_id)),
                )
                enforce(
                    isinstance(self.reviewer_comments, str),
                    "Invalid type for content 'reviewer_comments'. Expected 'str'. Found '{}'.".format(
                        type(self.reviewer_comments)
                    ),
                )
            elif self.performative == DevelopmentFlowMessage.Performative.FEATURE_APPROVED:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.feature_id, str),
                    "Invalid type for content 'feature_id'. Expected 'str'. Found '{}'.".format(type(self.feature_id)),
                )
            elif self.performative == DevelopmentFlowMessage.Performative.ERROR:
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
