"""
We simple parse the openapi3 spec.
We then generate the handler code.
"""

import os
import yaml

def read_spec_file(spec_file):
    """
    Read the spec file into a dictionary
    """
    with open(spec_file, 'r') as stream:
        try:
            spec = yaml.safe_load(stream)
        except yaml.YAMLError as exc:
            print(exc)
    return spec

UNEXPECTED_MESSAGE_HANDLER_TEMPLATE = """
    def handle_unexpected_message(self, message):
        "handler for unexpected messages"
        raise NotImplementedError, "handler for unexpected messages not implemented"
"""
HANDLER_HEADER_TEMPLATE = """
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

from typing import Optional, cast

from aea.protocols.base import Message
from aea.skills.base import Handler

from packages.{author}.protocols.http.message import HttpMessage
from packages.{author}.skills.{skill_name}.dialogues import HttpDialogue
from packages.{author}.skills.{skill_name}.strategy import Strategy

class HttpHandler(Handler):
    supported_protocol = HttpMessage.protocol_id  # type: Optional[str]
    def setup(self) -> None:
        "Set up the handler."
        self.strategy = cast(Strategy, self.context.strategy)

    def teardown(self) -> None:
        "Tear down the handler."
        pass

"""

HANDLER_METHOD_TEMPLATE = """
    def handle(self, message):
        "main handler method"
        filter = message.url
        {message_filters}
        return self.handle_unexpected_message(message)
        {operation_handler}
        {unexpected_message_handler}
"""    

PATH_FILTER_TEMPLATE = """
        if filter == "{path}":
            return self.{method_filters}{route}(message)
"""


METHOD_FILTER_TEMPLATE = """
        if message.method == "{method}":
            raise NotImplementedError, "method not implemented"
"""



def generate_handler_code(spec, author):
    """
    Generate the handler code
    """
    # we first generate the initial handler message.
    # We then create a handler for each path.
    # We then create a handler for each operation.
    # We then create a handler for each response.
    # 

    paths = spec['paths']
    message_filters = ''
    path_handlers = ''
    for path in paths:
        path_spec = paths[path]
        for method in path_spec:
            method_spec = path_spec[method]
            message_filters += PATH_FILTER_TEMPLATE.format(
                path = path,
                method_filters = method,
                route = path.replace('/', '_').replace('{', '').replace('}', ''),
            )
    main_handler_code = HANDLER_METHOD_TEMPLATE.format(
        message_filters = message_filters,
        operation_handler = '',
        unexpected_message_handler = UNEXPECTED_MESSAGE_HANDLER_TEMPLATE,
    )
    HANDLER_CODE = HANDLER_HEADER_TEMPLATE.format(
        author = author,
        skill_name = spec['info']['title'].replace(' ', '_'),
    )
    HANDLER_CODE += main_handler_code
    print(HANDLER_CODE)

if __name__ == '__main__':
    spec = read_spec_file('open_api_3_spec.yaml')
    author = 'eightballer'
    generate_handler_code(spec, author)