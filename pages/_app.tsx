import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyles";
import { MainContextProvider } from "../context/MainContext";

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

const theme = {
    colors: {
        primary: '#000000',
    },
}

const MyApp = ({ Component, pageProps }: AppProps) => (
    <ApolloProvider client={client}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <MainContextProvider>
                <Component {...pageProps} />
            </MainContextProvider>
        </ThemeProvider>
    </ApolloProvider>
)

export default MyApp
