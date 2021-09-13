import {
  POSTS_GET,
  POSTS_SET_LOADING,
  POSTS_SET_ERROR,
  POSTS_GET_ITEM,
} from './postsTypes';

const initialState = {
  posts: [],
  loading: true,
  error: false,
  item: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_GET: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case POSTS_SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case POSTS_SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case POSTS_GET_ITEM: {
      return {
        ...state,
        item: action.payload,
      };
    }
    default:
      return state;
  }
};
