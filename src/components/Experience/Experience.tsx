import {
  BehindTitle,
  Container,
  Data,
  Desc,
  Logo,
  Title,
  Xp,
  XpContainer,
  XpTitle,
} from './styles';

export const Experience = () => {
  return (
    <Container id="xp">
      <BehindTitle>Professional</BehindTitle>
      <Title>
        Experience <span>&</span> Education
      </Title>

      <XpContainer>
        <Xp>
          <Logo
            src="/Images/Skills/Logos/reduxLogo.svg"
            width={50}
            height={50}
            alt=""
          />
          <Data>2023 - present</Data>
          <XpTitle>Web Developer - Osten Moove</XpTitle>
          <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Desc>
        </Xp>
      </XpContainer>
    </Container>
  );
};
