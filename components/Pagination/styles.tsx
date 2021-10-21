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
  justify-content: center;
  align-items: center;
  
  :last-child{
    margin-top: 1rem;
  }
  
  button {
    :first-child{
      margin-right: 1rem;
    }
  }
`

export const PaginationText = styled.span`
  margin: 0 1rem;
  font-weight: 700;
  color: #ffffff;
`