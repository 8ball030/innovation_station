"""
Tool to allow the user to create a protocol spec. using the OpenAI chat model.
"""

from llm_workflow.base import Workflow
from llm_workflow.models import OpenAIChat
from pathlib import Path

async def generate(initial_prompt: str) -> str:
    chat_assistant = OpenAIChat(model_name='gpt-4')
    def prompt_template(user_prompt: str) -> str:
        return "Use the users input and the examples in order to" \
            "create a proposal for a protocol that can be used to" \
            f":\n\n```{user_prompt}```"

    def prompt_enhancer(user_input: str) -> str:
        return "Take the user prompt improving it in order to ensure that " \
            "as many possible situations are considered. Errors can occur at any point." \
            """Example input: create a protocol representing a user interface interaction between a user and an agent. There should be a representation of a notification, requesting a user confirmation, a command from the user, a user confirmation. \n Example output: 
            Create a protocol representing a user interface interaction between a user and an agent.
            There should be representations of;
            - notifications from the agent.
            - the agent requesting a user confirmation.
            - a command from the user to the agent. 
            - a user confirmation.
            initialisation:
            - notification
            - user_command
            - request_confirmation
            replies:
            The valid responses to a request for a user confirmation are error, user_confirmation.
            THe valid responses to a command from the user to the agent are error, notification, request_confirmation.
            The valid responses to a user confirmation are end and notification
            The valid responses to a notification is end.
            *********************************************************************************************
            Example input : create a protocol representing arbitrage between multiple platforms.
            Example Output:
            There should be representations of;
            - arbitrage opportunity (should include available volume, references to the exchanges, prices)
            - rejected (rejection reason)
            - buy execution (exchange id, volume, price)
            - sell execution (exchange_id, volume, price)
            - arbitrage result
            initialisation:
            - arbitrage opportunity
            replies:
            - the valid response to the arbitrage opportunity is buy_execution or sell_execution or rejected
            - the valid reponse to buy_execution is sell_execution or arbitrage_result
            - the valid response to sell_execution is buy_execution or arbitrage_result
            *********************************************************************************************
            """ + f":\n\n```{user_input}```"

    def provide_one_shot_examples(past_input) -> str:
        """Provide one-shot examples to the model to improve its performance."""
        directory: Path = Path('vendor/eightballer/skills/innovation_station_api/examples')

        first_line = "here are a number of examples that can be used to as templates of what a protocol spec should look like:\n\n "
        seperator = "\n\n" + "="*80 + "\n\n"
        examples = []
        for file in directory.glob('*.yaml'):
            with open(file, 'r') as f:
                examples.append(f.read())
        return first_line + seperator.join(examples) + seperator + past_input

    def output_enhancer(user_input: str) -> str:
        return "Take the provided spec. and ensure that the following constraints are met. " \
            "Errors can occur at any of the replies. Return only the extracted yaml. Ensure that end is only used as the final speechact where appropriate" \
            f":\n\n```{user_input}```"

    def extract_code(_):
        """

        """
        return "return only the code from the previous output. ignore any other text or comments."

    # the output of the last task is returned by the workflow.
    workflow = Workflow(tasks=[
        prompt_template,            # modifies the user's prompt
        prompt_enhancer,            # modifies the user's prompt
        provide_one_shot_examples,  # provides one-shot examples to the model
        chat_assistant,
        output_enhancer,
        extract_code,
        chat_assistant,             # returns the chat response based on the improved prompt
    ])
    response = workflow(initial_prompt)
    return response
