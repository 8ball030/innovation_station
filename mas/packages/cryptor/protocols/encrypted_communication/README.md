# Encrypted Communication Protocol

## Description

...

## Specification

```yaml
name: encrypted_communication
author: cryptor
version: 1.0.0
description: A protocol for enabling secure and encrypted communications between two parties.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: cryptor/encrypted_communication:1.0.0
speech_acts:
  initiate_communication:
    public_key: pt:str
  communication_request:
    encrypted_message: pt:str
    nonce: pt:str
  communication_response:
    encrypted_message: pt:str
    nonce: pt:str
  end_communication: { }
  error:
    error_code: ct:ErrorCode
    error_msg: pt:str
---
ct:ErrorCode: |
  enum ErrorCodeEnum {
      INVALID_PUBLIC_KEY = 0;
      ENCRYPTION_ERROR = 1;
      DECRYPTION_ERROR = 2;
      INVALID_MESSAGE = 3;
      COMMUNICATION_ERROR = 4;
    }
  ErrorCodeEnum error_code = 1;
---
initiation: [initiate_communication]
reply:
  initiate_communication: [communication_request, error]
  communication_request: [communication_response, end_communication, error]
  communication_response: [communication_request, end_communication, error]
  end_communication: []
  error: []
termination: [end_communication, error]
roles: { party_a, party_b }
end_states: [end_communication, error]
keep_terminal_state_dialogues: false
```