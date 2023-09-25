"""
The following is a simple ticker behaviour which awaits for the rsults
from the pending tasks.
If then updates the data the handlers data component.
"""
from threading import Thread

from aea.skills.behaviours import TickerBehaviour


class PendingTasksBehaviour(TickerBehaviour):
    """
    class to await the results of the pending tasks.
    """

    def setup(self) -> None:
        """Set up the behaviour."""
        self.context.logger.info("Pending tasks behaviour: setup method called.")

    def act(self) -> None:
        """
        We await the results of the pending tasks.
        """
        if self.context.strategy.pending_tasks:
            self.context.logger.info("Awaiting results of pending tasks...")
            for task in self.context.strategy.pending_tasks:
                thread = Thread(target=self.submit_wf, args=task)
                thread.start()
                self.context.strategy.pending_tasks.remove(task)
            self.context.logger.info("Pending tasks completed.")

    def submit_wf(self, workflow, prompt, callback=None, data=None, req_id=None, chain_id=None) -> None:
        """
        Threaded process to check the llm.
        """
        self.context.logger.info("Starting task...")
        output = workflow(prompt)
        if callback:
            callback(data, chain_id, req_id, output)
        self.context.logger.info("Task is done.")
        self.context.logger.info(f"Task result: {output}")

    def teardown(self) -> None:
        """Teardown the behaviour."""
        self.context.logger.info("Pending tasks behaviour: teardown method called.")
