import { ethers } from 'ethers';
import { ETLSpecConfig, Handler, Handlers } from '../types';

export const config: ETLSpecConfig = {
  sources: {
    contracts: [
      {
        chainId: 1,
        // TellorFlex
        address: '0xD9157453E2668B2fc45b7A803D3FEF3642430cC0',
        events: [
          {
            definition: `
            event NewReport(
              bytes32 indexed _queryId,
              uint256 indexed _time,
              bytes _value,
              uint256 _nonce,
              bytes _queryData,
              address indexed _reporter
            )
            `,
            handler: 'handleReport',
            destination: {
              type: 'chain',
              chainId: 10200,
              // MockTellorProxy
              address: '0x6Bfb544610053c7BFb20aa3037A4CC436a139598',
              signature: 'handleTellorData(bytes)',
            },
          },
        ],
      },
    ],
  },
};

const handleReport: Handler = ({ error, decodedData }) => {
  if (error) {
    return;
  }

  const queryData = ethers.utils.defaultAbiCoder.encode(
    ['string'],
    ['MockTellorQuery']
  );

  const queryId = ethers.utils.keccak256(queryData);

  const tellorValue = ethers.utils.defaultAbiCoder.encode(
    ['uint256'],
    [decodedData._time]
  );

  const payload = ethers.utils.defaultAbiCoder.encode(
    ['bytes32', 'bytes', 'uint256', 'bytes'],
    [queryId, tellorValue, 0, queryData]
  );

  return {
    payload,
  };
};

export const handlers: Handlers = {
  handleReport,
};
