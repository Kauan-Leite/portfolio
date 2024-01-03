import styled from "styled-components";
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

export const Container = styled.div`
  transition: .5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15vh;
  padding-top: 200px;
  max-width: 100%;
  
  @media (min-width: 1280px) {
    margin-top: 25vh;
    margin-bottom: 25vh;
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
    font-size: 5em;
  }

  @media (min-width: 1280px) {
    font-size: 70px;
  }
`

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  z-index: 1;
  span {
    color: ${props => props.theme.colors.secondary};
  }
  @media (min-width: 1280px) {
    font-size: 35px;
  }
`

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1600px) {
    flex-direction: row;
  }
`

export const InfosDiv = styled.div`
  .desktop {
    display: none;
  }

  .mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    margin-bottom: 40px;
  }
  display: flex;
  justify-content: center;
  
  @media (min-width: 1280px) {
    margin-left: 25%;
    width: 60%;

    .desktop {
      display: block;
    }

    .mobile {
      display: none;
    }
  }
`

export const Info = styled.div`
  @media (min-width: 1280px) {
    width: 100%;
    margin: 10px;
  }
`

export const Subtitle = styled.h2`
  @media (min-width: 1280px) {
    white-space: nowrap;
    margin-bottom: 40px;
  }
  
`

export const DetailLine = styled.p`
  span {
    color: gray;
  }
`


export const BoxDiv = styled.div`
  flex-wrap: wrap;
  max-width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`

export const Box = styled.div`
    width: 340px;
    height: 200px;
    margin: 10px;
    border-radius: 6px;
    border: 1px solid #545454;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Number = styled.h1`
    font-size: 40px;
    padding-left: 40px;
    margin-bottom: 0px;
    color: ${props => props.theme.colors.secondary};
  @media (min-width: 1280px) {
  }
`

export const Txt = styled.h2`
    font-size: 18px;
    padding-left: 40px;
`

export const MoreBtn = styled.a`
    background: none;
    border: 2px solid ${props => props.theme.colors.secondary};
    width: 80%;
    height: 50px;
    border-radius: 25px;
    color: ${props => props.theme.color};
    text-transform: uppercase;
    font-weight: 900;
    transition: .5s;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    text-decoration: none;
    
    margin-top: 40px;
    max-width: 200px;
`

export const DownloadBtn = styled(DownloadRoundedIcon)`
    background-color: ${props => props.theme.colors.secondary};
    color: white;
    margin-right: -35px;
    margin-left: 23px;
    height: 30px;
    width: 30px;
    border-radius: 25px;
    transition: .5s;
    padding: 11px;
`