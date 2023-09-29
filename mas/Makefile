.PHONY: clean
clean: clean-build clean-pyc clean-test clean-docs

.PHONY: clean-build
clean-build:
	rm -fr build/
	rm -fr dist/
	rm -fr .eggs/
	rm -fr deployments/build/
	rm -fr deployments/Dockerfiles/open_aea/packages
	rm -fr pip-wheel-metadata
	find . -name '*.egg-info' -exec rm -fr {} +
	find . -name '*.egg' -exec rm -fr {} +
	find . -name '*.svn' -exec rm -fr {} +
	find . -name '*.db' -exec rm -fr {} +
	rm -fr .idea .history
	rm -fr venv

.PHONY: clean-docs
clean-docs:
	rm -fr site/

.PHONY: clean-pyc
clean-pyc:
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +
	find . -name '__pycache__' -exec rm -fr {} +
	find . -name '.DS_Store' -exec rm -fr {} +

.PHONY: clean-test
clean-test:
	rm -fr .tox/
	rm -f .coverage
	find . -name ".coverage*" -not -name ".coveragerc" -exec rm -fr "{}" \;
	rm -fr coverage.xml
	rm -fr htmlcov/
	rm -fr .hypothesis
	rm -fr .pytest_cache
	rm -fr .mypy_cache/
	find . -name 'log.txt' -exec rm -fr {} +
	find . -name 'log.*.txt' -exec rm -fr {} +

format: clean
	poetry run adev -n 0 fmt

lint:
	poetry run adev -v -n 0 lint -co

fmt: 
	poetry run adev -n 0 fmt

test:
	poetry run adev -v test

all: fmt lint test hashes

.PHONY: hashes
hashes: clean
	poetry run autonomy hash all
	poetry run autonomy packages lock
	poetry run autonomy push-all

rollout: hashes
	git pull
	sudo rm -rf service/ && poetry run bash scripts/start_mas.sh eightballer/innovation_station

commit: hashes
	git add packages/ && git add . && git commit -m "Resolved" && git push

run-mas:
	MAS_KEYPATH=$(shell pwd)/keys.json poetry run bash scripts/start_mas.sh eightballer/innovation_station

run-single:
	rm -rf agent && bash scripts/run_single_agent.sh eightballer/innovation_station


make-meta:
	adev metadata generate . protocol/eightballer/http/0.1.0 0 && adev -v metadata validate  mints/0.json
	adev metadata generate . connection/eightballer/http_client/0.1.0 01 && adev -v metadata validate  mints/01.json
	adev metadata generate . connection/eightballer/http_server/0.1.0 02 && adev -v metadata validate  mints/02.json
	adev metadata generate . skill/eightballer/innovation_station_api/0.1.0 03 && adev -v metadata validate  mints/03.json
	adev metadata generate . skill/eightballer/innovation_abci/0.1.0 04 && adev -v metadata validate  mints/04.json
	adev metadata generate . skill/eightballer/innovation_station_chained_app/0.1.0 05 && adev -v metadata validate  mints/05.json
	adev metadata generate . agent/eightballer/innovation_station_app/0.1.0 06 && adev -v metadata validate  mints/06.json
	adev metadata generate . service/eightballer/innovation_station/0.1.0 07 && adev -v metadata validate  mints/07.json

