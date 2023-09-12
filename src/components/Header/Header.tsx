import * as i18n from 'react-i18next';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { Container, LanguageBtn, ModeBtn } from './styles';
import { useState } from 'react';

interface Props {
  theme: string;
  themeToggler: () => void;
}

export const Header = ({ theme, themeToggler }: Props) => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = i18n.useTranslation();
  const [currLanguage, setCurrLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currLanguage === 'pt' ? 'en' : 'pt';
    changeLanguage(newLanguage);
    setCurrLanguage(newLanguage);
  };

  return (
    <Container>
      <LanguageBtn onClick={handleChangeLanguage}>
        {t('BUTTON_LANGUAGE')}
      </LanguageBtn>

      <ModeBtn onClick={themeToggler}>
        {theme === 'dark' ? (
          <LightbulbIcon style={{ color: 'white' }} />
        ) : (
          <NightlightIcon style={{ color: 'white' }} />
        )}
      </ModeBtn>
    </Container>
  );
};
