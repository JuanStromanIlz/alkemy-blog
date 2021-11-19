import { Container } from 'react-bootstrap';
import Navbar from 'components/ui/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Layout({children}) {
  return (
    <Container fluid>
      <Navbar>
        <Container fluid style={{
          padding: 0
        }}>
        <Navbar.Brand>
          <Link to='/' style={{
            color: 'inherit',
            textDecoration: 'none'
          }}>Blog</Link>
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link>
            <Link to='/' style={{
              color: 'inherit',
              textDecoration: 'none'
            }}>Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/post/new' style={{
              color: 'inherit',
              textDecoration: 'none'
            }}>New</Link>
          </Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      {children}
    </Container>
  );
} 

export default Layout;