import styled from "styled-components";

export const SearchContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  background: #24325f99;
`

export const SearchInput = styled.input`
  border: none;
  border-radius: 0.5rem;
  height: 2.5rem;
  padding: 1rem;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  
  @media(min-width: 320px){
    width: 70%;
  }

  @media(min-width: 767px){
    width: 20rem;
  }
`