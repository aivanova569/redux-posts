import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import {useDispatch, connect, useSelector} from "react-redux";
import { Container, Button } from "react-bootstrap";
import { getPosts } from "../store/posts/postsAction";

const About = () => {
  const history = useHistory();
  const { postId } = useParams();
  // const [post, setPost] = useState();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.item);
  console.log(item);
  useEffect( () => {
    dispatch(getPosts());
  }, []);
  return (
    <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
      {/*{*/}
      {/*  items.map(item => {*/}
      {/*    const {title, body, id} = item;*/}
      {/*    return (*/}
      {/*      <div key={id}>*/}
      {/*        <h1>{title}</h1>*/}
      {/*        <p>*/}
      {/*          {body}*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    )*/}
      {/*  })*/}
      {/*}*/}
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet atque cumque dignissimos fugit officia
        pariatur, ratione totam veniam. Asperiores dolor, ipsam laborum odit sit vero voluptatum! Impedit, ipsa.
      </p>
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