import {
  Box,
  BoxDiv,
  Container,
  ContentDiv,
  DetailLine,
  Info,
  InfosDiv,
  Subtitle,
  Title,
} from './styles';

export const AboutMe = () => {
  return (
    <Container id="aboutme">
      <Title>About Me</Title>

      <ContentDiv>
        <InfosDiv>
          <Info>
            <Subtitle>PERSONAL INFOS</Subtitle>
            <DetailLine>Vasco da Gama</DetailLine>
            <DetailLine>Vasco da Gama</DetailLine>
            <DetailLine>Vasco da Gama</DetailLine>
            <DetailLine>Vasco da Gama</DetailLine>
            <DetailLine>Vasco da Gama</DetailLine>
            <DetailLine>Vasco da Gama</DetailLine>
          </Info>
          <Info>
            <DetailLine style={{ marginTop: '67px' }}>Vasco da Gama</DetailLine>
            <DetailLine>Vasco da Gama</DetailLine>
            <DetailLine>Vasco da Gama</DetailLine>
            <DetailLine>Vasco da Gama</DetailLine>
            <DetailLine>Vasco da Gama</DetailLine>
          </Info>
        </InfosDiv>
        <BoxDiv>
          <Box />
          <Box />
          <Box />
          <Box />
        </BoxDiv>
      </ContentDiv>
    </Container>
  );
};
