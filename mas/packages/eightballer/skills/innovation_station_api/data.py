"""
Dummy data for testing.
"""
from aea.configurations.constants import AGENT, CONNECTION, CONTRACT, PROTOCOL, SERVICE, SKILL

AUTHORS = {
    0: {
        "name": "eightballer",
    }
}

PROTOCOLS = {
    1: {
        "is_minted": False,
        "name": "http",
        "author": "eightballer",
        "version": "0.1.0",
        "type": "protocol",
        "description": "This is a protocol for http.",
        "dependencies": [],
        "protocol_specification_id": "eightballer/http:0.1.0",
    },
    2: {
        "is_minted": False,
        "output": {
            "name": "{author}/{name}:{version}",
            "description": "description",
            "code_uri": "ipfs://{ipfs_hash}",
            "image": "ipfs://{ipfs_hash}",
            "attributes": [{"trait_type": "version", "value": "[{name}]"}],
        },
        "name": "websockets",
        "author": "eightballer",
        "version": "0.1.0",
        "type": "protocol",
        "description": "This is a protocol for websockets.",
        "dependencies": [],
        "protocol_specification_id": "eightballer/http:0.1.0",
    },
    0: {
        "is_minted": True,
        "output": {
            "name": "{author}/{name}:{version}",
            "description": "description",
            "code_uri": "ipfs://{ipfs_hash}",
            "image": "ipfs://{ipfs_hash}",
            "attributes": [{"trait_type": "version", "value": "[{name}]"}],
        },
        "name": "abci",
        "author": "eightballer",
        "version": "0.1.0",
        "type": "protocol",
        "description": "This is a protocol for websockets.",
        "dependencies": [],
        "protocol_specification_id": "eightballer/http:0.1.0",
    },
}

CONTRACTS = {
    0: {
        "name": "eightballer",
        "author": "eightballer",
        "version": "0.1.0",
        "type": "contract",
        "description": "This is a contract for eightballer.",
        "dependencies": [],
    }
}

CONNECTIONS = {
    0: {
        "name": "http_server",
        "author": "eightballer",
        "version": "0.1.0",
        "type": "connection",
        "description": "This is a connection for http_server.",
        "dependencies": [],
    }
}


SKILLS = {
    0: {
        "name": "innovation_station_api",
        "author": "eightballer",
        "version": "0.1.0",
        "type": "skill",
        "description": "This is a skill for innovation_station_api.",
        "dependencies": [],
    }
}

SERVICES = {
    0: {
        "name": "innovation_station",
        "author": "eightballer",
        "version": "0.1.0",
        "type": "service",
        "description": "This is a service for innovation_station.",
        "dependencies": [],
    }
}
AGENTS = {
    0: {
        "name": "innovation_station",
        "author": "eightballer",
        "version": "0.1.0",
        "type": "agent",
        "description": "This is a agent for innovation_station.",
        "dependencies": [],
    }
}


COMPONENT_TO_DATA = {
    "authors": AUTHORS,
    PROTOCOL: PROTOCOLS,
    CONNECTION: CONNECTIONS,
    CONTRACT: CONTRACTS,
    SKILL: SKILLS,
    AGENT: AGENTS,
    SERVICE: SERVICES,
}

CHAINS = {1: COMPONENT_TO_DATA.copy(), 2: COMPONENT_TO_DATA.copy()}
