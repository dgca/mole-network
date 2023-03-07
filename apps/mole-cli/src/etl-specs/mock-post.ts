import { ethers } from 'ethers';
import { ETLSpecConfig, Handler, Handlers } from '../types';

export const config: ETLSpecConfig = {
  sources: {
    contracts: [
      {
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
            destination: {
              type: 'post',
              url: 'https://maker.ifttt.com/trigger/usdc_weth_swap/json/with/key/j7WkSBlPk2riyrH9yefqPCJGxWuWNSgNL6kl-ReIgFL',
            },
          },
        ],
      },
    ],
  },
};

const handleSwap: Handler = ({ error, data, decodedData, store }) => {
  if (error) {
    return;
  }

  console.log('Uniswap event:', decodedData);

  const calledCount = store.get('count') || 1;
  store.set('count', calledCount + 1);

  const blockNumber = data.blockNumber;
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

const handleApi: Handler = ({ data }) => {
  console.log('Crypto Coven stats:', data);
  const payload = ethers.utils.defaultAbiCoder.encode(
    ['uint256'],
    [data.stats.onSaleCount]
  );

  return {
    payload,
  };
};

export const handlers: Handlers = {
  handleSwap,
  handleApi,
};
