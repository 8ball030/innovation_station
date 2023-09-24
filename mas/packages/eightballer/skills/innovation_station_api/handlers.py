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

"This package contains a scaffold of a handler."
import asyncio

import json
from typing import cast

from aea.skills.base import Handler

from packages.eightballer.protocols.http.message import HttpMessage
from packages.eightballer.skills.innovation_station_api.strategy import Strategy
from packages.eightballer.skills.innovation_station_api.dialogues import HttpDialogue
from packages.eightballer.skills.innovation_station_api.data import COMPONENT_TO_DATA, CHAINS
from packages.eightballer.skills.innovation_station_api.llm_workflows.protocol import generate as generate_protocol

from aea.configurations.constants import (
    PROTOCOL,
    CONNECTION,
    CONTRACT,
    SKILL,
    AGENT,
    SERVICE,

)

def echo_message(message) -> None:
    """Echo a message."""
    print("Received message: {}".format(message))

COMPONENT_TO_WORKFLOW_MAPPING = {
    "authors": echo_message,
    PROTOCOL: generate_protocol,
    CONNECTION: echo_message,
    CONTRACT: echo_message,
    SKILL: echo_message,
    AGENT: echo_message,
    SERVICE: echo_message,
}
class BaseHandler(Handler):
    """This class scaffolds a handler."""

    SUPPORTED_PROTOCOL = HttpMessage.protocol_id

    def get_headers(self, msg):
        """

        """
        cors_headers = "Access-Control-Allow-Origin: *\n"
        cors_headers += "Access-Control-Allow-Methods: GET,POST\n"
        cors_headers += "Access-Control-Allow-Headers: Content-Type,Accept\n"
        return cors_headers + msg.headers

    def handle(self, message: HttpMessage) -> None:
        """
        Implement the reaction to an envelope.

        :param message: the message
        """
        self.context.logger.debug("Handling new http connection message in skill")

        message = cast(HttpMessage, message)

        dialogue = self.context.http_dialogues.update(message)
        return self.handle_static_http_request(message, dialogue)

    def handle_static_http_request(self, message: HttpMessage, dialogue: HttpDialogue) -> None:
        """
        We handle the http request to return the necessary files.
        """
        # we are serving the frontend http://localhost:8000/

        path = "/".join(message.url.split("/")[3:])
        if path == "":
            path = "index.html"
        content = self.strategy.routes.get(path)
        # we want to extract the path from the url
        self.context.logger.info("Received request for path: {}".format(path))

        status_code = 200
        if path is None or content is None:
            self.context.logger.debug("Context not found for path: {}".format(path))
            content = b"Not found!"
            status_code = 404

        # as we are serving the frontend, we need to set the headers accordingly
        # X-Content-Type-Options: nosniff
        # we now set headers for the responses
        headers = message.headers
        if path.endswith(".html"):
            headers = "Content-Type: text/html; charset=utf-8\n"
        elif path.endswith(".js"):
            headers = "Content-Type: application/javascript; charset=utf-8\n"
        elif path.endswith(".css"):
            headers = "Content-Type: text/css; charset=utf-8\n"
        elif path.endswith(".png"):
            headers = "Content-Type: image/png\n"
        response_msg = dialogue.reply(
            performative=HttpMessage.Performative.RESPONSE,
            target_message=message,
            status_code=status_code,
            headers=headers + self.get_headers(message),
            version=message.version,
            status_text="OK",
            body=content,
        )
        return response_msg




class HttpHandler(BaseHandler):

    def add_data(self, route, prompt, dialogue, chain_id):
        """
        Add new data to the data from the component.
        """
        chain_data = CHAINS.get(chain_id)
        if chain_data is None:
            return b"Not found!"
        
        data = chain_data.get(route)
        if data is None:
            return b"Not found!"
        workflow = COMPONENT_TO_WORKFLOW_MAPPING.get(route)
        if workflow is None:
            return b"Not found!"
        self.context.logger.info("Adding data to component...")
        new_id = len(data)
        prompt['id'] = new_id
        data[new_id] = prompt

        if "prompt" in prompt:
            self.submit_workflow(workflow, 
                prompt, 
                callback=lambda result: data.update(result),
                data=data,
                chain_id=chain_id
            )
        return json.dumps(data).encode("utf-8")

    def get_data(self, route, id, chain_id):
        """
        Retieve the data from the component.
        """
        chain_data = CHAINS.get(int(chain_id))
        if chain_data is None:
            self.context.logger.info("Chain id not found: {}".format(chain_id))
            breakpoint()
            return b"Chain id  Not found!"
        
        data = chain_data.get(route)
        if data is None:
            return b"Route data for chain Not found!"
        if id is None:
            return json.dumps(data).encode("utf-8")
        else:
            return json.dumps(data.get(int(id))).encode("utf-8")

    def submit_workflow(self, workflow, prompt, callback, data=None, chain_id=None):
        """
        Submit a new workflow the llm.
        This an async operation.
        """
        self.context.logger.info("Submitting workflow to llm...")
        task = (workflow, prompt, callback, data, chain_id)
        self.strategy.pending_tasks.append(task)
        self.context.logger.info("Workflow submitted to llm.")

    def setup(self) -> None:
        "Set up the handler."
        self.strategy = cast(Strategy, self.context.strategy)

    def handle_post(self, route, dialogue=None, id=None, prompt=None , chain_id=None):
        "handle get protocol"
        self.context.logger.info("Handling post for route: {}".format(route))

        workflow = COMPONENT_TO_WORKFLOW_MAPPING.get(route)
        if workflow is None:
            self.context.logger.info("Received unexpected route: {}".format(route))
            status_code = 404
            body = b"Not found!"
        
        else:
            status_code = 201
            self.add_data(route, prompt, dialogue, chain_id)
            id = len(CHAINS.get(chain_id).get(route)) - 1
            body = self.get_data(route, id=id, chain_id=str(chain_id))

        msg = dialogue.reply(
            performative=HttpMessage.Performative.RESPONSE,
            target_message=dialogue.last_incoming_message,
            status_code=status_code,
            headers="Content-Type: application/json\n" + self.get_headers(dialogue.last_incoming_message),
            version="",
            status_text="OK",
            body=body,
        )
        return msg

    def handle_get(self, route, id=None, dialogue=None, chain_id=None):
        "handle get protocol"
        workflow = COMPONENT_TO_WORKFLOW_MAPPING.get(route)
        self.context.logger.info("Received get for route: {}".format(route))
        if workflow is None:
            self.context.logger.info("Received unexpected route: {}".format(route))
            status_code=404
            body = b"Not found!"
            status_text="Not found!"
        else:
            status_code = 200
            status_text="OK"
            body = self.get_data(route, id, str(chain_id))
        msg = dialogue.reply(
            performative=HttpMessage.Performative.RESPONSE,
            target_message=dialogue.last_incoming_message,
            headers="Content-Type: application/json\n" + self.get_headers(dialogue.last_incoming_message),
            version="",
            body=body,
            status_code=status_code,
            status_text=status_text,
        )
        return msg
        

    def teardown(self) -> None:
        "Tear down the handler."

    def handle(self, message):
        "main handler method"
        static_response = super().handle(message)
        if static_response.status_code != 404:
            return self.context.outbox.put_message(static_response)

        url = message.url
        try:
            chain_id = str(url.split('?')[1].split('=')[1])
        except:
            chain_id = 1
        url = url.split('?')[0]
        parts = url.split('/')
        parts = [part for part in parts if part != '']
        dialogue = self.context.http_dialogues.update(message)
        if len(parts) == 3 and message.method.lower() == "post":
            body = json.loads(message.body.decode("utf-8"))
            route = parts[-1]
            msg = self.handle_post(route=route, dialogue=dialogue, prompt=body, chain_id=chain_id)
        elif message.method.lower() == "get":
            if len(parts) == 3:
                route = parts[-1]
                id = None
            else:
                route = parts[-2]
                id = parts[-1]
            msg = self.handle_get(route, dialogue=dialogue, id=id, chain_id=chain_id)
        else:
            msg = self.handle_unexpected_message(message, dialogue, b"Not found! ")
        self.context.logger.info("Sending response: {}".format(msg))
        return self.context.outbox.put_message(msg)

    def handle_unexpected_message(self, message, dialogue, body):
        "handler for unexpected messages"
        self.context.logger.info("received unexpected message: {}".format(message))
        msg = dialogue.reply(
            performative=HttpMessage.Performative.RESPONSE,
            target_message=dialogue.last_incoming_message,
            headers="Content-Type: application/json\n" + self.get_headers(message),
            version="",
            body=body,
            status_code=500,
            status_text="Internal Server Error",
        )
        return msg