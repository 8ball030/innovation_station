# Format Stage Protocol

## Description

...

## Specification

```yaml
---
name: format_stage
author: developer
version: 0.1.0
description: A protocol for managing the format stage in a development flow, including code formatting, validation, and error feedback.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: developer/format_stage:0.1.0
speech_acts:
  format_request:
    file_path: pt:str
    formatter_options: pt:dict[pt:str, pt:str]
  format_result:
    file_path: pt:str
    formatted: pt:bool
    changes_made: pt:int
  validate_code:
    file_path: pt:str
    validation_rules: pt:list[pt:str]
  validation_result:
    file_path: pt:str
    valid: pt:bool
    errors: pt:list[pt:str]
  error:
    error_code: ct:ErrorCode
    error_msg: pt:str
---
ct:ErrorCode: |
  enum ErrorCodeEnum {
      FORMAT_ERROR = 0;
      VALIDATION_ERROR = 1;
      FILE_NOT_FOUND = 2;
      PERMISSION_DENIED = 3;
    }
  ErrorCodeEnum error_code = 1;
---
initiation: [format_request, validate_code]
reply:
  format_request: [format_result, error]
  validate_code: [validation_result, error]
  format_result: []
  validation_result: []
  error: []
termination: [format_result, validation_result, error]
roles: { developer }
end_states: [ format_result, validation_result, error]
keep_terminal_state_dialogues: false
```