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

import json
from typing import cast

from aea.skills.base import Handler

from packages.eightballer.protocols.http.message import HttpMessage
from packages.eightballer.skills.innovation_station_api.strategy import Strategy
from packages.eightballer.skills.innovation_station_api.dialogues import HttpDialogue
from packages.eightballer.skills.innovation_station_api.data import COMPONENT_TO_DATA

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
    PROTOCOL: echo_message,
    CONNECTION: echo_message,
    CONTRACT: echo_message,
    SKILL: echo_message,
    AGENT: echo_message,
    SERVICE: echo_message,
}
class BaseHandler(Handler):
    """This class scaffolds a handler."""

    SUPPORTED_PROTOCOL = HttpMessage.protocol_id

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
            headers=headers,
            version=message.version,
            status_text="OK",
            body=content,
        )
        return response_msg


def get_data(route, id):
    data = COMPONENT_TO_DATA.get(route)
    if data is None:
        return b"Not found!"
    if id is None:
        return json.dumps(data).encode("utf-8")
    else:
        return json.dumps(data.get(int(id))).encode("utf-8")



class HttpHandler(BaseHandler):

    
    def setup(self) -> None:
        "Set up the handler."
        self.strategy = cast(Strategy, self.context.strategy)

    def handle_post(self, route, dialogue=None, id=None, prompt=None ):
        "handle get protocol"
        self.context.logger.info("Handling post for route: {}".format(route))

        workflow = COMPONENT_TO_WORKFLOW_MAPPING.get(route)
        if workflow is None:
            self.context.logger.info("Received unexpected route: {}".format(route))
            status_code = 404
            body = b"Not found!"
        
        else:
            status_code = 200
            body = get_data(route, id)

        msg = dialogue.reply(
            performative=HttpMessage.Performative.RESPONSE,
            target_message=dialogue.last_incoming_message,
            status_code=200,
            headers="Content-Type: application/json",
            version="",
            status_text="OK",
            body=body,
        )
        return msg

    def handle_get(self, route, id=None, dialogue=None):
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
            body = get_data(route, id)
        msg = dialogue.reply(
            performative=HttpMessage.Performative.RESPONSE,
            target_message=dialogue.last_incoming_message,
            headers="Content-Type: application/json",
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
        parts = url.split('/')
        parts = [part for part in parts if part != '']
        dialogue = self.context.http_dialogues.update(message)
        if len(parts) == 3 and message.method.lower() == "post":
            body = json.loads(message.body.decode("utf-8"))
            route = parts[-1]
            msg = self.handle_post(route=route, dialogue=dialogue, prompt=body)
        elif message.method.lower() == "get":
            if len(parts) == 3:
                route = parts[-1]
                id = None
            else:
                route = parts[-2]
                id = parts[-1]
            msg = self.handle_get(route, dialogue=dialogue, id=id)
        else:
            msg = self.handle_unexpected_message(message)
        return self.context.outbox.put_message(msg)

    def handle_unexpected_message(self, message, dialogue):
        "handler for unexpected messages"
        self.context.logger.info("received unexpected message: {}".format(message))
        msg = dialogue.reply(
            performative=HttpMessage.Performative.RESPONSE,
            target_message=dialogue.last_incoming_message,
            headers="Content-Type: application/json",
            version="",
            body=body,
            status_code=500,
            status_text="Internal Server Error",
        )
        return msg