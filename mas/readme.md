# Innovation_station

### Setup
```bash
git clone https://github.com/8ball030/innovation_station
cd innovation_station
poetry install
```

### Testing
```bash
make test
```

### Linting
```bash
make lint
```

### Formatting
```bash
make fmt
```

### Releasing
```bash
make release
```

## License
This project is licensed under the terms of the MIT license.

```
curl -X POST -H "Content-Type: application/json" --data '{"prompt": "Decribe a protocol to handle going to the pub" }' http://localhost:26658/protocol

```

### Running the innovation station locally
set the vars;

OPENAI_API_KEY
MAS_KEYPATH

generate a new key with 

```
autonomy generate-key ethereum -n 1
```

```
make run-mas
```

This will expose the api on loclahost:8080
