import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animation";
import colors from "../../styles/colors";

export const CardContainer = styled.div`
  border-radius: 0.5rem;
  align-items: center;
  justify-content: center;
  ${fadeIn({ time: '400ms' })};
  
  @media(min-width: 320px){
    display: flex;
    flex-direction: column;
    flex: 0 0 50%;
    margin: 0 0 1rem 0;
  }
  
  @media(min-width: 1024px){
    flex: 0 0 20%;
    margin: 0 0.1rem 1.3rem 0;
    flex-direction: row;
    padding-top: 0;
  }
`

export const ImageContainer = styled.div`
  width: 90%;
  cursor: pointer;
  
  > div {
    border-radius: 0.5rem;
    
    img {
      ${fadeIn({ time: '700ms' })};
    }
  }
`

export const CharacterDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${colors.Black};

  @media(min-width: 320px){
    margin-top: 1rem;
  }

  @media(min-width: 1024px){
    border: none;
    margin-top: 0;
  }
`

export const Status = styled.div<({ status?: string })>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 3.125rem;
  display: inline-flex;
  margin:  0 0.3rem 0 0;
  
  ${(props) => {
    switch (props.status) {
      case 'Alive':
        return css`
          background: ${colors.MainGreen};
        `
      case 'Dead':
        return css`
          background: ${colors.Red};
        `
      case 'unknown':
        return css`
          background: ${colors.SecondaryGray};
        `
      default:
        return css`
          display: none
        `
    }
  }}
`

export const Name = styled.span`
  font-size: 1rem;
  font-weight: 700;
`

export const CharacterInfo = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.5;
  font-size: 0.81rem;
  margin-right: 0.2rem;

  @media(min-width: 320px){
    font-size: 1rem;
  }

  @media(min-width: 1024px){
    font-size: 0.81rem;
  }
`

export const Episode = styled.span`
  font-weight: 700;
  cursor: pointer;
  margin-left: 0.1rem;
  font-style: oblique;
`

export const EpisodeDetails = styled.div`
  color: ${colors.Black};
  margin-top: 1rem;
  ${fadeIn({ time: '400ms' })};
`

export const CharacterTitle = styled.span`
  font-weight: 700;
  margin-right: 0.3rem;
`

export const EpisodeCharacter = styled.div`
  display: flex;
  flex-wrap: wrap;
`