# Trello Interaction Protocol

## Description

...

## Specification

```yaml
name: trello_interaction
author: your_name
version: 0.1.0
description: A protocol for managing interactions with Trello entities like boards, cards, members, etc.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: your_name/trello_interaction:0.1.0
speech_acts:
  create_board:
    board_name: pt:str
    organization_id: pt:optional[pt:str]
    permission_level: pt:optional[pt:str]
  fetch_board:
    board_id: pt:str
  list_boards:
    board_filter: pt:optional[pt:str]
  add_member:
    board_id: pt:str
    member_id: pt:str
    member_type: pt:optional[pt:str]
  list_cards:
    board_id: pt:str
    card_filter: pt:optional[pt:str]
  add_card:
    list_id: pt:str
    card_name: pt:str
    desc: pt:optional[pt:str]
    labels: pt:optional[pt:list[pt:str]]
    due: pt:optional[pt:str]
  fetch_actions:
    board_id: pt:str
    action_filter: pt:optional[pt:str]
  action_result:
    status: ct:Status
    result_data: pt:optional[pt:bytes]
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
ct:ErrorCode: |
  enum ErrorCodeEnum {
      INVALID_REQUEST = 0;
      NOT_FOUND = 1;
      PERMISSION_DENIED = 2;
      INTERNAL_ERROR = 3;
  }
  ErrorCodeEnum error_code = 1;
---
initiation:
  - create_board
  - fetch_board
  - list_boards
  - add_member
  - list_cards
  - add_card
  - fetch_actions
reply:
  create_board: [action_result, error]
  fetch_board: [action_result, error]
  list_boards: [action_result, error]
  add_member: [action_result, error]
  list_cards: [action_result, error]
  add_card: [action_result, error]
  fetch_actions: [action_result, error]
  action_result: []
  error: []
termination:
  - action_result
  - error
roles: { user, trello }
end_states: [action_result, error]
keep_terminal_state_dialogues: true
```