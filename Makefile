build-front:
	npm run build && cd build && aea ipfs add > ../hashes.txt && cat ../hashes.txt


