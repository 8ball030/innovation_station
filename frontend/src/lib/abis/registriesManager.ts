export const REGISTRIES_MANAGER_CONTRACT = {
 _format: "hh-sol-artifact-1",
 contractName: "RegistriesManager",
 sourceName: "lib/autonolas-registries/contracts/RegistriesManager.sol",
 abi: [
  {
   inputs: [
    {
     internalType: "address",
     name: "_componentRegistry",
     type: "address",
    },
    {
     internalType: "address",
     name: "_agentRegistry",
     type: "address",
    },
   ],
   stateMutability: "nonpayable",
   type: "constructor",
  },
  {
   inputs: [
    {
     internalType: "address",
     name: "operator",
     type: "address",
    },
   ],
   name: "AgentInstanceRegistered",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "uint256",
     name: "serviceId",
     type: "uint256",
    },
   ],
   name: "AgentInstancesSlotsFilled",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "uint256",
     name: "agentId",
     type: "uint256",
    },
   ],
   name: "AgentNotFound",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "uint256",
     name: "agentId",
     type: "uint256",
    },
    {
     internalType: "uint256",
     name: "serviceId",
     type: "uint256",
    },
   ],
   name: "AgentNotInService",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "uint256",
     name: "componentId",
     type: "uint256",
    },
   ],
   name: "ComponentNotFound",
   type: "error",
  },
  {
   inputs: [],
   name: "HashExists",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "uint256",
     name: "sent",
     type: "uint256",
    },
    {
     internalType: "uint256",
     name: "expected",
     type: "uint256",
    },
    {
     internalType: "uint256",
     name: "serviceId",
     type: "uint256",
    },
   ],
   name: "IncorrectAgentBondingValue",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "uint256",
     name: "sent",
     type: "uint256",
    },
    {
     internalType: "uint256",
     name: "expected",
     type: "uint256",
    },
    {
     internalType: "uint256",
     name: "serviceId",
     type: "uint256",
    },
   ],
   name: "IncorrectRegistrationDepositValue",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "address",
     name: "sender",
     type: "address",
    },
    {
     internalType: "address",
     name: "manager",
     type: "address",
    },
   ],
   name: "ManagerOnly",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "address",
     name: "provided",
     type: "address",
    },
    {
     internalType: "address",
     name: "expected",
     type: "address",
    },
    {
     internalType: "uint256",
     name: "serviceId",
     type: "uint256",
    },
   ],
   name: "OnlyOwnServiceMultisig",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "address",
     name: "operator",
     type: "address",
    },
    {
     internalType: "uint256",
     name: "serviceId",
     type: "uint256",
    },
   ],
   name: "OperatorHasNoInstances",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "uint256",
     name: "provided",
     type: "uint256",
    },
    {
     internalType: "uint256",
     name: "max",
     type: "uint256",
    },
   ],
   name: "Overflow",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "address",
     name: "sender",
     type: "address",
    },
    {
     internalType: "address",
     name: "owner",
     type: "address",
    },
   ],
   name: "OwnerOnly",
   type: "error",
  },
  {
   inputs: [],
   name: "Paused",
   type: "error",
  },
  {
   inputs: [],
   name: "ReentrancyGuard",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "uint256",
     name: "serviceId",
     type: "uint256",
    },
   ],
   name: "ServiceMustBeInactive",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "address",
     name: "token",
     type: "address",
    },
    {
     internalType: "address",
     name: "from",
     type: "address",
    },
    {
     internalType: "address",
     name: "to",
     type: "address",
    },
    {
     internalType: "uint256",
     name: "value",
     type: "uint256",
    },
   ],
   name: "TransferFailed",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "address",
     name: "multisig",
     type: "address",
    },
   ],
   name: "UnauthorizedMultisig",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "uint256",
     name: "agentId",
     type: "uint256",
    },
   ],
   name: "WrongAgentId",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "uint256",
     name: "numValues1",
     type: "uint256",
    },
    {
     internalType: "uint256",
     name: "numValues2",
     type: "uint256",
    },
   ],
   name: "WrongArrayLength",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "uint256",
     name: "serviceId",
     type: "uint256",
    },
   ],
   name: "WrongOperator",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "uint256",
     name: "state",
     type: "uint256",
    },
    {
     internalType: "uint256",
     name: "serviceId",
     type: "uint256",
    },
   ],
   name: "WrongServiceState",
   type: "error",
  },
  {
   inputs: [
    {
     internalType: "uint256",
     name: "currentThreshold",
     type: "uint256",
    },
    {
     internalType: "uint256",
     name: "minThreshold",
     type: "uint256",
    },
    {
     internalType: "uint256",
     name: "maxThreshold",
     type: "uint256",
    },
   ],
   name: "WrongThreshold",
   type: "error",
  },
  {
   inputs: [],
   name: "ZeroAddress",
   type: "error",
  },
  {
   inputs: [],
   name: "ZeroValue",
   type: "error",
  },
  {
   anonymous: false,
   inputs: [
    {
     indexed: true,
     internalType: "address",
     name: "owner",
     type: "address",
    },
   ],
   name: "OwnerUpdated",
   type: "event",
  },
  {
   anonymous: false,
   inputs: [
    {
     indexed: true,
     internalType: "address",
     name: "owner",
     type: "address",
    },
   ],
   name: "Pause",
   type: "event",
  },
  {
   anonymous: false,
   inputs: [
    {
     indexed: true,
     internalType: "address",
     name: "owner",
     type: "address",
    },
   ],
   name: "Unpause",
   type: "event",
  },
  {
   inputs: [],
   name: "agentRegistry",
   outputs: [
    {
     internalType: "address",
     name: "",
     type: "address",
    },
   ],
   stateMutability: "view",
   type: "function",
  },
  {
   inputs: [
    {
     internalType: "address",
     name: "newOwner",
     type: "address",
    },
   ],
   name: "changeOwner",
   outputs: [],
   stateMutability: "nonpayable",
   type: "function",
  },
  {
   inputs: [],
   name: "componentRegistry",
   outputs: [
    {
     internalType: "address",
     name: "",
     type: "address",
    },
   ],
   stateMutability: "view",
   type: "function",
  },
  {
   inputs: [
    {
     internalType: "enum IRegistry.UnitType",
     name: "unitType",
     type: "uint8",
    },
    {
     internalType: "address",
     name: "unitOwner",
     type: "address",
    },
    {
     internalType: "bytes32",
     name: "unitHash",
     type: "bytes32",
    },
    {
     internalType: "uint32[]",
     name: "dependencies",
     type: "uint32[]",
    },
   ],
   name: "create",
   outputs: [
    {
     internalType: "uint256",
     name: "unitId",
     type: "uint256",
    },
   ],
   stateMutability: "nonpayable",
   type: "function",
  },
  {
   inputs: [],
   name: "owner",
   outputs: [
    {
     internalType: "address",
     name: "",
     type: "address",
    },
   ],
   stateMutability: "view",
   type: "function",
  },
  {
   inputs: [],
   name: "pause",
   outputs: [],
   stateMutability: "nonpayable",
   type: "function",
  },
  {
   inputs: [],
   name: "paused",
   outputs: [
    {
     internalType: "bool",
     name: "",
     type: "bool",
    },
   ],
   stateMutability: "view",
   type: "function",
  },
  {
   inputs: [],
   name: "unpause",
   outputs: [],
   stateMutability: "nonpayable",
   type: "function",
  },
  {
   inputs: [
    {
     internalType: "enum IRegistry.UnitType",
     name: "unitType",
     type: "uint8",
    },
    {
     internalType: "uint256",
     name: "unitId",
     type: "uint256",
    },
    {
     internalType: "bytes32",
     name: "unitHash",
     type: "bytes32",
    },
   ],
   name: "updateHash",
   outputs: [
    {
     internalType: "bool",
     name: "success",
     type: "bool",
    },
   ],
   stateMutability: "nonpayable",
   type: "function",
  },
 ],
 deployedBytecode: "",
 linkReferences: {},
 deployedLinkReferences: {},
};
