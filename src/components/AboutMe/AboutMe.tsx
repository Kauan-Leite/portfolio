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
              <span>{t('LABEL_AGE')}:</span> 19 Years
            </DetailLine>
            <DetailLine>
              <span>Freelance:</span> Available
            </DetailLine>
            <DetailLine>
              <span>{t('LABEL_PHONE')}:</span> +55 (11) 93945-5929
            </DetailLine>
            <DetailLine>
              <span>{t('LABEL_LANGUAGES')}:</span> Portuguese, English
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
              <span>{t('LABEL_NATIONALITY')}:</span> Brazilian
            </DetailLine>
            <DetailLine>
              <span>{t('LABEL_ADDRESS')}:</span> São Paulo - Brazil
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
