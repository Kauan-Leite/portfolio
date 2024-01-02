import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

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

export const ContainerButtons = styled.div`
  margin-top: 100px;

  .active {
    color: ${props => props.theme.colors.secondary};
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
  }
`

export const Button = styled.button`
  background: none;
  color: ${props => props.theme.color};
  border: none;
  cursor: pointer;
  width: 100px;
  padding-bottom: 8px;
  transition: .5s;
    font-weight: 700;

`

export const ContainerSlides = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  .swiper-grid-column > .swiper-wrapper {
    flex-wrap: wrap;
    flex-direction: row;
  }

  .swiper-pagination-bullet-active {
    background-color: ${props => props.theme.colors.secondary};
  }
`

export const SwiperEdited = styled(Swiper)`
  width: 80%;
  height: 100%;
  /* background-color: gray; */
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;
  padding-bottom: 25px;
`

export const SlideEdited = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  height: calc((100% - 30px) / 2) !important;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  width: 340px;
  height: 200px;
  margin: 10px;
  border-radius: 6px;
  border: 1px solid #545454;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
`

export const HeaderCard = styled.div`
  /* background: #0F110C; */
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, transparent);
  border-radius: 6px 6px 0 0;
  padding: 6px 0;
  color: white;
`

export const FooterCard = styled.div`
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, transparent);
  border-radius: 0 0 6px 6px;
  padding: 6px 0;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`

export const BtnLink = styled.a`
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
`