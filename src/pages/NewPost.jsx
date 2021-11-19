import Layout from 'components/ui/Layout';
import { useContext, useState } from 'react';
import AlertContext from 'context/AlertContext';
import PostAPI from 'services/PostsAPI';
import { Col, Row } from 'react-bootstrap';
import Loading from 'components/elements/Loading';
import FormWValidation from 'components/elements/FormWValidation';
import { Field } from 'formik';
import Form from 'components/ui/Form';
import * as Yup from 'yup';

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
            <h2>New post</h2>
            <FormWValidation
              initialValues={NewPostValues}
              validationSchema={NewPostSchema}
              onSubmit={createNewPost}
            >
              <Form.Control as={Field} name='title' placeholder='Title of the post' />
              <Field as='textarea' className='form-control' name='body' rows='5' placeholder='Write something for the body' />
            </FormWValidation>
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

export default NewPost;