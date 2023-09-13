import styled from "styled-components";

export const Container = styled.div`
  top: 28%;
  right: 0%;
  position: fixed;
  margin-right: 46px;
`

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40px;
  justify-content: center;
  align-items: center;

  .active {
    background-color: ${props => props.theme.colors.secondary};
    text-decoration: none;
    color: white;
    margin: 12px;
    /* width: 40px; */
    padding: 8px;
    border-radius: 40px;
    text-align: center;
    transition: .5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    background-color: #222;
    text-decoration: none;
    color: white;
    margin: 12px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    text-align: center;
    transition: .5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`