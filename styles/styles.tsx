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
  justify-content: space-between;
  padding: 1rem;
  
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