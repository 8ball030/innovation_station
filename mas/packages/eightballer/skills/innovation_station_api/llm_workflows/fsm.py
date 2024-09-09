"""
Workflow to create a new fsm spec.
"""

from copy import deepcopy
import tempfile
from pathlib import Path

# pylint: disable=R0914
import click
import yaml
from aea.helpers.cid import to_v1
from aea_cli_ipfs.ipfs_utils import IPFSTool
from llm_workflow.base import Workflow
from llm_workflow.models import OpenAIChat


def generate(initial_prompt: str) -> str:
    """Generates a protocol spec. using the OpenAI chat model."""

    chat_assistant = OpenAIChat(model_name='gpt-3.5-turbo-16k')

    def prompt_template(user_prompt: str) -> str:
        """A templating function to provide a prompt to the user."""
        return (
            "Use the users input and the examples in order to"
            "create a proposal for a finite state machine representing control logic to be used as a multi agent system."
            f":\n\n```{user_prompt}```"
        )

    def prompt_enhancer(user_input: str) -> str:
        """Enhance the user's prompt."""
        return (
            f"""
            Take the user prompt improving it in order to ensure that as many possible situations are considered. No majority can occur at any point.
            SAMPLE INPUT:
            ***********************************************************************************************
            input:
                please generate a workflow represents executing arbitrage between 2 decentralised exechange on 2 different chains
            output: 
                please generate a workflow represents executing arbitrage between decentralised exechanges on different chains. 
                    We should have states for 
                        - collect exchange data
                        - analyse data
                        - execute buy
                        - execute sell
                        - successful arbitrage
                        - failed arbitrage
                        - no opportunities.
                    We should have events of;
                        - done
                        - failed
                        - no majority
                        - round timout
                        - no arbitrage opportunities.
                    the happy path is;
                        collect exchange data -> analyse data
                        analyse data -> execute buy
                        execute buy -> execute sell
                        execute sell -> successful arbitrage
                    some of the unhappy pathes are;
                        unhappy_path_1:
                            collect exchange data -> analyse data
                            analyse data -> no opportunities
                        unhappy_path_2:
                            collect exchange data -> analyse data
                            analyse data -> execute buy
                            execute buy -> failed arbitrage
                        unhappy_path_3:
                            collect exchange data -> analyse data
                            analyse data -> execute buy
                            execute buy -> execute sell
                            execute sell -> failed arbitrage
                        unhappy_path_4:
                            collect exchange data -> failed_collection
            ***********************************************************************************************
            input:
                please generate a workflow represents a decentralised oracle.
            output:
                please generate a workflow represents a decentralised oracle. We should have states for;
                    - collect data
                    - aggregate data
                    - prepare submission
                    - submit data
                we should have events of;
                    - done
                    - failed
                    - no majority
                    - round timeout
                the happy path is;
                    collect data -> aggregate data
                    aggregate data -> prepare submission
                    prepare submission -> submit data
                some of the unhappy pathes are;
                    unhappy_path_1:
                        collect data -> aggregate data
                        aggregate data -> failed aggregation
                    unhappy_path_2:
                        collect data -> aggregate data
                        aggregate data -> prepare submission
                        prepare submission -> failed
            *********************************************************************************************** 
            input:
                {user_input}
            output:
            """
        )

    def provide_one_shot_examples(past_input) -> str:
        """Provide one-shot examples to the model to improve its performance."""
        directory: Path = Path(__file__).parent.parent / "examples" / "fsms"

        first_line = (
            "Here are a number of examples that can be used to as templates"
            + " of what a fsm spec should look like:\n\n "
            ""
        )
        seperator = "\n\n" + "=" * 80 + "\n\n"
        examples = []
        for file in directory.glob('*.yaml'):
            with open(file, 'r', encoding="utf8") as file_path:
                examples.append(file_path.read())
        if len(examples) == 0:
            raise ValueError("No examples found.")
        return first_line + seperator.join(examples) + seperator + past_input

    def output_enhancer(user_input: str) -> str:
        """Enhance the user's output."""
        return (
            """
            Take the provided spec. and ensure that the following constraints are met.
            No Majority events can occur at any round.
            Round timeouts can occur at any round.
            All states must be reachable.
            All states must ended in the word Round.
            All states must have a done event.
            All states must have a no majority event.
            All states must have a round timeout event.
            """
            f":\n\n```{user_input}```"
        )
    
    def extract_code(_):
        """Extract the code from the previous output."""
        return "return only the code from the previous output. ignore any other text or comments."
    
    def output_criticism(llm_input: str) -> str:
        """Provide criticism of the output."""
        return (
            """Provide criticism of the provided specification, return the criticism and the updated specification.
            SAMPLE BAD_SPEC:
                Example bad input:
                    alphabet_in:
                    - DONE
                    - FAILED
                    - NO_MAJORITY
                    - ROUND_TIMEOUT
                    - NO_OPPORTUNITIES
                    default_start_state: CollectExchangeDataRound
                    final_states:
                    - SuccessfulArbitrageRound
                    - FailedArbitrageRound
                    - NoOpportunitiesRound
                    label: ArbitrageExecutionAbciApp
                    start_states:
                    - CollectExchangeDataRound
                    states:
                    - CollectExchangeDataRound
                    - AnalyzeDataRound
                    - ExecuteBuyRound
                    - ExecuteSellRound
                    - SuccessfulArbitrageRound
                    - FailedArbitrageRound
                    - NoOpportunitiesRound
                    transition_func:
                      (CollectExchangeDataRound, DONE): AnalyzeDataRound
                      (CollectExchangeDataRound, FAILED): FailedArbitrageRound
                      (CollectExchangeDataRound, NO_MAJORITY): CollectExchangeDataRound
                      (CollectExchangeDataRound, ROUND_TIMEOUT): CollectExchangeDataRound
                      (AnalyzeDataRound, DONE): ExecuteBuyRound
                      (AnalyzeDataRound, FAILED): NoOpportunitiesRound
                      (AnalyzeDataRound, NO_MAJORITY): AnalyzeDataRound
                      (AnalyzeDataRound, ROUND_TIMEOUT): AnalyzeDataRound
                      (ExecuteBuyRound, DONE): ExecuteSellRound
                      (ExecuteBuyRound, FAILED): FailedArbitrageRound
                      (ExecuteBuyRound, NO_MAJORITY): ExecuteBuyRound
                      (ExecuteBuyRound, ROUND_TIMEOUT): ExecuteBuyRound
                      (ExecuteSellRound, DONE): SuccessfulArbitrageRound
                      (ExecuteSellRound, FAILED): FailedArbitrageRound
                      (ExecuteSellRound, NO_MAJORITY): ExecuteSellRound
                      (ExecuteSellRound, ROUND_TIMEOUT): ExecuteSellRound

                Example output:
                    criticial feedback here:
                        this is close, however, there are a number of issues.
                        1. the transition function from analyze data to NoOpportunitiesRound is incorrect.
                           It should be (AnalyzeDataRound, NO_OPPORTUNITIES): NoOpportunitiesRound
                        2. the no majority and round timeout rounds are not handled correctly. They should be all end in failed arbitrage round.
                        3. the no opportunities round should end in done.
                        4. the transition function from ANALYZE_DATA to FAILED_ARBITRAGE is incorrect. It should be (AnalyzeDataRound, FAILED): FailedArbitrageRound
                        5. we SHOULD ALSO have a NO_OPPORTUNITIES transition for the analyze data round.
                            This will allow us to handle the case where there are no opportunities.
                    updated_spec:
                        alphabet_in:
                        - DONE
                        - FAILED
                        - NO_MAJORITY
                        - ROUND_TIMEOUT
                        - NO_OPPORTUNITIES
                        default_start_state: CollectExchangeDataRound
                        final_states:
                        - SuccessfulArbitrageRound
                        - FailedArbitrageRound
                        - NoOpportunitiesRound
                        label: ArbitrageExecutionAbciApp
                        start_states:
                        - CollectExchangeDataRound
                        states:
                        - CollectExchangeDataRound
                        - AnalyzeDataRound
                        - ExecuteBuyRound
                        - ExecuteSellRound
                        - SuccessfulArbitrageRound
                        - FailedArbitrageRound
                        - NoOpportunitiesRound
                        transition_func:
                          (CollectExchangeDataRound, DONE): AnalyzeDataRound
                          (CollectExchangeDataRound, FAILED): FailedArbitrageRound
                          (CollectExchangeDataRound, NO_MAJORITY): CollectExchangeDataRound
                          (CollectExchangeDataRound, ROUND_TIMEOUT): CollectExchangeDataRound
                          (AnalyzeDataRound, DONE): ExecuteBuyRound
                          (AnalyzeDataRound, FAILED): FailedArbitrageRound
                          (AnalyzeDataRound, NO_MAJORITY): NoOpportunitiesRound
                          (AnalyzeDataRound, NO_OPPORTUNITIES): NoOpportunitiesRound
                          (AnalyzeDataRound, ROUND_TIMEOUT): FailedArbitrageRound
                          (ExecuteBuyRound, DONE): ExecuteSellRound
                          (ExecuteBuyRound, FAILED): FailedArbitrageRound
                          (ExecuteBuyRound, NO_MAJORITY): FailedArbitrageRound
                          (ExecuteBuyRound, ROUND_TIMEOUT): FailedArbitrageRound
                          (ExecuteSellRound, DONE): SuccessfulArbitrageRound
                          (ExecuteSellRound, FAILED): FailedArbitrageRound
                          (ExecuteSellRound, NO_MAJORITY): FailedArbitrageRound
                          (ExecuteSellRound, ROUND_TIMEOUT): FailedArbitrageRound
            ***********************************************************************************************

                Example bad input:
                    alphabet_in:
                    - DONE
                    - REMOVE_LIQUIDITY
                    - PROVIDE_LIQUIDITY
                    - SWAP
                    default_start_state: CollectPositionData
                    final_states:
                    - WithdrawLiquidity
                    - RemoveLiquidity
                    - SwapLiquidity
                    label: LiquidityPositionProviderAbciApp
                    start_states:
                    - CollectPositionData
                    states:
                    - CollectPositionData
                    - MakeDecision
                    - ProvideLiquidity
                    - WithdrawLiquidity
                    - RemoveLiquidity
                    - SwapLiquidity
                    transition_func:
                      (CollectPositionData, DONE): MakeDecision
                      (MakeDecision, REMOVE_LIQUIDITY): RemoveLiquidity
                      (MakeDecision, PROVIDE_LIQUIDITY): ProvideLiquidity
                      (MakeDecision, SWAP): SwapLiquidity
                      (ProvideLiquidity, DONE): WithdrawLiquidity
                      (WithdrawLiquidity, DONE): MakeDecision
                      (RemoveLiquidity, DONE): MakeDecision
                      (SwapLiquidity, DONE): MakeDecision
                Example output:
                    criticial feedback here:
                    - States do not end in `round`.
                    - No majority events are not handled correctly.
                    - Round timeout events are not handled correctly.
                    - No opportunities events is not included.
                    - withdraw and remove liquidity are the same thing.
                    - no final done state.
                    - no final failed state.
                    - no pricing data collection state.
                    - no swap event.

                    updated_spec:
                        alphabet_in:
                        - DONE
                        - FAILED
                        - NO_MAJORITY
                        - ROUND_TIMEOUT
                        - NO_OPPORTUNITIES
                        - PROVIDE_LIQUIDITY
                        - REMOVE_LIQUIDITY
                        default_start_state: CollectPositionData
                        final_states:
                        - SuccessfulLiquidityManagementRound
                        - FailedLiquidityManagementRound
                        - NoOpportunitiesRound
                        label: LiquidityPositionProviderAbciApp
                        start_states:
                        - CollectPriceDataRound
                        states:
                        - CollectPriceDataRound
                        - CollectPositionDataRound
                        - MakeDecisionRound
                        - ProvideLiquidityRound
                        - WithdrawLiquidityRound
                        - SwapLiquidityRound
                        - SuccessfulLiquidityManagementRound
                        - FailedLiquidityManagementRound
                        - NoOpportunitiesRound
                        transition_func:
                            (CollectPriceDataRound, DONE): CollectPositionDataRound
                            (CollectPriceDataRound, FAILED): FailedLiquidityManagementRound
                            (CollectPriceDataRound, NO_MAJORITY): FailedLiquidityManagementRound
                            (CollectPriceDataRound, ROUND_TIMEOUT): FailedLiquidityManagementRound
                            (CollectPositionDataRound, DONE): MakeDecisionRound
                            (CollectPositionDataRound, FAILED): FailedLiquidityManagementRound
                            (CollectPositionDataRound, NO_MAJORITY): FailedLiquidityManagementRound
                            (CollectPositionDataRound, ROUND_TIMEOUT): FailedLiquidityManagementRound
                            (MakeDecisionRound, NO_OPPORTUNITIES): NoOpportunitiesRound
                            (MakeDecisionRound, FAILED): FailedLiquidityManagementRound
                            (MakeDecisionRound, NO_MAJORITY): FailedLiquidityManagementRound
                            (MakeDecisionRound, ROUND_TIMEOUT): FailedLiquidityManagementRound
                            (MakeDecisionRound, PROVIDE_LIQUIDITY): ProvideLiquidityRound
                            (MakeDecisionRound, REMOVE_LIQUIDITY): RemoveLiquidityRound
                            (MakeDecisionRound, SWAP): SwapLiquidityRound
                            (MakeDecisionRound, NO_OPPORTUNITES): SuccessfulLiquidityManagementRound
                            (ProvideLiquidityRound, DONE): SuccessfulLiquidityManagementRound
                            (ProvideLiquidityRound, FAILED): FailedLiquidityManagementRound
                            (ProvideLiquidityRound, NO_MAJORITY): FailedLiquidityManagementRound
                            (ProvideLiquidityRound, ROUND_TIMEOUT): FailedLiquidityManagementRound
                            (WithdrawLiquidityRound, DONE): SuccessfulLiquidityManagementRound
                            (WithdrawLiquidityRound, FAILED): FailedLiquidityManagementRound
                            (WithdrawLiquidityRound, NO_MAJORITY): FailedLiquidityManagementRound
                            (WithdrawLiquidityRound, ROUND_TIMEOUT): FailedLiquidityManagementRound
                            (RemoveLiquidityRound, DONE): SuccessfulLiquidityManagementRound
                            (RemoveLiquidityRound, FAILED): FailedLiquidityManagementRound
                            (RemoveLiquidityRound, NO_MAJORITY): FailedLiquidityManagementRound
                            (RemoveLiquidityRound, ROUND_TIMEOUT): FailedLiquidityManagementRound
                            (SwapLiquidityRound, DONE): SuccessfulLiquidityManagementRound
                            (SwapLiquidityRound, FAILED): FailedLiquidityManagementRound
                            (SwapLiquidityRound, NO_MAJORITY): FailedLiquidityManagementRound
                            (SwapLiquidityRound, ROUND_TIMEOUT): FailedLiquidityManagementRound
            ***********************************************************************************************
            input:
            """
            f"\n```{llm_input}\n```"
        )

    def extract_code_2(user_input: str):
        """
        Extract the code from the previous output.
        """
        return f"return only the final code from the previous output. return the code between the blocks ignore any other text or comments. ensure that there are no backticks or other indicators which could stop the yaml being loaded.\n\n\n{user_input}"

    def validate_code(yaml_input: str):
        """
        Validate the code from the previous output. Ensure that all events present in the transition function are present in the alphabet.
        """
        return f"validate the code from the previous output. Ensure that all events present in the transition function are present in the alphabet return the updated spec.\n\n\n{yaml_input}"

    # the output of the last task is returned by the workflow.
    workflow = Workflow(
        tasks=[
            prompt_template,  # modifies the user's prompt
            prompt_enhancer,  # modifies the user's prompt
            provide_one_shot_examples,  # provides one-shot examples to the model
            chat_assistant,
            output_enhancer,
            extract_code,
            output_criticism,  # provides criticism of the output
            # output_enhancer,
            extract_code_2,
            chat_assistant,  # returns the chat response based on the improved prompt
        ]
    )

    def has_enough_information(updated_spec: str) -> str:
        """Request feedback from the user."""
        return (
            f"""
            {updated_spec}
            Does the updated spec contain enough information to be used as specififcation for a finite state machine?
            if it does return "YES" otherwise return "NO"
            """
        )

    question_workflow = Workflow(
        tasks=[
            has_enough_information,
            chat_assistant,
        ]
    )

    while 



    llm_response = workflow(initial_prompt)

    validation_workflow = Workflow(
        tasks=[
            validate_code,
            extract_code_2,
            chat_assistant,  # returns the chat response based on the improved prompt
        ]
    )

    critiqued_response = validation_workflow(llm_response)

    llm_response = critiqued_response

    try:
        data = yaml.safe_load_all(llm_response)
        for doc in data:
            if doc.get("name") is not None:
                name = doc.get("name")
            if doc.get("description") is not None:
                description = doc.get("description")
            if doc.get("author") is not None:
                author = doc.get("author")
            if doc.get("version") is not None:
                version = doc.get("version")
    except:  # pylint: disable=bare-except
        author = "eightballer"
        name = "protocol"
        version = "0.1.0"
        description = "This is a protocol spec. For the attestation station generated from {initial_prompt}"

    # we make a temp directory, write the protocol to it and return the path to the file.
    with tempfile.TemporaryDirectory() as tmpdirname:
        with open(f'{tmpdirname}/protocol.yaml', 'w', encoding="utf-8") as file_path:
            file_path.write(llm_response)
        response = IPFSTool().client.add(
            f"{tmpdirname}/protocol.yaml", pin=True, recursive=True, wrap_with_directory=False
        )
    ipfs_hash = to_v1(response["Hash"])

    print( llm_response)



@click.command()
@click.option("--prompt", prompt="Enter a prompt", help="The prompt to use to generate the protocol spec.")
def main(prompt):
    """The main function."""
    click.echo(generate(prompt))


if __name__ == "__main__":
    main()  # pylint: disable=no-value-for-parameter
