import Card, {Actions} from 'components/ui/Card';
import useDetectClickOut from 'hooks/useDetectClickOut';

function PostElement({info, onEdit, onDelete}) {
  const { show, nodeRef, triggerRef, setShow } = useDetectClickOut(false);

  function closeAction(action, id) {
    action(id);
    setShow(false);
  }

  return (
    <Card>
      <Card.Header>
        <Card.User>
          <span>{info.userId}</span>
        </Card.User>
        <Actions
          show={show}
          node={nodeRef}
          trigger={triggerRef}
        >
          <Actions.Option onClick={() => closeAction(onEdit, info.id)} icon='info'>Details</Actions.Option>              
          <Actions.Option onClick={() => closeAction(onDelete, info.id)} icon='delete_outline'>Delete</Actions.Option>
          </Actions>
      </Card.Header>
      <Card.Body>
        <Card.Title>{info.title}</Card.Title>
        <Card.Content>
          <Card.Text>{info.body}</Card.Text>
        </Card.Content>
      </Card.Body>
    </Card>
  );
}

export default PostElement;