# Messaging Bot Protocol Protocol

## Description

...

## Specification

```yaml

name: messaging_bot_protocol
author: developer
version: 0.1.0
description: A protocol for building and managing messaging bots on XMTP using MessageKit, which simplifies the process of creating messaging interactions.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: developer/messaging_bot_protocol:0.1.0

speech_acts:
  send_message:
    recipient_id: pt:str
    message_content: pt:str
    timestamp: pt:int
  receive_message:
    sender_id: pt:str
    message_content: pt:str
    timestamp: pt:int
  bot_response:
    bot_id: pt:str
    response_content: pt:str
    timestamp: pt:int
  error:
    error_code: ct:ErrorCode
    error_msg: pt:optional[pt:str]

---

ct:ErrorCode: |
  enum ErrorCodeEnum {
      MESSAGE_SEND_FAILURE = 0;
      MESSAGE_RECEIVE_FAILURE = 1;
      BOT_RESPONSE_FAILURE = 2;
  }
  ErrorCodeEnum error_code = 1;

---

initiation: 
  - send_message
  - receive_message

reply:
  send_message: [bot_response, error]
  receive_message: [bot_response, error]
  bot_response: []
  error: []

termination:
  - bot_response
  - error

roles: { user, bot }
end_states: [ bot_response, error ]
keep_terminal_state_dialogues: false

```