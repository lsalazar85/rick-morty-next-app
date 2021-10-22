import { ButtonContainer } from "./styles";

interface Props {
    fn?: () => void
    text?: string
}

const Button = ({ fn, text }: Props) => (
    <ButtonContainer onClick={fn}>
        {text}
    </ButtonContainer>
)

export default Button