import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: space-evenly;

  @media (min-width: 900px) {
    justify-content: end;
    transition: .5s;
  }
`

export const LanguageBtn = styled.button`
  color: white;
  font-weight: 900;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  border: none;
  background-color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  margin: 30px;
  @media (min-width: 900px) {
    transition: .5s;
  }
`

export const ModeBtn = styled.button`
  margin: 30px;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  border: none;
  background-color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  @media (min-width: 900px) {
    margin-right: 50px;
    transition: .5s;
  }
`

