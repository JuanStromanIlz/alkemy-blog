import styled from 'styled-components';
import { Navbar as NavbarBS } from 'react-bootstrap';

const Navbar = styled(NavbarBS)`
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%);
  position: sticky;
  top: 0;
  z-index: 1024;
  & .navbar-brand {
    font-weight: 900;
    font-size: 30px;
  }
`;

export default Navbar;