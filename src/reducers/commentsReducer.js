import { COMMENTS_REQ, COMMENTS_REQ_RES, COMMENTS_REQ_ERR } from "./constants";

const initialState = {
  comments: [],
  commentsLoaded: false,
  commentsError: [],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQ:
      return {
        ...state,
        commentsLoaded: false,
      };

    case COMMENTS_REQ_RES:
      return {
        ...state,
        commentsLoaded: true,
        comments: action.payload,
      };

    case COMMENTS_REQ_ERR:
      return {
        ...state,
        commentsError: [...state.commentsError, action.error],
      };

    default:
      return state;
  }
};

export default commentsReducer;
