# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 developer
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

"""This module contains format_stage's message definition."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,too-many-branches,not-an-iterable,unidiomatic-typecheck,unsubscriptable-object
import logging
from typing import Any, Dict, Set, Tuple, cast

from aea.configurations.base import PublicId
from aea.exceptions import AEAEnforceError, enforce
from aea.protocols.base import Message  # type: ignore

from packages.developer.protocols.format_stage.custom_types import (
    ErrorCode as CustomErrorCode,
)


_default_logger = logging.getLogger("aea.packages.developer.protocols.format_stage.message")

DEFAULT_BODY_SIZE = 4


class FormatStageMessage(Message):
    """A protocol for managing the format stage in a development flow, including code formatting, validation, and error feedback."""

    protocol_id = PublicId.from_str("developer/format_stage:0.1.0")
    protocol_specification_id = PublicId.from_str("developer/format_stage:0.1.0")

    ErrorCode = CustomErrorCode

    class Performative(Message.Performative):
        """Performatives for the format_stage protocol."""

        ERROR = "error"
        FORMAT_REQUEST = "format_request"
        FORMAT_RESULT = "format_result"
        VALIDATE_CODE = "validate_code"
        VALIDATION_RESULT = "validation_result"

        def __str__(self) -> str:
            """Get the string representation."""
            return str(self.value)

    _performatives = {"error", "format_request", "format_result", "validate_code", "validation_result"}
    __slots__: Tuple[str, ...] = tuple()

    class _SlotsCls:
        __slots__ = (
            "changes_made",
            "dialogue_reference",
            "error_code",
            "error_msg",
            "errors",
            "file_path",
            "formatted",
            "formatter_options",
            "message_id",
            "performative",
            "target",
            "valid",
            "validation_rules",
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
        Initialise an instance of FormatStageMessage.

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
            performative=FormatStageMessage.Performative(performative),
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
        return cast(FormatStageMessage.Performative, self.get("performative"))

    @property
    def target(self) -> int:
        """Get the target of the message."""
        enforce(self.is_set("target"), "target is not set.")
        return cast(int, self.get("target"))

    @property
    def changes_made(self) -> int:
        """Get the 'changes_made' content from the message."""
        enforce(self.is_set("changes_made"), "'changes_made' content is not set.")
        return cast(int, self.get("changes_made"))

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
    def errors(self) -> Tuple[str, ...]:
        """Get the 'errors' content from the message."""
        enforce(self.is_set("errors"), "'errors' content is not set.")
        return cast(Tuple[str, ...], self.get("errors"))

    @property
    def file_path(self) -> str:
        """Get the 'file_path' content from the message."""
        enforce(self.is_set("file_path"), "'file_path' content is not set.")
        return cast(str, self.get("file_path"))

    @property
    def formatted(self) -> bool:
        """Get the 'formatted' content from the message."""
        enforce(self.is_set("formatted"), "'formatted' content is not set.")
        return cast(bool, self.get("formatted"))

    @property
    def formatter_options(self) -> Dict[str, str]:
        """Get the 'formatter_options' content from the message."""
        enforce(self.is_set("formatter_options"), "'formatter_options' content is not set.")
        return cast(Dict[str, str], self.get("formatter_options"))

    @property
    def valid(self) -> bool:
        """Get the 'valid' content from the message."""
        enforce(self.is_set("valid"), "'valid' content is not set.")
        return cast(bool, self.get("valid"))

    @property
    def validation_rules(self) -> Tuple[str, ...]:
        """Get the 'validation_rules' content from the message."""
        enforce(self.is_set("validation_rules"), "'validation_rules' content is not set.")
        return cast(Tuple[str, ...], self.get("validation_rules"))

    def _is_consistent(self) -> bool:
        """Check that the message follows the format_stage protocol."""
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
                isinstance(self.performative, FormatStageMessage.Performative),
                "Invalid 'performative'. Expected either of '{}'. Found '{}'.".format(
                    self.valid_performatives, self.performative
                ),
            )

            # Check correct contents
            actual_nb_of_contents = len(self._body) - DEFAULT_BODY_SIZE
            expected_nb_of_contents = 0
            if self.performative == FormatStageMessage.Performative.FORMAT_REQUEST:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.file_path, str),
                    "Invalid type for content 'file_path'. Expected 'str'. Found '{}'.".format(type(self.file_path)),
                )
                enforce(
                    isinstance(self.formatter_options, dict),
                    "Invalid type for content 'formatter_options'. Expected 'dict'. Found '{}'.".format(
                        type(self.formatter_options)
                    ),
                )
                for key_of_formatter_options, value_of_formatter_options in self.formatter_options.items():
                    enforce(
                        isinstance(key_of_formatter_options, str),
                        "Invalid type for dictionary keys in content 'formatter_options'. Expected 'str'. Found '{}'.".format(
                            type(key_of_formatter_options)
                        ),
                    )
                    enforce(
                        isinstance(value_of_formatter_options, str),
                        "Invalid type for dictionary values in content 'formatter_options'. Expected 'str'. Found '{}'.".format(
                            type(value_of_formatter_options)
                        ),
                    )
            elif self.performative == FormatStageMessage.Performative.FORMAT_RESULT:
                expected_nb_of_contents = 3
                enforce(
                    isinstance(self.file_path, str),
                    "Invalid type for content 'file_path'. Expected 'str'. Found '{}'.".format(type(self.file_path)),
                )
                enforce(
                    isinstance(self.formatted, bool),
                    "Invalid type for content 'formatted'. Expected 'bool'. Found '{}'.".format(type(self.formatted)),
                )
                enforce(
                    type(self.changes_made) is int,
                    "Invalid type for content 'changes_made'. Expected 'int'. Found '{}'.".format(
                        type(self.changes_made)
                    ),
                )
            elif self.performative == FormatStageMessage.Performative.VALIDATE_CODE:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.file_path, str),
                    "Invalid type for content 'file_path'. Expected 'str'. Found '{}'.".format(type(self.file_path)),
                )
                enforce(
                    isinstance(self.validation_rules, tuple),
                    "Invalid type for content 'validation_rules'. Expected 'tuple'. Found '{}'.".format(
                        type(self.validation_rules)
                    ),
                )
                enforce(
                    all(isinstance(element, str) for element in self.validation_rules),
                    "Invalid type for tuple elements in content 'validation_rules'. Expected 'str'.",
                )
            elif self.performative == FormatStageMessage.Performative.VALIDATION_RESULT:
                expected_nb_of_contents = 3
                enforce(
                    isinstance(self.file_path, str),
                    "Invalid type for content 'file_path'. Expected 'str'. Found '{}'.".format(type(self.file_path)),
                )
                enforce(
                    isinstance(self.valid, bool),
                    "Invalid type for content 'valid'. Expected 'bool'. Found '{}'.".format(type(self.valid)),
                )
                enforce(
                    isinstance(self.errors, tuple),
                    "Invalid type for content 'errors'. Expected 'tuple'. Found '{}'.".format(type(self.errors)),
                )
                enforce(
                    all(isinstance(element, str) for element in self.errors),
                    "Invalid type for tuple elements in content 'errors'. Expected 'str'.",
                )
            elif self.performative == FormatStageMessage.Performative.ERROR:
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
