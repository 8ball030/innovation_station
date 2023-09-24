import { getWeb3Details, getMintContract, writeContract } from "$lib/utils";

const meta = {
 name: "",
 description: "",
 code_uri: "",
 image: "",
 attributes: [{ trait_type: "version", value: "1" }],
};

export function handleMint(
 name: string,
 codeHash: any,
 description: string,
 image: string
) {
 const { account } = getWeb3Details();
 const contract = getMintContract();

 meta.code_uri = codeHash;
 meta.description = description;
 meta.image = image;
 meta.name = name;

 const hash = writeContract(contract.abi, contract.address, "create", [
  "0",
  account?.address,
  codeHash,
  [],
 ]);

 console.log("mint hash");
 console.log(hash);
 return hash;
}
