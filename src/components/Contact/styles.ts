import { TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  transition: .5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40vh;
  margin-bottom: 20vh;
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

export const Content = styled.div`
  display: flex;
  width: 75%;

  @media (max-width:1080px) {
    flex-direction: column;
  }
`

export const LeftSide = styled.div`
  width: 100%;

  @media (max-width:1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const TitleLeft = styled.h3`
  display: none;

  @media (min-width:1080px) {
    display: block;
  }
`

export const TextLeft = styled.p`
  max-width: 60%;

  @media (max-width:1080px) {
    text-align: center;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width:1080px) {
    /* background-color: red; */
    min-width: 30%;
  }
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

  @media (max-width:1080px) {
    width: 80%;
    margin-bottom: 20px;
  }
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
 
  @media (max-width:1080px) {
    flex-direction: column;
    gap: 12px;
  }
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

  @media (max-width:1080px) {
    justify-content: center;
  }
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