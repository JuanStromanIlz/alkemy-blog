import { Button as ButtonBS } from 'react-bootstrap';
import styled from 'styled-components';

const Button = styled(ButtonBS)`
  ${'' /* background-color: ${p => p.variant ? p.theme.states[p.variant] : p.theme.states.dark};
  border-color: ${p => p.variant ? p.theme.states[p.variant] : p.theme.states.dark};
  @media (hover: hover) {
    :hover {
      background-color: blue;
    }
  } */}
`;

export default Button;