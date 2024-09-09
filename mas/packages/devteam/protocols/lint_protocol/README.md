# Lint Protocol Protocol

## Description

...

## Specification

```yaml
name: lint_protocol
author: devteam
version: 1.0.0
description: A protocol for representing the linting process in software development, detailing the interaction for initiating a linting process, reporting issues, and handling errors.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: devteam/lint_protocol:1.0.0
speech_acts:
  initiate_lint:
    project_path: pt:str
    config: pt:optional[pt:str]
  lint_issue:
    issue_id: pt:str
    severity: ct:Severity
    message: pt:str
    line: pt:int
    column: pt:int
    file_path: pt:str
  lint_complete:
    summary: pt:str
  lint_error:
    error_code: ct:ErrorCode
    error_msg: pt:str
---
ct:Severity: |
  enum SeverityEnum {
      INFO = 0;
      WARNING = 1;
      ERROR = 2;
    }
  SeverityEnum severity = 1;
ct:ErrorCode: |
  enum ErrorCodeEnum {
      CONFIG_ERROR = 0;
      LINT_FAILURE = 1;
      PATH_ERROR = 2;
    }
  ErrorCodeEnum error_code = 1;
---
initiation: [initiate_lint]
reply:
  initiate_lint: [lint_issue, lint_complete, lint_error]
  lint_issue: [lint_issue, lint_complete, lint_error]
  lint_complete: []
  lint_error: []
termination: [lint_complete, lint_error]
roles: { linter, developer }
end_states: [lint_complete, lint_error]
keep_terminal_state_dialogues: false
```