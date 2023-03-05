import { ethers } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';
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
              chainId: 8453,
              address: '0x2FEdc8B2C27Dc2916ecE1dA5c16dC92C9858A767',
              signature: 'handleReceive(bytes)',
            },
          },
        ],
      },
    ],
    api: [
      {
        type: 'GET',
        url: 'https://api.reservoir.tools/stats/v2?collection=0x5180db8f5c931aae63c74266b211f580155ecac8',
        handler: 'handleApi',
        rate: 10 * 60 * 1000,
        destination: {
          chainId: 8453,
          address: '0x2FEdc8B2C27Dc2916ecE1dA5c16dC92C9858A767',
          signature: 'handleWebApi(bytes)',
        },
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
