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
    EpisodeTitle
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
                        Status: <Status status={status}/>{status}
                    </CharacterInfo >
                    <CharacterInfo>Dimension: {dimensionName?.dimension}</CharacterInfo>
                    <CharacterInfo>Species: {species}</CharacterInfo>
                    <CharacterInfo>Gender: {gender}</CharacterInfo>
                    <CharacterInfo>Origin: {origin?.name}</CharacterInfo>
                    <CharacterInfo>Location: {location?.name}</CharacterInfo>
                    <CharacterInfo>
                        Episode:
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
                                <EpisodeTitle>Name: </EpisodeTitle>
                                {episode?.[0].name}
                            </CharacterInfo>
                            <CharacterInfo>
                                <EpisodeTitle>Episode: </EpisodeTitle>
                                {episode?.[0].episode}
                            </CharacterInfo>
                            <CharacterInfo>
                                <EpisodeTitle>Air Date: </EpisodeTitle>
                                {episode?.[0].air_date}
                            </CharacterInfo>
                            <CharacterInfo>
                                <EpisodeTitle>Characters:</EpisodeTitle>
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