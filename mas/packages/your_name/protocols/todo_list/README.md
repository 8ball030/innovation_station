# Todo List Protocol

## Description

...

## Specification

```yaml
name: todo_list
author: your_name
version: 0.1.0
description: A protocol for managing a to-do list between a user and a system.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: your_name/todo_list:0.1.0
speech_acts:
  create_task:
    task_description: pt:str
    due_date: pt:optional[pt:int]  # optional due date timestamp
  update_task:
    task_id: pt:str
    new_description: pt:optional[pt:str]
    new_due_date: pt:optional[pt:int]
    new_status: pt:optional[ct:TaskStatus]
  complete_task:
    task_id: pt:str
  delete_task:
    task_id: pt:str
  task_info:
    task_id: pt:str
    task_description: pt:str
    due_date: pt:optional[pt:int]
    status: ct:TaskStatus
  error:
    error_code: ct:ErrorCode
    error_msg: pt:str
---
ct:ErrorCode: |
  enum ErrorCodeEnum {
      CREATE_TASK_ERROR = 0;
      UPDATE_TASK_ERROR = 1;
      COMPLETE_TASK_ERROR = 2;
      DELETE_TASK_ERROR = 3;
      TASK_NOT_FOUND = 4;
    }
  ErrorCodeEnum error_code = 1;
ct:TaskStatus: |
  enum TaskStatusEnum{
      PENDING = 0;
      IN_PROGRESS = 1;
      COMPLETED = 2;
    }
  TaskStatusEnum task_status = 1;
---
initiation: [create_task, update_task, complete_task, delete_task]
reply:
  create_task: [task_info, error]
  update_task: [task_info, error]
  complete_task: [task_info, error]
  delete_task: [task_info, error]
  task_info: []
  error: []
termination: [task_info, error]
roles: { user, system }
end_states: [task_info, error]
keep_terminal_state_dialogues: false
...
```