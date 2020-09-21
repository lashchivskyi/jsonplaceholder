import { combineReducers } from "redux";
import postReducer from "./postReducer";
import postsAndCommentsReducer from "./postsAndCommentsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  postReducer,
  postsAndCommentsReducer,
  usersReducer
});

export default rootReducer;
