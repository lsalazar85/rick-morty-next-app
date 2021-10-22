import { useContext, ChangeEvent } from 'react'
import Head from 'next/head'
import { useQuery } from "@apollo/client"

import MainContext from "../context/MainContext";
import { GET_ALL_CHARACTERS, FILTER_CHARACTER_BY_NAME } from "../queries"

import Search from "../components/Search"
import Header from "../components/Header"
import Pagination from "../components/Pagination"
import Content from "../components/Content";

import { Main } from '../styles/styles'

const Home = () => {
    const {
        pageCount,
        pageAllCharacters,
        setPageAllCharacters,
        pageByName,
        setPageByName,
        character,
        setCharacter
    } = useContext(MainContext)

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setCharacter(e.target.value)
    }

    const allCharacters = useQuery(GET_ALL_CHARACTERS, {
        variables: { page: pageAllCharacters },
    })

    const charactersByName = useQuery(FILTER_CHARACTER_BY_NAME, {
        variables: {
            page: pageByName,
            character: character
        },
    })

    return (
        <Main>
          <Head>
            <title>Rick and Morty</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
            <Header />
            <Search onChange={handleOnChange} />
            <Pagination
                pageCount={pageCount}
                setPage={character ? setPageByName : setPageAllCharacters}
                currentPage={character ? pageByName: pageAllCharacters}
            />
            {
                character ? <Content dataObject={charactersByName} /> :
                    <Content dataObject={allCharacters} />
            }
        </Main>
    )
}

export default Home
