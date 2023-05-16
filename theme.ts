import { extendTheme } from '@chakra-ui/react';
import tinycolor from 'tinycolor2';

const theme = extendTheme({
  colors: {
    blue: {
      '900': tinycolor('#32B2FF').darken(20).toString(),
      '800': tinycolor('#32B2FF').darken(15).toString(),
      '700': tinycolor('#32B2FF').darken(10).toString(),
      '600': tinycolor('#32B2FF').darken(5).toString(),
      '500': tinycolor('#32B2FF').toString(),
      '400': tinycolor('#32B2FF').lighten(5).toString(),
      '300': tinycolor('#32B2FF').lighten(10).toString(),
      '200': tinycolor('#32B2FF').lighten(15).toString(),
      '100': tinycolor('#32B2FF').lighten(50).toString(),
    },
  },
  initialColorMode: 'dark', // 'dark' | 'light'
  useSystemColorMode: false,
});

export default theme;
