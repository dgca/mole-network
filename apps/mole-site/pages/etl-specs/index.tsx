import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Text,
  Stack,
  Spacer,
  Code,
} from '@chakra-ui/react';
import { NavBar } from '../../components/NavBar/NavBar';
import { CodeBlock, dracula } from 'react-code-blocks';

export function Index() {
  const h1Color = useColorModeValue('purple.500', 'purple.300');
  const h2Color = useColorModeValue('purple.500', '#E2EF70');
  return (
    <Box
      py={12}
      px={{
        base: 4,
        md: 8,
      }}
      mb="8rem"
    >
      <Container maxW="container.xl" mb="6rem">
        <NavBar />
        <Heading
          as="h1"
          fontSize="6xl"
          fontWeight="800"
          mb="1em"
          color={h1Color}
        >
          ETL Specs
        </Heading>
        <Container
          maxW="container.lg"
          px={{
            base: 0,
            md: 8,
          }}
        >
          <Stack gap={12}>
            <Stack gap={2}>
              <Heading color={h2Color}>Overview</Heading>
              <Spacer />

              <Text fontSize="lg">
                An ETL Spec is a TypeScript file that exports a&nbsp;
                <Code>config</Code> object, and a <Code>handlers</Code> object.
                These two objects are used by the Data Reporter to know what
                data sources to listen to, and what to do with the data it
                receives.
              </Text>
            </Stack>
            <Stack gap={2}>
              <Heading color={h2Color}>The config object</Heading>
              <Spacer />

              <Text fontSize="lg">
                See the annotated example below for an overview of the&nbsp;
                <Code>config</Code> object.
              </Text>

              <Spacer />

              <Box fontFamily="monospace" fontSize="1.1rem">
                <CodeBlock
                  text={`import { ethers } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';
import { ETLSpecConfig, Handler, Handlers } from '../types';

// An ETL Spec must export a config object that adheres to the ETLSpecConfig type.
export const config: ETLSpecConfig = {
  // Sources is an object that has the different data sources the
  // Data Reporter will listen to. Sources can be 'contracts' and 'api'.
  sources: {
    // Contracts are EVM contracts that emit events.
    // A Consumer may request that the Data Reporter listen to any number of
    // events on any number of contracts.
    contracts: [
      {
        // Each contract source must contain the following:
        //
        // The chainId of the chain that the contract is deployed on.
        chainId: 1,
        // The contract address. In this example, this is the
        // address of the Uniswap USDC/WETH pool
        address: '0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640',
        // A list of events to listen to in that contract.
        //
        // Each event must contain the following:
        events: [
          {
            // The event signature as a string with each argument in a new line.
            // The Data Reporter will convert this into an event topic and paramenters
            // in order to parse the event bytes data into individual arguments.
            definition: \`
            event Swap(
              address indexed sender,
              address indexed recipient,
              int256 amount0,
              int256 amount1,
              uint160 sqrtPriceX96,
              uint128 liquidity,
              int24 tick
            )
            \`,
            // The name of the handler function that will process the event data.
            handler: 'handleSwap',
            // The destination to send the event to.
            //
            // The destination must contain the following:
            destination: {
              // The chainId of the chain the destination is on.
              chainId: 8453,
              // The address of the contract that will receive the data.
              address: '0x2FEdc8B2C27Dc2916ecE1dA5c16dC92C9858A767',
              // The function signature of the function that will receive the data.
              signature: 'handleReceive(bytes)',
            },
          },
        ],
      },
    ],
    // API sources are web2 API endpoints that return JSON.
    //
    // They must contain the following:
    api: [
      {
        // The HTTP method to use to make the request. Currently, only GET is supported.
        type: 'GET',
        // The URL to make the request to.
        url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
        // The name of the handler function that will process the response data.
        handler: 'handleApi',
        // How often to make the request, in milliseconds.
        rate: 10 * 60 * 1000,
        // The destination to send the response to.
        destination: {
          // The chainId of the chain the destination is on.
          chainId: 8453,
          // The address of the contract that will receive the data.
          address: '0x2FEdc8B2C27Dc2916ecE1dA5c16dC92C9858A767',
          // The function signature of the function that will receive the data.
          signature: 'handleReceive(bytes)',
        },
      },
    ],
  },
};
`}
                  language="javascript"
                  showLineNumbers={true}
                  theme={dracula}
                />
              </Box>
            </Stack>

            <Spacer />

            <Stack gap={2}>
              <Heading color={h2Color}>The handler functions</Heading>
              <Spacer />

              <Text fontSize="lg">
                The handler functions are an object that contains the functions
                the data sources listed as their <Code>handler</Code> value.
                They will receive the source event&apos;s data as it&apos;s
                processed.
              </Text>

              <Text fontSize="lg">
                Annotated example handler functions for the events in our config
                object above are shown below.
              </Text>

              <Spacer />

              <Box fontFamily="monospace" fontSize="1.1rem">
                <CodeBlock
                  startingLineNumber={85}
                  text={`// This is the handler function for the Swap on-chain event.
// It will be called every time the Swap event is emitted.
//
// All handler functions will receive the same object with the following keys:
// - error: An error object if there was an error processing the data.
// - data: The raw data that was received from the source.
// - decodedData: The decoded data that was received from the source.
// - store: A key-value store that persists between handler function calls.
const handleSwap: Handler = ({ error, data, decodedData, store }) => {
  if (error) {
    // If a handler function does not return a payload, the Data Reporter
    // will not send the data to the destination.
    return;
  }

  // The store is a key-value store that persists between handler function calls.
  // In this example, we are using it to count how many times the handler function
  // has been called, but it can be used to store any data you want to persist between events.
  const calledCount = store.get('count') || 1;
  console.log(\`I have been called \${calledCount} times!\`);
  store.set('count', calledCount + 1);

  const blockNumber = data.blockNumber;
  const amount0 = decodedData.amount0;
  const amount1 = decodedData.amount1;

  // The payload is the data that will be sent to the destination.
  // Because the destination is a contract, we need to encode the data
  // into bytes.
  const payload = ethers.utils.defaultAbiCoder.encode(
    ['uint256', 'uint256', 'int256', 'int256'],
    [calledCount, blockNumber, amount0, amount1]
  );

  // If we want the data to be sent to the destination, we must return
  // an object with a payload key.
  return {
    payload,
  };
};

// This is the handler function for the API source.
// It receives the same arguments as the other handler function,
// but in this case, the data is the response body as from the API
// as JSON, and the decodedData will be null so we can omit it.
const handleApi: Handler = ({ data }) => {
  const ethInUsd = parseUnits(data.ethereum.usd.toString(), 18);
  const payload = ethers.utils.defaultAbiCoder.encode(['uint256'], [ethInUsd]);

  // Again, we must return an object with a payload key to send the data.
  // Otherwise, the Data Reporter will not send the data to the destination.
  return {
    payload,
  };
};

// Finally, we export the handler functions as an object.
// We must export the handlers as a named export called "handlers".
export const handlers: Handlers = {
  handleSwap,
  handleApi,
};
`}
                  language="javascript"
                  showLineNumbers={true}
                  theme={dracula}
                />
              </Box>
            </Stack>

            <Stack gap={2}>
              <Heading color={h2Color}>Wrapping up</Heading>
              <Spacer />

              <Text fontSize="lg">
                With these two pieces, <Code>config</Code> and&nbsp;
                <Code>handlers</Code>, the Data Reporter is ready to run.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Container>
    </Box>
  );
}

export default Index;
