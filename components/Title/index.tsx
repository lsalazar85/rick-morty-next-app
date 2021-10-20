import { TitleContainer, H1Element } from "./styles";

interface Props {
    title?: string;
}

const Title = ({ title }: Props) => (
    <TitleContainer>
        <H1Element>{title}</H1Element>
    </TitleContainer>
)

export default Title