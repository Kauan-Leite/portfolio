import Image from "next/image"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: .5s;
  max-width: 100%;
@media (min-width: 1280px) {
  margin-top: 40vh;
  margin-bottom: 40vh;
}
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
  margin-top: 37px;
  text-transform: uppercase;
  font-weight: 900;
  z-index: 1;
  span {
    color: ${props => props.theme.colors.secondary};
  }
  @media (min-width: 1280px) {
    margin-top: 25px;
    font-size: 35px;
  }

  @media (max-width: 446px) {
    font-size: 1.5em;
  }
`

export const XpContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
`

export const Xp = styled.div`
  margin: 60px;
  display: flex;
  width: 90%;

  @media (min-width: 746px) {
    width: 600px;
  }
`

export const Logo = styled(Image)`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 100%;
  padding: 6px;

  @media (min-width: 1280px) {
    padding: 10px;
  }
`

export const Line = styled.div`
  width: 1px;
  min-height: 90px;
  background-color: gray;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Right = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`

export const Data = styled.h2`
  background-color: gray;
  border-radius: 25px;
  padding: 4px;
  font-size: 12px;
  max-width: 90px;
  text-align: center;
`

export const XpTitle = styled.h2`  
  span {
    font-weight: 100;
  }
`

export const Desc = styled.p``


