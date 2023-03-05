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
        url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
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

  // Limit writes to every 10 minutes
  const lastHandleSwapWrite = store.get('lastHandleSwapWrite') || 0;
  const now = new Date().valueOf();
  if (now - lastHandleSwapWrite < 10 * 60 * 1000) {
    return;
  }
  store.set('lastHandleSwapWrite', now);

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
  const ethInUsd = parseUnits(data.ethereum.usd.toString(), 18);
  const payload = ethers.utils.defaultAbiCoder.encode(['uint256'], [ethInUsd]);

  return {
    payload,
  };
};

export const handlers: Handlers = {
  handleSwap,
  handleApi,
};
