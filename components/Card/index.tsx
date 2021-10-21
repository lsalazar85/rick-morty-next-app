import { CardContainer, CharacterImage, CharacterDetails } from "./styles";
import { Character } from '../../interfaces'

interface Props {
    character: Character
}

const Card = ({ character }: Props) => (
    <CardContainer>
        <CharacterImage
            src={character.image!}
            alt={character.name}
            layout="intrinsic"
            width={130}
            height={130}
        />
        <CharacterDetails>
            <span>{character.name}</span>
            <span>{character.name}</span>
            <span>{character.name}</span>
            <span>{character.name}</span>
            <span>{character.name}</span>
        </CharacterDetails>
    </CardContainer>
)


export default Card