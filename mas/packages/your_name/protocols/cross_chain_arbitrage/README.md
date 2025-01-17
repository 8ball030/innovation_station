# Cross Chain Arbitrage Protocol

## Description

...

## Specification

```yaml
name: cross_chain_arbitrage
author: your_name
version: 0.1.0
description: A protocol for managing cross-chain arbitrage transactions between multiple platforms.
license: Apache-2.0
aea_version: '>=1.0.0, <2.0.0'
protocol_specification_id: your_name/cross_chain_arbitrage:0.1.0
speech_acts:
  arbitrage_opportunity:
    exchange_id: pt:str
    ledger_id: pt:str
    available_volume: pt:float
    prices: pt:dict[pt:str, pt:float] # key: exchange id, value: price
  buy_execution:
    exchange_id: pt:str
    ledger_id: pt:str
    volume: pt:float
    price: pt:float
    tx_hash: pt:str
  sell_execution:
    exchange_id: pt:str
    ledger_id: pt:str
    volume: pt:float
    price: pt:float
    tx_hash: pt:str
  arbitrage_result:
    profit: pt:float
    summary: pt:str
  rejection:
    reason: pt:str
  error:
    error_code: ct:ErrorCode
    error_msg: pt:str
---
ct:ErrorCode: |
  enum ErrorCodeEnum {
      INSUFFICIENT_FUNDS = 0;
      TIMEOUT_ERROR = 1;
      NETWORK_ERROR = 2;
      INVALID_REQUEST = 3;
    }
  ErrorCodeEnum error_code = 1;
---
initiation: [arbitrage_opportunity]
reply:
  arbitrage_opportunity: [buy_execution, sell_execution, rejection]
  buy_execution: [sell_execution, arbitrage_result, error]
  sell_execution: [buy_execution, arbitrage_result, error]
  arbitrage_result: []
  rejection: []
  error: []
termination: [arbitrage_result, rejection, error]
roles: { arbitrage_agent, exchange }
end_states: [arbitrage_result, rejection, error]
keep_terminal_state_dialogues: false
...
```