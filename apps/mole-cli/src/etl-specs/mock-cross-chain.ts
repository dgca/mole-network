import { ethers } from 'ethers';
import { ETLSpecConfig, Handler, Handlers } from '../types';

export const config: ETLSpecConfig = {
  sources: {
    contracts: [
      {
        chainId: 80001,
        address: '0x48BC25AabC4cB9fD3af7bdED60dd3d97828d50C7',
        events: [
          {
            definition: `
            event MessageSent(
              address indexed sender,
              string message
            )
            `,
            handler: 'handleMessage',
            destination: {
              type: 'chain',
              chainId: 8453,
              address: '0xACbab79D1B9832668dBaCE93Bc25675FE0B23169',
              signature: 'handleMessageReceived(bytes)',
            },
          },
        ],
      },
      // Can't implement this unless I find a Base WSS connection :(
      // {
      //   chainId: 8453,
      //   address: '0xACbab79D1B9832668dBaCE93Bc25675FE0B23169',
      //   events: [
      //     {
      //       definition: `
      //       event MessageSent(
      //         address indexed sender,
      //         string message
      //       )
      //       `,
      //       handler: 'handleMessage',
      //       destination: {
      //         chainId: 80001,
      //         address: '0x48BC25AabC4cB9fD3af7bdED60dd3d97828d50C7',
      //         signature: 'handleMessageReceived(bytes)',
      //       },
      //     },
      //   ],
      // },
    ],
  },
};

const handleMessage: Handler = ({ error, decodedData }) => {
  if (error) {
    return;
  }

  const payload = ethers.utils.defaultAbiCoder.encode(
    ['address', 'string'],
    [decodedData.sender, decodedData.message]
  );

  return {
    payload,
  };
};

export const handlers: Handlers = {
  handleMessage,
};
