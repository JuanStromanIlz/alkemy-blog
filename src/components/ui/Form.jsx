import styled from 'styled-components';
import { Form as FormBS } from 'react-bootstrap';

const StyledError = styled.div`
  padding-top: 4px;
  color: ${p => p.theme.states.danger};
`;

const Form = styled(FormBS)`
  gap: 16px;
  display: flex;
  flex-direction: column;
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
  ${'' /* margin-top: 16px; */}
  textarea {
    resize: none;
  }
`;

Form.Group = Group;
Form.ErrorMessage = ErrorWrapper;

export default Form;