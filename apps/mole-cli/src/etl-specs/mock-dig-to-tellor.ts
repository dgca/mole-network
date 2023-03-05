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
              chainId: 80001,
              // MockTellorProxy
              address: '0x8A4FB88FD6f885eDB4f43621940CC3B85439d619',
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
    ['string', 'bytes'],
    [
      'MockTellorQuery',
      ethers.utils.defaultAbiCoder.encode(
        ['uint256', 'address'],
        [decodedData._time, decodedData._reporter]
      ),
    ]
  );

  const queryId = ethers.utils.keccak256(queryData);

  const payload = ethers.utils.defaultAbiCoder.encode(
    ['bytes32', 'bytes', 'uint256', 'bytes'],
    [queryId, 0, 0, queryData]
  );

  return {
    payload,
  };
};

export const handlers: Handlers = {
  handleReport,
};
