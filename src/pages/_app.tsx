import '@/styles/styles.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import theme from '../../theme';

function App({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('chakra-ui-color-mode', 'light');
  }

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
