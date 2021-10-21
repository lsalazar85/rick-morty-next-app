import { useState } from 'react'
import {PaginationContainer, PaginationList, PageNumber} from './styles'

interface Props {
    pageCount: number,
    setPage: any,
    currentPage: number
}

const Pagination = ({pageCount, setPage, currentPage}: Props) => {
    const [pageOrder, setPageOrder] = useState<number>(10)
    const pageButtons = []

    for (let i = 1; i <= pageCount; i++) {
        pageButtons.push(
            <PageNumber
                currentPage={currentPage === i}
                key={i}
                onClick={() => setPage(i)}
            >
                {i}
            </PageNumber>
        );
    }

    return(
        <PaginationContainer>
            {pageButtons.slice(0, pageOrder).map((item, idx)=> (
                <PaginationList key={idx}>{item}</PaginationList>
            ))}
        </PaginationContainer>
    )
};

export default Pagination
