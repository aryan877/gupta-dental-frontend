import '@/styles/styles.css';
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { Plus_Jakarta_Sans } from 'next/font/google';
import theme from '../../theme';

// If loading a variable font, you don't need to specify the font weight
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

function App({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('chakra-ui-color-mode', 'light');
  }

  return (
    <ChakraProvider theme={theme}>
      <main className={jakarta.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}

export default App;
