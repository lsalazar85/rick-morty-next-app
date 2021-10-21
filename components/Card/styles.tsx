import styled from "styled-components";
import Image from "next/image";

export const CardContainer = styled.div`
  display: flex;
  border-radius: 0.5rem;
  background: #24325f99;
  color: #ffffff;
  
  @media(min-width: 320px){
    flex: 0 0 100%;
    margin: 0 0 1rem 0;
  }
  @media(min-width: 767px){
    flex: 0 0 48%;
    margin: 0 0 1.5rem 0;
  }
`

export const CharacterImage = styled(Image)`
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`

export const CharacterDetails = styled.div`
  display: flex;
  flex-direction: column;
`