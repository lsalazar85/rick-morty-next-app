import styled, { css } from "styled-components";
import colors from "../../styles/colors";

export const ButtonContainer = styled.button<{disabled?: boolean}>`
  display: flex;
  color: ${colors.Black};
  background: ${colors.Yellow};
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  ${(props) => props.disabled && 
          css`
            background: ${colors.SecondaryGray};
            cursor: no-drop;
          `};
`