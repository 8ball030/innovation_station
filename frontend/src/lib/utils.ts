import {
 readContract as readContractWagmi,
 getNetwork,
 getContract as getContractWagmi,
 getAccount,
 writeContract as writeContractWagmi,
} from "@wagmi/core";
import { COMPONENT_REGISTRY_CONTRACT } from "$lib/abis/componentRegistry";
import { REGISTRIES_MANAGER_CONTRACT } from "$lib/abis/registriesManager";

const MAINNET_ADDRESSES: { [key: string]: `0x${string}` } = {
 agentRegistry: "0x2F1f7D38e4772884b88f3eCd8B6b9faCdC319112",
 componentRegistry: "0x15bd56669F57192a97dF41A2aa8f4403e9491776",
 registriesManager: "0x9eC9156dEF5C613B2a7D4c46C383F9B58DfcD6fE",
 serviceManagerToken: "0x2EA682121f815FBcF86EA3F3CaFdd5d67F2dB143",
 serviceRegistry: "0x48b6af7B12C71f09e2fC8aF4855De4Ff54e775cA",
 serviceRegistryTokenUtility: "0x3Fb926116D454b95c669B6Bf2E7c3bad8d19affA",
 operatorWhitelist: "0x42042799B0DE38AdD2a70dc996f69f98E1a85260",
};
const GNOSIS_ADDRESSES: { [key: string]: `0x${string}` } = {
 serviceManager: "0xE3607b00E75f6405248323A9417ff6b39B244b50",
 serviceRegistryL2: "0x9338b5153AE39BB89f50468E608eD9d764B755fD",
};
export const ADDRESSES: { [key: number]: { [key: string]: `0x${string}` } } = {
 1: MAINNET_ADDRESSES,
 // goerli
 5: {
  agentRegistry: "0xEB5638eefE289691EcE01943f768EDBF96258a80",
  componentRegistry: "0x7Fd1F4b764fA41d19fe3f63C85d12bf64d2bbf68",
  registriesManager: "0x10c5525F77F13b28f42c5626240c001c2D57CAd4",
  serviceManagerToken: "0x1d333b46dB6e8FFd271b6C2D2B254868BD9A2dbd",
  serviceRegistry: "0x1cEe30D08943EB58EFF84DD1AB44a6ee6FEff63a",
  serviceRegistryTokenUtility: "0x6d9b08701Af43D68D991c074A27E4d90Af7f2276",
  operatorWhitelist: "0x0338893fB1A1D9Df03F72CC53D8f786487d3D03E",
 },
 // gnosis
 100: GNOSIS_ADDRESSES,
};

/**
 * returns the web3 details
 */
export const getWeb3Details = () => {
 const network = getNetwork();
 const chainId = network.chain?.id || 100;
 const account = getAccount();
 const address = ADDRESSES[chainId];

 return { address, account, chainId };
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

const readContract = async (
 abi: any,
 address: `0x${string}`,
 method: string,
 args: any[] = []
) => {
 const data = await readContractWagmi({
  address,
  abi,
  functionName: method,
  args,
 });
 return data;
};

export const writeContract = async (
 abi: any,
 address: `0x${string}`,
 method: string,
 args: any[] = []
) => {
 const { hash } = await writeContractWagmi({
  address,
  abi,
  functionName: method,
  args,
 });
 return hash;
};

/**
 * returns contract interface for component registry
 */
export const readComponentContract = (arg: any) => {
 const { address } = getWeb3Details();
 const { componentRegistry } = address;
 const contract = readContract(
  COMPONENT_REGISTRY_CONTRACT.abi,
  componentRegistry,
  "getUnit",
  arg
 );
 return contract;
};

/**
 * returns mint contract
 */
export const getMintContract = () => {
 const { address } = getWeb3Details();
 const { registriesManager } = address;

 const contract = getContract(
  REGISTRIES_MANAGER_CONTRACT.abi,
  registriesManager
 );

 return contract;
};
