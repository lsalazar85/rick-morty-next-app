import styled from "styled-components";
import Image from "next/image";
import {fadeIn} from "../../styles/animation";

export const CardContainer = styled.div`
  display: flex;
  border-radius: 0.5rem;
  align-items: center;
  background: #3c3e44;
  color: #ffffff;
  padding-left: 1rem;
  ${fadeIn({ time: '400ms' })};
  
  @media(min-width: 320px){ 
    flex: 0 0 100%;
    margin: 0 0 1rem 0;
  }
  @media(min-width: 1024px){
    flex: 0 0 49%;
    margin: 0 0.1rem 1.3rem 0;
  }
`

export const ImageContainer = styled.div`
  width: 6.5rem;
`

export const CharacterImage = styled(Image)`
 border-radius: 3.125rem;
`

export const CharacterDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: 0.81rem;
`