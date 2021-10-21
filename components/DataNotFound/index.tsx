import { DataNotFoundWrapper, DataNotFoundTitle } from "./styles";
import Image from "next/image";

interface Props {
    message?: string
}

const DataNotFound = ({ message }: Props) => (
    <DataNotFoundWrapper>
        <DataNotFoundTitle>{message}</DataNotFoundTitle>
        <Image
            src="/not-found.png"
            alt="Data not found"
            layout="intrinsic"
            width={250}
            height={250}
        />
    </DataNotFoundWrapper>
)

export default DataNotFound