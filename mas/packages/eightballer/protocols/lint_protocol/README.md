# Lint Protocol Protocol

## Description

...

## Specification

```yaml
name: lint_protocol
author: eightballer
version: 0.1.0
description: A protocol for managing lint tasks in the development flow.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: eightballer/lint_protocol:0.1.0
speech_acts:
  initiate_lint:
    source_code_path: pt:str
  lint_issue:
    file: pt:str
    line: pt:int
    column: pt:int
    severity: ct:Severity
    message: pt:str
  lint_completed:
    success: pt:bool
    issues_count: pt:int
  error:
    error_code: ct:ErrorCode
    error_msg: pt:str
---
ct:Severity: |
  enum SeverityEnum {
      INFO = 0;
      WARNING = 1;
      ERROR = 2;
    }
  SeverityEnum severity_code = 1;
ct:ErrorCode: |
  enum ErrorCodeEnum {
      LINT_EXECUTION_FAILURE = 0;
      INVALID_SOURCE_PATH = 1;
      LINT_TIMEOUT = 2;
    }
  ErrorCodeEnum error_code = 1;
---
initiation: [initiate_lint]
reply:
  initiate_lint: [lint_issue, lint_completed, error]
  lint_issue: [lint_issue, lint_completed, error]
  lint_completed: []
  error: []

termination: [lint_completed, error]
roles: { agent, linter }
end_states: [lint_completed, error]
keep_terminal_state_dialogues: true
```