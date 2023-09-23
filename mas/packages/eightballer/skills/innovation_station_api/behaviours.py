"""
The following is a simple ticker behaviour which awaits for the rsults
from the pending tasks.
If then updates the data the handlers data component.
"""
from typing import cast
from asyncio import Task
from aea.skills.behaviours import TickerBehaviour

from packages.eightballer.skills.innovation_station_api.strategy import Strategy
from threading import Thread


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
            self.context.logger.info("Pending tasks completed.")
            for task in self.context.strategy.pending_tasks:
                if task.done():
                    self.context.logger.info("Task is done.")
                    self.context.logger.info("Updating data...")
                    result = task.result()
                    callback = task.callback 
                    if callback:
                        output = {"output": result}
                        callback(output)
                    self.context.logger.info(f"Task result: {result}")
                    self.context.strategy.pending_tasks.remove(task)

    def teardown(self) -> None:
        """Teardown the behaviour."""
        self.context.logger.info("Pending tasks behaviour: teardown method called.")
