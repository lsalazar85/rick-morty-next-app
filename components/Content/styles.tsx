import styled from "styled-components";
import colors from "../../styles/colors";

export const ContentContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: scroll;
  
  ::-webkit-scrollbar {
    width: 0.1rem;
    background: ${colors.Black};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.MainGreen};
  }

  @media(min-width: 320px){
    width: 100%;
  }

  @media(min-width: 1024px){
    width: 1024px;
  }
`