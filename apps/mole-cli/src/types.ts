export type ETLSpecConfig = {
  sources: Array<{
    type: 'evm';
    chainId: number;
    address: string;
    events: Array<{
      definition: string;
      handler: string;
    }>;
  }>;
  destination: {
    type: 'evm';
    chainId: number;
    address: string;
    signature: string;
  };
};

export type Handler = ({
  error,
  rawData,
  decodedData,
  store,
}: {
  error: any;
  rawData: any;
  decodedData: any;
  store: Map<string, any>;
}) => any;

export type ETLSpec = {
  config: ETLSpecConfig;
  handlers: Record<string, Handler>;
};
