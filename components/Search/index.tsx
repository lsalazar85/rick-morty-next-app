import { ChangeEventHandler } from 'react'
import { SearchContainer, SearchInput } from './styles'

interface Props {
    onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const Search = ({ onChange }: Props ) => (
    <SearchContainer>
        <SearchInput
            onChange={onChange}
            type="text"
            placeholder="Search character"
        />
    </SearchContainer>
)

export default Search