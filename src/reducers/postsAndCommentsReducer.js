import {
  POST_COMMENTS_REQ,
  POST_COMMENTS_REQ_RES,
  POST_COMMENTS_REQ_ERR,
} from "./constants";

const initialState = {
  posts: [],
  comments: [],
  commentsLoaded: false,
  commentsError: [],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_COMMENTS_REQ:
      return {
        ...state,
        commentsLoaded: false,
      };

    case POST_COMMENTS_REQ_RES:
      return {
        ...state,
        posts: action.posts.data,
        comments: action.comments.data,
        commentsLoaded: true,
      };

    case POST_COMMENTS_REQ_ERR:
      return {
        ...state,
        commentsError: [...state.commentsError, action.error],
      };

    default:
      return state;
  }
};

export default commentsReducer;
