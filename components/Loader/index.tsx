import {LoaderContainer, LoaderImage } from './styles'

const Loader = () => (
    <LoaderContainer>
        <LoaderImage
            src="/rick.png"
            alt="Picture of the author"
            layout="intrinsic"
            width={90}
            height={90}
        />
    </LoaderContainer>
)

export default Loader