# Testing Workflow Protocol

## Description

...

## Specification

```yaml
name: testing_workflow
author: developer
version: 0.1.0
description: A protocol for managing a testing workflow between a tester and a testing system.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: developer/testing_workflow:0.1.0
speech_acts:
  start_tests:
    test_suite_name: pt:str
    test_cases: pt:list[pt:str]
  test_case_result:
    test_case_name: pt:str
    success: pt:bool
    output: pt:optional[pt:str]
    errors: pt:optional[pt:list[pt:str]]
  tests_completed:
    test_suite_name: pt:str
    total_tests: pt:int
    passed_tests: pt:int
    failed_tests: pt:int
    summary: pt:optional[pt:str]
  error:
    error_code: ct:ErrorCode
    error_msg: pt:str
---
ct:ErrorCode: |
  enum ErrorCodeEnum {
      TEST_EXECUTION_FAILURE = 0;
      INVALID_TEST_CASE = 1;
      TIMEOUT_ERROR = 2;
      SYSTEM_ERROR = 3;
    }
  ErrorCodeEnum error_code = 1;
---
initiation: [start_tests]
reply:
  start_tests: [test_case_result, tests_completed, error]
  test_case_result: [test_case_result, tests_completed, error]
  tests_completed: []
  error: []
termination: [tests_completed, error]
roles: {tester, system}
end_states: [tests_completed, error]
keep_terminal_state_dialogues: false
```