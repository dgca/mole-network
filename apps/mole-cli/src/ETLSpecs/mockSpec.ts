import { ethers } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';
import { ETLSpecConfig, ETLSpec, Handler } from '../types';

const config: ETLSpecConfig = {
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
              chainId: 80001,
              address: '',
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
        rate: 60 * 1000,
        destination: {
          chainId: 80001,
          address: '',
          signature: 'handleReceiveApi(bytes)',
        },
      },
    ],
  },
};

const handleSwap: Handler = ({ error, data, decodedData, store }) => {
  if (error) {
    return;
  }

  console.log(decodedData);

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

const handleApi: Handler = ({ data, store }) => {
  const lastValue = store.get('ethInUsd') || 0;
  const nextValue = data.ethereum.usd;
  const difference = Math.abs(lastValue - nextValue);

  if ((difference / lastValue) * 100 < 1) {
    return;
  }

  store.set('ethInUsd', nextValue);

  const ethInUsd = parseUnits(data.ethereum.usd.toString(), 18);
  const payload = ethers.utils.defaultAbiCoder.encode(['uint256'], [ethInUsd]);

  return {
    payload,
  };
};

const spec: ETLSpec = {
  config,
  handlers: {
    handleSwap,
    handleApi,
  },
};

export default spec;
