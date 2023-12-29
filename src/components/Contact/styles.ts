import { TextField } from "@mui/material";
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

export const Content = styled.div`
  display: flex;
  width: 75%;
`

export const LeftSide = styled.div`
  width: 100%;
`

export const TitleLeft = styled.h3``

export const TextLeft = styled.p`
  max-width: 60%;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`

export const Data = styled.div`
  margin-left: 20px;
`

export const SubText = styled.p`
  margin-bottom: -8px;
  color: gray;
`

export const Text = styled.p``

export const Social = styled.div`
  max-width: 32%;
  display: flex;
  justify-content: space-between;
  margin-left: 6px;
`

export const MediaBtn = styled.img`
  width: 20px;
  height: 20px;
  background-color: gray;
  padding: 8px;
  border-radius: 100%;
  cursor: pointer;
`

export const RightSide = styled.div`
  /* background-color: aqua; */
  width: 100%;
`

export const Input = styled(TextField)`
  .MuiInputBase-root {
    background-color: #ddd
  }
  border-radius: 12px;
  margin: 2px;
`

export const LineOne = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 12px;
`

export const LineTwo = styled.div`
  margin-bottom: 12px;
`

export const LineThree = styled.div`
  margin-bottom: 12px;
`

export const LineFour = styled.div`
  margin-bottom: 12px;
  display: flex;
  justify-content: flex-end;
`

export const BtnSend = styled.button`
  width: 25%;
  height: 40px;
  border-radius: 6px;
  border: none;
  background-color: darkgreen;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
`