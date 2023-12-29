import * as i18n from 'react-i18next';
import { Content } from './styles';

export const Footer = () => {
  const { t } = i18n.useTranslation('FOOTER');

  return (
    <Content>
      <h1>{t('TEXT')}</h1>
    </Content>
  );
};
