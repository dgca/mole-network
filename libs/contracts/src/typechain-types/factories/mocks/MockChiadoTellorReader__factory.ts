/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MockChiadoTellorReader,
  MockChiadoTellorReaderInterface,
} from "../../mocks/MockChiadoTellorReader";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_tellorAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_queryId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "getDataAfter",
    outputs: [
      {
        internalType: "bytes",
        name: "_value",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_timestampRetrieved",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_queryId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "getDataBefore",
    outputs: [
      {
        internalType: "bytes",
        name: "_value",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_timestampRetrieved",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_queryId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "getIndexForDataAfter",
    outputs: [
      {
        internalType: "bool",
        name: "_found",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_queryId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "getIndexForDataBefore",
    outputs: [
      {
        internalType: "bool",
        name: "_found",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLatestTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_queryId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxAge",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxCount",
        type: "uint256",
      },
    ],
    name: "getMultipleValuesBefore",
    outputs: [
      {
        internalType: "bytes[]",
        name: "_values",
        type: "bytes[]",
      },
      {
        internalType: "uint256[]",
        name: "_timestamps",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_queryId",
        type: "bytes32",
      },
    ],
    name: "getNewValueCountbyQueryId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getQueryId",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_queryId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "getReporterByTimestamp",
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
        internalType: "bytes32",
        name: "_queryId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getTimestampbyQueryIdandIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "idMappingContract",
    outputs: [
      {
        internalType: "contract IMappingContract",
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
        internalType: "bytes32",
        name: "_queryId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "isInDispute",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_queryId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "retrieveData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addy",
        type: "address",
      },
    ],
    name: "setIdMappingContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tellor",
    outputs: [
      {
        internalType: "contract ITellor",
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
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "valueFor",
    outputs: [
      {
        internalType: "int256",
        name: "_value",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_statusCode",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001f9038038062001f908339818101604052810190620000379190620000ea565b80806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506200011c565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000b28262000085565b9050919050565b620000c481620000a5565b8114620000d057600080fd5b50565b600081519050620000e481620000b9565b92915050565b60006020828403121562000103576200010262000080565b5b60006200011384828501620000d3565b91505092915050565b611e64806200012c6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063a792765f11610097578063f43b52cb11610066578063f43b52cb146102fe578063f66f49c31461031c578063f78eea831461034d578063fcd4a5461461037f57610100565b8063a792765f1461023d578063c5958af91461026e578063ce5e11bf1461029e578063e07c5486146102ce57610100565b80632af8aae0116100d35780632af8aae01461018e57806344e87f91146101ac57806364ee3c6d146101dc57806377b03e0d1461020d57610100565b80630aaaea9314610105578063193b505b146101235780631959ad5b1461013f578063294490851461015d575b600080fd5b61010d6103b0565b60405161011a91906111d6565b60405180910390f35b61013d60048036038101906101389190611263565b6103e7565b005b610147610486565b60405161015491906112ef565b60405180910390f35b6101776004803603810190610172919061136c565b6104aa565b6040516101859291906113d6565b60405180910390f35b610196610553565b6040516101a39190611420565b60405180910390f35b6101c660048036038101906101c1919061136c565b610579565b6040516101d3919061143b565b60405180910390f35b6101f660048036038101906101f1919061136c565b610620565b6040516102049291906114e6565b60405180910390f35b61022760048036038101906102229190611516565b61067a565b6040516102349190611543565b60405180910390f35b6102576004803603810190610252919061136c565b61071e565b6040516102659291906114e6565b60405180910390f35b6102886004803603810190610283919061136c565b6107d6565b604051610295919061155e565b60405180910390f35b6102b860048036038101906102b3919061136c565b610881565b6040516102c59190611543565b60405180910390f35b6102e860048036038101906102e3919061136c565b610928565b6040516102f5919061158f565b60405180910390f35b6103066109cf565b6040516103139190611543565b60405180910390f35b6103366004803603810190610331919061136c565b6109ef565b6040516103449291906113d6565b60405180910390f35b61036760048036038101906103629190611516565b610ce0565b604051610376939291906115c3565b60405180910390f35b610399600480360381019061039491906115fa565b610e11565b6040516103a792919061182b565b60405180910390f35b6000806040516020016103c2906118bf565b6040516020818303038152906040529050600081805190602001209050809250505090565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461044257600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632944908585856040518363ffffffff1660e01b81526004016105089291906118df565b6040805180830381865afa158015610524573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105489190611949565b915091509250929050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166344e87f9184846040518363ffffffff1660e01b81526004016105d79291906118df565b602060405180830381865afa1580156105f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106189190611989565b905092915050565b6060600080600061063186866109ef565b91509150816106585760006040518060200160405280600081525090935093505050610673565b6106628682610881565b925061066e86846107d6565b935050505b9250929050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166377b03e0d836040518263ffffffff1660e01b81526004016106d691906111d6565b602060405180830381865afa1580156106f3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071791906119b6565b9050919050565b606060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a792765f85856040518363ffffffff1660e01b815260040161077e9291906118df565b600060405180830381865afa15801561079b573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906107c49190611b09565b90915080925081935050509250929050565b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c5958af984846040518363ffffffff1660e01b81526004016108339291906118df565b600060405180830381865afa158015610850573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906108799190611b78565b905092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ce5e11bf84846040518363ffffffff1660e01b81526004016108df9291906118df565b602060405180830381865afa1580156108fc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092091906119b6565b905092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e07c548684846040518363ffffffff1660e01b81526004016109869291906118df565b602060405180830381865afa1580156109a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c79190611bd6565b905092915050565b6000806109da611129565b6109e390611c35565b60001c90508091505090565b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632944908585856040518363ffffffff1660e01b8152600401610a4d9291906118df565b6040805180830381865afa158015610a69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8d9190611949565b80925081935050508115610aaa578080610aa690611ccb565b9150505b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166377b03e0d866040518263ffffffff1660e01b8152600401610b0691906111d6565b602060405180830381865afa158015610b23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4791906119b6565b9050818111610b5d576000809250925050610cd9565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ce5e11bf87856040518363ffffffff1660e01b8152600401610bbb9291906118df565b602060405180830381865afa158015610bd8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bfc91906119b6565b905084811115610c1157600193505050610cd9565b8280610c1c90611ccb565b935050828211610c3457600080935093505050610cd9565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ce5e11bf87856040518363ffffffff1660e01b8152600401610c8f9291906118df565b602060405180830381865afa158015610cac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd091906119b6565b90506001935050505b9250929050565b6000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166387a475fd856040518263ffffffff1660e01b8152600401610d4091906111d6565b602060405180830381865afa158015610d5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d819190611d28565b93506000610d8e8561067a565b905060008103610daa5760008061019493509350935050610e0a565b610dc085600183610dbb9190611d55565b610881565b92506000610dce86856107d6565b90506000815103610dec576000806101949450945094505050610e0a565b6000610df782611155565b9050809550858560c89550955095505050505b9193909250565b606080600080610e2c888789610e279190611d55565b6109ef565b9150915081610ed957600067ffffffffffffffff811115610e5057610e4f6119ed565b5b604051908082528060200260200182016040528015610e8357816020015b6060815260200190600190039081610e6e5790505b50600067ffffffffffffffff811115610e9f57610e9e6119ed565b5b604051908082528060200260200182016040528015610ecd5781602001602082028036833780820191505090505b50935093505050611120565b6000610ee589896104aa565b809250819450505082610f9757600067ffffffffffffffff811115610f0d57610f0c6119ed565b5b604051908082528060200260200182016040528015610f4057816020015b6060815260200190600190039081610f2b5790505b50600067ffffffffffffffff811115610f5c57610f5b6119ed565b5b604051908082528060200260200182016040528015610f8a5781602001602082028036833780820191505090505b5094509450505050611120565b600060018383610fa79190611d55565b610fb19190611d89565b905086811115610fd95760018783610fc99190611d55565b610fd39190611d89565b92508690505b60008167ffffffffffffffff811115610ff557610ff46119ed565b5b60405190808252806020026020018201604052801561102857816020015b60608152602001906001900390816110135790505b50905060008267ffffffffffffffff811115611047576110466119ed565b5b6040519080825280602002602001820160405280156110755781602001602082028036833780820191505090505b509050606060005b848110156111115761109a8e82896110959190611d89565b610881565b8382815181106110ad576110ac611dbd565b5b6020026020010181815250506110dd8e8483815181106110d0576110cf611dbd565b5b60200260200101516107d6565b9150818482815181106110f3576110f2611dbd565b5b6020026020010181905250808061110990611ccb565b91505061107d565b50828298509850505050505050505b94509492505050565b6060600061114b6111386103b0565b610e10426111469190611d55565b61071e565b5090508091505090565b600080600090505b82518110156111b75782818151811061117957611178611dbd565b5b602001015160f81c60f81b60f81c60ff16610100836111989190611dec565b6111a29190611d89565b915080806111af90611ccb565b91505061115d565b50919050565b6000819050919050565b6111d0816111bd565b82525050565b60006020820190506111eb60008301846111c7565b92915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061123082611205565b9050919050565b61124081611225565b811461124b57600080fd5b50565b60008135905061125d81611237565b92915050565b600060208284031215611279576112786111fb565b5b60006112878482850161124e565b91505092915050565b6000819050919050565b60006112b56112b06112ab84611205565b611290565b611205565b9050919050565b60006112c78261129a565b9050919050565b60006112d9826112bc565b9050919050565b6112e9816112ce565b82525050565b600060208201905061130460008301846112e0565b92915050565b611313816111bd565b811461131e57600080fd5b50565b6000813590506113308161130a565b92915050565b6000819050919050565b61134981611336565b811461135457600080fd5b50565b60008135905061136681611340565b92915050565b60008060408385031215611383576113826111fb565b5b600061139185828601611321565b92505060206113a285828601611357565b9150509250929050565b60008115159050919050565b6113c1816113ac565b82525050565b6113d081611336565b82525050565b60006040820190506113eb60008301856113b8565b6113f860208301846113c7565b9392505050565b600061140a826112bc565b9050919050565b61141a816113ff565b82525050565b60006020820190506114356000830184611411565b92915050565b600060208201905061145060008301846113b8565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611490578082015181840152602081019050611475565b60008484015250505050565b6000601f19601f8301169050919050565b60006114b882611456565b6114c28185611461565b93506114d2818560208601611472565b6114db8161149c565b840191505092915050565b6000604082019050818103600083015261150081856114ad565b905061150f60208301846113c7565b9392505050565b60006020828403121561152c5761152b6111fb565b5b600061153a84828501611321565b91505092915050565b600060208201905061155860008301846113c7565b92915050565b6000602082019050818103600083015261157881846114ad565b905092915050565b61158981611225565b82525050565b60006020820190506115a46000830184611580565b92915050565b6000819050919050565b6115bd816115aa565b82525050565b60006060820190506115d860008301866115b4565b6115e560208301856113c7565b6115f260408301846113c7565b949350505050565b60008060008060808587031215611614576116136111fb565b5b600061162287828801611321565b945050602061163387828801611357565b935050604061164487828801611357565b925050606061165587828801611357565b91505092959194509250565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b60006116a982611456565b6116b3818561168d565b93506116c3818560208601611472565b6116cc8161149c565b840191505092915050565b60006116e3838361169e565b905092915050565b6000602082019050919050565b600061170382611661565b61170d818561166c565b93508360208202850161171f8561167d565b8060005b8581101561175b578484038952815161173c85826116d7565b9450611747836116eb565b925060208a01995050600181019050611723565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6117a281611336565b82525050565b60006117b48383611799565b60208301905092915050565b6000602082019050919050565b60006117d88261176d565b6117e28185611778565b93506117ed83611789565b8060005b8381101561181e57815161180588826117a8565b9750611810836117c0565b9250506001810190506117f1565b5085935050505092915050565b6000604082019050818103600083015261184581856116f8565b9050818103602083015261185981846117cd565b90509392505050565b600082825260208201905092915050565b7f4d6f636b54656c6c6f7251756572790000000000000000000000000000000000600082015250565b60006118a9600f83611862565b91506118b482611873565b602082019050919050565b600060208201905081810360008301526118d88161189c565b9050919050565b60006040820190506118f460008301856111c7565b61190160208301846113c7565b9392505050565b611911816113ac565b811461191c57600080fd5b50565b60008151905061192e81611908565b92915050565b60008151905061194381611340565b92915050565b600080604083850312156119605761195f6111fb565b5b600061196e8582860161191f565b925050602061197f85828601611934565b9150509250929050565b60006020828403121561199f5761199e6111fb565b5b60006119ad8482850161191f565b91505092915050565b6000602082840312156119cc576119cb6111fb565b5b60006119da84828501611934565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611a258261149c565b810181811067ffffffffffffffff82111715611a4457611a436119ed565b5b80604052505050565b6000611a576111f1565b9050611a638282611a1c565b919050565b600067ffffffffffffffff821115611a8357611a826119ed565b5b611a8c8261149c565b9050602081019050919050565b6000611aac611aa784611a68565b611a4d565b905082815260208101848484011115611ac857611ac76119e8565b5b611ad3848285611472565b509392505050565b600082601f830112611af057611aef6119e3565b5b8151611b00848260208601611a99565b91505092915050565b600080600060608486031215611b2257611b216111fb565b5b6000611b308682870161191f565b935050602084015167ffffffffffffffff811115611b5157611b50611200565b5b611b5d86828701611adb565b9250506040611b6e86828701611934565b9150509250925092565b600060208284031215611b8e57611b8d6111fb565b5b600082015167ffffffffffffffff811115611bac57611bab611200565b5b611bb884828501611adb565b91505092915050565b600081519050611bd081611237565b92915050565b600060208284031215611bec57611beb6111fb565b5b6000611bfa84828501611bc1565b91505092915050565b6000819050602082019050919050565b6000611c1f82516111bd565b80915050919050565b600082821b905092915050565b6000611c4082611456565b82611c4a84611c03565b9050611c5581611c13565b92506020821015611c9557611c907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83602003600802611c28565b831692505b5050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611cd682611336565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611d0857611d07611c9c565b5b600182019050919050565b600081519050611d228161130a565b92915050565b600060208284031215611d3e57611d3d6111fb565b5b6000611d4c84828501611d13565b91505092915050565b6000611d6082611336565b9150611d6b83611336565b9250828203905081811115611d8357611d82611c9c565b5b92915050565b6000611d9482611336565b9150611d9f83611336565b9250828201905080821115611db757611db6611c9c565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000611df782611336565b9150611e0283611336565b9250828202611e1081611336565b91508282048414831517611e2757611e26611c9c565b5b509291505056fea264697066735822122075d181139888043e6988e4cf05f62a8c14e09a6d93adb46f52fe92279f6c391764736f6c63430008110033";

type MockChiadoTellorReaderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockChiadoTellorReaderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockChiadoTellorReader__factory extends ContractFactory {
  constructor(...args: MockChiadoTellorReaderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _tellorAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockChiadoTellorReader> {
    return super.deploy(
      _tellorAddress,
      overrides || {}
    ) as Promise<MockChiadoTellorReader>;
  }
  override getDeployTransaction(
    _tellorAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_tellorAddress, overrides || {});
  }
  override attach(address: string): MockChiadoTellorReader {
    return super.attach(address) as MockChiadoTellorReader;
  }
  override connect(signer: Signer): MockChiadoTellorReader__factory {
    return super.connect(signer) as MockChiadoTellorReader__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockChiadoTellorReaderInterface {
    return new utils.Interface(_abi) as MockChiadoTellorReaderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockChiadoTellorReader {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockChiadoTellorReader;
  }
}
