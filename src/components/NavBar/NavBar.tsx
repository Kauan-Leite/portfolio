import Link from 'next/link';
import { Container, Nav } from './styles';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import KeyboardRoundedIcon from '@mui/icons-material/KeyboardRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

export const NavBar = () => {
  return (
    <Container>
      <Nav>
        <Link href="/">
          <HomeRoundedIcon style={{ fontSize: '28px' }} />
        </Link>
        <Link href="/">
          <PersonRoundedIcon style={{ fontSize: '28px' }} />
        </Link>
        <Link href="/">
          <HomeRepairServiceRoundedIcon style={{ fontSize: '28px' }} />
        </Link>
        <Link href="/">
          <ExploreRoundedIcon style={{ fontSize: '28px' }} />
        </Link>
        <Link href="/">
          <KeyboardRoundedIcon style={{ fontSize: '28px' }} />
        </Link>
        <Link href="/">
          <CallRoundedIcon style={{ fontSize: '28px' }} />
        </Link>
      </Nav>
    </Container>
  );
};
