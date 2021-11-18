import { Formik, Form, ErrorMessage } from 'formik';

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
          <Form>
            {children.map(field => 
              <div key={field.props.name}>
                {field}
                <ErrorMessage name={field.props.name} />
              </div>
            )}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormWValidation;