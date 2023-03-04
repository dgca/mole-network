import { ETLSpecConfig, ETLSpec } from './types';

const config: ETLSpecConfig = {
  sources: [
    {
      type: 'evm',
      chainId: 1,
      address: '0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640',
      events: [
        {
          definition: `
          event Swap(
            address indexed sender,
            address indexed recipient,
            int256 amount0,
            int256 amount1,
            uint160 sqrtPriceX96,
            uint128 liquidity,
            int24 tick
          )
          `,
          handler: 'handleSwap',
        },
      ],
    },
  ],
  destination: {
    type: 'evm',
    chainId: 80001,
    address: '',
    signature: 'writeData(bytes)',
  },
};

function handleSwap(error, data, store) {
  console.log(`I have been called ${store.get('count') || 1} times`);
  store.set('count', (store.get('count') || 1) + 1);
  console.log(data);
}

const spec: ETLSpec = {
  config,
  handlers: {
    handleSwap,
  },
};

export default spec;
