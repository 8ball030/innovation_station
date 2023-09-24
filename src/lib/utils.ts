import {
 readContract as readContractWagmi,
 getNetwork,
 getContract as getContractWagmi,
 getAccount,
} from "@wagmi/core";

/**
 * returns the web3 details
 */
export const getWeb3Details = () => {
 const network = getNetwork();
 const chainId = network.chain?.id || 100;
 const account = getAccount();
 return { account, chainId: network.chain?.id };
};

/**
 * returns contract interface
 */
const getContract = (abi: any, contractAddress: `0x${string}`) => {
 const contract = getContractWagmi({
  address: contractAddress,
  abi,
 });
 return contract;
};
