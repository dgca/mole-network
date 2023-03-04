export type ETLSpecConfig = {
  sources: Array<{
    type: 'evm';
    chainId: number;
    address: string;
    events: Array<{
      topic: string;
      definition: string;
      parameters: Array<any>;
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

export type ETLSpec = {
  config: ETLSpecConfig;
  handlers: Record<
    string,
    (error: any, data: any, store: Map<string, any>) => void
  >;
};
