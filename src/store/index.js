import { createStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { postsReducer } from './posts/postsReducer';

const middleware = [thunk];

const rootReducer = combineReducers({
  posts: postsReducer,
});

export const store = createStore(
  rootReducer, applyMiddleware(...middleware),
);
