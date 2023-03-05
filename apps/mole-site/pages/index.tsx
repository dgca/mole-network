import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Text,
  VStack,
  useBreakpointValue,
  Stack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { NavBar } from '../components/NavBar/NavBar';

export function Index() {
  const h1Color = useColorModeValue('purple.400', 'purple.300');
  const h2Color = useColorModeValue('green.700', '#E2EF70');
  const h3Color = useColorModeValue('purple.500', '#E88D67');
  const imageSize = useBreakpointValue({
    base: 200,
    lg: 350,
  });
  const headingSize = useBreakpointValue({
    base: '40px',
    md: '80px',
    lg: '120px',
  });
  const heroTextSize = useBreakpointValue({
    base: 'lg',
    md: 'xl',
    lg: '2xl',
  });
  return (
    <Box
      py={12}
      px={{
        base: 4,
        md: 8,
      }}
      pb={40}
    >
      <Container maxW="container.xl">
        <NavBar />
        <Heading
          as="h1"
          fontSize={headingSize}
          fontWeight="800"
          mb="0.5em"
          color={h1Color}
        >
          Mole Network
        </Heading>
        <Stack
          gap={12}
          mb={20}
          direction={{
            base: 'column',
            lg: 'row',
          }}
        >
          <Box
            style={{
              boxShadow: '-6px 6px 8px #ddc1ff17',
            }}
            height={imageSize}
            width={imageSize}
            minHeight={imageSize}
            minWidth={imageSize}
          >
            <Image
              src="/img/mole-wizard.png"
              alt=""
              height={imageSize}
              width={imageSize}
            />
          </Box>
          <VStack alignItems="stretch" justifyContent="center">
            <Text fontSize={heroTextSize} mb="4">
              Mole Network is a interchain, cross-chain, and cross-network
              communication system. It lets you capture, manipulate, and store
              event data in whatever way you want.
            </Text>
            <Text fontSize={heroTextSize}>
              Use the Mole Network to write off-chain data directly to your
              contract, to transform on-chain data in a cheap and efficient way,
              or to build a communication layer between your cross-chain
              application.
            </Text>
          </VStack>
        </Stack>
        <Container
          maxW="container.lg"
          px={{
            base: 0,
            md: 8,
          }}
        >
          <Stack gap={12}>
            <Stack gap={2}>
              <Heading color={h2Color} mb={4}>
                Problem statement
              </Heading>
              <Text fontSize="lg">
                When building a decentralized protocol, we often require data
                that isn&apos;t available on-chain. There are a number of Oracle
                solutions that provide access to web2 API data, or meatspace
                data such as the weather; but one type of data that is
                underserved by current tools is data that can be derived from
                things that happen on-chain.
              </Text>
              <Text fontSize="lg">
                Though we like to say that on-chain data can be freely used by
                any contract, this is not always true. For example, event data
                is inaccessible from contracts, reading private contract values
                can be difficult, and processing data from multiple contracts to
                get to the value we need can get very expensive if done through
                a smart contract transaction.
              </Text>
            </Stack>
            <Stack gap={2}>
              <Heading color={h2Color} mb={4}>
                Solution
              </Heading>
              <Text fontSize="lg">
                We&apos;re building Mole Network, a system that lets smart
                contract developers define the data get the data they need from
                on-chain events and transactions.
              </Text>
              <Text fontSize="lg">
                In a nutshell, Mole Network brings pairs people who want data,
                and people who want to report data for a small fee.
              </Text>
              <Text fontSize="lg">The system has three primary parts:</Text>
            </Stack>
            <Stack gap={2}>
              <Heading as="h3" size="lg" color={h3Color}>
                Users
              </Heading>

              <Text fontSize="lg">
                Users are the people who need some arbitrary data made available
                on-chain. Users specify the data sources they need, how they
                want the data processed, and where they want the data reported
              </Text>
            </Stack>
            <Stack gap={2}>
              <Heading as="h3" size="lg" color={h3Color}>
                Reporters
              </Heading>

              <Text fontSize="lg">
                Reporters are the people who want to offer their proecssing
                power and collect fees in return. Reporters run the Mole Network
                CLI which tells them what data users have asked for, and it
                listens to an EVM RPC node to capture those events and write the
                results to a destination.
              </Text>
            </Stack>
            <Stack gap={2}>
              <Heading as="h3" size="lg" color={h3Color}>
                Destinations
              </Heading>

              <Text fontSize="lg">
                Destinations are where the results are written. This could be
                existing decentralized oracle protocols, or a specific smart
                contract that the user has specified.
              </Text>
            </Stack>
            <Stack gap={2}>
              <Heading color={h2Color} mb={4}>
                Future State
              </Heading>
              <Text fontSize="lg">
                The above describes a solution for a common problem smart
                contract developers face today, but the Mole Network system is
                flexible enough to expand to other use cases as well.
              </Text>
              <Text fontSize="lg">
                For instance, by defining how a user could ask for the result of
                a web2 API endpoint, we can combine on-chain and off-chain data,
                process it, and make it available back on-chain.
              </Text>
              <Text fontSize="lg">
                Also, since Mole Network works on any EVM chain, it can act as a
                data bridge between blockchains. I.e. user can ask that events
                be captured from multiple chains, processed, and have the data
                written back to one single chain.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Container>
    </Box>
  );
}

export default Index;
