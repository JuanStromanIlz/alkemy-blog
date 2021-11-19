import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import PostAPI from 'services/PostsAPI';
import useFetch from 'hooks/useFetch';
import PostElement from 'components/elements/Post';

function Home() {
  const { data, error, loading } = useFetch(PostAPI.All);

  return (
    <Container fluid>
      <Row>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Col xs={12} md={5} className='offset-md-3'>
          {!loading ?
            data.map(post => <PostElement info={post}/>)
          : 'Loading...'}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;