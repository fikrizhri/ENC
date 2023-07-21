import "@/styles/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  const theme = extendTheme({
    fontSizes: {},
  });
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
