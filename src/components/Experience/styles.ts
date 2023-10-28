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

export const XpContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Xp = styled.div`
  display: flex;
  margin: 60px;
  width: 600px;
`

export const Logo = styled(Image)`
  background-color: ${props => props.theme.colors.secondary};
  padding: 10px;
  border-radius: 100%;
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


