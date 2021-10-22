import {PaginationContainer, PaginationDiv, PaginationText} from './styles'
import Button from "../Button";

interface Props {
    pageCount: number,
    setPage: (currentPage: number) => void
    currentPage: number
}

const Pagination = ({ pageCount, setPage, currentPage }: Props) => (
    <PaginationContainer>
        <PaginationDiv>
            <Button
                fn={() => setPage(currentPage - 1)}
                text="Prev"
                disabled={currentPage === 1 }
            />
            <PaginationText>{currentPage} of {pageCount}</PaginationText>
            <Button
                fn={() => setPage(currentPage + 1)}
                text="Next"
                disabled={pageCount === currentPage}
            />
        </PaginationDiv>
    </PaginationContainer>
)

export default Pagination
