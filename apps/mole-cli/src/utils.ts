import Web3 from 'web3';
import { ethers } from 'ethers';

export function parseEventDefiniton(event: string) {
  const normalized = event
    .trim()
    .replace(/^event\s+/, '')
    .replace(/\n/g, '')
    .replace(/\s\s+/g, '')
    .replace(/,\s/g, '');

  const { start, params, end } = normalized.match(
    /(?<start>^\w+\()(?<params>.+)(?<end>\))/
  ).groups;

  const paramDescriptors = params.split(',').map((item) => {
    return item.split(/\s+/g);
  });

  const topicArgs = paramDescriptors.map((item) => item[0]).join(',');

  const parameters = paramDescriptors.map((item) => {
    const isIndexed = item[1] === 'indexed';

    const obj = {
      type: item[0],
      name: item[isIndexed ? 2 : 1],
    };
    if (isIndexed) {
      obj['indexed'] = true;
    }
    return obj;
  });

  return {
    topic: `${start}${topicArgs}${end}`,
    parameters,
    indexed: paramDescriptors.some((item) => item.length === 3),
  };
}

export function initWeb3() {
  const web3 = new Web3();

  const PROVIDER_BY_CHAIN_ID = Object.entries(process.env)
    .filter(([k]) => /RPC_HTTP/.test(k))
    .map(([k, v]) => [k.replace('RPC_HTTP_CHAIN_', ''), v])
    .reduce<Record<string, ethers.providers.JsonRpcProvider>>(
      (chainIdAccountMap, [chainId, httpUrl]) => ({
        ...chainIdAccountMap,
        [chainId]: new ethers.providers.JsonRpcProvider(httpUrl),
      }),
      {}
    );

  // Add wallets for each chain
  // the env file should have keys formatted as `WALLET_PK_CHAIN_###`
  const WALLET_BY_CHAIN_ID = Object.entries(process.env)
    .filter(([k]) => /WALLET_PK/.test(k))
    .map(([k, v]) => [k.replace('WALLET_PK_CHAIN_', ''), v])
    .reduce<Record<string, ethers.Wallet>>(
      (chainIdAccountMap, [chainId, privateKey]) => ({
        ...chainIdAccountMap,
        [chainId]: new ethers.Wallet(privateKey, PROVIDER_BY_CHAIN_ID[chainId]),
      }),
      {}
    );

  // Add scribe contracts for each chain
  // the env file should have keys formatted as `SCRIBE_ADDRESS_CHAIN_###`
  const SCRIBE_CONTRACT_BY_CHAIN_ID = Object.entries(process.env)
    .filter(([k]) => /SCRIBE_ADDRESS/.test(k))
    .map(([k, v]) => [k.replace('SCRIBE_ADDRESS_CHAIN_', ''), v])
    .reduce<Record<number, string>>(
      (chainIdAccountMap, [chainId, contractAddress]) => ({
        ...chainIdAccountMap,
        [chainId]: contractAddress,
      }),
      {}
    );

  return {
    web3,
    WALLET_BY_CHAIN_ID,
    SCRIBE_CONTRACT_BY_CHAIN_ID,
    PROVIDER_BY_CHAIN_ID,
  };
}
