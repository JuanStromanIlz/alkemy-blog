import { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import AlertContext from 'context/AlertContext';
import Layout from 'components/ui/Layout';
import { useNavigate } from 'react-router-dom';
import { Field } from 'formik';
import Card from 'components/ui/Card';
import Form from 'components/ui/Form';
import FormWValidation from 'components/elements/FormWValidation';
import * as Yup from 'yup';
import AuthAPI from 'services/AuthAPI';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Email is required.'),
  password: Yup.string()
    .required('Password is required.')
});

const LoginValues = {
  email: '',
  password: ''
};

function Login() {
  const { openAlert } = useContext(AlertContext);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  async function makeLoginCall(values) {
    try {
      setLoading(true);
      let res = await AuthAPI(values);
      setLoading(false);
      openAlert({
        type: 'open',
        variant: 'success',
        title: 'Success',
        message: 'Successfully logged.'
      });
      localStorage.setItem('blog-warm-up', res);
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
              <Card.Header>
                <Card.Title>Login</Card.Title>
              </Card.Header>
            </Card>
            <Card>
              <Card.Body>
                <FormWValidation
                  initialValues={LoginValues}
                  validationSchema={LoginSchema}
                  onSubmit={makeLoginCall}
                >
                  <Form.Control as={Field} name='email' type='email' />
                  <Form.Control as={Field} name='password' type='password' />
                </FormWValidation>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Layout>
  );
}

export default Login;