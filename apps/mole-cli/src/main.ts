import { Alchemy, Network, Wallet, Utils } from 'alchemy-sdk';

import { ETLSpecification } from './types';

const testEtlSpec = {
  chain_id: 'polygon-mainnet',
  contract_id: '0x24E541A5C32830A4E8b89846fd4Bf86E294dd3cb',
  events: [
    {
      event:
        '0xf0bc0006668bf932bd58b60a8d8c6f00b0a6b1298498fde80018013b43c4d1cb',
      extract: [{}],
      handler: 'handleEvent',
    },
  ],
} as ETLSpecification;

// event Swap(
//   address indexed sender,
//   address indexed recipient,
//   int256 amount0,
//   int256 amount1,
//   uint160 sqrtPriceX96,
//   uint128 liquidity,
//   int24 tick
// )
class NetworkConnections {
  static connections: Array<Alchemy> = [];

  static getConnection(network: Network) {
    let connection = NetworkConnections.connections.find(
      (c) => c.config.network === network
    );

    if (!connection) {
      connection = new Alchemy({
        apiKey: process.env.ALCHEMY_KEY,
        network,
      });
      NetworkConnections.connections.push(connection);
    }

    return connection;
  }
}

class ETL {
  private connection: Alchemy | undefined;
  private wallets: Record<Network, Wallet>;

  spec: ETLSpecification;

  constructor(spec: ETLSpecification, walletMnemonics: string[]) {
    this.spec = spec;
    // Wallet Mnemonics are in the format of `{Network}={mnemonic}`
    this.wallets = walletMnemonics
      .map((walletArg) => walletArg.split('='))
      .map(([network, mnemonic]) => [network, Wallet])
      .reduce(
        (wallets, [network, wallet], i) => ({
          ...wallets,
          [network as Network]: wallet,
        }),
        {} as typeof this.wallets
      );
  }

  start() {
    console.log('MoleNET active and listening for events');
    const defaultConnection = NetworkConnections.getConnection(
      this.spec.chain_id
    );
    const defaultAddress = this.spec.contract_id;

    const topics = this.spec.events.map((e) => {
      const address = e.contract_id ?? defaultAddress;
      const connection = e.chain_id
        ? NetworkConnections.getConnection(e.chain_id)
        : defaultConnection;

      connection.ws.on(
        {
          address,
          topics: [e.event],
        },
        this.handleEvent.bind(this, e.handler)
      );
    });
  }

  async handleEvent(handler, log) {
    console.log(handler, log);
    const eventSpec = this.spec.events.find((e) => e.handler === handler);

    if (!eventSpec) {
      return console.log('Event not handled: specification not found');
    }
  }
}

(async () => {
  console.log('Starting Mole Network');

  const [spec_path, ...networkWalletMnemonics] = process.argv.slice(
    process.env.ENVIRONMENT === 'DEVELOPMENT' ? 2 : 1
  );

  try {
    const ETLInstance = new ETL(testEtlSpec, networkWalletMnemonics);
    await ETLInstance.start();
  } catch (e) {
    console.log(e);
    throw new Error('Invalid spec file, or spec not found');
  }
})();
