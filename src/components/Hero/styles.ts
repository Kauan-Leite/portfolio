import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const Left = styled.div`
  display: flex;
  /* margin-left: -200px; */
`

export const ColoredDiv = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 6px 6px 6px 6px;
  width: 400px;
  height: 715px;
  margin-left: -20px;
  margin-top: 10px;

  transition: .5s;
`

export const Image = styled.img`
  position: absolute;
  border-radius: 6px 6px 6px 6px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 450px;
  text-align: center;
`

export const Title = styled.h1`
margin: 0;
color: ${props => props.theme.colors.secondary};
transition: .5s;
`

export const Subtitle = styled.h1`
margin: 0;

`

export const Description = styled.p`
  line-height: 25px;
`

export const MoreBtn = styled.a`
  background: none;
  border: 2px solid ${props => props.theme.colors.secondary};
  width: 50%;
  height: 50px;
  border-radius: 25px;
  color: ${props => props.theme.color};
  text-transform: uppercase;
  font-weight: 900;
  transition: .5s;
  font-size: 14px;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const PlusBtn = styled(AddIcon)`
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  margin-right: -35px;
  margin-left: 23px;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  transition: .5s;

`