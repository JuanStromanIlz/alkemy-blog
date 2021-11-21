import Button from 'components/ui/Button';
import Navbar from 'components/ui/Navbar';
import MobileMenu from 'components/ui/MobileMenu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavbarElement() {
  const [menu, setMenu] = useState(false);

  return (
    <Navbar>
      <MobileMenu show={menu} setShow={setMenu}>
        <MobileMenu.List>
          <MobileMenu.Item to='/'>
            <span className='material-icons'>home</span>
            Home
          </MobileMenu.Item>
          <MobileMenu.Item to='/post/new'>
            <span className='material-icons'>add</span>
            New
          </MobileMenu.Item>
        </MobileMenu.List>
      </MobileMenu>
      <Navbar.Container fluid>
        <Navbar.Row>
          <Navbar.Col xs={5} md={1}>
            <Link to='/' style={{display: 'flex'}}>
              <Navbar.Brand src={process.env.PUBLIC_URL + '/images/header.svg'} />
            </Link>
          </Navbar.Col>
          <Navbar.Col className='menuToggle'>
            <Button.Icon onClick={() => setMenu(!menu)}>menu_open</Button.Icon>
          </Navbar.Col>
          <Navbar.Col className='offset-md-2 desktop-sidebar'>
            <Navbar.List>
              <Navbar.Link to='/'>
                <span className='material-icons'>home</span>
                Home
              </Navbar.Link>
              <Navbar.Link to='/post/new'>
                <span className='material-icons'>add</span>
                New
              </Navbar.Link>
            </Navbar.List>
          </Navbar.Col>
        </Navbar.Row>
      </Navbar.Container>
    </Navbar>
  );
}

function SimpleNav() {
  return (
    <Navbar>
      <Navbar.Container fluid>
        <Navbar.Row>
          <Navbar.Col xs={12}>
            <Link to='/' style={{display: 'flex'}}>
              <Navbar.Brand src={process.env.PUBLIC_URL + '/images/header.svg'} />
            </Link>
          </Navbar.Col>
        </Navbar.Row>
      </Navbar.Container>
    </Navbar>
  );
}

export { SimpleNav };

export default NavbarElement;