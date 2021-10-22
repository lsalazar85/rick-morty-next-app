import Loader from "../Loader";
import DataNotFound from "../DataNotFound";
import Card from "../Card";
import {ContentProps} from '../../interfaces'

import { ContentContainer } from "./styles";
import { CardSection } from "../../styles/styles";

interface Props {
    dataObject: ContentProps
}

const Content = ({ dataObject }: Props) => {
    const { loading, error, data } = dataObject

    return (
        <ContentContainer>
            {loading && <Loader />}
            {error && <DataNotFound message="Character Not Found" />}
            <CardSection>
                {data?.characters?.results?.map((character:any) => (
                    <Card key={character.id} character={character} />
                ))}
            </CardSection>
        </ContentContainer>
    )
}

export default Content