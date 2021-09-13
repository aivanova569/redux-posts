import { POSTS_SET, POSTS_LOADING, POSTS_ERROR, POSTS_ITEM } from './postsAction';

const initialState = {
  posts: [],
  loading: false,
  error: false,
  item: {},
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_SET: {
      return {
        ...state,
        posts: action.payload
      }
    }
    case POSTS_LOADING: {
      return {
        ...state,
        loading: action.payload
      }
    }
    case POSTS_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }
    case POSTS_ITEM: {
      const id = action.payload;
      const item = state.posts.find(item => item.id === id);
      const newItem = {
        ...item
      }
      const obj = {
        ...state,
        item : newItem
      }
      return obj
    }
    default:
      return state;
  }
}