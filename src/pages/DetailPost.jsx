import Layout from 'components/ui/Layout';
import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import AlertContext from 'context/AlertContext';
import PostAPI from 'services/PostsAPI';
import useFetch from 'hooks/useFetch';
import Post from 'components/ui/Post';
import { Col, Row } from 'react-bootstrap';
import Loading from 'components/elements/Loading';
import FormWValidation from 'components/elements/FormWValidation';
import { Field } from 'formik';
import Form from 'components/ui/Form';
import * as Yup from 'yup';

const EditPostSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required.'),
  body: Yup.string()
    .required('Body is required.')
});

function DetailPost() {
  let { id } = useParams();
  const { openAlert } = useContext(AlertContext);
  const { data, error, loading, setLoading } = useFetch(PostAPI.GetPost, id);

  async function sendEditPost(values) {
    try {
      setLoading(true);
      await PostAPI.Edit(id, values);
      setLoading(false);
      openAlert({
        type: 'open',
        variant: 'success',
        title: 'Success',
        message: 'Post edited successfully created.'
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
    <Layout>
      {!loading ?
        <Row>
          <Col xs={12} md={5} className='offset-md-3'>
            <h2>Detail</h2>
            <Post>
              <Post.Body>
                <FormWValidation
                  initialValues={{
                    title: data.title,
                    body: data.body
                  }}
                  validationSchema={EditPostSchema}
                  onSubmit={sendEditPost}
                >
                  <Form.Control 
                    value={data.title}
                    as={Field} 
                    name='title' 
                    placeholder='Title of the post' 
                  />
                  <Field 
                    value={data.body}
                    as='textarea' 
                    className='form-control' 
                    name='body' 
                    rows='5' 
                    placeholder='Write something for the body'
                  />
                </FormWValidation>
              </Post.Body>
            </Post>
          </Col>
        </Row>
      :
      <Row>
        <Col xs={12} md={5} className='offset-md-3'>
          <Loading />
        </Col>
      </Row>
      }
    </Layout>
  );
}

export default DetailPost;