import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: end;
  transition: .5s;

`

export const LanguageBtn = styled.button`
  margin: 30px;
  color: white;
  font-weight: 900;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  border: none;
  background-color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  transition: .5s;

`

export const ModeBtn = styled.button`
  margin: 30px;
  margin-right: 50px;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  border: none;
  background-color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  transition: .5s;

`

