# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2023 eightballer
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

"""This package contains a scaffold of a model."""

from packages.eightballer.skills.innovation_abci.models import (
    Params as BaseParams,
)
from packages.eightballer.skills.innovation_station_chained_app.composition import ChainedInnovationAbciApp
from packages.valory.skills.abstract_round_abci.models import (
    BenchmarkTool as BaseBenchmarkTool,
)
from packages.valory.skills.abstract_round_abci.models import Requests as BaseRequests
from packages.valory.skills.abstract_round_abci.models import (
    SharedState as BaseSharedState,
)

class SharedState(BaseSharedState):
    """Keep the current shared state of the skill."""

    abci_app_cls = ChainedInnovationAbciApp


class Params(BaseParams):
    """Params."""


Requests = BaseRequests
BenchmarkTool = BaseBenchmarkTool