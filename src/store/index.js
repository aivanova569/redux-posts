import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import {postReducer} from "./posts/postsReducer";
import thunk from 'redux-thunk';

const middleware = [thunk];

export const store = createStore(
  postReducer, applyMiddleware(...middleware),
);
