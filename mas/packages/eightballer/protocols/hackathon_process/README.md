# Hackathon Process Protocol

## Description

...

## Specification

```yaml
name: hackathon_process
author: eightballer
version: 1.0.0
description: A protocol for managing the lifecycle of a hackathon competition including idea generation, ongoing submissions, and final presentation.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: eightballer/hackathon_process:1.0.0
speech_acts:
  idea_proposal:
    team_id: pt:str
    idea_title: pt:str
    idea_description: pt:str
  idea_feedback:
    team_id: pt:str
    feedback: pt:str
    approved: pt:bool
  project_update:
    team_id: pt:str
    update_description: pt:str
  final_submission:
    team_id: pt:str
    project_repo: pt:str
    presentation_link: pt:optional[pt:str]
  submission_acknowledgement:
    team_id: pt:str
    submission_type: ct:SubmissionType
    status: ct:SubmissionStatus
  error:
    error_code: ct:ErrorCode
    error_msg: pt:str
---
ct:ErrorCode: |
  enum ErrorCodeEnum {
      NOT_FOUND = 0;
      INVALID_SUBMISSION = 1;
      INTERNAL_ERROR = 2;
      PERMISSION_DENIED = 3;
    }
  ErrorCodeEnum error_code = 1;
ct:SubmissionType: |
  enum SubmissionTypeEnum {
      IDEA = 0;
      UPDATE = 1;
      FINAL = 2;
    }
  SubmissionTypeEnum submission_type = 1;
ct:SubmissionStatus: |
  enum SubmissionStatusEnum {
      PENDING = 0;
      APPROVED = 1;
      REJECTED = 2;
    }
  SubmissionStatusEnum status = 1;
---
initiation: [idea_proposal, project_update, final_submission]
reply:
  idea_proposal: [idea_feedback, error]
  project_update: [submission_acknowledgement, error]
  final_submission: [submission_acknowledgement, error]
  idea_feedback: []
  submission_acknowledgement: []
  error: []
termination: [idea_feedback, submission_acknowledgement, error]
roles: {participant, organizer}
end_states: [idea_feedback, submission_acknowledgement, error]
keep_terminal_state_dialogues: false
```