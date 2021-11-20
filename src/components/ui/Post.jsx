import Card from 'react-bootstrap/Card';
import Button from 'components/ui/Button';
import styled from 'styled-components';

const Post = styled(Card)`
  margin-bottom: 16px;
`;

const Body = styled(Card.Body)` 
  padding: 8px 16px;
`;

const User = styled.div`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${p => p.theme.textSecondary};
  > * {
    line-height: 40px;
    font-weight: 700;
  }
`;

const Header = styled(Card.Header)`
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
  cursor: pointer;
  padding: 16px;
  display: flex;
  flex-direction: row;
  transition: all .2s;
  .material-icons {
    display: flex;
    margin-right: 12px;
  }
  p {
    white-space: nowrap;
  }
  @media (hover: hover) {
    :hover {
      background: ${p => p.theme.textSecondary};
    }
  }
`;

const OptionComponent = ({icon, children, ...props}) => (
  <Option {...props}>
    <span className='material-icons'>{icon}</span>
    <Post.Text>{children}</Post.Text>
  </Option>
);

const ActionsContainer = styled.div`
  position: relative;
  display: flex;
  .actions--trigger {
    display: flex;
  }
  .actions--list {
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    overflow: hidden;
    position: absolute;
    top: 48px;
    right: 0;
    display: flex;
    flex-direction: column;
  }
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
        <Post bg='white' ref={node} className='actions--list'>
          {children}
        </Post>
      }
    </ActionsContainer>
  );
}

Actions.Option = OptionComponent;

export { Actions };

Post.User = User;
Post.Header = Header;
Post.Body = Body;
Post.Content = Content;

export default Post;