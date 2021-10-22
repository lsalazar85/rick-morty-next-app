import Image from 'next/image'
import { HeaderContainer } from './styles'

const Header = () => (
    <HeaderContainer>
        <Image
            src="/logo.png"
            alt="Rick and Morty Logo"
            layout="intrinsic"
            width={270}
            height={90}
        />
    </HeaderContainer>
)

export default Header