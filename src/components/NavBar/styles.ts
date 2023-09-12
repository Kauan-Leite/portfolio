import styled from "styled-components";

export const Container = styled.div`
  top: 28%;
  right: 0%;
  position: fixed;
  margin-right: 50px;
`

export const Nav = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  max-width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  transition: .5s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  a {
    text-decoration: none;
    color: white;
    margin: 20px;
    width: 80%;
    height: 100%;
    border-radius: 40px;
    text-align: center;
  }

`