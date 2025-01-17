# Hackathon Engagement Protocol

## Description

...

## Specification

```yaml
name: hackathon_engagement
author: eightballer
version: 1.0.0
description: A protocol that orchestrates interactions throughout the different stages of participating in a hackathon, from idea generation to project submission.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: eightballer/hackathon_engagement:1.0.0
speech_acts:
  idea_proposal:
    team_id: pt:str
    idea_description: pt:str
  team_formation:
    team_name: pt:str
    member_invites: pt:list[pt:str]
  team_formation_response:
    team_id: pt:str
    status: ct:Status
  update_submission:
    team_id: pt:str
    update_description: pt:str
  final_submission:
    team_id: pt:str
    project_link: pt:str
    documentation_link: pt:optional[pt:str]
    presentation_link: pt:optional[pt:str]
  submission_acknowledgement:
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
    TEAM_FORMAT_ERROR = 2;
    INTERNAL_ERROR = 3;
  }
  ErrorCodeEnum error_code = 1;
---
initiation: [idea_proposal, team_formation]
reply:
  idea_proposal: [submission_acknowledgement, error]
  team_formation: [team_formation_response, error]
  team_formation_response: []
  update_submission: [submission_acknowledgement, error]
  final_submission: [submission_acknowledgement, error]
  submission_acknowledgement: []
  error: []
termination: [submission_acknowledgement, team_formation_response, error]
roles: {participant, organizer}
end_states: [submission_acknowledgement, team_formation_response, error]
keep_terminal_state_dialogues: false
```