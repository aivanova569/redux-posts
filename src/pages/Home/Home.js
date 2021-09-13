import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Spinner,
} from 'react-bootstrap';
// Components
import Modal from 'components/Modal';

const Home = () => {
  const history = useHistory();
  const { posts, loading } = useSelector(({ posts }) => posts);

  const [show, setShow] = useState(false);

  const modalToggleHandler = () => setShow(!show);

  if (loading) {
    return (
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <>
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Button
          variant="primary"
          size="lg"
          onClick={modalToggleHandler}
        >
          New post
        </Button>
        <Row className="mt-5">
          {posts.map((post) => (
            <Col key={post.id}>
              <Card style={{ width: '25rem', marginBottom: '2rem' }}>
                <Card.Img
                  style={{ height: '20rem' }}
                  variant="top"
                  src="https://source.unsplash.com/random"
                />
                <Card.Body style={{ minHeight: '18rem' }}>
                  <Card.Title>
                    {post.title}
                  </Card.Title>
                  <Card.Text>
                    {post.body}
                  </Card.Text>
                  <Button
                    onClick={() => history.push(`/post/${post.id}`)}
                    variant="primary"
                  >
                    Learn more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Modal
        show={show}
        closeHandler={modalToggleHandler}
      />
    </>
  );
};

export default Home;
