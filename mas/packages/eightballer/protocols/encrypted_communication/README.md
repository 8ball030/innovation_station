# Encrypted Communication Protocol

## Description

...

## Specification

```yaml
name: encrypted_communication
author: eightballer
version: 0.1.0
description: A protocol for establishing encrypted communication between two parties using a challenge-response mechanism and web3 keys.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: eightballer/encrypted_communication:0.1.0
speech_acts:
  issue_challenge:
    challenge: pt:str
  respond_challenge:
    challenge_response: pt:str
    requester_public_key: pt:str
  verify_response:
    verification_result: pt:bool
  provide_encryption_key:
    encryption_key: pt:str
  verify_message:
    message_signature: pt:str
    message: pt:str
  verification_result:
    result: pt:bool
  encryption_ready:
    status: pt:bool
  error:
    error_code: ct:ErrorCode
    error_msg: pt:str
---
ct:ErrorCode: |
  enum ErrorCodeEnum {
      CHALLENGE_FAILED = 0;
      VERIFICATION_FAILED = 1;
      UNSUPPORTED_KEY_SCHEME = 2;
      INTERNAL_ERROR = 3;
    }
  ErrorCodeEnum error_code = 1;
---
initiation: [issue_challenge]
reply:
  issue_challenge: [respond_challenge, error]
  respond_challenge: [verify_response, error]
  verify_response: [provide_encryption_key, error]
  provide_encryption_key: [encryption_ready, error]
  verify_message: [verification_result, error]
  verification_result: [ ]
  encryption_ready: []
  error: [ ]
termination: [encryption_ready, verification_result, error]
roles: { requester, responder }
end_states: [ encryption_ready, verification_result, error ]
keep_terminal_state_dialogues: false
```