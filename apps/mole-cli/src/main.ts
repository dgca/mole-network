import Web3 from 'web3';
import { ETLSpec } from './types';

import mockETLSpec from './mockETLSpec';
import { parseEventDefiniton } from './utils';

import ScribeABI from '@mole-network/contracts/src/artifacts/contracts/Scribe.sol/Scribe.json';

const web3 = new Web3();

type ChainIdAccountMap = Record<number, ReturnType<typeof web3.eth.accounts.privateKeyToAccount>>;
// Add wallets for each chain
// the env file should have keys formatted as `WALLET_PRIVATE_KEY_CHAIN_###`
const CHAIN_ID_ACCOUNT = Object.entries(process.env)
  .filter(([k]) => /WALLET_PRIVATE_KEY/.test(k))
  .map(([k, v]) => [k.replace('WALLET_PRIVATE_KEY_CHAIN_', ''), v])
  .reduce<ChainIdAccountMap>((chainIdAccountMap, [chainId, privateKey]) => ({
    ...chainIdAccountMap,
    [chainId]: web3.eth.accounts.privateKeyToAccount(privateKey),
  }), {});
  
// Add scribe contracts for each chain
// the env file should have keys formatted as `SCRIBE_ADDRESS_CHAIN_###`
const CHAIN_ID_CONTRACT = Object.entries(process.env)
  .filter(([k]) => /SCRIBE_ADDRESS/.test(k))
  .map(([k, v]) => [k.replace('SCRIBE_ADDRESS_CHAIN_', ''), v])
  .reduce<Record<number, string>>((chainIdAccountMap, [chainId, contractAddress]) => ({
    ...chainIdAccountMap,
    [chainId]: contractAddress,
  }), {});

class Digger {
  web3Connections: Record<number, Web3> = {};
  spec: ETLSpec;
  store = new Map<string, any>();

  constructor(spec: ETLSpec) {
    this.spec = spec;
    spec.config.sources.forEach((source) => {
      if (!process.env[`RPC_WSS_CHAIN_${source.chainId}`]) {
        throw new Error(
          `Missing RPC_WSS_CHAIN_${source.chainId} environment variable`
        );
      }

      if (!this.web3Connections[source.chainId]) {
        this.web3Connections[source.chainId] = new Web3(
          process.env[`RPC_WSS_CHAIN_${source.chainId}`]
        );
      }
    });
  }

  start() {
    this.spec.config.sources.forEach((source) => {
      source.events.forEach((event) => {
        const { topic, parameters, indexed } = parseEventDefiniton(
          event.definition
        );

        this.web3Connections[source.chainId].eth.subscribe(
          'logs',
          {
            address: source.address,
            topics: [web3.utils.sha3(topic)],
          },
          (error, data) => {
            const decoded = web3.eth.abi.decodeLog(
              parameters,
              data.data,
              indexed ? data.topics.slice(1) : data.topics
            );
            console.log(decoded);
            const dataToScribe = mockETLSpec.handlers[event.handler](error, data, this.store);
            this.sendToScribe(source.chainId, dataToScribe);
          }
        );
      });
    });
  }

  async sendToScribe(chainId: number, transformedData) {
    const scribeAddress = CHAIN_ID_CONTRACT[chainId];
    const sendingAccount = CHAIN_ID_ACCOUNT[chainId];

    if (!scribeAddress) {
      console.log(`No scribe contract address found for chainId ${chainId}`);
      return;
    }

    if (!sendingAccount) {
      console.log(`No wallet address found for chainId ${chainId}`);
      return;
    }

    const scribeContract = new this.web3Connections[chainId].eth.Contract(
      ScribeABI,
      scribeAddress, 
    );

    await scribeContract.methods.submitValue(
      this.spec.config.destination.address,
      this.spec.config.destination.signature,
      transformedData,
    )
    .send({ from: sendingAccount.address })
    .catch(e => {
      console.log(`Error writing data to Scribe: ${e.message}`);
    });
  }
}

(async () => {
  console.log(`
    __  _______  __    _______   ______________
   /  |/  / __ \\/ /   / ____/ | / / ____/_  __/   / \\
  / /|_/ / / / / /   / __/ /  |/ / __/   / /     /___\\
 / /  / / /_/ / /___/ /___/ /|  / /___  / /     ( ^.^ ) 
/_/  /_/\\____/_____/_____/_/ |_/_____/ /_/      ( > < )
`);
  try {
    const digger = new Digger(mockETLSpec);
    digger.start();
  } catch (e) {
    console.log(e);
    throw new Error('Invalid spec file, or spec not found');
  }
})();
