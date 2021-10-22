import { useContext, useEffect } from 'react'
import Loader from "../Loader";
import DataNotFound from "../DataNotFound";
import Card from "../Card";
import { ContentProps } from '../../interfaces'

import { ContentContainer } from "./styles";
import { CardSection } from "../../styles/styles";

import MainContext from "../../context/MainContext";

interface Props {
    dataObject: ContentProps
}

const Content = ({ dataObject }: Props) => {
    const { loading, error, data } = dataObject
    const { setPageCount } = useContext(MainContext)

    useEffect(() => {
        data && setPageCount(data?.characters?.info?.pages)
    }, [data, setPageCount])

    return (
        <ContentContainer>
            {loading && <Loader />}
            {error && <DataNotFound message="Character Not Found" />}
            <CardSection>
                {data?.characters?.results?.map((character) => (
                    <Card key={character.id} character={character} />
                ))}
            </CardSection>
        </ContentContainer>
    )
}

export default Content