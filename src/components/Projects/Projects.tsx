import * as i18n from 'react-i18next';
import { useState } from 'react';
import {
  BehindTitle,
  BtnLink,
  Button,
  Card,
  Container,
  ContainerButtons,
  ContainerSlides,
  FooterCard,
  HeaderCard,
  SlideEdited,
  SwiperEdited,
  Title,
} from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination } from 'swiper/modules';

export const Projects = () => {
  const [filter, setFilter] = useState('A');

  const allProjects = [
    {
      id: 1,
      name: 'Shopping Cart',
      type: 'F',
      thumb: '/Images/Hero/placeholder.svg',
      gitHub: '',
      project: '',
    },
    {
      id: 2,
      name: 'Solar System',
      type: 'F',
      thumb: 'https://swiperjs.com/images/swiper-logo.svg',
      gitHub: '',
      project: '',
    },
    {
      id: 3,
      name: 'Tryunfo',
      type: 'F',
      thumb: '/Images/Hero/placeholder.svg',
      gitHub: '',
      project: '',
    },
    {
      id: 4,
      name: 'TrybeTunes',
      type: 'F',
      thumb: '/Images/Hero/placeholder.svg',
      gitHub: '',
      project: '',
    },
    {
      id: 5,
      name: 'TrybeWallet',
      type: 'F',
      thumb: '/Images/Hero/placeholder.svg',
      gitHub: '',
      project: '',
    },
    {
      id: 6,
      name: 'Marvel Comics Store',
      type: 'F',
      thumb: '/Images/Hero/placeholder.svg',
      gitHub: '',
      project: '',
    },
    {
      id: 7,
      name: 'CarShop',
      type: 'B',
      thumb: '/Images/Hero/placeholder.svg',
      gitHub: '',
      project: '',
    },
    {
      id: 8,
      name: 'TrybeSmith',
      type: 'B',
      thumb: '/Images/Hero/placeholder.svg',
      gitHub: '',
      project: '',
    },
    {
      id: 9,
      name: 'Commerce',
      type: 'B',
      thumb: '/Images/Hero/placeholder.svg',
      gitHub: '',
      project: '',
    },
    {
      id: 10,
      name: 'Trybers And Dragons',
      type: 'B',
      thumb: '/Images/Hero/placeholder.svg',
      gitHub: '',
      project: '',
    },
    {
      id: 11,
      name: 'Trybe Futebol Clube',
      type: 'B',
      thumb: '/Images/Hero/placeholder.svg',
      gitHub: '',
      project: '',
    },
    {
      id: 12,
      name: 'Delivery App',
      type: 'B',
      thumb: '/Images/Hero/placeholder.svg',
      gitHub: '',
      project: '',
    },
  ];

  const changeFilter = (data: string) => {
    setFilter(data);
    console.log(filter);
  };

  const { t } = i18n.useTranslation('PROJECTS');

  return (
    <Container id="projects">
      <BehindTitle>{t('BEHIND_TITLE')}</BehindTitle>
      <Title>{t('TITLE_1')}</Title>

      <ContainerButtons>
        <Button
          className={filter === 'A' ? 'active' : ''}
          onClick={() => changeFilter('A')}
        >
          {t('BTN_1')}
        </Button>
        <Button
          className={filter === 'F' ? 'active' : ''}
          onClick={() => changeFilter('F')}
        >
          {t('BTN_2')}
        </Button>
        <Button
          className={filter === 'B' ? 'active' : ''}
          onClick={() => changeFilter('B')}
        >
          {t('BTN_3')}
        </Button>
      </ContainerButtons>
      <ContainerSlides>
        <SwiperEdited
          slidesPerView={1}
          // spaceBetween={50}
          breakpoints={{
            1000: {
              slidesPerView: 2,
              grid: { rows: 2 },
            },
            1280: {
              slidesPerView: 3,
              grid: { rows: 2 },
            },
          }}
          grid={{
            rows: 1,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
        >
          {filter === 'A'
            ? allProjects.map((project) => {
                return (
                  <SlideEdited key={project.id}>
                    <Card
                      style={{
                        backgroundImage: `url(${project.thumb})`,
                      }}
                    >
                      <HeaderCard>{project.name}</HeaderCard>
                      <FooterCard>
                        <BtnLink href={project.project} target="_blank">
                          <img src="/Images/Projects/link.png" />
                        </BtnLink>
                        <BtnLink href={project.gitHub} target="_blank">
                          <img src="/Images/Skills/Logos/githubLogo.svg" />
                        </BtnLink>
                      </FooterCard>
                    </Card>
                  </SlideEdited>
                );
              })
            : filter === 'F'
            ? allProjects
                .filter((project) => project.type === 'F')
                .map((project) => {
                  return (
                    <SlideEdited key={project.id}>
                      <Card
                        style={{
                          backgroundImage: `url(${project.thumb})`,
                        }}
                      >
                        <HeaderCard>{project.name}</HeaderCard>
                        <FooterCard>
                          <BtnLink href={project.project} target="_blank">
                            <img src="/Images/Projects/link.png" />
                          </BtnLink>
                          <BtnLink href={project.gitHub} target="_blank">
                            <img src="/Images/Skills/Logos/githubLogo.svg" />
                          </BtnLink>
                        </FooterCard>
                      </Card>
                    </SlideEdited>
                  );
                })
            : allProjects
                .filter((project) => project.type === 'B')
                .map((project) => {
                  return (
                    <SlideEdited key={project.id}>
                      <Card
                        style={{
                          backgroundImage: `url(${project.thumb})`,
                        }}
                      >
                        <HeaderCard>{project.name}</HeaderCard>
                        <FooterCard>
                          <BtnLink href={project.project} target="_blank">
                            <img src="/Images/Projects/link.png" />
                          </BtnLink>
                          <BtnLink href={project.gitHub} target="_blank">
                            <img src="/Images/Skills/Logos/githubLogo.svg" />
                          </BtnLink>
                        </FooterCard>
                      </Card>
                    </SlideEdited>
                  );
                })}
        </SwiperEdited>
      </ContainerSlides>
    </Container>
  );
};
