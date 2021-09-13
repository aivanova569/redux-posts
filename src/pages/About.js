import React, { useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import {useDispatch, connect} from "react-redux";
import { Container, Button } from "react-bootstrap";
import { getOnePost } from "../store/posts/postsAction";

const About = ({ item }) => {
  const history = useHistory();
  let { postId } = useParams();
  postId = Number.parseInt(postId);
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getOnePost(postId));
  }, []);

  return (
    <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
      <h1>{item.title}</h1>
      <p>{item.body}</p>
      <Button onClick={() => history.push('/')}>Return</Button>
    </Container>
  )
};

const mapStateToProps = ({item}) => {
  return {
    item
  }
};

export default connect(mapStateToProps)(About);