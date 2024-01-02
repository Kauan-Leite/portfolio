import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  transition: .5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40vh;
  margin-bottom: 40vh;
`

export const BehindTitle = styled.h1`
  font-size: 0;

  @media (min-width: 500px) {
    color: gray;
    opacity: 0.2;
    letter-spacing:10px;
    margin: 0;
    margin-bottom: -82px;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 3em;
  }

  @media (min-width: 1280px) {
    font-size: 70px;
  }
`

export const Title = styled.h1`
  text-transform: uppercase;
  margin-top: 35px;
  font-weight: 900;
  z-index: 1;
  span {
    color: ${props => props.theme.colors.secondary};
  }
  @media (min-width: 1280px) {
    margin-top: 25px;
    font-size: 35px;
  }
`

export const LogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-top: 30px;
`

export const Skill = styled.div`
  width: 120px;
  margin: 30px 90px;
  text-align: center;
  color: ${props => props.theme.color};


  @media (min-width: 1280px) {
    filter: grayscale(100%);
    transition: .5s;
    color: ${props => props.theme.colors.primary};
    
    &:hover {
      filter: grayscale(0%);
      cursor: pointer;
      color: ${props => props.theme.color};
    }
  }
`

export const Logo = styled(Image)`
`