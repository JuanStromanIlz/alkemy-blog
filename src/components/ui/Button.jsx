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

const CircleContainer = styled.button`
  background: ${p => p.theme.states.info};
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  padding: 0;
  margin: 0;
  span {
    line-height: 48px;
    margin: auto;
    font-weight: 600;
  }
`;

const Circle = ({children, ...props}) => <CircleContainer {...props}><span className='material-icons'>{children}</span></CircleContainer>;

Button.Circle = Circle;

export default Button;