import * as i18n from 'react-i18next';
import {
  ColoredDiv,
  Container,
  Description,
  Image,
  Left,
  MoreBtn,
  PlusBtn,
  Right,
  Subtitle,
  Title,
} from './styles';

export const Hero = () => {
  const { t } = i18n.useTranslation('HERO');
  return (
    <Container>
      <Left>
        <ColoredDiv />
        <Image src="/Images/Hero/placeholder.svg" alt="user image" />
      </Left>
      <Right>
        <Title>{t('TITLE')}</Title>
        <Subtitle>{t('SUBTITLE')}</Subtitle>
        <Description>{t('DESCRIPTION')}</Description>
        <MoreBtn>
          {t('MORE_BTN')}
          <PlusBtn />
        </MoreBtn>
      </Right>
    </Container>
  );
};