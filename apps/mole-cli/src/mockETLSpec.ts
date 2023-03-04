import { ETLSpecConfig, ETLSpec } from './types';

const config: ETLSpecConfig = {
  sources: [
    {
      type: 'evm',
      chainId: 1,
      address: '0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640',
      events: [
        {
          topic: 'Swap(address,address,int256,int256,uint160,uint128,int24)',
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
          parameters: [
            { type: 'address', name: 'sender', indexed: true },
            { type: 'address', name: 'recipient', indexed: true },
            { type: 'int256', name: 'amount0' },
            { type: 'int256', name: 'amount1' },
            { type: 'uint160', name: 'sqrtPriceX96' },
            { type: 'uint128', name: 'liquidity' },
            { type: 'int24', name: 'tick' },
          ],
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
