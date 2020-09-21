import * as axios from "axios";
import {
  POST_REQ,
  POST_RES,
  POST_ERR,
  POST_COMMENTS_REQ,
  POST_COMMENTS_REQ_RES,
  POST_COMMENTS_REQ_ERR,
  USER_REQ,
  USER_RES,
  USER_ERR,
  DELETE_POSTS,
  CREATE_POSTS
} from "../reducers/constants";

const instance = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com/",
});

export const getPost = (dispatch) => {
  dispatch({ type: POST_REQ });
  instance
    .get("posts")
    .then((res) => {
      console.log(res);
      dispatch({ type: POST_RES, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_ERR, error: err });
    });
};

export const pagePostAndComments = (id) => (dispatch) => {
  dispatch({ type: POST_COMMENTS_REQ });
  axios
    .all([instance.get(`posts/${id}`), instance.get(`posts/${id}/comments`)])
    .then(axios.spread((posts, comments) => dispatch(loaded(posts, comments))))
    .catch((err) => {
      dispatch({ type: POST_COMMENTS_REQ_ERR, error: err });
    });
};

const loaded = (posts, comments) => ({
  type: POST_COMMENTS_REQ_RES,
  posts: posts,
  comments: comments,
});

export const getUsers = (id) => (dispatch) => {
  dispatch({ type: USER_REQ });
  instance
    .get(`users/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: USER_RES, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: USER_ERR, error: err });
    });
};

export const deletePost = (id) => dispatch => {
  instance.delete(`posts/${id}`)
    .then(post =>
      dispatch({
        type: DELETE_POSTS,
        payload: id
      }),
    );
};

export const createPost = dispatch => {
  instance.post(`posts`)
    .then(post =>
      dispatch({
        type: CREATE_POSTS,
        payload: post
      }),
    );
};
