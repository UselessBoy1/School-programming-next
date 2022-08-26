import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/GlobalStyle";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Programowanie i Algorytmika</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
