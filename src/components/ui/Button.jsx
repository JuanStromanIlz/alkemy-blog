import styled from 'styled-components';

const ButtonContainer = styled.div`
  background-color: ${p => p.variant ? p.theme.states[p.variant] : p.theme.alkemy};
  border: 1px solid ${p => p.variant ? p.theme.states[p.variant] : p.theme.alkemy};
  box-shadow: ${p => !p.outline && 'rgb(0 0 0 / 8%) 0px 8px 28px'};
  /* Disabled Styles */
  background: ${p => p.disabled && p.theme.background};
  border: ${p => p.disabled && '1px solid #ced4da'};
  /* Outline Styles */
  background-color: ${p => p.outline && p.theme.surface};
  border-color:  ${p => p.outline && p.theme.surface};
  border-radius: 6px;
  width: ${p => p.fullWidth ? '100%' : 'fit-content'};
  button {
    width: 100%;
    padding: 6px 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
    border-radius: 6px;
    cursor: pointer;
    user-select: none;
    background: none;
    transition: all .2s;
    border: none;
    margin: 0;
    > * {
      margin: auto;
      color: ${p => p.outline ? (p.variant ? p.theme.states[p.variant] : p.theme.alkemy) : '#fff'};
      font-weight: 600;
      font-size: 16px;
    }
  }
  button:disabled {
    pointer-events: none;
    span {
      color: #ced4da;
    }
  }
  @media (hover: hover) {
    button:hover {
      backdrop-filter: brightness(.85);
    }
  }
`;

const IconContainer = styled.button`
  display: flex;
  margin: auto 0;
  padding: 0;
  border: 1px solid #fff;
  color: #65676B;
  background: #fff;
  cursor: pointer;
  border-radius: 50%;
  transition: all .2s;
  @media(hover: hover) {
    &:hover {
      backdrop-filter: brightness(.85);
    }
  }
`;

const Icon = ({children, ...props}) => <IconContainer {...props}><span className='material-icons'>{children}</span></IconContainer>;

const Button = ({fullWidth, variant, outline, children, disabled, ...props}) => (
  <ButtonContainer 
    fullWidth={fullWidth} 
    disabled={disabled} 
    variant={variant}
    outline={outline}
  >
    <button disabled={disabled} {...props}>{children}</button>
  </ButtonContainer>
);

Button.Icon = Icon;

export default Button;