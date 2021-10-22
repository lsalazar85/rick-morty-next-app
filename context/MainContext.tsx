import React, { useState, createContext } from 'react';

type ContextTheme = {
    pageCount: number
    pageAllCharacters: number
    pageByName: number
    character: string
    setPageCount: (pageCount: number) => void
    setPageAllCharacters: (pageAllCharacters: number) => void
    setPageByName: (pageByName: number) => void
    setCharacter: (character: string) => void
}

const MainContext = createContext<ContextTheme>({} as ContextTheme)

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const MainContextProvider = ({ children }: Props) => {
    const [pageCount, setPageCount] = useState<number>(1);
    const [pageAllCharacters, setPageAllCharacters] = useState<number>(1)
    const [pageByName, setPageByName] = useState<number>(1)
    const [character, setCharacter] = useState<string>("");

    return <MainContext.Provider value={{
        pageCount,
        setPageCount,
        pageAllCharacters,
        setPageAllCharacters,
        pageByName,
        setPageByName,
        character,
        setCharacter
    }}
>
    {children}
    </MainContext.Provider>;
};

export default MainContext;