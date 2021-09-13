import { API } from 'services/api';
import {
  POSTS_GET,
  POSTS_SET_LOADING,
  POSTS_SET_ERROR,
  POSTS_GET_ITEM,
} from './postsTypes';

export const setPostsAction = (posts) => ({
  type: POSTS_GET,
  payload: posts,
});

export const setLoadingAction = (isLoading) => ({
  type: POSTS_SET_LOADING,
  payload: isLoading,
});

export const setErrorAction = (isError) => ({
  type: POSTS_SET_ERROR,
  payload: isError,
});

export const setItemAction = (item) => ({
  type: POSTS_GET_ITEM,
  payload: item,
});

export const getPosts = () => async (dispatch) => {
  const POSTS_LIMIT = 10;

  try {
    dispatch(setLoadingAction(true));
    const { data } = await API.get(`/posts/?_limit=${POSTS_LIMIT}`);

    if (data) {
      dispatch(setPostsAction(data));
    } else {
      dispatch(setErrorAction(true));
    }
  } catch (error) {
    console.log(error);
    dispatch(setErrorAction(true));
  } finally {
    dispatch(setLoadingAction(false));
  }
};
