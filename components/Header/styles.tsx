import styled from "styled-components";
import {BG_URL} from "../../constants";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url(${BG_URL});
  background-repeat: no-repeat;
  background-position: center;
  
  @media(min-width: 320px){
    padding: 1rem 0;
  }

  @media(min-width: 1024px){
    padding: 2rem 0;
  }
`