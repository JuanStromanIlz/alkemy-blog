import { Container, Row, Col } from 'react-bootstrap';
import Navbar from 'components/ui/Navbar';

function NavbarElement() {
  return (
    <Navbar>
      <Container fluid style={{padding: 0, height: '100%'}}>
        <Row style={{height: '100%'}}>
          <Col md={1} style={{display: 'flex', height: '100%'}}>
            <Navbar.Brand src='https://campus.alkemy.org/static/media/logo.a56b5107.svg' />
          </Col>
          <Col className='offset-md-2' style={{display: 'flex', height: '100%'}}>
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
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavbarElement;