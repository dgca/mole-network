import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import '@fontsource/playfair-display';
import '@fontsource/source-sans-pro';
import '@fontsource/noto-serif-display';
import '@fontsource/libre-baskerville';

export const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  fonts: {
    heading: `'Noto Serif Display', serif`,
    body: `'Libre Baskerville', sans-serif`,
    code: 'monospace',
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: '800',
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('gray.300', '#18231d')(props),
      },
    }),
  },
});
