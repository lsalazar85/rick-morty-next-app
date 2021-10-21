import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export const Content = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: scroll;
  
  ::-webkit-scrollbar {
    width: 0.1rem;
    background: #24281b;
  }

  ::-webkit-scrollbar-thumb {
    background: #97ce4c;
  }

  @media(min-width: 320px){
    width: 100%;
  }

  @media(min-width: 1024px){
    width: 1024px;
  }
`

export const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`