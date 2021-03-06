import styled, {keyframes, css} from "styled-components";
import Image from "next/image";
import {fadeIn} from "../../styles/animation";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const animationStyle = css`
  animation: ${rotate} 2s linear infinite;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${fadeIn({ time: '400ms' })};
`

export const LoaderImage = styled(Image)`
  ${animationStyle}
`