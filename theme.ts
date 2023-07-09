import { extendTheme } from '@chakra-ui/react';
import tinycolor from 'tinycolor2';

const theme = extendTheme({
  colors: {
    blue: {
      '900': tinycolor('#0145E8').darken(20).toString(),
      '800': tinycolor('#0145E8').darken(15).toString(),
      '700': tinycolor('#0145E8').darken(10).toString(),
      '600': tinycolor('#0145E8').darken(5).toString(),
      '500': tinycolor('#0145E8').toString(),
      '400': tinycolor('#0145E8').lighten(5).toString(),
      '300': tinycolor('#0145E8').lighten(10).toString(),
      '200': tinycolor('#0145E8').lighten(15).toString(),
      '100': tinycolor('#0145E8').lighten(50).toString(),
    },
  },
  initialColorMode: 'dark', // 'dark' | 'light'
  useSystemColorMode: false,
});

export default theme;
