import { ButtonContainer } from "./styles";

interface Props {
    fn: () => void
    text: string
    disabled?: boolean
}

const Button = ({ fn, text, disabled }: Props) => (
    <ButtonContainer onClick={fn} disabled={disabled}>
        {text}
    </ButtonContainer>
)

export default Button