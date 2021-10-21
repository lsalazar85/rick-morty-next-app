import { CardContainer,ImageContainer,CharacterImage, CharacterDetails } from "./styles";
import { Character } from '../../interfaces'

interface Props {
    character: Character
}

const Card = ({ character }: Props) => {

    return(
        <CardContainer>
            <ImageContainer>
                <CharacterImage
                    src={character.image!}
                    alt={character.name}
                    layout="responsive"
                    width={200}
                    height={200}
                />
            </ImageContainer>
            <CharacterDetails>
                <span>{character?.name}</span>
                <span>{character?.dimensionName?.dimension}</span>
                <span>{character?.status}</span>
                <span>{character?.species}</span>
                <span>{character?.gender}</span>
                <span>{character?.origin?.name}</span>
                <span>{character?.location?.name}</span>
                <span>{character?.episode?.[0].name}</span>
            </CharacterDetails>
        </CardContainer>
    )
}

export default Card