import Web3 from 'web3';
import { Destination, ETLSpec } from './types';
import { parseEventDefiniton, initWeb3 } from './utils';

import { typechain } from '@mole-network/contracts';

const {
  web3,
  ACCOUNT_BY_CHAIN_ID,
  SCRIBE_CONTRACT_BY_CHAIN_ID,
  PROVIDER_BY_CHAIN_ID,
} = initWeb3();

class Digger {
  spec: ETLSpec;
  store = new Map<string, any>();
  web3Connections: Record<string, Web3> = {};

  constructor(spec: ETLSpec) {
    this.spec = spec;
    spec.config.sources.contracts?.forEach((source) => {
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
    this.setupContractListeners();
    this.setupApiListeners();
  }

  setupContractListeners() {
    this.spec.config.sources.contracts?.forEach((source) => {
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

            const handlerResponse = this.spec.handlers[event.handler]({
              error,
              data,
              decodedData: decoded,
              store: this.store,
            });

            if (handlerResponse?.payload) {
              this.sendToScribe(handlerResponse.payload, event.destination);
            }
          }
        );
      });
    });
  }

  setupApiListeners() {
    this.spec.config.sources.api?.forEach((source) => {
      const { type, url, handler, rate, destination } = source;
      if (type !== 'GET') {
        throw new Error(`Unsupported API type ${type}`);
      }

      const doFetch = async () => {
        const response = await fetch(url);
        const data = await response.json();
        const handlerResponse = this.spec.handlers[handler]({
          error: null,
          data,
          decodedData: null,
          store: this.store,
        });

        if (handlerResponse?.payload) {
          this.sendToScribe(handlerResponse.payload, destination);
        }
      };

      doFetch();

      setInterval(doFetch, rate);
    });
  }

  async sendToScribe(payload, destination: Destination) {
    const chainId = destination.chainId;
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
      ).submitValue(destination.address, destination.signature, payload);
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

  const specArg = process.argv[2];
  if (!specArg.startsWith('--spec=')) {
    throw new Error('Missing --spec argument');
  }

  const specName = specArg.split('=')[1];
  const specModule = await require(`./etl-specs/${specName}`);

  try {
    const digger = new Digger(specModule);
    digger.start();
  } catch (e) {
    console.log(e);
    throw new Error('Invalid spec file, or spec not found');
  }
})();
