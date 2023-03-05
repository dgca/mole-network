/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MockMessenger,
  MockMessengerInterface,
} from "../../mocks/MockMessenger";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_scribe",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    inputs: [],
    name: "getMessages",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
        ],
        internalType: "struct Message[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "handleMessageReceived",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "messages",
    outputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "scribe",
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
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "writeMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405162000fac38038062000fac833981810160405281019061003491906100dd565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061010a565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100aa8261007f565b9050919050565b6100ba8161009f565b81146100c557600080fd5b50565b6000815190506100d7816100b1565b92915050565b6000602082840312156100f3576100f261007a565b5b6000610101848285016100c8565b91505092915050565b610e92806200011a6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630d80fefd1461005c57806333294fcc1461008d5780635ff6cbf3146100a9578063b3ac72f6146100c7578063b588bfad146100e5575b600080fd5b61007660048036038101906100719190610542565b610101565b604051610084929190610640565b60405180910390f35b6100a760048036038101906100a291906106d5565b6101dd565b005b6100b161033c565b6040516100be919061087a565b60405180910390f35b6100cf610483565b6040516100dc919061089c565b60405180910390f35b6100ff60048036038101906100fa91906109e7565b6104a7565b005b6001818154811061011157600080fd5b90600052602060002090600202016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101805461015a90610a5f565b80601f016020809104026020016040519081016040528092919081815260200182805461018690610a5f565b80156101d35780601f106101a8576101008083540402835291602001916101d3565b820191906000526020600020905b8154815290600101906020018083116101b657829003601f168201915b5050505050905082565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461026b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026290610b02565b60405180910390fd5b600080838381019061027d9190610b60565b91509150600160405180604001604052808473ffffffffffffffffffffffffffffffffffffffff16815260200183815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816103339190610d68565b50505050505050565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561047a57838290600052602060002090600202016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546103e990610a5f565b80601f016020809104026020016040519081016040528092919081815260200182805461041590610a5f565b80156104625780601f1061043757610100808354040283529160200191610462565b820191906000526020600020905b81548152906001019060200180831161044557829003601f168201915b50505050508152505081526020019060010190610360565b50505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff167f0d7fccda06d6eb51c23cbd16d49b9b3f3ebafb002dba1b074895cbb35d0e8130826040516104ed9190610e3a565b60405180910390a250565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61051f8161050c565b811461052a57600080fd5b50565b60008135905061053c81610516565b92915050565b60006020828403121561055857610557610502565b5b60006105668482850161052d565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061059a8261056f565b9050919050565b6105aa8161058f565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156105ea5780820151818401526020810190506105cf565b60008484015250505050565b6000601f19601f8301169050919050565b6000610612826105b0565b61061c81856105bb565b935061062c8185602086016105cc565b610635816105f6565b840191505092915050565b600060408201905061065560008301856105a1565b81810360208301526106678184610607565b90509392505050565b600080fd5b600080fd5b600080fd5b60008083601f84011261069557610694610670565b5b8235905067ffffffffffffffff8111156106b2576106b1610675565b5b6020830191508360018202830111156106ce576106cd61067a565b5b9250929050565b600080602083850312156106ec576106eb610502565b5b600083013567ffffffffffffffff81111561070a57610709610507565b5b6107168582860161067f565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6107578161058f565b82525050565b600082825260208201905092915050565b6000610779826105b0565b610783818561075d565b93506107938185602086016105cc565b61079c816105f6565b840191505092915050565b60006040830160008301516107bf600086018261074e565b50602083015184820360208601526107d7828261076e565b9150508091505092915050565b60006107f083836107a7565b905092915050565b6000602082019050919050565b600061081082610722565b61081a818561072d565b93508360208202850161082c8561073e565b8060005b85811015610868578484038952815161084985826107e4565b9450610854836107f8565b925060208a01995050600181019050610830565b50829750879550505050505092915050565b600060208201905081810360008301526108948184610805565b905092915050565b60006020820190506108b160008301846105a1565b92915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6108f4826105f6565b810181811067ffffffffffffffff82111715610913576109126108bc565b5b80604052505050565b60006109266104f8565b905061093282826108eb565b919050565b600067ffffffffffffffff821115610952576109516108bc565b5b61095b826105f6565b9050602081019050919050565b82818337600083830152505050565b600061098a61098584610937565b61091c565b9050828152602081018484840111156109a6576109a56108b7565b5b6109b1848285610968565b509392505050565b600082601f8301126109ce576109cd610670565b5b81356109de848260208601610977565b91505092915050565b6000602082840312156109fd576109fc610502565b5b600082013567ffffffffffffffff811115610a1b57610a1a610507565b5b610a27848285016109b9565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610a7757607f821691505b602082108103610a8a57610a89610a30565b5b50919050565b7f4d6f636b44657374696e6174696f6e3a204f6e6c79207363726962652063616e60008201527f2063616c6c20746869732066756e6374696f6e00000000000000000000000000602082015250565b6000610aec6033836105bb565b9150610af782610a90565b604082019050919050565b60006020820190508181036000830152610b1b81610adf565b9050919050565b6000610b2d8261056f565b9050919050565b610b3d81610b22565b8114610b4857600080fd5b50565b600081359050610b5a81610b34565b92915050565b60008060408385031215610b7757610b76610502565b5b6000610b8585828601610b4b565b925050602083013567ffffffffffffffff811115610ba657610ba5610507565b5b610bb2858286016109b9565b9150509250929050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610c1e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610be1565b610c288683610be1565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610c65610c60610c5b8461050c565b610c40565b61050c565b9050919050565b6000819050919050565b610c7f83610c4a565b610c93610c8b82610c6c565b848454610bee565b825550505050565b600090565b610ca8610c9b565b610cb3818484610c76565b505050565b5b81811015610cd757610ccc600082610ca0565b600181019050610cb9565b5050565b601f821115610d1c57610ced81610bbc565b610cf684610bd1565b81016020851015610d05578190505b610d19610d1185610bd1565b830182610cb8565b50505b505050565b600082821c905092915050565b6000610d3f60001984600802610d21565b1980831691505092915050565b6000610d588383610d2e565b9150826002028217905092915050565b610d71826105b0565b67ffffffffffffffff811115610d8a57610d896108bc565b5b610d948254610a5f565b610d9f828285610cdb565b600060209050601f831160018114610dd25760008415610dc0578287015190505b610dca8582610d4c565b865550610e32565b601f198416610de086610bbc565b60005b82811015610e0857848901518255600182019150602085019450602081019050610de3565b86831015610e255784890151610e21601f891682610d2e565b8355505b6001600288020188555050505b505050505050565b60006020820190508181036000830152610e548184610607565b90509291505056fea2646970667358221220a7f6fb910b31b92707536fa9baa9cc6aa8e59a90d39a1a493aa7df605b8c719264736f6c63430008110033";

type MockMessengerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockMessengerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockMessenger__factory extends ContractFactory {
  constructor(...args: MockMessengerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _scribe: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockMessenger> {
    return super.deploy(_scribe, overrides || {}) as Promise<MockMessenger>;
  }
  override getDeployTransaction(
    _scribe: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_scribe, overrides || {});
  }
  override attach(address: string): MockMessenger {
    return super.attach(address) as MockMessenger;
  }
  override connect(signer: Signer): MockMessenger__factory {
    return super.connect(signer) as MockMessenger__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockMessengerInterface {
    return new utils.Interface(_abi) as MockMessengerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockMessenger {
    return new Contract(address, _abi, signerOrProvider) as MockMessenger;
  }
}