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

"""This module contains trello_interaction's message definition."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,too-many-branches,not-an-iterable,unidiomatic-typecheck,unsubscriptable-object
import logging
from typing import Any, Optional, Set, Tuple, cast

from aea.configurations.base import PublicId
from aea.exceptions import AEAEnforceError, enforce
from aea.protocols.base import Message  # type: ignore

from packages.your_name.protocols.trello_interaction.custom_types import (
    ErrorCode as CustomErrorCode,
)
from packages.your_name.protocols.trello_interaction.custom_types import (
    Status as CustomStatus,
)


_default_logger = logging.getLogger("aea.packages.your_name.protocols.trello_interaction.message")

DEFAULT_BODY_SIZE = 4


class TrelloInteractionMessage(Message):
    """A protocol for managing interactions with Trello entities like boards, cards, members, etc."""

    protocol_id = PublicId.from_str("your_name/trello_interaction:0.1.0")
    protocol_specification_id = PublicId.from_str("your_name/trello_interaction:0.1.0")

    ErrorCode = CustomErrorCode

    Status = CustomStatus

    class Performative(Message.Performative):
        """Performatives for the trello_interaction protocol."""

        ACTION_RESULT = "action_result"
        ADD_CARD = "add_card"
        ADD_MEMBER = "add_member"
        CREATE_BOARD = "create_board"
        ERROR = "error"
        FETCH_ACTIONS = "fetch_actions"
        FETCH_BOARD = "fetch_board"
        LIST_BOARDS = "list_boards"
        LIST_CARDS = "list_cards"

        def __str__(self) -> str:
            """Get the string representation."""
            return str(self.value)

    _performatives = {
        "action_result",
        "add_card",
        "add_member",
        "create_board",
        "error",
        "fetch_actions",
        "fetch_board",
        "list_boards",
        "list_cards",
    }
    __slots__: Tuple[str, ...] = tuple()

    class _SlotsCls:
        __slots__ = (
            "action_filter",
            "board_filter",
            "board_id",
            "board_name",
            "card_filter",
            "card_name",
            "desc",
            "dialogue_reference",
            "due",
            "error_code",
            "error_msg",
            "labels",
            "list_id",
            "member_id",
            "member_type",
            "message_id",
            "organization_id",
            "performative",
            "permission_level",
            "result_data",
            "status",
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
        Initialise an instance of TrelloInteractionMessage.

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
            performative=TrelloInteractionMessage.Performative(performative),
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
        return cast(TrelloInteractionMessage.Performative, self.get("performative"))

    @property
    def target(self) -> int:
        """Get the target of the message."""
        enforce(self.is_set("target"), "target is not set.")
        return cast(int, self.get("target"))

    @property
    def action_filter(self) -> Optional[str]:
        """Get the 'action_filter' content from the message."""
        return cast(Optional[str], self.get("action_filter"))

    @property
    def board_filter(self) -> Optional[str]:
        """Get the 'board_filter' content from the message."""
        return cast(Optional[str], self.get("board_filter"))

    @property
    def board_id(self) -> str:
        """Get the 'board_id' content from the message."""
        enforce(self.is_set("board_id"), "'board_id' content is not set.")
        return cast(str, self.get("board_id"))

    @property
    def board_name(self) -> str:
        """Get the 'board_name' content from the message."""
        enforce(self.is_set("board_name"), "'board_name' content is not set.")
        return cast(str, self.get("board_name"))

    @property
    def card_filter(self) -> Optional[str]:
        """Get the 'card_filter' content from the message."""
        return cast(Optional[str], self.get("card_filter"))

    @property
    def card_name(self) -> str:
        """Get the 'card_name' content from the message."""
        enforce(self.is_set("card_name"), "'card_name' content is not set.")
        return cast(str, self.get("card_name"))

    @property
    def desc(self) -> Optional[str]:
        """Get the 'desc' content from the message."""
        return cast(Optional[str], self.get("desc"))

    @property
    def due(self) -> Optional[str]:
        """Get the 'due' content from the message."""
        return cast(Optional[str], self.get("due"))

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
    def labels(self) -> Optional[Tuple[str, ...]]:
        """Get the 'labels' content from the message."""
        return cast(Optional[Tuple[str, ...]], self.get("labels"))

    @property
    def list_id(self) -> str:
        """Get the 'list_id' content from the message."""
        enforce(self.is_set("list_id"), "'list_id' content is not set.")
        return cast(str, self.get("list_id"))

    @property
    def member_id(self) -> str:
        """Get the 'member_id' content from the message."""
        enforce(self.is_set("member_id"), "'member_id' content is not set.")
        return cast(str, self.get("member_id"))

    @property
    def member_type(self) -> Optional[str]:
        """Get the 'member_type' content from the message."""
        return cast(Optional[str], self.get("member_type"))

    @property
    def organization_id(self) -> Optional[str]:
        """Get the 'organization_id' content from the message."""
        return cast(Optional[str], self.get("organization_id"))

    @property
    def permission_level(self) -> Optional[str]:
        """Get the 'permission_level' content from the message."""
        return cast(Optional[str], self.get("permission_level"))

    @property
    def result_data(self) -> Optional[bytes]:
        """Get the 'result_data' content from the message."""
        return cast(Optional[bytes], self.get("result_data"))

    @property
    def status(self) -> CustomStatus:
        """Get the 'status' content from the message."""
        enforce(self.is_set("status"), "'status' content is not set.")
        return cast(CustomStatus, self.get("status"))

    def _is_consistent(self) -> bool:
        """Check that the message follows the trello_interaction protocol."""
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
                isinstance(self.performative, TrelloInteractionMessage.Performative),
                "Invalid 'performative'. Expected either of '{}'. Found '{}'.".format(
                    self.valid_performatives, self.performative
                ),
            )

            # Check correct contents
            actual_nb_of_contents = len(self._body) - DEFAULT_BODY_SIZE
            expected_nb_of_contents = 0
            if self.performative == TrelloInteractionMessage.Performative.CREATE_BOARD:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.board_name, str),
                    "Invalid type for content 'board_name'. Expected 'str'. Found '{}'.".format(type(self.board_name)),
                )
                if self.is_set("organization_id"):
                    expected_nb_of_contents += 1
                    organization_id = cast(str, self.organization_id)
                    enforce(
                        isinstance(organization_id, str),
                        "Invalid type for content 'organization_id'. Expected 'str'. Found '{}'.".format(
                            type(organization_id)
                        ),
                    )
                if self.is_set("permission_level"):
                    expected_nb_of_contents += 1
                    permission_level = cast(str, self.permission_level)
                    enforce(
                        isinstance(permission_level, str),
                        "Invalid type for content 'permission_level'. Expected 'str'. Found '{}'.".format(
                            type(permission_level)
                        ),
                    )
            elif self.performative == TrelloInteractionMessage.Performative.FETCH_BOARD:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.board_id, str),
                    "Invalid type for content 'board_id'. Expected 'str'. Found '{}'.".format(type(self.board_id)),
                )
            elif self.performative == TrelloInteractionMessage.Performative.LIST_BOARDS:
                expected_nb_of_contents = 0
                if self.is_set("board_filter"):
                    expected_nb_of_contents += 1
                    board_filter = cast(str, self.board_filter)
                    enforce(
                        isinstance(board_filter, str),
                        "Invalid type for content 'board_filter'. Expected 'str'. Found '{}'.".format(
                            type(board_filter)
                        ),
                    )
            elif self.performative == TrelloInteractionMessage.Performative.ADD_MEMBER:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.board_id, str),
                    "Invalid type for content 'board_id'. Expected 'str'. Found '{}'.".format(type(self.board_id)),
                )
                enforce(
                    isinstance(self.member_id, str),
                    "Invalid type for content 'member_id'. Expected 'str'. Found '{}'.".format(type(self.member_id)),
                )
                if self.is_set("member_type"):
                    expected_nb_of_contents += 1
                    member_type = cast(str, self.member_type)
                    enforce(
                        isinstance(member_type, str),
                        "Invalid type for content 'member_type'. Expected 'str'. Found '{}'.".format(type(member_type)),
                    )
            elif self.performative == TrelloInteractionMessage.Performative.LIST_CARDS:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.board_id, str),
                    "Invalid type for content 'board_id'. Expected 'str'. Found '{}'.".format(type(self.board_id)),
                )
                if self.is_set("card_filter"):
                    expected_nb_of_contents += 1
                    card_filter = cast(str, self.card_filter)
                    enforce(
                        isinstance(card_filter, str),
                        "Invalid type for content 'card_filter'. Expected 'str'. Found '{}'.".format(type(card_filter)),
                    )
            elif self.performative == TrelloInteractionMessage.Performative.ADD_CARD:
                expected_nb_of_contents = 2
                enforce(
                    isinstance(self.list_id, str),
                    "Invalid type for content 'list_id'. Expected 'str'. Found '{}'.".format(type(self.list_id)),
                )
                enforce(
                    isinstance(self.card_name, str),
                    "Invalid type for content 'card_name'. Expected 'str'. Found '{}'.".format(type(self.card_name)),
                )
                if self.is_set("desc"):
                    expected_nb_of_contents += 1
                    desc = cast(str, self.desc)
                    enforce(
                        isinstance(desc, str),
                        "Invalid type for content 'desc'. Expected 'str'. Found '{}'.".format(type(desc)),
                    )
                if self.is_set("labels"):
                    expected_nb_of_contents += 1
                    labels = cast(Tuple[str, ...], self.labels)
                    enforce(
                        isinstance(labels, tuple),
                        "Invalid type for content 'labels'. Expected 'tuple'. Found '{}'.".format(type(labels)),
                    )
                    enforce(
                        all(isinstance(element, str) for element in labels),
                        "Invalid type for tuple elements in content 'labels'. Expected 'str'.",
                    )
                if self.is_set("due"):
                    expected_nb_of_contents += 1
                    due = cast(str, self.due)
                    enforce(
                        isinstance(due, str),
                        "Invalid type for content 'due'. Expected 'str'. Found '{}'.".format(type(due)),
                    )
            elif self.performative == TrelloInteractionMessage.Performative.FETCH_ACTIONS:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.board_id, str),
                    "Invalid type for content 'board_id'. Expected 'str'. Found '{}'.".format(type(self.board_id)),
                )
                if self.is_set("action_filter"):
                    expected_nb_of_contents += 1
                    action_filter = cast(str, self.action_filter)
                    enforce(
                        isinstance(action_filter, str),
                        "Invalid type for content 'action_filter'. Expected 'str'. Found '{}'.".format(
                            type(action_filter)
                        ),
                    )
            elif self.performative == TrelloInteractionMessage.Performative.ACTION_RESULT:
                expected_nb_of_contents = 1
                enforce(
                    isinstance(self.status, CustomStatus),
                    "Invalid type for content 'status'. Expected 'Status'. Found '{}'.".format(type(self.status)),
                )
                if self.is_set("result_data"):
                    expected_nb_of_contents += 1
                    result_data = cast(bytes, self.result_data)
                    enforce(
                        isinstance(result_data, bytes),
                        "Invalid type for content 'result_data'. Expected 'bytes'. Found '{}'.".format(
                            type(result_data)
                        ),
                    )
            elif self.performative == TrelloInteractionMessage.Performative.ERROR:
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
