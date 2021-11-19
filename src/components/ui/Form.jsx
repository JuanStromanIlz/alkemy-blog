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
    font-weight: 500;
  }
  & button[type='submit'] {
    margin-top: 16px;
  }
  & .form-control:disabled {
    background: transparent;
    border: none;
  }
  & textarea {
    resize: none;
  }
`;

const ErrorWrapper = ({error, touched}) => (
  error && touched ?
  <StyledError><span>{error}</span></StyledError>
  : null
);

Form.ErrorMessage = ErrorWrapper;

export default Form;