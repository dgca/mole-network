export type ChainDestination = {
  type: 'chain';
  chainId: number;
  address: string;
  signature: string;
};

export type PostDestination = {
  type: 'post';
  url: string;
};

export type ETLSpecConfig = {
  sources: {
    contracts?: Array<{
      chainId: number;
      address: string;
      events: Array<{
        definition: string;
        handler: string;
        destination: ChainDestination | PostDestination;
      }>;
    }>;
    api?: any;
  };
};

export type Handler = ({
  error,
  data,
  decodedData,
  store,
}: {
  error: any;
  data: any;
  decodedData: any;
  store: Map<string, any>;
}) => any;

export type Handlers = Record<string, Handler>;

export type ETLSpec = {
  config: ETLSpecConfig;
  handlers: Handlers;
};
