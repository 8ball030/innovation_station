# Hackathon Competition Protocol

## Description

...

## Specification

```yaml
name: hackathon_competition
author: eightballer
version: 0.1.0
description: A protocol for managing interactions during a hackathon competition between participants and the organizing entity.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: eightballer/hackathon_competition:0.1.0
speech_acts:
  register_team:
    team_name: pt:str
    members: pt:list[pt:str]
  idea_submission:
    team_id: pt:str
    idea_description: pt:str
  progress_update:
    team_id: pt:str
    update_description: pt:str
  final_submission:
    team_id: pt:str
    project_link: pt:str
    presentation_link: pt:optional[pt:str]
  registration_acknowledgement:
    team_id: pt:str
    status: ct:Status
  submission_response:
    team_id: pt:str
    submission_type: ct:SubmissionType
    status: ct:Status
  error:
    error_code: ct:ErrorCode
    error_msg: pt:str
---
ct:Status: |
  enum StatusEnum {
      SUCCESS = 0;
      PENDING = 1;
      REJECTED = 2;
    }
  StatusEnum status = 1;
ct:SubmissionType: |
  enum SubmissionTypeEnum {
      IDEA = 0;
      PROGRESS = 1;
      FINAL = 2;
    }
  SubmissionTypeEnum submission_type = 1;
ct:ErrorCode: |
  enum ErrorCodeEnum {
      NOT_FOUND = 0;
      INVALID_SUBMISSION = 1;
      INTERNAL_ERROR = 2;
    }
  ErrorCodeEnum error_code = 1;
---
initiation: [register_team, idea_submission, progress_update, final_submission]
reply:
  register_team: [registration_acknowledgement, error]
  idea_submission: [submission_response, error]
  progress_update: [submission_response, error]
  final_submission: [submission_response, error]
  registration_acknowledgement: []
  submission_response: []
  error: []
termination: [registration_acknowledgement, submission_response, error]
roles: {participant, organizer}
end_states: [registration_acknowledgement, submission_response, error]
keep_terminal_state_dialogues: false
```