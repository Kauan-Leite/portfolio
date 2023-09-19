import Image from "next/image"
import styled from "styled-components"

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

export const XpContainer = styled.div``

export const Xp = styled.div``

export const Logo = styled(Image)`
  background-color: ${props => props.theme.colors.secondary};
  padding: 10px;
  border-radius: 100%;
`

export const Data = styled.h2`
  background-color: gray;
  border-radius: 25px;
  padding: 10px;
`

export const XpTitle = styled.h1``

export const Desc = styled.p``


