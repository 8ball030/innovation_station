# SQL CRUD Protocol

## Description

This is a protocol for communication between the agent and a SQL database.

## Specification

```yaml
---
name: sql_crud
author: zarathustra
version: 0.1.0
description: A protocol for SQL CRUD functionality.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: zarathustra/sql_crud:0.1.0
speech_acts:
  create:
    table_name: pt:str
    data: pt:dict[pt:str, pt:bytes]
  read:
    table_name: pt:str
    condition: pt:optional[pt:str]
  update:
    table_name: pt:str
    condition: pt:optional[pt:str]
    data: pt:dict[pt:str, pt:bytes]
  delete:
    table_name: pt:str
    condition: pt:optional[pt:str]
  result:
    result: pt:dict[pt:str, pt:bytes]
  error:
    error_code: ct:ErrorCode
    error_msg: pt:str
  end: { }
...
---
ct:ErrorCode: |
  enum ErrorCodeEnum {
      UNSUPPORTED_PROTOCOL = 0;
      DECODING_ERROR = 1;
      INVALID_MESSAGE = 2;
      UNSUPPORTED_SKILL = 3;
      INVALID_DIALOGUE = 4;
    }
  ErrorCodeEnum error_code = 1;
...
---
initiation:
- create
- read
- update
- delete
reply:
  create: [ result, error ]
  read: [ result, error ]
  update: [ result, error ]
  delete: [ result, error ]
  result: [ ]
  error: [ ]
  end: [ ]
termination: [ result, end, error ]
roles: { agent }
end_states: [ end, error, result]
keep_terminal_state_dialogues: true
...
```
