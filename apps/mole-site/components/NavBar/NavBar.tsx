import {
  HStack,
  IconButton,
  useColorMode,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label={colorMode === 'light' ? 'Toggle dark' : 'Toggle light'}
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
}

export function NavBar() {
  return (
    <HStack justifyContent="space-between" mb="2rem">
      <HStack gap={8}>
        <Link href="/">
          <ChakraLink as="span" fontSize="lg">
            Home
          </ChakraLink>
        </Link>
        <Link href="/etl-specs">
          <ChakraLink as="span" fontSize="lg">
            ETL Specs
          </ChakraLink>
        </Link>
        <Link
          href="https://github.com/dgca/mole-network"
          target="_blank"
          rel="noreferrer"
        >
          <ChakraLink as="span" fontSize="lg">
            Github
          </ChakraLink>
        </Link>
      </HStack>
      <ToggleColorMode />
    </HStack>
  );
}
