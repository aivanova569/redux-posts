import axios from 'axios';

export const POSTS_SET = 'POSTS_SET';
export const POSTS_LOADING = 'POSTS_LOADING';
export const POSTS_ERROR = 'POSTS_ERROR';
// export const DELETE_POST = 'DELETE_POST';
export const POSTS_ITEM = 'POSTS_ITEM';


export const setPostsAction = (payload) => ({
  type: POSTS_SET,
  payload,
});

export const setLoadingAction = (payload) => ({
  type: POSTS_LOADING,
  payload,
});

export const setErrorAction = (payload) => ({
  type: POSTS_ERROR,
  payload,
});

export const setItemAction = (id) => ({
  type: POSTS_ITEM,
  payload: id,
});

// export const deletePostAction = (id) => ({
//   type: DELETE_POST,
//   payload: id,
// });


export const getPosts = () => async (dispatch) => {
  try {
    dispatch(setLoadingAction(true));
   const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/?_limit=10`);
   dispatch(setPostsAction(data));
   dispatch(setItemAction());
  } catch (error){
    dispatch(setErrorAction(true));
    console.log(error);
  } finally {
    dispatch(setLoadingAction(false));
  }
}
