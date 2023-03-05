/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MappingContractExample,
  MappingContractExampleInterface,
} from "../../../../vendor/tellor/mocks/MappingContractExample";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "getTellorID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610687806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806387a475fd14610030575b600080fd5b61004a60048036038101906100459190610290565b610060565b60405161005791906102cc565b60405180910390f35b60007fdfaa6f747f0f012e8f2069d6ecacff25f5cdf0258702051747439949737fc0b560001b82036100dd57600060405160200161009d90610390565b6040516020818303038152906040526040516020016100bc919061049f565b6040516020818303038152906040529050808051906020012092505061024d565b7f637b7efb6b620736c247aaa282f3898914c0bef6c12faff0d3fe9d4bea78302060001b820361015857600060405160200161011890610520565b604051602081830303815290604052604051602001610137919061049f565b6040516020818303038152906040529050808051906020012092505061024c565b7f2dfb033e1ae0529b328985942d27f2d5a62213f3a2d97ca8e27ad2864c5af94260001b82036101d35760006040516020016101939061059f565b6040516020818303038152906040526040516020016101b2919061049f565b6040516020818303038152906040529050808051906020012092505061024b565b7f9899e35601719f1348e09967349f72c7d04800f17c14992d6dcf2f17fac713ea60001b820361024a57600060405160200161020e9061061e565b60405160208183030381529060405260405160200161022d919061049f565b604051602081830303815290604052905080805190602001209250505b5b5b5b819050919050565b600080fd5b6000819050919050565b61026d8161025a565b811461027857600080fd5b50565b60008135905061028a81610264565b92915050565b6000602082840312156102a6576102a5610255565b5b60006102b48482850161027b565b91505092915050565b6102c68161025a565b82525050565b60006020820190506102e160008301846102bd565b92915050565b600082825260208201905092915050565b7f6574680000000000000000000000000000000000000000000000000000000000600082015250565b600061032e6003836102e7565b9150610339826102f8565b602082019050919050565b7f7573640000000000000000000000000000000000000000000000000000000000600082015250565b600061037a6003836102e7565b915061038582610344565b602082019050919050565b600060408201905081810360008301526103a981610321565b905081810360208301526103bc8161036d565b9050919050565b7f53706f7450726963650000000000000000000000000000000000000000000000600082015250565b60006103f96009836102e7565b9150610404826103c3565b602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561044957808201518184015260208101905061042e565b60008484015250505050565b6000601f19601f8301169050919050565b60006104718261040f565b61047b818561041a565b935061048b81856020860161042b565b61049481610455565b840191505092915050565b600060408201905081810360008301526104b8816103ec565b905081810360208301526104cc8184610466565b905092915050565b7f6274630000000000000000000000000000000000000000000000000000000000600082015250565b600061050a6003836102e7565b9150610515826104d4565b602082019050919050565b60006040820190508181036000830152610539816104fd565b9050818103602083015261054c8161036d565b9050919050565b7f7861750000000000000000000000000000000000000000000000000000000000600082015250565b60006105896003836102e7565b915061059482610553565b602082019050919050565b600060408201905081810360008301526105b88161057c565b905081810360208301526105cb8161036d565b9050919050565b7f6461690000000000000000000000000000000000000000000000000000000000600082015250565b60006106086003836102e7565b9150610613826105d2565b602082019050919050565b60006040820190508181036000830152610637816105fb565b9050818103602083015261064a8161036d565b905091905056fea26469706673582212200bb9868dd6226efe67ae23ed3364705eb6a6bce62a638a8bdbee447a5498a34964736f6c63430008110033";

type MappingContractExampleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MappingContractExampleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MappingContractExample__factory extends ContractFactory {
  constructor(...args: MappingContractExampleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MappingContractExample> {
    return super.deploy(overrides || {}) as Promise<MappingContractExample>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MappingContractExample {
    return super.attach(address) as MappingContractExample;
  }
  override connect(signer: Signer): MappingContractExample__factory {
    return super.connect(signer) as MappingContractExample__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MappingContractExampleInterface {
    return new utils.Interface(_abi) as MappingContractExampleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MappingContractExample {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MappingContractExample;
  }
}