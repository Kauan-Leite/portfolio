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
`

export const Skill = styled.div`
  margin: 30px 90px;
  text-align: center;
  filter: grayscale(100%);
  transition: .5s;
  color: #0F110C;

  &:hover {
    filter: grayscale(0%);
    cursor: pointer;
    color: white;
  }
`

export const Logo = styled(Image)`
`