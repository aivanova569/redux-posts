import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Container, Modal, Form, Row, Col, Card } from 'react-bootstrap';
import { getPosts } from '../store/posts/postsAction';

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const posts = useSelector((state) => state.posts);
  useEffect( () => {
    dispatch(getPosts());
  }, []);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <Button variant="primary" size="lg" onClick={handleShow}>
          New post
        </Button>
        <Row className="mt-5">
            {posts.map((post) => (
              <Col key={post.id}>
                <Card style={{width: '25rem', marginBottom: '2rem'}}>
                  <Card.Img style={{height: '20rem'}} variant="top" src="https://source.unsplash.com/random" />
                  <Card.Body style={{minHeight: '18rem'}}>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                    <Button onClick={() => history.push(`/about/${post.id}`)} variant="primary">Learn more</Button>
                    {/*<Button style={{marginLeft: '1rem'}} variant="light">Remove</Button>*/}
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Post title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Post text</Form.Label>
              <Form.Control type="text" placeholder="Enter text" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Home;