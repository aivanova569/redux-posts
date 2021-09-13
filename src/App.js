import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Actions
import { getPosts } from 'store/posts/postsAction';
// Components
import Home from './pages/Home';
import PostDetails from './pages/PostDetails/PostDetails';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/post/:id" component={PostDetails} />
    </Switch>
  );
};

export default App;
