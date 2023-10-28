import * as i18n from 'react-i18next';

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
  const { t } = i18n.useTranslation('EXPERIENCE');

  return (
    <Container id="xp">
      <BehindTitle>{t('BEHIND_TITLE')}</BehindTitle>
      <Title>
        {t('TITLE_1')} <span>&</span> {t('TITLE_2')}
      </Title>

      <XpContainer>
        <Xp>
          <Left>
            <Logo
              src="/Images/Experience/Logos/globe.png"
              width={50}
              height={50}
              alt=""
            />
            <Line />
          </Left>
          <Right>
            <Data>{t('ITEM_1_DATE')}</Data>
            <XpTitle>
              {t('ITEM_1_TITLE_1')} <span> - {t('ITEM_1_TITLE_2')}</span>
            </XpTitle>
            <Desc>{t('ITEM_1_SUBTITLE')}</Desc>
          </Right>
        </Xp>
        <Xp>
          <Left>
            <Logo
              src="/Images/Experience/Logos/books.png"
              width={50}
              height={50}
              alt=""
            />
            <Line />
          </Left>
          <Right>
            <Data>{t('ITEM_2_DATE')}</Data>
            <XpTitle>
              {t('ITEM_2_TITLE_1')} <span> - {t('ITEM_2_TITLE_2')}</span>
            </XpTitle>
            <Desc>{t('ITEM_2_SUBTITLE')}</Desc>
          </Right>
        </Xp>
        <Xp>
          <Left>
            <Logo
              src="/Images/Experience/Logos/books.png"
              width={50}
              height={50}
              alt=""
            />
            <Line />
          </Left>
          <Right>
            <Data>{t('ITEM_3_DATE')}</Data>
            <XpTitle>
              {t('ITEM_3_TITLE_1')} <span> - {t('ITEM_3_TITLE_2')}</span>
            </XpTitle>
            <Desc>{t('ITEM_3_SUBTITLE')}</Desc>
          </Right>
        </Xp>
        <Xp>
          <Left>
            <Logo
              src="/Images/Experience/Logos/books.png"
              width={50}
              height={50}
              alt=""
            />
            <Line />
          </Left>
          <Right>
            <Data>{t('ITEM_4_DATE')}</Data>
            <XpTitle>
              {t('ITEM_4_TITLE_1')} <span> - {t('ITEM_4_TITLE_2')}</span>
            </XpTitle>
            <Desc>{t('ITEM_4_SUBTITLE')}</Desc>
          </Right>
        </Xp>
      </XpContainer>
    </Container>
  );
};
