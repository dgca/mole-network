import { ethers } from 'ethers';
import { ETLSpecConfig, ETLSpec, Handler } from './types';

const config: ETLSpecConfig = {
  sources: [
    {
      type: 'evm',
      chainId: 1,
      // USDC/WETH pool
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

const handleSwap: Handler = ({ error, rawData, decodedData, store }) => {
  if (error) {
    return;
  }

  console.log(decodedData);

  const calledCount = store.get('count') || 1;
  store.set('count', calledCount + 1);

  const blockNumber = rawData.blockNumber;
  const amount0 = decodedData.amount0;
  const amount1 = decodedData.amount1;

  const payload = ethers.utils.defaultAbiCoder.encode(
    ['uint256', 'uint256', 'int256', 'int256'],
    [calledCount, blockNumber, amount0, amount1]
  );

  return {
    payload,
  };
};

const spec: ETLSpec = {
  config,
  handlers: {
    handleSwap,
  },
};

export default spec;
