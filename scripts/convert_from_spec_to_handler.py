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
        self.context.logger.info("received unexpected message: {}".format(message))
        raise NotImplementedError 
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
    SUPPORTED_PROTOCOL = HttpMessage.protocol_id  # type: Optional[str]
    def setup(self) -> None:
        "Set up the handler."
        self.strategy = cast(Strategy, self.context.strategy)

    def handle_get(self, route, id=None):
        "handle get protocol"
        raise NotImplementedError

    def handle_post(self, route, id, body):
        "handle get protocol"
        raise NotImplementedError

    def teardown(self) -> None:
        "Tear down the handler."
        pass

"""

HANDLER_METHOD_TEMPLATE = """
    def handle(self, message):
        "main handler method"
        url = message.url
        parts = url.split('/')
        if len(parts) == 3:
            route = parts[-2]
            id = parts[-1]
            body = json.loads(message.body.decode("utf-8"))
            return self.handle_post(route, id, body)
        elif len(parts) == 2:
            route = parts[1]
            return self.handle_get(route)
        return self.handle_unexpected_message(message)
        {unexpected_message_handler}
"""    

PATH_FILTER_TEMPLATE = """
        if filter == "{path}":
            return self.{method_filters}{route}(message)
"""


METHOD_FILTER_TEMPLATE = """
        if message.method == "{method}":
            self.context.logger.info("received message of type {method}")
            raise NotImplementedError 
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
    return HANDLER_CODE

from pathlib import Path
SKILL_DIRECTORY = Path("mas/innovation_station/skills/innovation_station_api")

DIALOGUES_CODE ="""
# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2022 Valory AG
#   Copyright 2018-2021 Fetch.AI Limited
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

# we do a backslash here like so:
\"\"\"
This module contains the classes required for dialogue management.

- DefaultDialogue: The dialogue class maintains state of a dialogue of type default and manages it.
- DefaultDialogues: The dialogues class keeps track of all dialogues of type default.
- HttpDialogue: The dialogue class maintains state of a dialogue of type http and manages it.
- HttpDialogues: The dialogues class keeps track of all dialogues of type http.


\"\"\"

from typing import Any

from aea.protocols.base import Address, Message
from aea.protocols.dialogue.base import Dialogue as BaseDialogue
from aea.skills.base import Model

from packages.eightballer.protocols.http.dialogues import (
    HttpDialogue as BaseHttpDialogue,
)
from packages.eightballer.protocols.http.dialogues import (
    HttpDialogues as BaseHttpDialogues,
)

HttpDialogue = BaseHttpDialogue


class HttpDialogues(Model, BaseHttpDialogues):
    "The dialogues class keeps track of all dialogues."

    def __init__(self, **kwargs: Any) -> None:
        "Initialize the Dialogues class."
        Model.__init__(self, **kwargs)

        def role_from_first_message(  # pylint: disable=unused-argument
            message: Message, receiver_address: Address
        ) -> BaseDialogue.Role:
            \"\"\"
            Infer the role of the agent from an incoming/outgoing first message.

            :param message: an incoming/outgoing first message
            :param receiver_address: the address of the receiving agent
            :return: The role of the agent
            \"\"\"
            del message, receiver_address
            return BaseHttpDialogue.Role.SERVER

        BaseHttpDialogues.__init__(
            self,
            self_address=str(self.skill_id),
            role_from_first_message=role_from_first_message,
        )

"""


def update_skill_yaml():
    """
    Update the skill.yaml file
    """
    with open(SKILL_DIRECTORY/'skill.yaml', 'r') as f:
        # we want to keep the order of the yaml file.
        skill_yaml = yaml.load(f, Loader=yaml.FullLoader)

    skill_yaml['protocols'] = [
        "eightballer/http:0.1.0:bafybeia2yjjpa57ihbfru54lvq3rru5vtaomyor3fn4zz4ziiaum5yywje",
    ]
    skill_yaml['behaviours'] = {}
    del skill_yaml['handlers']
    skill_yaml['handlers'] = {
        "http_handler": {
            "args": {},
            "class_name": "HttpHandler",
        }
    }
    skill_yaml['models'] = {
        "strategy": {
            "args": {},
            "class_name": "Strategy",
        },
        "http_dialogues": {
            "args": {},
            "class_name": "HttpDialogues",
        }
    }

    with open(SKILL_DIRECTORY/'skill.yaml', 'w') as f:
        yaml.safe_dump(skill_yaml, f, sort_keys=False)


def move_and_update_my_model(spec, author):
    """
    Reads in the my_model.py file and updates it.
    We replace the name MyModel with the name Strategy.
    """
    if not (SKILL_DIRECTORY/'my_model.py').exists():
        return

    with open(SKILL_DIRECTORY/'my_model.py', 'r') as f:
        strategy_code = f.read()
    strategy_code = strategy_code.replace('MyModel', 'Strategy')

    # we now remove the my_model.py file
    os.remove(SKILL_DIRECTORY/'my_model.py')
    # we now create the strategy.py file
    strategy_file = Path(SKILL_DIRECTORY) / 'strategy.py'
    with open(strategy_file, 'w') as f:
        f.write(strategy_code)

def remove_behaviours():
    """
    Remove the behaviours
    """
    if not (SKILL_DIRECTORY/'behaviours.py').exists():
        return
    os.remove(SKILL_DIRECTORY/'behaviours.py')

def create_dialogues(spec, author):
    """
    Create the dialogues
    """
    skill_name = spec['info']['title'].replace(' ', '_')
    dialogues_file = Path(SKILL_DIRECTORY) / 'dialogues.py'
    with open(dialogues_file, 'w') as f:
        f.write(DIALOGUES_CODE)
if __name__ == '__main__':
    spec = read_spec_file('open_api_3_spec.yaml')
    author = 'eightballer'
    handler_code = generate_handler_code(spec, author)
    handler_file = Path(SKILL_DIRECTORY) / 'handlers.py'
    with open(handler_file, 'w') as f:
        f.write(handler_code)

    update_skill_yaml()
    create_dialogues(spec, author)
    move_and_update_my_model(spec, author)
    remove_behaviours()
