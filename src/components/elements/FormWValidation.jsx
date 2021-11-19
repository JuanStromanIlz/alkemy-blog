import { Formik, Form as FormFormik } from 'formik';
import Button from 'components/ui/Button';
import Form from 'components/ui/Form';

function FormWValidation({onSubmit, children, ...props}) {
  return (
    <div>
      <Formik
        {...props}
        onSubmit={(values, {resetForm}) => {
          onSubmit(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form as={FormFormik}>
            {children.map(field => 
              <Form.Group
                key={field.props.name} 
                controlId={field.props.name}
              >
                <Form.Label>{field.props.name}</Form.Label>
                {field}
                <Form.ErrorMessage error={errors[field.props.name]} touched={touched[field.props.name]} />
              </Form.Group>
            )}
            <Button type='submit'>Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormWValidation;