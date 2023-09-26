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

"""This package contains round behaviours of SubgraphQueryAbciApp."""

from abc import ABC
from typing import Generator, Set, Type, cast

from packages.eightballer.skills.innovation_abci.models import Params
from packages.eightballer.skills.innovation_abci.rounds import (
    CollectedSubgraphResponsePayload,
    CollectedSubgraphResponseRound,
    PrepareSubgraphQueryPayload,
    PrepareSubgraphQueryRound,
    SubgraphQueryAbciApp,
    SynchronizedData,
)
from packages.valory.skills.abstract_round_abci.base import AbstractRound
from packages.valory.skills.abstract_round_abci.behaviours import AbstractRoundBehaviour, BaseBehaviour


class SubgraphQueryBaseBehaviour(BaseBehaviour, ABC):
    """Base behaviour for the innovation_abci skill."""

    @property
    def synchronized_data(self) -> SynchronizedData:
        """Return the synchronized data."""
        return cast(SynchronizedData, super().synchronized_data)

    @property
    def params(self) -> Params:
        """Return the params."""
        return cast(Params, super().params)


class CollectedSubgraphResponseBehaviour(SubgraphQueryBaseBehaviour):
    """CollectedSubgraphResponseBehaviour"""

    matching_round: Type[AbstractRound] = CollectedSubgraphResponseRound

    def async_act(self) -> Generator:
        """Do the act, supporting asynchronous execution."""

        with self.context.benchmark_tool.measure(self.behaviour_id).local():
            sender = self.context.agent_address
            payload = CollectedSubgraphResponsePayload(sender=sender, content="Datasdasd")

        with self.context.benchmark_tool.measure(self.behaviour_id).consensus():
            yield from self.send_a2a_transaction(payload)
            yield from self.wait_until_round_end()
        self.set_done()


class PrepareSubgraphQueryBehaviour(SubgraphQueryBaseBehaviour):
    """PrepareSubgraphQueryBehaviour"""

    matching_round: Type[AbstractRound] = PrepareSubgraphQueryRound

    def async_act(self) -> Generator:
        """Do the act, supporting asynchronous execution."""

        with self.context.benchmark_tool.measure(self.behaviour_id).local():
            sender = self.context.agent_address
            payload = PrepareSubgraphQueryPayload(sender=sender, content="data")

        with self.context.benchmark_tool.measure(self.behaviour_id).consensus():
            yield from self.send_a2a_transaction(payload)
            yield from self.wait_until_round_end()
        self.set_done()


class SubgraphQueryRoundBehaviour(AbstractRoundBehaviour):
    """SubgraphQueryRoundBehaviour"""

    initial_behaviour_cls = PrepareSubgraphQueryBehaviour
    abci_app_cls = SubgraphQueryAbciApp  # type: ignore
    behaviours: Set[Type[BaseBehaviour]] = [CollectedSubgraphResponseBehaviour, PrepareSubgraphQueryBehaviour]
