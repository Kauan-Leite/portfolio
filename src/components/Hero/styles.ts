import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1280px) {
    justify-content: space-evenly;
    flex-direction: row;
  }
`

export const Left = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  @media (min-width: 1280px) {
    margin-left: -20px;
    justify-content: left;
  }
`

export const ColoredDiv = styled.div`
  @media (min-width: 1280px) {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 6px 6px 6px 6px;
    width: 400px;
    height: 715px;
    margin-left: -20px;
    margin-top: 10px;
    transition: .5s;
  }
`

export const Image = styled.img`
    border-radius: 6px 6px 6px 6px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
    max-width: 80%;
    @media (min-width: 1280px) {
      position: absolute;
      max-width: 100%;
    }
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    max-width: 90%;
    
  @media (min-width: 600px) {
    max-width: 450px;
  }
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.secondary};
  margin: 0;
  transition: .5s;
  font-size: 1.5em;
  @media (min-width: 1280px) {
    font-size: 2em;
  }
`

export const Subtitle = styled.h1`
  margin: 0;
  font-size: 1.5em;
  @media (min-width: 1280px) {
    font-size: 2em;
  }
`

export const Description = styled.p`
  line-height: 25px;
  font-size: .9em;
  @media (min-width: 1280px) {
    font-size: 1em;
  }
`

export const MoreBtn = styled.a`
    background: none;
    border: 2px solid ${props => props.theme.colors.secondary};
    width: 225px;
    height: 50px;
    border-radius: 25px;
    color: ${props => props.theme.color};
    text-transform: uppercase;
    font-weight: 1280px;
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
    margin-left: 26px;
    height: 50px;
    width: 50px;
    border-radius: 25px;
    transition: .5s;
`