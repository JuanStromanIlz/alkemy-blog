import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getAllPosts } from 'services/PostsAPI';
import useFetch from 'hooks/useFetch';
import PostElement from 'components/elements/Post';

function Home() {
  const { data, error, loading } = useFetch(getAllPosts);

  return (
    <Container fluid>
      <Row xs={12}>
        <Col>
          {!loading ?
            data.map(post => <PostElement info={post}/>)
          : 'Loading...'}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;