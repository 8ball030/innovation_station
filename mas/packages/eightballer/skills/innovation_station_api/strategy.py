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
import os
from pathlib import Path
from glob import glob

from aea.cli.utils.config import get_ipfs_node_multiaddr
from aea.skills.base import Model
from aea_cli_ipfs.ipfs_utils import DownloadError, IPFSTool

DEFAULT_FRONTEND_DIR = "./www"
DEFAULT_LOG_FILE = "log.txt        
        

        
        elif all(["OPENAI_API_KEY" not in os.environ,
        "SKILL_INNOVATION_STATION_API_MODELS_STRATEGY_ARGS_FRONTEND_OPENAI_API_KEY" not in os.environ]):
            raise ValueError("OPENAI_API_KEY environment variable not set.")
        
        if os.environ.get("OPENAI_API_KEY") is None:
            raise ValueError("OPENAI_API_KEY environment variable not set.")

class Strategy(Model):
    """This class scaffolds a model."""

    frontend_enabled: bool = True
    ipfs_hash: str = "bafybeifh7ecn6ckf5wlabz7tta2x6z6dlr4zbxqg6eww5js25yxboqyll4"
    frontend_directory: str = DEFAULT_FRONTEND_DIR
    routes: dict = {}

    def __init__(self, **kwargs):
        """Initialize the model."""
        frontend_config = kwargs.pop("frontend", {})
        self.frontend_enabled = frontend_config.get("enabled", self.frontend_enabled)
        self.ipfs_hash = frontend_config.get("ipfs_hash", self.ipfs_hash)
        openai_key = frontend_config.get("openai_key", None)
        if openai_key is not None:
            os.environ["OPENAI_API_KEY"] = openai_key
        if os.environ.get("OPENAI_API_KEY") is None:
            if "SKILL_INNOVATION_STATION_API_MODELS_STRATEGY_ARGS_FRONTEND_OPENAI_API_KEY" not in os.environ:
                raise ValueError("OPENAI_API_KEY environment variable not set.")
            os.environ["OPENAI_API_KEY"] = os.environ.get("SKILL_INNOVATION_STATION_API_MODELS_STRATEGY_ARGS_FRONTEND_OPENAI_API_KEY")

        self.frontend_directory = Path(
            frontend_config.get("directory", self.frontend_directory)
        )

        super().__init__(**kwargs)
        self.pending_tasks = []

    def setup(self) -> None:
        """
        Configure the frontend.
        """
        if self.frontend_enabled:
            self.context.logger.info("Setting up frontend...")
            self.setup_frontend()
            self.context.logger.info("Frontend setup complete.")

    def setup_frontend(self) -> None:
        """
        We pull the frontend from IPFS.
        """
        ipfs_tool = IPFSTool(get_ipfs_node_multiaddr())
        try:
            ipfs_tool.download(self.ipfs_hash, self.frontend_directory)
        except DownloadError as e:
            self.context.logger.error(str(e))
            self.context.logger.error("Failed to download frontend from IPFS.")
            return

        # we generate a mapping of routes based on all the files found in the frontend directory
        self.context.logger.info("Generating routes...")
        self.routes = self.generate_routes()
        self.context.logger.info("Routes generated.")
        self.context.logger.info(
            "Please visit http://localhost:26658 to view the frontend."
        )

    def generate_routes(self) -> dict:
        """
        We generate a mapping of routes based on all the files found in the frontend directory.
        We read the files into memory and store them in the routes dict.
        """
        routes = {}
        for path in glob(f"{self.frontend_directory}/**/*", recursive=True):
            data = Path(path)
            if data.is_file():
                route = data.relative_to(self.frontend_directory / "build")
                routes[str(route)] = data.read_bytes()
        return routes
