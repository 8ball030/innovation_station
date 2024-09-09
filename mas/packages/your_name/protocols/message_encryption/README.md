# Message Encryption Protocol

## Description

...

## Specification

```yaml
name: message_encryption
author: your_name
version: 0.1.0
description: A protocol for encrypting a message through interactions between a user and an encryption service.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: your_name/message_encryption:0.1.0
speech_acts:
  submit_message:
    message: pt:str
    encryption_type: pt:str
  encryption_result:
    encrypted_message: pt:str
    encryption_key: pt:optional[pt:str]  # Optional if symmetric encryption
  decryption_result:
    decrypted_message: pt:str
  error:
    error_code: ct:ErrorCode
    error_msg: pt:str
  status_update:
    status: ct:Status
---
ct:ErrorCode: |
  enum ErrorCodeEnum {
      INVALID_MESSAGE = 0;
      UNSUPPORTED_ENCRYPTION_TYPE = 1;
      ENCRYPTION_FAILURE = 2;
      DECRYPTION_FAILURE = 3;
    }
  ErrorCodeEnum error_code = 1;
ct:Status: |
  enum StatusEnum {
      ENCRYPTION_IN_PROGRESS = 0;
      DECRYPTION_IN_PROGRESS = 1;
      ENCRYPTION_COMPLETED = 2;
      DECRYPTION_COMPLETED = 3;
    }
  StatusEnum status = 1;
---
initiation: [submit_message]
reply:
  submit_message: [encryption_result, error, status_update]
  encryption_result: [ ]
  error: [ ]
  status_update: [decryption_result, error]
  decryption_result: [ ]
termination: [encryption_result, decryption_result, error]
roles: { user, encryption_service }
end_states: [encryption_result, decryption_result, error]
keep_terminal_state_dialogues: true
```