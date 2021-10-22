import styled from 'styled-components'
import colors from "../../styles/colors";

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`

export const PaginationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PaginationText = styled.span`
  font-weight: 700;
  color: ${colors.White};
  margin: 0 1rem;
`