import { POST_REQ, POST_RES, POST_ERR, DELETE_POSTS, CREATE_POSTS } from "./constants";

const initialState = {
  posts: [],
  postsLoaded: false,
  postsError: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQ:
      return {
        ...state,
        postsLoaded: false,
      };

    case POST_RES:
      return {
        ...state,
        postsLoaded: true,
        posts: action.payload,
      };

    case POST_ERR:
      return {
        ...state,
        postsError: [...state.postsError, action.error],
      };

    case DELETE_POSTS:
      return {
        ...state,
        posts: state.posts.filter(posts => posts.id !== action.payload)
      };

    case CREATE_POSTS:
      return { ...state, posts: action.payload }

    default:
      return state;
  }
};

export default postReducer;
