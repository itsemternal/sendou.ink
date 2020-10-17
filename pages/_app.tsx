import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/core";
import { useApollo } from "lib/apollo";
import type { AppProps } from "next/app";
import Layout from "scenes/Layout";

const MyApp = (props: AppProps) => {
  const apolloClient = useApollo(props.pageProps.initialApolloState);

  // FIXME: on initial load components render twice
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider>
        <Layout {...props} />
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default MyApp;
