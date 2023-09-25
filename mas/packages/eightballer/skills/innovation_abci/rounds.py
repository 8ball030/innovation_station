# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2023 Valory AG
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

"""This package contains the rounds of SubgraphQueryAbciApp."""

from enum import Enum
from typing import Dict, List, Optional, Set, Tuple

from packages.valory.skills.abstract_round_abci.base import (
    AbciApp,
    AbciAppTransitionFunction,
    AbstractRound,
    AppState,
    BaseSynchronizedData,
    DegenerateRound,
    EventToTimeout,
)

from packages.eightballer.skills.innovation_abci.payloads import (
    CollectedSubgraphResponsePayload,
    PrepareSubgraphQueryPayload,
)


class Event(Enum):
    """SubgraphQueryAbciApp Events"""

    FAILED = "failed"
    DONE = "done"


class SynchronizedData(BaseSynchronizedData):
    """
    Class to represent the synchronized data.

    This data is replicated by the tendermint application.
    """


class CollectedSubgraphResponseRound(AbstractRound):
    """CollectedSubgraphResponseRound"""

    payload_class = CollectedSubgraphResponsePayload
    payload_attribute = ""  # TODO: update
    synchronized_data_class = SynchronizedData

    # TODO: replace AbstractRound with one of CollectDifferentUntilAllRound,
    # CollectSameUntilAllRound, CollectSameUntilThresholdRound,
    # CollectDifferentUntilThresholdRound, OnlyKeeperSendsRound, VotingRound,
    # from packages/valory/skills/abstract_round_abci/base.py
    # or implement the methods

    def end_block(self) -> Optional[Tuple[BaseSynchronizedData, Enum]]:
        """Process the end of the block."""
        raise NotImplementedError

    def check_payload(self, payload: CollectedSubgraphResponsePayload) -> None:
        """Check payload."""
        raise NotImplementedError

    def process_payload(self, payload: CollectedSubgraphResponsePayload) -> None:
        """Process payload."""
        raise NotImplementedError


class PrepareSubgraphQueryRound(AbstractRound):
    """PrepareSubgraphQueryRound"""

    payload_class = PrepareSubgraphQueryPayload
    payload_attribute = ""  # TODO: update
    synchronized_data_class = SynchronizedData

    # TODO: replace AbstractRound with one of CollectDifferentUntilAllRound,
    # CollectSameUntilAllRound, CollectSameUntilThresholdRound,
    # CollectDifferentUntilThresholdRound, OnlyKeeperSendsRound, VotingRound,
    # from packages/valory/skills/abstract_round_abci/base.py
    # or implement the methods

    def end_block(self) -> Optional[Tuple[BaseSynchronizedData, Enum]]:
        """Process the end of the block."""
        raise NotImplementedError

    def check_payload(self, payload: PrepareSubgraphQueryPayload) -> None:
        """Check payload."""
        raise NotImplementedError

    def process_payload(self, payload: PrepareSubgraphQueryPayload) -> None:
        """Process payload."""
        raise NotImplementedError


class FailedSubgraphQueryRound(DegenerateRound):
    """FailedSubgraphQueryRound"""


class FinalizedSubgraphQueryRound(DegenerateRound):
    """FinalizedSubgraphQueryRound"""


class SubgraphQueryAbciApp(AbciApp[Event]):
    """SubgraphQueryAbciApp"""

    initial_round_cls: AppState = PrepareSubgraphQueryRound
    initial_states: Set[AppState] = {PrepareSubgraphQueryRound}
    transition_function: AbciAppTransitionFunction = {
        PrepareSubgraphQueryRound: {
            Event.DONE: CollectedSubgraphResponseRound,
            Event.FAILED: FailedSubgraphQueryRound
        },
        CollectedSubgraphResponseRound: {
            Event.DONE: FinalizedSubgraphQueryRound,
            Event.FAILED: FailedSubgraphQueryRound
        },
        FailedSubgraphQueryRound: {},
        FinalizedSubgraphQueryRound: {}
    }
    final_states: Set[AppState] = {FailedSubgraphQueryRound, FinalizedSubgraphQueryRound}
    event_to_timeout: EventToTimeout = {}
    cross_period_persisted_keys: Set[str] = []
    db_pre_conditions: Dict[AppState, Set[str]] = {
        PrepareSubgraphQueryRound: [],
    }
    db_post_conditions: Dict[AppState, Set[str]] = {
        FailedSubgraphQueryRound: [],
    	FinalizedSubgraphQueryRound: [],
    }
