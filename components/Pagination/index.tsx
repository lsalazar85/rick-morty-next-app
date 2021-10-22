import {PaginationContainer, PaginationDiv, PaginationText} from './styles'
import Button from "../Button";

interface Props {
    pageCount: number,
    setPage: any,
    currentPage: number
}

const Pagination = ({pageCount, setPage, currentPage}: Props) => (
    <PaginationContainer>
        <PaginationDiv>
            {currentPage === 1 ? null : <Button fn={() => setPage(currentPage - 1)} text="Prev" />}
            <PaginationText>Page: {currentPage}</PaginationText>
            {pageCount === currentPage ? null : <Button fn={() => setPage(currentPage + 1)} text="Next" />}
        </PaginationDiv>
        <PaginationDiv>
            <PaginationText>Total Pages: {pageCount}</PaginationText>
        </PaginationDiv>
    </PaginationContainer>
)

export default Pagination
