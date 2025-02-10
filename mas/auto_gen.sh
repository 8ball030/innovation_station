set euo
echo generating
python packages/eightballer/skills/innovation_station_api/llm_workflows/protocol.py --prompt_path docker_container_specification --num 1 > generated.txt

for i in (cat generated.txt | grep http)
	wget $i -O protoc.yaml
	python CLEAN_OUTPUT.py
end


rm -rf tmp_agent
aea create tmp_agent
cd tmp_agent 
adev scaffold protocol ../protoc.yaml || exit 1
aea publish --push-missing --local
rm -rf ../packages/ci/agents/tmp_agent

