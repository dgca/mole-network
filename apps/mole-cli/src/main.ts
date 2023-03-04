import Web3 from 'web3';
import { ETLSpec } from './types';

import mockETLSpec from './mockETLSpec';
import { parseEventDefiniton } from './utils';

const web3 = new Web3();

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
            mockETLSpec.handlers[event.handler](error, data, this.store);
          }
        );
      });
    });
  }
}

(async () => {
  console.log('Starting MoleNET...');
  try {
    const digger = new Digger(mockETLSpec);
    digger.start();
  } catch (e) {
    console.log(e);
    throw new Error('Invalid spec file, or spec not found');
  }
})();
