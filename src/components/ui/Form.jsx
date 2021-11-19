import styled from 'styled-components';
import { Form as FormBS } from 'react-bootstrap';

const StyledError = styled.div`
  padding-top: 4px;
  color: ${p => p.theme.states.danger};
`;

const Form = styled(FormBS)`
  & .form-label {
    text-transform: capitalize;
  }
  & button[type='submit'] {
    margin-top: 16px;
  }
`;

const ErrorWrapper = ({error, touched}) => (
  error && touched ?
  <StyledError><span>{error}</span></StyledError>
  : null
);

const Group = styled(Form.Group)`
  & .form-control {
    ${'' /* border-color: ${p => p.isValid ?
      p.theme.states.success :
      p.inError &&
      p.theme.states.danger
    }; */}
  }
`;

Form.Group = Group;
Form.ErrorMessage = ErrorWrapper;

export default Form;