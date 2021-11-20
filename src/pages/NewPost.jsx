import Layout from 'components/ui/Layout';
import { useContext, useState } from 'react';
import AlertContext from 'context/AlertContext';
import PostAPI from 'services/PostsAPI';
import { Col, Row } from 'react-bootstrap';
import FormWValidation from 'components/elements/FormWValidation';
import { Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import TextareaAutosize from 'react-textarea-autosize';
import Card from 'components/ui/Card';
import Alert from 'components/ui/Alert';

const NewPostSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required.'),
  body: Yup.string()
    .required('Body is required.')
});

const NewPostValues = {
  title: '',
  body: ''
};

function NewPost() {
  const { openAlert } = useContext(AlertContext);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  async function createNewPost(values) {
    try {
      setLoading(true);
      await PostAPI.New(values);
      setLoading(false);
      openAlert({
        type: 'open',
        variant: 'success',
        title: 'Success',
        message: 'New post successfully created.'
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
                <Alert.Title>New post</Alert.Title>
              </Alert.Header>
                <FormWValidation
                  initialValues={NewPostValues}
                  validationSchema={NewPostSchema}
                  onSubmit={createNewPost}
                >
                  <Field 
                    as={TextareaAutosize}
                    className='form-control'
                    name='title'
                    placeholder='Title of the post.'
                    maxRows={8} 
                  />
                  <Field 
                    as={TextareaAutosize}
                    className='form-control'
                    name='body'
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

export default NewPost;