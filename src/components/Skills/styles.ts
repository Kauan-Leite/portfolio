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
  color: gray;
  opacity: 0.2;
  font-size: 70px;
  letter-spacing:10px;
  margin: 0;
  margin-bottom: -82px;

  text-transform: uppercase;
  font-weight: 900;
`

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 35px;
  z-index: 1;

  span {
    color: ${props => props.theme.colors.secondary};
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
  margin: 30px 90px;
  text-align: center;
  filter: grayscale(100%);
  transition: .5s;
  color: ${props => props.theme.colors.primary};
  width: 120px;

  &:hover {
    filter: grayscale(0%);
    cursor: pointer;
    color: ${props => props.theme.color};
  }
`

export const Logo = styled(Image)`
`