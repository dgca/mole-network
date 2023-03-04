import Web3 from 'web3';
import { ETLSpec } from './types';

import mockETLSpec from './mockETLSpec';
import { parseEventDefiniton, initWeb3 } from './utils';

import { typechain } from '@mole-network/contracts';

const {
  web3,
  ACCOUNT_BY_CHAIN_ID,
  SCRIBE_CONTRACT_BY_CHAIN_ID,
  PROVIDER_BY_CHAIN_ID,
} = initWeb3();

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

            const { payload } = mockETLSpec.handlers[event.handler]({
              error,
              rawData: data,
              decodedData: decoded,
              store: this.store,
            });

            if (payload) {
              this.sendToScribe(payload);
            }
          }
        );
      });
    });
  }

  async sendToScribe(payload) {
    console.log({ payload });
    const chainId = this.spec.config.destination.chainId;
    const sendingAccount = ACCOUNT_BY_CHAIN_ID[chainId];
    const scribeAddress = SCRIBE_CONTRACT_BY_CHAIN_ID[chainId];

    if (!scribeAddress) {
      console.log(`No scribe contract address found for chainId ${chainId}`);
      return;
    }

    if (!sendingAccount) {
      console.log(`No wallet address found for chainId ${chainId}`);
      return;
    }

    try {
      await typechain.Scribe__factory.connect(
        scribeAddress,
        PROVIDER_BY_CHAIN_ID[chainId].getSigner(sendingAccount.address)
      ).submitValue(
        this.spec.config.destination.address,
        this.spec.config.destination.signature,
        payload
      );
    } catch (error) {
      console.log(error);
    }
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
