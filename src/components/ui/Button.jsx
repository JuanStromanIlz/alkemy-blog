import styled from 'styled-components';

const ButtonContainer = styled.div`
  button {
    background: #000;
    box-shadow: rgb(0 0 0 / 8%) 0px 8px 28px;
    border-radius: 9999px;
    border: 1px solid #fff;
    padding-left: 32px;
    padding-right: 32px;
    min-height: 52px;
    min-width: 52px;
    display: flex;
    cursor: pointer;
    user-select: none;
    margin: 0;
    > * {
      margin: auto;
      color: #fff;
      font-size: 700;
    }
  }
`;

const IconContainer = styled.button`
  display: flex;
  margin: auto;
  padding: 0;
  border: 1px solid #fff;
  background: #fff;
  cursor: pointer;
  border-radius: 50%;
  transition: all .2s;
  @media(hover: hover) {
    &:hover {
      filter: brightness(.85);
    }
  }
`;

const Icon = ({children, ...props}) => <IconContainer {...props}><span className='material-icons'>{children}</span></IconContainer>;

const Button = ({children, ...props}) => <ButtonContainer><button {...props}>{children}</button></ButtonContainer>;

Button.Icon = Icon;

export default Button;