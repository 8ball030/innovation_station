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

import json
from abc import ABC
from typing import Generator, Set, Type, cast

from packages.valory.skills.abstract_round_abci.base import AbstractRound
from packages.valory.skills.abstract_round_abci.behaviours import AbstractRoundBehaviour, BaseBehaviour
from packages.zarathustra.skills.subgraph_query.models import Params
from packages.zarathustra.skills.subgraph_query.rounds import (
    CollectedSubgraphResponsePayload,
    CollectedSubgraphResponseRound,
    PrepareSubgraphQueryPayload,
    PrepareSubgraphQueryRound,
    SubgraphQueryAbciApp,
    SynchronizedData,
)


class SubgraphQueryBaseBehaviour(BaseBehaviour, ABC):
    """Base behaviour for the subgraph_query skill."""

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
            subgraph = yield from self._request_subgraph_data()
            sender = self.context.agent_address
            content = json.dumps({"subgraph": subgraph})
            payload = CollectedSubgraphResponsePayload(sender=sender, content=content)

        with self.context.benchmark_tool.measure(self.behaviour_id).consensus():
            yield from self.send_a2a_transaction(payload)
            yield from self.wait_until_round_end()

        self.set_done()

    def _request_subgraph_data(self):
        """Perform a http request to the subgraph api."""
        self.context.logger.info("Requesting subgraph data.")
        # url = self.context.params.config["subgraph_url"]
        url = """https://api.studio.thegraph.com/proxy/48202/asdad/v0.0.1/graphql?query=%0A++++%23%0A++++%23+Welcome+to+The+GraphiQL%0A++++%23%0A++++%23+GraphiQL+is+an+in-browser+tool+for+writing%2C+validating%2C+and%0A++++%23+testing+GraphQL+queries.%0A++++%23%0A++++%23+Type+queries+into+this+side+of+the+screen%2C+and+you+will+see+intelligent%0A++++%23+typeaheads+aware+of+the+current+GraphQL+type+schema+and+live+syntax+and%0A++++%23+validation+errors+highlighted+within+the+text.%0A++++%23%0A++++%23+GraphQL+queries+typically+start+with+a+%22%7B%22+character.+Lines+that+start%0A++++%23+with+a+%23+are+ignored.%0A++++%23%0A++++%23+An+example+GraphQL+query+might+look+like%3A%0A++++%23%0A++++%23+++++%7B%0A++++%23+++++++field%28arg%3A+%22value%22%29+%7B%0A++++%23+++++++++subField%0A++++%23+++++++%7D%0A++++%23+++++%7D%0A++++%23%0A++++%23+Keyboard+shortcuts%3A%0A++++%23%0A++++%23++Prettify+Query%3A++Shift-Ctrl-P+%28or+press+the+prettify+button+above%29%0A++++%23%0A++++%23+++++Merge+Query%3A++Shift-Ctrl-M+%28or+press+the+merge+button+above%29%0A++++%23%0A++++%23+++++++Run+Query%3A++Ctrl-Enter+%28or+press+the+play+button+above%29%0A++++%23%0A++++%23+++Auto+Complete%3A++Ctrl-Space+%28or+just+start+typing%29%0A++++%23%0A++"""
        query = self.synchronized_data.subgraph_query
        data = json.dumps({"query": query})
        response = yield from self.get_http_response(
            method="GET",
            url=url,
            content=data.encode("utf-8"),
            headers={"Content-Type": "application/json"},
        )
        response_data = json.loads(response.body)["data"]
        self.context.logger.info("Received subgraph data!")
        return response_data


class PrepareSubgraphQueryBehaviour(SubgraphQueryBaseBehaviour):
    """PrepareSubgraphQueryBehaviour"""

    matching_round: Type[AbstractRound] = PrepareSubgraphQueryRound

    def async_act(self) -> Generator:
        """Do the act, supporting asynchronous execution."""

        with self.context.benchmark_tool.measure(self.behaviour_id).local():
            # query = self.context.params.config["subgraph_query"]
            query = """query MyQuery { createUnits(first: 10) { id transactionHash unitHash unitId } createServices(first: 10) { id serviceId transactionHash } }"""
            sender = self.context.agent_address
            payload = PrepareSubgraphQueryPayload(sender=sender, content=query)

        with self.context.benchmark_tool.measure(self.behaviour_id).consensus():
            yield from self.send_a2a_transaction(payload)
            yield from self.wait_until_round_end()

        self.set_done()


class SubgraphQueryRoundBehaviour(AbstractRoundBehaviour):
    """SubgraphQueryRoundBehaviour"""

    initial_behaviour_cls = PrepareSubgraphQueryBehaviour
    abci_app_cls = SubgraphQueryAbciApp  # type: ignore
    behaviours: Set[Type[BaseBehaviour]] = [CollectedSubgraphResponseBehaviour, PrepareSubgraphQueryBehaviour]
