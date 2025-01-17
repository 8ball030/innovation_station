# Terraform Devops Protocol

## Description

...

## Specification

```yaml
name: terraform_devops
author: your_name
version: 0.1.0
description: A protocol for managing and verifying Terraform-based infrastructure deployments.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: your_name/terraform_devops:0.1.0
speech_acts:
  init:
    configuration_path: pt:str
  apply:
    configuration_path: pt:str
  destroy:
    configuration_path: pt:str
  verify:
    deployment_id: pt:str
  result:
    status: ct:Status
    stdout: pt:str
    stderr: pt:str
  error:
    error_code: ct:ErrorCode
    error_msg: pt:str
---
ct:Status: |
  enum StatusEnum {
      SUCCESS = 0;
      FAILURE = 1;
      IN_PROGRESS = 2;
  }
  StatusEnum status = 1;
ct:ErrorCode: |
  enum ErrorCodeEnum {
      INIT_ERROR = 0;
      APPLY_ERROR = 1;
      DESTROY_ERROR = 2;
      VERIFY_ERROR = 3;
      INTERNAL_ERROR = 4;
      INVALID_CONFIGURATION = 5;
  }
  ErrorCodeEnum error_code = 1;
---
initiation:
  - init
  - apply
  - destroy
  - verify
reply:
  init: [result, error]
  apply: [result, error]
  destroy: [result, error]
  verify: [result, error]
  result: []
  error: []
termination:
  - result
  - error
roles: { devops_agent }
end_states: [ result, error ]
keep_terminal_state_dialogues: true
```