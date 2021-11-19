import { Formik, Form as FormFormik } from 'formik';
import Button from 'components/ui/Button';
import Form from 'components/ui/Form';

function FormWValidation({initialValues, validationSchema, onSubmit, children}) {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
          onSubmit(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form as={FormFormik}>
            {children.map(field => 
              <Form.Group 
                // inError={Boolean(errors[field.props.name])}
                // isValid={!errors[field.props.name] && touched[field.props.name]} 
                key={field.props.name} 
                controlId={field.props.name}
              >
                <Form.Label>{field.props.name}</Form.Label>
                {field}
                <Form.ErrorMessage error={errors[field.props.name]} touched={touched[field.props.name]} />
              </Form.Group>
            )}
            <Button variant='danger' type='submit'>Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormWValidation;