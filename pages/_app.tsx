import type { AppProps } from 'next/app'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "../styles/GlobalStyles";

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

const theme = {
    colors: {
        primary: '#000000',
    },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ApolloProvider client={client}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
      </ApolloProvider>
  )
}
export default MyApp
