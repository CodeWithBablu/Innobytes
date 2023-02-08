import '@/styles/globals.css';

import { RecoilRoot } from 'recoil';

// import { ChakraProvider } from '@chakra-ui/react';
// import theme from "../chakra/theme";

import type { AppProps } from 'next/app';

import Layout from '@/components/Layout/Layout';

// import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}


{/* <RecoilRoot>
<ChakraProvider theme={theme}>
  <Layout>
    <Toaster />
    <Component {...pageProps} />
  </Layout>
</ChakraProvider>
</RecoilRoot> */}
