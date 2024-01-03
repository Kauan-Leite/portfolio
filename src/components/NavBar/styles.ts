import styled from "styled-components";

export const Container = styled.div`
position: fixed;
bottom: 0%;
width: 100%;
z-index: 99;
background-color: #222;
  @media (min-width: 900px) {
    top: 28%;
    right: 0%;
    bottom: auto;
    width: auto;
    margin-right: 46px;
    background-color: transparent;
  }
`

export const Nav = styled.div`
display: flex;
justify-content: center;

    .active {
    background-color: ${props => props.theme.colors.secondary};
    text-decoration: none;
    color: white;
    margin: 12px;
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
  @media (min-width: 900px) { 
    flex-direction: column;
    max-width: 40px;
    justify-content: center;
    align-items: center;
    transition: .5s;
}
  `