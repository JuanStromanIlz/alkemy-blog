import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AlertContext from 'context/AlertContext';
import PostAPI from 'services/PostsAPI';
import useFetch from 'hooks/useFetch';
import PostElement from 'components/elements/Post';
import Layout from 'components/ui/Layout';
import { Col, Row } from 'react-bootstrap';

function Home() {
  const { openAlert } = useContext(AlertContext);
  const { data, loading, setData, setLoading } = useFetch(PostAPI.All);
  let navigate = useNavigate();

  const filterItem = (id) => data.filter(post => post.id !== id);

  const editPost = (id) => navigate(`/post/${id}`);

  const deletePost = async (id) => {
    try {
      setLoading(true);
      await PostAPI.Delete(id);
      setLoading(false);
      setData(filterItem(id));
      openAlert({
        type: 'open',
        variant: 'success',
        title: 'Success',
        message: 'Post deleted successfully.'
      });
    }
    catch(err) {
      openAlert({
        type: 'open',
        variant: 'danger',
        title: 'Error',
        message: err.message
      });
    }
  }

  return (
    <Layout loading={loading}>
      <Row>
        <Col xs={12} md={5} className='offset-md-3'>
          {data?.map(post => 
            <PostElement
              key={post.id}
              info={post}
              onEdit={editPost}
              onDelete={deletePost}
            />
          )}
        </Col>
      </Row>
    </Layout>
  );
}

export default Home;