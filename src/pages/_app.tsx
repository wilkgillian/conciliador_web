import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import Header from "../components/Header";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress
        color="#4F9CF9"
        startPosition={0.3}
        stopDelayMs={200}
        height={10}
        showOnShallow
      />
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
