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
import json
from typing import Dict, Optional, Set, Tuple, Any, cast

from packages.valory.skills.abstract_round_abci.base import (
    AbciApp,
    AbciAppTransitionFunction,
    AppState,
    BaseSynchronizedData,
    CollectSameUntilAllRound,
    DegenerateRound,
    EventToTimeout,
    get_name,
)
from packages.zarathustra.skills.subgraph_query.payloads import (
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

    @property
    def subgraph_query(self) -> Dict[str, Dict[str, Any]]:
        """Return the subgraph query."""
        return cast(Dict[str, Dict[str, Any]], self.db.get_str("subgraph_query"))

    @property
    def subgraph_response(self) -> Any:
        """Return the last subgraph response"""
        return self.db.get_str("subgraph_response")


class PrepareSubgraphQueryRound(CollectSameUntilAllRound):
    """PrepareSubgraphQueryRound"""

    payload_class = PrepareSubgraphQueryPayload
    payload_attribute = "subgraph_query"
    synchronized_data_class = SynchronizedData

    def end_block(self) -> Optional[Tuple[BaseSynchronizedData, Enum]]:
        """Process the end of the block."""

        if self.collection_threshold_reached:
            payloads_json = json.loads(self.collection[list(self.collection)[0]].content)
            state = self.synchronized_data.update(
                synchronized_data_class=self.synchronized_data_class,
                **{get_name(SynchronizedData.subgraph_query): payloads_json},
            )
            return state, Event.DONE
        return None


class CollectedSubgraphResponseRound(CollectSameUntilAllRound):
    """CollectedSubgraphResponseRound"""

    payload_class = CollectedSubgraphResponsePayload
    payload_attribute = "subgraph_response"
    synchronized_data_class = SynchronizedData

    def end_block(self) -> Optional[Tuple[BaseSynchronizedData, Enum]]:
        """Process the end of the block."""

        if self.collection_threshold_reached:
            subgraph_response = self.collection[list(self.collection)[0]].subgraph_response
            state = self.synchronized_data.update(
                synchronized_data_class=self.synchronized_data_class,
                **{get_name(SynchronizedData.subgraph_response): subgraph_response},
            )
            return state, Event.DONE
        return None


class FailedSubgraphQueryRound(DegenerateRound):
    """FailedSubgraphQueryRound"""


class FinalizedSubgraphQueryRound(DegenerateRound):
    """FinalizedSubgraphQueryRound"""


class SubgraphQueryAbciApp(AbciApp[Event]):
    """SubgraphQueryAbciApp"""

    initial_round_cls: AppState = PrepareSubgraphQueryRound
    initial_states: Set[AppState] = {PrepareSubgraphQueryRound}
    transition_function: AbciAppTransitionFunction = {
        PrepareSubgraphQueryRound: {Event.DONE: CollectedSubgraphResponseRound, Event.FAILED: FailedSubgraphQueryRound},
        CollectedSubgraphResponseRound: {
            Event.DONE: FinalizedSubgraphQueryRound,
            Event.FAILED: FailedSubgraphQueryRound,
        },
        FinalizedSubgraphQueryRound: {},
        FailedSubgraphQueryRound: {},
    }
    final_states: Set[AppState] = {FinalizedSubgraphQueryRound, FailedSubgraphQueryRound}
    event_to_timeout: EventToTimeout = {}
    cross_period_persisted_keys: Set[str] = []
    db_pre_conditions: Dict[AppState, Set[str]] = {
        PrepareSubgraphQueryRound: [],
    }
    db_post_conditions: Dict[AppState, Set[str]] = {
        FinalizedSubgraphQueryRound: [],
        FailedSubgraphQueryRound: [],
    }
