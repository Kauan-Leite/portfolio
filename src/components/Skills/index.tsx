import Image from 'next/image';
import { Container, Logo, LogosContainer, Skill, Title } from './styles';

export const Skills = () => {
  const skills = [
    {
      id: 1,
      name: 'HTML 5',
      imgSrc: '/Images/Skills/Logos/htmlLogo.svg',
    },
    {
      id: 2,
      name: 'CSS 3',
      imgSrc: '/Images/Skills/Logos/cssLogo.svg',
    },
    {
      id: 3,
      name: 'JavaScript',
      imgSrc: '/Images/Skills/Logos/jsLogo.svg',
    },
    {
      id: 4,
      name: 'React',
      imgSrc: '/Images/Skills/Logos/reactLogo.svg',
    },
    {
      id: 5,
      name: 'Sequelize',
      imgSrc: '/Images/Skills/Logos/sequelizeLogo.svg',
    },
    {
      id: 6,
      name: 'Git',
      imgSrc: '/Images/Skills/Logos/gitLogo.svg',
    },
    {
      id: 7,
      name: 'GitHub',
      imgSrc: '/Images/Skills/Logos/githubLogo.svg',
    },
    {
      id: 8,
      name: 'JWT',
      imgSrc: '/Images/Skills/Logos/jwtLogo.svg',
    },
    {
      id: 9,
      name: 'Express.js',
      imgSrc: '/Images/Skills/Logos/expressLogo.svg',
    },
    {
      id: 10,
      name: 'Mocha',
      imgSrc: '/Images/Skills/Logos/mochaLogo.svg',
    },
    {
      id: 11,
      name: 'MongoDB',
      imgSrc: '/Images/Skills/Logos/mongodbLogo.svg',
    },
    {
      id: 12,
      name: 'Node JS',
      imgSrc: '/Images/Skills/Logos/nodejsLogo.svg',
    },
    {
      id: 13,
      name: 'Python',
      imgSrc: '/Images/Skills/Logos/pythonLogo.svg',
    },
    {
      id: 14,
      name: 'Jest',
      imgSrc: '/Images/Skills/Logos/jestLogo.svg',
    },
    {
      id: 15,
      name: 'Docker',
      imgSrc: '/Images/Skills/Logos/dockerLogo.svg',
    },
    {
      id: 16,
      name: 'MySQL',
      imgSrc: '/Images/Skills/Logos/mysqlLogo.svg',
    },
    {
      id: 17,
      name: 'TypeScript',
      imgSrc: '/Images/Skills/Logos/typescriptLogo.svg',
    },
    {
      id: 18,
      name: 'Next JS',
      imgSrc: '/Images/Skills/Logos/nextjsLogo.svg',
    },
    {
      id: 19,
      name: 'Styled Components',
      imgSrc: '/Images/Skills/Logos/styledComponentsLogo.png',
    },
    {
      id: 20,
      name: 'Redux',
      imgSrc: '/Images/Skills/Logos/reduxLogo.svg',
    },
  ];

  return (
    <Container id="skills">
      <Title>My Skills</Title>
      <LogosContainer>
        {skills.map((item) => {
          return (
            <Skill key={`Logo ${item.name}-${item.id}`}>
              <Logo src={item.imgSrc} alt={item.name} width={96} height={96} />
              <p>{item.name}</p>
            </Skill>
          );
        })}
      </LogosContainer>
    </Container>
  );
};
