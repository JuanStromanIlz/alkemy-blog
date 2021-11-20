import Post, {Actions} from 'components/ui/Post';
import useDetectClickOut from 'hooks/useDetectClickOut';

function PostElement({info, onEdit, onDelete}) {
  const { show, nodeRef, triggerRef, setShow } = useDetectClickOut(false);

  function closeAction(action, id) {
    action(id);
    setShow(false);
  }

  return (
    <Post>
      <Post.Header>
        <Post.User>
          <span>{info.userId}</span>
        </Post.User>
        <Actions
          show={show}
          node={nodeRef}
          trigger={triggerRef}
        >
          <Actions.Option onClick={() => closeAction(onEdit, info.id)} icon='info'>Details</Actions.Option>              
          <Actions.Option onClick={() => closeAction(onDelete, info.id)} icon='delete_outline'>Delete</Actions.Option>
          </Actions>
      </Post.Header>
      <Post.Body>
        <Post.Title>{info.title}</Post.Title>
        <Post.Content>
          <Post.Text>{info.body}</Post.Text>
        </Post.Content>
      </Post.Body>
    </Post>
  );
}

export default PostElement;