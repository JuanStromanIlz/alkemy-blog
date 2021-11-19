import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import { useNavigate } from 'react-router-dom';
import { Field } from 'formik';
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
  let navigate = useNavigate();
  const [toast, setToast] = useState({
    open: false,
    type: undefined,
    title: 'Info',
    message: ''
  });

  function toastControl(action, type = undefined, title = 'Info', message = undefined) {
    switch (action) {
      case 'open':
        setToast({
          open: true,
          type: type,
          title: title,
          message: message
        });
        break;
      case 'close':
        setToast({
          open: false,
          type: type,
          title: title,
          message: message
        });
        break;
    
      default:
        break;
    }
  }

  async function makeLoginCall(values) {
    try {
      let res = await AuthAPI(values);
      localStorage.setItem('blog-warm-up', res);
      navigate('/');
    }
    catch(err) {
      toastControl('open', 'danger', 'Danger', err.message);
    }
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={5} className='offset-md-3'>
          <FormWValidation
            initialValues={LoginValues}
            validationSchema={LoginSchema}
            onSubmit={makeLoginCall}
          >
            <Form.Control as={Field} name='email' type='email' />
            <Form.Control as={Field} name='password' type='password' />
          </FormWValidation>
        </Col>
      </Row>
      <Toast onClose={() => toastControl('close')} bg={toast.type} show={toast.open} delay={4000} autohide style={{position: 'fixed', bottom: '16px'}}>
        <Toast.Header>
          <strong className="me-auto">{toast.title}</strong>
        </Toast.Header>
        <Toast.Body>{toast.message}</Toast.Body>
      </Toast>
    </Container>
  );
}

export default Login;