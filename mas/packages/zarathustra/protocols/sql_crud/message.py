# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2023 zarathustra
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

"""This module contains sql_crud's message definition."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,too-many-branches,not-an-iterable,unidiomatic-typecheck,unsubscriptable-object
import logging
from typing import Any, Dict, Optional, Set, Tuple, cast

from aea.configurations.base import PublicId
from aea.exceptions import AEAEnforceError, enforce
from aea.protocols.base import Message

from packages.zarathustra.protocols.sql_crud.custom_types import (
    ErrorCode as CustomErrorCode,
)


_default_logger = logging.getLogger(
    "aea.packages.zarathustra.protocols.sql_crud.message"
)

DEFAULT_BODY_SIZE = 4


class SqlCrudMessage(Message):
    """A protocol for SQL CRUD functionality."""

    protocol_id = PublicId.from_str("zarathustra/sql_crud:0.1.0")
    protocol_specification_id = PublicId.from_str("your_name/sql_crud:0.1.0")

    ErrorCode = CustomErrorCode

    class Performative(Message.Performative):
        """Performatives for the sql_crud protocol."""

        CREATE = "create"
        DELETE = "delete"
        END = "end"
        ERROR = "error"
        READ = "read"
        RESULT = "result"
        UPDATE = "update"

        def __str__(self) -> str:
            """Get the string representation."""
            return str(self.value)

    _performatives = {"create", "delete", "end", "error", "read", "result", "update"}
    __slots__: Tuple[str, ...] = tuple()

    class _SlotsCls:
        __slots__ = (
            "condition",
            "data",
            "dialogue_reference",
            "error_code",
            "error_msg",
            "message_id",
            "performative",
            "result",
            "table_name",
            "target",
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
        Initialise an instance of SqlCrudMessage.

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
            performative=SqlCrudMessage.Performative(performative),
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
        return cast(SqlCrudMessage.Performative, self.get("performative"))

    @property
    def target(self) -> int:
        """Get the target of the message."""
        enforce(self.is_set("target"), "target is not set.")
        return cast(int, self.get("target"))

    @property
    def condition(self) -> Optional[str]:
        """Get the 'condition' content from the message."""
        return cast(Optional[str], self.get("condition"))

    @property
    def data(self) -> Dict[str, bytes]:
        """Get the 'data' content from the message."""
        enforce(self.is_set("data"), "'data' content is not set.")
        return cast(Dict[str, bytes], self.get("data"))

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
    def result(self) -> Dict[str, bytes]:
        """Get the 'result' content from the message."""
        enforce(self.is_set("result"), "'result' content is not set.")
        return cast(Dict[str, bytes], self.get("result"))

    @property
    def table_name(self) -> str:
        """Get the 'table_name' content from the message."""
        enforce(self.is_set("table_name"), "'table_name' content is not set.")
        return cast(str, self.get("table_name"))

    def _is_consistent(self) -> bool:
        """Check that the message follows the sql_crud protocol."""
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
                "Invalid type for 'message_id'. Expected 'int'. Found '{}'.".format(
                    type(self.message_id)
                ),
            )
            enforce(
                type(self.target) is int,
                "Invalid type for 'target'. Expected 'int'. Found '{}'.".format(
                    type(self.target)
                ),
            )

            # Light Protocol Rule 2
            # Check correct performative
            enforce(
                isinstance(self.performative, SqlCrudMessage.Performative),
                "Invalid 'performative'. Expected either of '{}'. Found '{}'.".format(
                    self.valid_performatives, self.performative
                ),
            )

            # Check correct contents
            actual_nb_of_contents = len(self._body) - DEFAULT_BODY_SIZE
            expected_nb_of_contents = 0
            if self.performative == SqlCrudMessage.Performative.CREATE:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.table_name, str),
                    "Invalid type for content 'table_name'. Expected 'str'. Found '{}'.".format(
                        type(self.table_name)
                    ),
                )
                enforce(
                    isinstance(self.data, dict),
                    "Invalid type for content 'data'. Expected 'dict'. Found '{}'.".format(
                        type(self.data)
                    ),
                )
                for key_of_data, value_of_data in self.data.items():
                    enforce(
                        isinstance(key_of_data, str),
                        "Invalid type for dictionary keys in content 'data'. Expected 'str'. Found '{}'.".format(
                            type(key_of_data)
                        ),
                    )
                    enforce(
                        isinstance(value_of_data, bytes),
                        "Invalid type for dictionary values in content 'data'. Expected 'bytes'. Found '{}'.".format(
                            type(value_of_data)
                        ),
                    )
            elif self.performative == SqlCrudMessage.Performative.READ:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.table_name, str),
                    "Invalid type for content 'table_name'. Expected 'str'. Found '{}'.".format(
                        type(self.table_name)
                    ),
                )
                if self.is_set("condition"):
                    expected_nb_of_contents += 1
                    condition = cast(str, self.condition)
                    enforce(
                        isinstance(condition, str),
                        "Invalid type for content 'condition'. Expected 'str'. Found '{}'.".format(
                            type(condition)
                        ),
                    )
            elif self.performative == SqlCrudMessage.Performative.UPDATE:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.table_name, str),
                    "Invalid type for content 'table_name'. Expected 'str'. Found '{}'.".format(
                        type(self.table_name)
                    ),
                )
                if self.is_set("condition"):
                    expected_nb_of_contents += 1
                    condition = cast(str, self.condition)
                    enforce(
                        isinstance(condition, str),
                        "Invalid type for content 'condition'. Expected 'str'. Found '{}'.".format(
                            type(condition)
                        ),
                    )
                enforce(
                    isinstance(self.data, dict),
                    "Invalid type for content 'data'. Expected 'dict'. Found '{}'.".format(
                        type(self.data)
                    ),
                )
                for key_of_data, value_of_data in self.data.items():
                    enforce(
                        isinstance(key_of_data, str),
                        "Invalid type for dictionary keys in content 'data'. Expected 'str'. Found '{}'.".format(
                            type(key_of_data)
                        ),
                    )
                    enforce(
                        isinstance(value_of_data, bytes),
                        "Invalid type for dictionary values in content 'data'. Expected 'bytes'. Found '{}'.".format(
                            type(value_of_data)
                        ),
                    )
            elif self.performative == SqlCrudMessage.Performative.DELETE:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.table_name, str),
                    "Invalid type for content 'table_name'. Expected 'str'. Found '{}'.".format(
                        type(self.table_name)
                    ),
                )
                if self.is_set("condition"):
                    expected_nb_of_contents += 1
                    condition = cast(str, self.condition)
                    enforce(
                        isinstance(condition, str),
                        "Invalid type for content 'condition'. Expected 'str'. Found '{}'.".format(
                            type(condition)
                        ),
                    )
            elif self.performative == SqlCrudMessage.Performative.RESULT:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.result, dict),
                    "Invalid type for content 'result'. Expected 'dict'. Found '{}'.".format(
                        type(self.result)
                    ),
                )
                for key_of_result, value_of_result in self.result.items():
                    enforce(
                        isinstance(key_of_result, str),
                        "Invalid type for dictionary keys in content 'result'. Expected 'str'. Found '{}'.".format(
                            type(key_of_result)
                        ),
                    )
                    enforce(
                        isinstance(value_of_result, bytes),
                        "Invalid type for dictionary values in content 'result'. Expected 'bytes'. Found '{}'.".format(
                            type(value_of_result)
                        ),
                    )
            elif self.performative == SqlCrudMessage.Performative.ERROR:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.error_code, CustomErrorCode),
                    "Invalid type for content 'error_code'. Expected 'ErrorCode'. Found '{}'.".format(
                        type(self.error_code)
                    ),
                )
                enforce(
                    isinstance(self.error_msg, str),
                    "Invalid type for content 'error_msg'. Expected 'str'. Found '{}'.".format(
                        type(self.error_msg)
                    ),
                )
            elif self.performative == SqlCrudMessage.Performative.END:
                expected_nb_of_contents = 0

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
                    "Invalid 'target'. Expected 0 (because 'message_id' is 1). Found {}.".format(
                        self.target
                    ),
                )
        except (AEAEnforceError, ValueError, KeyError) as e:
            _default_logger.error(str(e))
            return False

        return True
