# Development Flow Protocol

## Description

...

## Specification

```yaml
name: development_flow
author: dev_assistant
version: 0.1.0
description: A protocol for managing interactions involved in a simple development workflow between a developer and a project manager.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: dev_assistant/development_flow:0.1.0
speech_acts:
  request_feature:
    feature_description: pt:str
  feature_spec:
    feature_id: pt:str
    spec_description: pt:str
  progress_update:
    feature_id: pt:str
    update_description: pt:str
  feature_review:
    feature_id: pt:str
    reviewer_comments: pt:str
  feature_approved:
    feature_id: pt:str
  error:
    error_code: ct:ErrorCode
    error_msg: pt:str
---
ct:ErrorCode: |
  enum ErrorCodeEnum {
      INVALID_REQUEST = 0;
      NOT_FOUND = 1;
      INCOMPLETE_SPECIFICATION = 2;
      INTERNAL_ERROR = 3;
    }
  ErrorCodeEnum error_code = 1;
---
initiation: [request_feature, feature_spec, progress_update, feature_review]
reply:
  request_feature: [feature_spec, error]
  feature_spec: [progress_update, error]
  progress_update: [feature_review, error]
  feature_review: [feature_approved, error]
  feature_approved: []
  error: []
termination: [feature_approved, error]
roles: { developer, project_manager }
end_states: [feature_approved, error]
keep_terminal_state_dialogues: true
```