import Layout from 'components/ui/Layout';
import { useParams } from 'react-router-dom';
import { useContext, useState, useRef } from 'react';
import AlertContext from 'context/AlertContext';
import PostAPI from 'services/PostsAPI';
import useFetch from 'hooks/useFetch';
import Post from 'components/ui/Post';
import { Col, Row } from 'react-bootstrap';
import Loading from 'components/elements/Loading';
import Button from 'react-bootstrap/Button';
import FormWValidation from 'components/elements/FormWValidation';
import { Field } from 'formik';
import * as Yup from 'yup';
import TextareaAutosize from 'react-textarea-autosize';

const EditPostSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required.'),
  body: Yup.string()
    .required('Body is required.')
});

function DetailPost() {
  let { id } = useParams();
  const { openAlert } = useContext(AlertContext);
  const { data, loading, setLoading } = useFetch(PostAPI.GetPost, id);
  const [editPost, setEditPost] = useState(true);
  const formRef = useRef(null);

  function discardChanges() {
    setEditPost(!editPost);
    formRef.current?.resetForm();
  }

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
                <Button onClick={discardChanges}>{editPost ? 'Edit' : 'Discart changes'}</Button>
                <FormWValidation
                  innerRef={formRef}
                  initialValues={{
                    title: data.title,
                    body: data.body
                  }}
                  validationSchema={EditPostSchema}
                  onSubmit={sendEditPost}
                >
                  <Field
                    as={TextareaAutosize}
                    className='form-control' 
                    name='title' 
                    disabled={editPost}
                    placeholder='Title of the post.'
                    maxRows={8}
                  />
                  <Field 
                    as={TextareaAutosize} 
                    className='form-control' 
                    name='body'  
                    disabled={editPost}
                    placeholder='Write something for the body.'
                    maxRows={8}
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