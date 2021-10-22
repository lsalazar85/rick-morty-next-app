import styled from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0 1rem 0;
`

export const PaginationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  :last-child{
    margin-top: 1rem;
  }
  
`

export const PaginationText = styled.span`
  font-weight: 700;
  color: #ffffff;
  margin: 0 1rem;
`