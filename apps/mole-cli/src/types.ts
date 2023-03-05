export type Destination = {
  chainId: number;
  address: string;
  signature: string;
};

export type ETLSpecConfig = {
  sources: {
    contracts?: Array<{
      chainId: number;
      address: string;
      events: Array<{
        definition: string;
        handler: string;
        destination: Destination;
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

export type ETLSpec = {
  config: ETLSpecConfig;
  handlers: Record<string, Handler>;
};
