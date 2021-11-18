import Post, {Actions} from 'components/ui/Post';

function PostElement({info}) {
  return (
    <Post>
      <Post.Header>
        <Post.User>
          <span>{info.userId}</span>
        </Post.User>
        <Actions>
          <Actions.Option icon='edit'>Edit Post</Actions.Option>              
          <Actions.Option icon='delete_outline'>Delete</Actions.Option>
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