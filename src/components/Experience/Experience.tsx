import {
  BehindTitle,
  Container,
  Data,
  Desc,
  Left,
  Line,
  Logo,
  Right,
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
          <Left>
            <Logo
              src="/Images/Skills/Logos/reduxLogo.svg"
              width={50}
              height={50}
              alt=""
            />
            <Line />
          </Left>
          <Right>
            <Data>2023 - present</Data>
            <XpTitle>
              Web Developer <span> - Osten Moove</span>
            </XpTitle>
            <Desc>
              Desenvolvimento de sites empresariais utilizando Next.JS
            </Desc>
          </Right>
        </Xp>
        <Xp>
          <Left>
            <Logo
              src="/Images/Skills/Logos/reduxLogo.svg"
              width={50}
              height={50}
              alt=""
            />
            <Line />
          </Left>
          <Right>
            <Data>2023 - present</Data>
            <XpTitle>
              Graduação em Ánalise e Desenvolvimento de Sistemas{' '}
              <span> - Cruzeiro do Sul</span>
            </XpTitle>
            <Desc>Universidade Cruzeiro do Sul (UNICSUL)</Desc>
          </Right>
        </Xp>
        <Xp>
          <Left>
            <Logo
              src="/Images/Skills/Logos/reduxLogo.svg"
              width={50}
              height={50}
              alt=""
            />
            <Line />
          </Left>
          <Right>
            <Data>2022 - 2023</Data>
            <XpTitle>
              Desenvolvimento Web FullStack <span> - Trybe</span>
            </XpTitle>
            <Desc>Trybe - curso livre com mais de 1500 horas de conteúdo</Desc>
          </Right>
        </Xp>
        <Xp>
          <Left>
            <Logo
              src="/Images/Skills/Logos/reduxLogo.svg"
              width={50}
              height={50}
              alt=""
            />
            <Line />
          </Left>
          <Right>
            <Data>2019 - 2021</Data>
            <XpTitle>
              Técnico em Ánalise e Desenvolvimento de Sistemas{' '}
              <span> - ETEC</span>
            </XpTitle>
            <Desc>Escola Técnica Estadual (ETEC)</Desc>
          </Right>
        </Xp>
      </XpContainer>
    </Container>
  );
};
