import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
// Actions
import { setItemAction } from 'store/posts/postsAction';

const PostDetails = () => {
  const history = useHistory();
  const { id } = useParams();

  const dispatch = useDispatch();
  const { posts, item } = useSelector(({ posts }) => posts);

  useEffect(() => {
    dispatch(setItemAction(posts.find((post) => post.id === +id)));
  }, [posts, id, dispatch]);

  if (!item) {
    return (
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h1>
          No item
        </h1>
      </Container>
    );
  }

  return (
    <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <h1>
        {item.title}
      </h1>
      <p>
        {item.body}
      </p>
      <Button
        onClick={() => history.goBack()}
      >
        Return
      </Button>
    </Container>
  );
};

export default PostDetails;
