import * as i18n from 'react-i18next';

import {
  BehindTitle,
  Box,
  BoxDiv,
  Container,
  ContentDiv,
  DetailLine,
  DownloadBtn,
  Info,
  InfosDiv,
  MoreBtn,
  Subtitle,
  Title,
} from './styles';

export const AboutMe = () => {
  const { t } = i18n.useTranslation('ABOUTME');

  function age(birthday: string) {
    var nascimento = birthday.split('/');
    var dataNascimento = new Date(
      parseInt(nascimento[2], 10),
      parseInt(nascimento[1], 10) - 1,
      parseInt(nascimento[0], 10)
    );

    var diferenca = Date.now() - dataNascimento.getTime();
    var idade = new Date(diferenca);

    return Math.abs(idade.getUTCFullYear() - 1970);
  }

  return (
    <Container id="aboutme">
      <BehindTitle>{t('BEHIND_TITLE')}</BehindTitle>
      <Title>
        {t('TITLE_1')} <span>{t('TITLE_2')}</span>
      </Title>

      <ContentDiv>
        <InfosDiv>
          <Info>
            <Subtitle>{t('SUBTITLE')}</Subtitle>
            <DetailLine>
              <span>{t('LABEL_FIRST_NAME')}:</span> Kauan
            </DetailLine>
            <DetailLine>
              <span>{t('LABEL_AGE')}:</span> {age('31/01/2004')}{' '}
              {t('RESPONSE_AGE')}
            </DetailLine>
            <DetailLine>
              <span>Freelance:</span> {t('RESPONSE_FREELANCE')}
            </DetailLine>
            <DetailLine>
              <span>{t('LABEL_PHONE')}:</span> +55 (11) 93945-5929
            </DetailLine>
            <DetailLine>
              <span>{t('LABEL_LANGUAGES')}:</span> {t('RESPONSE_LANGUAGES')}
            </DetailLine>
            <MoreBtn href={t('DOWNLOAD_URL')} download>
              Download CV
              <DownloadBtn />
            </MoreBtn>
          </Info>
          <Info>
            <DetailLine style={{ marginTop: '87.9px' }}>
              <span>{t('LABEL_LAST_NAME')}:</span> Leite
            </DetailLine>
            <DetailLine>
              <span>{t('LABEL_NATIONALITY')}:</span> {t('RESPONSE_NATIONALITY')}
            </DetailLine>
            <DetailLine>
              <span>{t('LABEL_ADDRESS')}:</span> {t('RESPONSE_ADDRESS')}
            </DetailLine>
            <DetailLine>
              <span>Email:</span> kauan.s.leite@gmail.com
            </DetailLine>
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
