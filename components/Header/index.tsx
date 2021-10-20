import Image from 'next/image'
import { HeaderContainer } from './styles'

const Header = () => (
    <HeaderContainer>
        <Image
            src="/logo.png"
            alt="Picture of the author"
            layout="intrinsic"
            width={270}
            height={90}
        />
    </HeaderContainer>
)

export default Header