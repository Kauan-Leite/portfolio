import styled from "styled-components";
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

export const Container = styled.div`
  /* background-color: red; */
  transition: .5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25vh;
  margin-bottom: 25vh;
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

export const ContentDiv = styled.div`
  display: flex;
  /* background-color: red; */
`

export const InfosDiv = styled.div`
  display: flex;
  width: 60%;
  margin-left: 400px;
`

export const Info = styled.div`
  width: 100%;
  margin: 10px;
  /* background-color: red; */
`

export const Subtitle = styled.h2`
  margin-bottom: 40px;
  white-space: nowrap;
  
`

export const DetailLine = styled.p`
span {
  color: gray;
}
`


export const BoxDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  /* justify-content: center; */
  margin-left: 80px;
  /* background-color: red; */
`

export const Box = styled.div`
  width: 340px;
  height: 200px;
  margin: 10px;
  border-radius: 6px;
  border: 1px solid #545454;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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