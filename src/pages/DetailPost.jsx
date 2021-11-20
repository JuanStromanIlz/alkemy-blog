import Layout from 'components/ui/Layout';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState, useRef } from 'react';
import AlertContext from 'context/AlertContext';
import PostAPI from 'services/PostsAPI';
import useFetch from 'hooks/useFetch';
import Card from 'components/ui/Card';
import Alert from 'components/ui/Alert';
import Form from 'components/ui/Form';
import { Col, Row } from 'react-bootstrap';
import FormWValidation from 'components/elements/FormWValidation';
import { Field } from 'formik';
import * as Yup from 'yup';
import TextareaAutosize from 'react-textarea-autosize';
import Button from 'components/ui/Button';

const EditPostSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required.'),
  body: Yup.string()
    .required('Body is required.')
});

function DetailPost() {
  let { id } = useParams();
  let navigate = useNavigate();
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
        message: 'Post edited successfully.'
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

  async function deletePost(id) {
    try {
      setLoading(true);
      await PostAPI.Delete(id);
      setLoading(false);
      openAlert({
        type: 'open',
        variant: 'success',
        title: 'Success',
        message: 'Post removed successfully.'
      });
      navigate('/');
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
          <Card>
            <Card.Body>
              <Alert.Header>
                <Alert.Title>Detail</Alert.Title>
                <div style={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
                  <Button outline variant={editPost ? 'success' : 'warning'} onClick={discardChanges}>
                    <span className='material-icons'>{editPost ? 'edit' : 'edit_off'}</span>
                    <span>{editPost ? 'Edit' : 'Discard changes'}</span>
                  </Button>
                  <Button outline variant='danger' onClick={() => deletePost(data.id)}>
                    <span className='material-icons'>delete_outline</span>
                    <span>Delete</span>
                  </Button>
                </div>
              </Alert.Header>
              <FormWValidation
                innerRef={formRef}
                initialValues={{
                  title: data?.title,
                  body: data?.body
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}

export default DetailPost;