# Innovation Station

Innovation Station is your one-stop destination for unleashing the true potential of blockchain technology. Our platform offers a decentralized agent service that empowers users to effortlessly design, mint, and manage their customized blockchain services. With the assistance of cutting-edge AI technology, our users are guided through the entire process, ensuring that both newcomers and seasoned blockchain enthusiasts can easily bring their ideas to life.

## Table of Contents

- [Innovation Station](#innovation-station)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [License](#license)

## Introduction

At Innovation Station, we understand that the blockchain space can be intimidating, especially for those new to the technology. That's why we've created a user-friendly platform that simplifies the design and minting of blockchain services. With the assistance of our AI-powered virtual guide, users can explore existing components, receive relevant suggestions, and design entirely new versions of blockchain services with ease.

Our platform's core mission is to make blockchain accessible to all, fostering creativity, innovation, and collaboration within the blockchain community. Whether you're a developer looking to mint your unique NFTs or a business owner seeking to incorporate blockchain into your operations, Innovation Station is here to support your journey.

## Features

- **AI Guidance**: Our AI assistant provides expert guidance, suggesting relevant existing components and helping users design new versions of blockchain services.
- **Customization**: Tailor your blockchain services to meet your specific needs, from NFT creation to decentralized applications (DApps) and beyond.
- **Decentralization**: Embrace the true spirit of blockchain by designing and minting services without the need for centralized intermediaries.
- **User-Friendly**: Our platform's intuitive interface ensures that both beginners and experts can navigate the world of blockchain effortlessly.
- **Collaboration**: Join a thriving community of blockchain enthusiasts, collaborate on projects, and share your innovations with the world.

## Requirements

- Python 3.7+
- Web3.py
- Solidity Compiler
- Truffle Framework

## Installation

Just follow these steps:

1. Clone this repository to your local machine.

```shell
git clone git@github.com:8ball030/innovation_station.git
cd innovation-station
```

2. Setup environment
```shell
poetry shell
poetry install
```

3. Obtain package dependencies from remote IPFS registry
```shell
autonomy packages sync
```

4. Start a local Tendermint node

```shell
sudo tendermint init validator && sudo cp -r /root/.tendermint ~/  && sudo chown -R (whoami):(whoami) ~/.tendermint
tendermint start
```

5. Start the ABCI application

In a separate terminal, after dropping into venv: `poetry shell`

```shell
make run-single-agent
```


## Live Deployments

Subgraph [deloyed here](https://api.studio.thegraph.com/proxy/48202/asdad/v0.0.1/graphql?query=%0A++++%23%0A++++%23+Welcome+to+The+GraphiQL%0A++++%23%0A++++%23+GraphiQL+is+an+in-browser+tool+for+writing%2C+validating%2C+and%0A++++%23+testing+GraphQL+queries.%0A++++%23%0A++++%23+Type+queries+into+this+side+of+the+screen%2C+and+you+will+see+intelligent%0A++++%23+typeaheads+aware+of+the+current+GraphQL+type+schema+and+live+syntax+and%0A++++%23+validation+errors+highlighted+within+the+text.%0A++++%23%0A++++%23+GraphQL+queries+typically+start+with+a+%22%7B%22+character.+Lines+that+start%0A++++%23+with+a+%23+are+ignored.%0A++++%23%0A++++%23+An+example+GraphQL+query+might+look+like%3A%0A++++%23%0A++++%23+++++%7B%0A++++%23+++++++field%28arg%3A+%22value%22%29+%7B%0A++++%23+++++++++subField%0A++++%23+++++++%7D%0A++++%23+++++%7D%0A++++%23%0A++++%23+Keyboard+shortcuts%3A%0A++++%23%0A++++%23++Prettify+Query%3A++Shift-Ctrl-P+%28or+press+the+prettify+button+above%29%0A++++%23%0A++++%23+++++Merge+Query%3A++Shift-Ctrl-M+%28or+press+the+merge+button+above%29%0A++++%23%0A++++%23+++++++Run+Query%3A++Ctrl-Enter+%28or+press+the+play+button+above%29%0A++++%23%0A++++%23+++Auto+Complete%3A++Ctrl-Space+%28or+just+start+typing%29%0A++++%23%0A++)


```graphql

query MyQuery {
createUnits(first: 10) {
id
transactionHash
unitHash
unitId
}
createServices(first: 10) {
id
serviceId
transactionHash
}
}
```

```shell
curl -X POST -H "Content-Type: application/json" --data '{"prompt": "Decribe a protocol to handle going to the pub" }' 'http://46.101.6.36:8001/protocol?chain_id=1' -i
```

```shell
curl -X POST -H "Content-Type: application/json" --data '{"prompt": "Decribe a protocol to handle going to the pub" }' 'http://localhost:26658/protocol?chain_id=1' -i
```
