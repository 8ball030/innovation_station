"""
Chaine abci composing the skills of the innovation station.

"""
from packages.valory.skills.abstract_round_abci.abci_app_chain import (
    AbciAppTransitionMapping,
    chain,
)
from packages.valory.skills.registration_abci.rounds import (
    AgentRegistrationAbciApp,
    FinishedRegistrationRound,
    RegistrationStartupRound,
)
from packages.valory.skills.reset_pause_abci.rounds import (
    FinishedResetAndPauseErrorRound,
    FinishedResetAndPauseRound,
    ResetAndPauseRound,
    ResetPauseAbciApp,
)
from packages.eightballer.skills.innovation_abci.rounds import (
    PrepareSubgraphQueryRound,
    FinalizedSubgraphQueryRound,
    FailedSubgraphQueryRound,
    SubgraphQueryAbciApp,
)

abci_app_transition_mapping: AbciAppTransitionMapping = {
    FinishedRegistrationRound: PrepareSubgraphQueryRound,
    FailedSubgraphQueryRound: ResetAndPauseRound,
    FinalizedSubgraphQueryRound: ResetAndPauseRound,
    FinishedResetAndPauseRound: PrepareSubgraphQueryRound,
    FinishedResetAndPauseErrorRound: RegistrationStartupRound,
}

ChainedInnovationAbciApp = chain(
    (
        AgentRegistrationAbciApp,
        SubgraphQueryAbciApp,
        ResetPauseAbciApp,
    ),
    abci_app_transition_mapping,
)