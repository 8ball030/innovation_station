# Hackathon Journey Protocol

## Description

...

## Specification

```yaml
name: hackathon_journey
author: eightballer
version: 0.1.1
description: A protocol for managing and documenting the journey of participants in a hackathon, from initial idea generation to final project submission.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: eightballer/hackathon_journey:0.1.1
speech_acts:
  idea_generation:
    participant_id: pt:str
    idea_description: pt:str
  team_formation:
    participant_id: pt:str
    team_name: pt:str
    team_members: pt:list[pt:str]
  idea_selection:
    team_id: pt:str
    selected_idea: pt:str
  progress_update:
    team_id: pt:str
    update_description: pt:str
  final_submission:
    team_id: pt:str
    project_link: pt:str
    presentation_link: pt:optional[pt:str]
  operation_response:
    operation_type: ct:OperationType
    team_id: pt:str
    status: ct:Status
    message: pt:optional[pt:str]
  error:
    error_code: ct:ErrorCode
    error_msg: pt:str
---
ct:OperationType: |
  enum OperationTypeEnum {
      IDEA_GENERATION = 0;
      TEAM_FORMATION = 1;
      IDEA_SELECTION = 2;
      PROGRESS_UPDATE = 3;
      FINAL_SUBMISSION = 4;
    }
  OperationTypeEnum operation_type = 1;
ct:Status: |
  enum StatusEnum {
      ACCEPTED = 0;
      UNDER_REVIEW = 1;
      REJECTED = 2;
      COMPLETED = 3;
    }
  StatusEnum status = 1;
ct:ErrorCode: |
  enum ErrorCodeEnum {
      INVALID_OPERATION = 0;
      NOT_FOUND = 1;
      INVALID_SUBMISSION = 2;
      INTERNAL_ERROR = 3;
    }
  ErrorCodeEnum error_code = 1;
---
initiation: [idea_generation, team_formation, idea_selection, progress_update, final_submission]
reply:
  idea_generation: [operation_response, error]
  team_formation: [operation_response, error]
  idea_selection: [operation_response, error]
  progress_update: [operation_response, error]
  final_submission: [operation_response, error]
  operation_response: []
  error: []
termination: [operation_response, error]
roles: {participant, organizer}
end_states: [operation_response, error]
keep_terminal_state_dialogues: false
```