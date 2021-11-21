import { Card as CardBS } from 'react-bootstrap';
import Button from 'components/ui/Button';
import styled from 'styled-components';

const Card = styled(CardBS)`
  background: ${p => p.theme.surface};
  margin-bottom: 16px;
  border-radius: max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const Body = styled(CardBS.Body)` 
  padding: 8px 16px;
`;

const User = styled.div`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${p => p.theme.background};
  > * {
    line-height: 40px;
    font-weight: 700;
  }
`;

const Header = styled(CardBS.Header)`
  background-color: transparent;
  border: none;
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
  .more {
    margin-left: 16px;
  }
`;

const Content = styled.div`
  margin-right: 16px;
`;

const Option = styled.div`
  background: ${p => p.theme.surface};
  border-bottom: 1px solid ${p => p.theme.background};
  cursor: pointer;
  padding: 16px;
  display: flex;
  flex-direction: row;
  transition: all .2s;
  .material-icons {
    display: flex;
    margin-right: 8px;
  }
  p {
    white-space: nowrap;
  }
  &:last-of-type {
    border-bottom: none;
  }
  @media (hover: hover) {
    :hover {
      filter: brightness(.85);
    }
  }
`;

const OptionComponent = ({icon, children, ...props}) => (
  <Option {...props}>
    <span className='material-icons'>{icon}</span>
    <Card.Text>{children}</Card.Text>
  </Option>
);

const ActionsContainer = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;
  .actions--trigger {
    display: flex;
  }
`;
const List = styled(Card)`
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 48px;
  right: 0;
  display: flex;
  flex-direction: column;
`;

const Actions = ({show, node, trigger, children, ...props}) => {

  return (
    <ActionsContainer
      {...props}
    >
      <div className='actions--trigger' ref={trigger}>
        <Button.Icon>more_horiz</Button.Icon>
      </div>
      {show &&
        <List bg='white' ref={node}>
          {children}
        </List>
      }
    </ActionsContainer>
  );
}

Actions.Option = OptionComponent;

export { Actions };

Card.User = User;
Card.Header = Header;
Card.Body = Body;
Card.Content = Content;

export default Card;