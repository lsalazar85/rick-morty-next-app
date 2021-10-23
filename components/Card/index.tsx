import { useState } from 'react';
import Image from "next/image";

import {
    CardContainer,
    ImageContainer,
    CharacterDetails,
    Status,
    CharacterInfo,
    Name,
    Episode,
    EpisodeDetails,
    EpisodeCharacter,
    CharacterTitle
} from "./styles";

import { Character } from '../../interfaces'
import Modal from "../Modal";

interface Props {
    character: Character
}

const Card = ({ character }: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showEpisodeDetail, setShowEpisodeDetail] = useState<boolean>(false)

    const {
        name,
        image,
        status,
        dimensionName,
        species,
        gender,
        origin,
        location,
        episode
    } = character

    return(
        <CardContainer>
            <ImageContainer onClick={() => setShowModal(true)}>
                <Image
                    src={image!}
                    alt={name}
                    layout="responsive"
                    width={200}
                    height={200}
                />
            </ImageContainer>
            <Modal
                visible={showModal}
                title="Character Details"
                onClose={() => setShowModal(false)}
            >
                <CharacterDetails>
                    <Name>{name}</Name>
                    <CharacterInfo>
                        <CharacterTitle>Status: </CharacterTitle>
                        <Status status={status}/>{status}
                    </CharacterInfo >
                    <CharacterInfo>
                        <CharacterTitle>Dimension: </CharacterTitle>{dimensionName?.dimension}
                    </CharacterInfo>
                    <CharacterInfo>
                        <CharacterTitle>Species: </CharacterTitle>{species}
                    </CharacterInfo>
                    <CharacterInfo>
                        <CharacterTitle>Gender: </CharacterTitle>{gender}
                    </CharacterInfo>
                    <CharacterInfo>
                        <CharacterTitle>Origin: </CharacterTitle>{gender}{origin?.name}
                    </CharacterInfo>
                    <CharacterInfo>
                        <CharacterTitle>Location: </CharacterTitle>{location?.name}
                    </CharacterInfo>
                    <CharacterInfo>
                        <CharacterTitle>Episode: </CharacterTitle>
                        <Episode onClick={() => setShowEpisodeDetail(prevState => !prevState) }>
                            {episode?.[0].name}
                        </Episode>
                    </CharacterInfo>
                </CharacterDetails>
                {
                    showEpisodeDetail && (
                        <EpisodeDetails>
                            <Name>Episode Details</Name>
                            <CharacterInfo>
                                <CharacterTitle>Name: </CharacterTitle>
                                {episode?.[0].name}
                            </CharacterInfo>
                            <CharacterInfo>
                                <CharacterTitle>Episode: </CharacterTitle>
                                {episode?.[0].episode}
                            </CharacterInfo>
                            <CharacterInfo>
                                <CharacterTitle>Air Date: </CharacterTitle>
                                {episode?.[0].air_date}
                            </CharacterInfo>
                            <CharacterInfo>
                                <CharacterTitle>Characters:</CharacterTitle>
                            </CharacterInfo>
                            <EpisodeCharacter>
                                {
                                    episode?.[0]?.characters?.map((characterName, idx: number) => (
                                        <CharacterInfo key={idx}>{characterName.name}, </CharacterInfo>
                                    ))
                                }
                            </EpisodeCharacter>
                        </EpisodeDetails>
                    )
                }
            </Modal>
        </CardContainer>
    )
}

export default Card