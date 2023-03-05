import {
  Box,
  Code,
  Container,
  Heading,
  useColorModeValue,
  Text,
  VStack,
  useBreakpointValue,
  Stack,
  Spacer,
  UnorderedList,
  ListItem,
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
              Mole Network is an interchain, cross-chain, and cross-network
              communication system that lets developers capture, manipulate, and
              store event data in a number of ways. It can act as an oracle,
              indexer, cross-chain bridge, and more.
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
              <Heading color={h2Color}>What it is, exactly</Heading>
              <Spacer />

              <Heading as="h3" size="lg" color={h3Color}>
                Consumers
              </Heading>
              <Text fontSize="lg">
                Mole Network lets users who need data from one or more on and
                off-chain sources get that data, transform it in whatever way
                they want, and send that transformed data to a destination which
                can be on-chain and (soon to be) off-chain. Let&apos;s call
                these user types Consumers.
              </Text>
              <Text fontSize="lg">
                Consumers create an ETL (Extract, Transform, Load) spec which
                describes what data sources to pull from, what functions to run
                that data through, and which destinations the output should be
                sent to. Data sources and destinations will include an expanding
                list of items, as the system is flexible enough for new items to
                be added easily.
              </Text>
              <Text fontSize="lg">
                Data sources can be events emitted on any EVM chain, as well as
                any web2 API endpoint.
              </Text>
              <Text fontSize="lg">
                Destinations can be any contract on any EVM chain. In the
                future, this could expand to anything that can receive a network
                request, including web2 endpoints, and non-EVM chains.
              </Text>

              <Spacer />

              <Heading as="h3" size="lg" color={h3Color}>
                Data Reporters
              </Heading>
              <Text fontSize="lg">
                Data Reporters fulfill Consumers&apos; ETL specifications by
                providing network capacity via the <Code>MoleNet CLI</Code>.
              </Text>

              <Spacer />

              <Heading as="h3" size="lg" color={h3Color}>
                Incentives
              </Heading>
              <Text fontSize="lg">
                Data Reporters do not do this work for free, especially since
                writing data on-chain costs gas. In order to incentivize Data
                Reporters to report their data, Consumers will fund their ETL
                Specs with tips that the Data Reporters will receive for
                fulfilling their data requests.
              </Text>
              <Text fontSize="lg">
                Conversely, Data Reporters will be incentivized to publish
                correct data by needing to stake some amount of tokens in order
                to be allowed to report. If another reporter thinks someone is
                being duplicitous, they can report them; triggering a dispute
                mechanism where the party at fault will lose their stake and the
                counter party will be rewarded for keeping the system in check.
              </Text>
            </Stack>

            <Stack gap={2}>
              <Heading color={h2Color}>The Vision</Heading>
              <Spacer />

              <Heading as="h3" size="lg" color={h3Color}>
                Oracle? Bridge? Keeper?
              </Heading>
              <Text fontSize="lg">
                Mole Network is neither, all, and more. We&apos;re intentionally
                thinking about Mole Network as a flexible communication layer
                between arbitrary sources and destinations. As the project
                grows, we&apos;re excited to see what other use cases our
                community comes up with.
              </Text>

              <Spacer />

              <Heading as="h3" size="lg" color={h3Color}>
                Governance and ownership
              </Heading>
              <Text fontSize="lg">
                We fully believe in the power of decentralization, and we intend
                Mole Network to be owned by our users. Both Data Reporters and
                Consumers will be granted ownership based on how much they use
                the system, which will allow them to decide the future of the
                protocol.
              </Text>
            </Stack>

            <Stack gap={2}>
              <Heading color={h2Color}>Roadmap</Heading>
              <Spacer />

              <Heading as="h3" size="lg" color={h3Color}>
                Alpha
              </Heading>
              <Text fontSize="lg">
                We are here. Much of the functionality this project needs is in
                progress, but we hope the idea is clear and the vision is
                present. Currently, things we know must be done are:
              </Text>

              <UnorderedList px={8}>
                <ListItem mb={4}>
                  <Text fontSize="lg">
                    Assessing additional ways to reduce data manipulation such
                    as requiring multiple reporters to submit a value before the
                    data is written.
                  </Text>
                </ListItem>
                <ListItem mb={4}>
                  <Text fontSize="lg">
                    Creating the token mechanism by which Data Reporters become
                    eligible to report.
                  </Text>
                </ListItem>
                <ListItem mb={4}>
                  <Text fontSize="lg">
                    Assessing the current ETL Spec format for any risks that it
                    could pose to data reporters.
                  </Text>
                </ListItem>
                <ListItem mb={4}>
                  <Text fontSize="lg">
                    Creating a repository of ETL Specs so that Data Reporters
                    can find jobs for them to run.
                  </Text>
                </ListItem>
              </UnorderedList>

              <Spacer />

              <Heading as="h3" size="lg" color={h3Color}>
                Beta
              </Heading>
              <Text fontSize="lg">
                During beta, we&apos;ll be taking user feedback and
                incorporating it into the platform. We&apos;ll also be setting
                up the governance structure that will eventually make Mole
                Network a community-led project.
              </Text>

              <Spacer />

              <Heading as="h3" size="lg" color={h3Color}>
                Launch
              </Heading>
              <Text fontSize="lg">
                Launch is when we&apos;re community-run. What that means will be
                up those who make the governance body. For instance, this could
                mean turning off upgradability for and having Mole Network be a
                fully decentralized application. However this manifests,
                community ownership is the eventual goal for the network.
              </Text>
            </Stack>

            <Stack gap={2}>
              <Heading color={h2Color}>The Technical TL;DR:</Heading>
              <Spacer />

              <Text fontSize="lg">
                At this time, there are three technical components that make the
                system work:
              </Text>

              <Spacer />

              <Heading as="h3" size="lg" color={h3Color}>
                The MoleNet CLI
              </Heading>
              <Text fontSize="lg">
                The CLI is a tool utilized by Data Reporters to provide network
                capacity to MoleNet. The CLI enables Data Reporters to fulfill
                ETL Specs provided by Consumers.
              </Text>

              <Spacer />

              <Heading as="h3" size="lg" color={h3Color}>
                ETL Specs
              </Heading>
              <Text fontSize="lg">
                ETL Specs are a piece of code which defines the sources,
                transformations, and destinations that a Consumer would like to
                be run so that they can get the data they need. Specs are
                currently standalone JavaScript modules, but this is likely to
                change in the future as MoleNet moves through and beyond Alpha
                (re: security/scalability concerns).
              </Text>

              <Spacer />

              <Heading as="h3" size="lg" color={h3Color}>
                Scribe contracts
              </Heading>
              <Text fontSize="lg">
                For data whose destination is on-chain, the data is sent to a
                Scribe contract. The Scribe receives transformed data, as well
                as the contract address it should be headed to, and the function
                which should receive the data. It&apos;s up to the Consumer to
                ensure that function handles receiving the data in the
                appropriate way.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Container>
    </Box>
  );
}

export default Index;
