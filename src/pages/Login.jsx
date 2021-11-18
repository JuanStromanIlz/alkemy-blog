import { Field } from 'formik';
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

  async function makeLoginCall(values) {
    try {
      let res = await AuthAPI(values);
      console.log(res);
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <FormWValidation
      initialValues={LoginValues}
      validationSchema={LoginSchema}
      onSubmit={makeLoginCall}
    >
      <Field name='email' type='email' />
      <Field name='password' type='password' />
    </FormWValidation>
  );
}

export default Login;