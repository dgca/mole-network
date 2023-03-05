import { Box, HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

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
    <HStack justifyContent="space-between">
      <Box />
      <ToggleColorMode />
    </HStack>
  );
}
