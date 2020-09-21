import {
  USER_REQ,
  USER_RES,
  USER_ERR,
} from "./constants";

const initialState = {
  users: [],
  usersLoaded: false,
  usersError: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQ:
      return {
        ...state,
        usersLoaded: false,
      };

    case USER_RES:
      return {
        ...state,
        usersLoaded: true,
        users: action.payload,
      };

    case USER_ERR:
      return {
        ...state,
        usersError: [...state.usersError, action.error],
      };

    default:
      return state;
  }
};

export default usersReducer;
