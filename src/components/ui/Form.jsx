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
    margin-left: 12px;
  }
  & button[type='submit'] {
    margin-top: 16px;
  }
  & .form-control {
    border-radius: 20px;
    background: ${p => p.theme.background};
  }
  & .form-control:focus {
    background: ${p => p.theme.surface};
    border-color: ${p => p.theme.alkemy};
    box-shadow: 0 0 0 0.25rem ${p => p.theme.alkemyTransparency};
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