import { ChangeEventHandler, useContext } from 'react'
import MainContext from "../../context/MainContext";

import { SearchContainer, SearchInput } from './styles'

interface Props {
    onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

const Search = ({ onChange }: Props ) => {
    const { character } = useContext(MainContext)

    return(
        <SearchContainer>
            <SearchInput
                onChange={onChange}
                type="text"
                placeholder="Search character by name"
                value={character}
            />
        </SearchContainer>
    )
}

export default Search