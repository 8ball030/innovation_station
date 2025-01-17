# Hackathon Workflow Protocol

## Description

...

## Specification

```yaml
name: hackathon_workflow
author: eightballer
version: 0.2.0
description: A protocol for managing hackathon competition phases, including team formation, idea submission, and project development stages.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: eightballer/hackathon_workflow:0.2.0
speech_acts:
  announce_event:
    event_details: pt:str
    registration_deadline: pt:str
  initiate_idea_generation:
    topic: pt:str
  form_team:
    team_name: pt:str
    member_ids: pt:list[pt:str]
  submit_idea:
    team_id: pt:str
    idea_description: pt:str
  select_idea:
    team_id: pt:str
    idea_approved: pt:bool
    feedback: pt:optional[pt:str]
  project_progress_update:
    team_id: pt:str
    update_details: pt:str
  submit_final_project:
    team_id: pt:str
    project_link: pt:str
    presentation_link: pt:optional[pt:str]
  acknowledgement:
    received: pt:bool
    message: pt:optional[pt:str]
  error:
    error_code: ct:ErrorCode
    error_msg: pt:str
---
ct:ErrorCode: |
  enum ErrorCodeEnum {
      REGISTRATION_CLOSED = 0;
      TEAM_ALREADY_REGISTERED = 1;
      IDEA_REJECTED = 2;
      SUBMISSION_FAILED = 3;
      INVALID_TEAM_ID = 4;
    }
  ErrorCodeEnum error_code = 1;
---
initiation: [announce_event, form_team, initiate_idea_generation, submit_idea, project_progress_update, submit_final_project]
reply:
  announce_event: [acknowledgement, error]
  initiate_idea_generation: [submit_idea, error]
  form_team: [acknowledgement, error]
  submit_idea: [select_idea, error]
  select_idea: [project_progress_update, acknowledgement, error]
  project_progress_update: [submit_final_project, acknowledgement, error]
  submit_final_project: [acknowledgement, error]
  acknowledgement: []
  error: []
termination: [acknowledgement, error]
roles: {participant, organizer}
end_states: [acknowledgement, error]
keep_terminal_state_dialogues: false
```