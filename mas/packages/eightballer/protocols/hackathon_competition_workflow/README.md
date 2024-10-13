# Hackathon Competition Workflow Protocol

## Description

...

## Specification

```yaml
name: hackathon_competition_workflow
author: eightballer
version: 0.2.0
description: A simplified protocol to manage and track the progress of teams from idea generation through to final presentation submissions in a hackathon competition.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: eightballer/hackathon_competition_workflow:0.2.0
speech_acts:
  idea_generation:
    participant_id: pt:str
    idea_description: pt:str
  team_formation:
    participant_ids: pt:list[pt:str]
    team_name: pt:str
    idea_description: pt:str
  idea_selection:
    team_id: pt:str
    selected_idea: pt:str
  progress_update:
    team_id: pt:str
    update_description: pt:str
  final_submission:
    team_id: pt:str
    project_link: pt:str
    presentation_link: pt:str
    documentation_link: pt:optional[pt:str]
  feedback:
    team_id: pt:str
    feedback: pt:str
  error:
    error_code: ct:ErrorCode
    error_msg: pt:str

---

ct:ErrorCode: |
  enum ErrorCodeEnum {
      IDEA_GENERATION_FAILURE = 0;
      TEAM_FORMATION_FAILURE = 1;
      IDEA_SELECTION_FAILURE = 2;
      UPDATE_FAILURE = 3;
      SUBMISSION_FAILURE = 4;
      FEEDBACK_ERROR = 5;
      INVALID_INPUT = 6;
      INTERNAL_ERROR = 7;
    }
  ErrorCodeEnum error_code = 1;
  
---

initiation: [idea_generation, team_formation, idea_selection]
reply:
  idea_generation: [team_formation, error]
  team_formation: [idea_selection, error]
  idea_selection: [progress_update, final_submission, error]
  progress_update: [progress_update, final_submission, error]
  final_submission: [feedback, error]
  feedback: []
  error: []

termination: [feedback, error]
roles: {participant, organizer}
end_states: [feedback, error]
keep_terminal_state_dialogues: false
```