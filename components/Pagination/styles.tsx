import styled, { css } from 'styled-components'

export const PaginationContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0 2rem 0;
`

export const PaginationList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  width: 1.875rem;
  height: 1.875rem;
`

export const PageNumber = styled.button<{ currentPage?: boolean }>`
  cursor: pointer;
  font-weight: 700;
  width: 100%;
  height: 100%;
  color: #97ce4c;
  border-radius: 3.125rem;
  border: 1px solid #97ce4c;

   ${(props) =>
    props.currentPage &&
    css`
      background: #97ce4c;
      color: #000000;
      border: none;
    `}
`