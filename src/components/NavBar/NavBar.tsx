import { Container, LinkEdited, Nav } from './styles';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import KeyboardRoundedIcon from '@mui/icons-material/KeyboardRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { useEffect, useState } from 'react';

export const NavBar = () => {
  const [currActive, setCurrActive] = useState('home');
  function checkVisible(elm: any, name: any) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );

    console.log(!(rect.bottom < 0 || rect.top - viewHeight >= 0));

    if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
      setCurrActive(name);
    }
  }

  useEffect(() => {
    const verificarVisibilidade = () => {
      checkVisible(document.getElementById('home'), 'home');
      checkVisible(document.getElementById('aboutme'), 'aboutme');
      checkVisible(document.getElementById('skills'), 'skills');
      checkVisible(document.getElementById('xp'), 'xp');
      checkVisible(document.getElementById('projects'), 'projects');
      checkVisible(document.getElementById('contact'), 'contact');
    };

    window.addEventListener('scroll', verificarVisibilidade);

    // Limpeza ao desmontar
    return () => {
      window.removeEventListener('scroll', verificarVisibilidade);
    };
  }, []);

  return (
    <Container>
      <Nav>
        <LinkEdited href="#home">
          <HomeRoundedIcon
            className={currActive === 'home' ? 'active' : ''}
            style={{ fontSize: '28px' }}
          />
        </LinkEdited>
        <LinkEdited href="#aboutme">
          <PersonRoundedIcon
            className={currActive === 'aboutme' ? 'active' : ''}
            style={{ fontSize: '28px' }}
          />
        </LinkEdited>
        <LinkEdited href="#skills">
          <HomeRepairServiceRoundedIcon
            className={currActive === 'skills' ? 'active' : ''}
            style={{ fontSize: '28px' }}
          />
        </LinkEdited>
        <LinkEdited href="#xp">
          <ExploreRoundedIcon
            className={currActive === 'xp' ? 'active' : ''}
            style={{ fontSize: '28px' }}
          />
        </LinkEdited>
        <LinkEdited href="#projects">
          <KeyboardRoundedIcon
            className={currActive === 'projects' ? 'active' : ''}
            style={{ fontSize: '28px' }}
          />
        </LinkEdited>
        <LinkEdited href="#contact">
          <CallRoundedIcon
            className={currActive === 'contact' ? 'active' : ''}
            style={{ fontSize: '28px' }}
          />
        </LinkEdited>
      </Nav>
    </Container>
  );
};
