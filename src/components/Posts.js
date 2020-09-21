import React from "react";
import { connect } from "react-redux";
import { getPost, deletePost } from "../api/api";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import AddPost from "./AddPost";

class PersonPage extends React.Component {
  componentDidMount = () => {
    this.props.getPostsAction(this.props);
    this.props.getDeletePostAction(this.props.match.params.id);
  };


  render = () => {
    const { posts } = this.props;

    return (
      <div className="col-md-12 ">
        <Nav />
        <AddPost />
        <h3 className="text-poppins font-weight-bold text-center mt-4">Posts</h3>
        <div className="row justify-content-center">
          {posts.map((posts) => (
            <div key={posts.id} className="col-md-8">
              <div className="card card-outline translate-up mb-3">
                <div className="card-body">
                  <NavLink to={`/posts/${posts.id}`}>
                    <h5 className="card-title">{posts.title}</h5>
                  </NavLink>
                  <h6 className="body-1 text-muted">{posts.body}</h6>
                  <button type="button" className="btn btn-warning btn-sm" key={posts.id} onClick={() => this.props.getDeletePostAction(posts.id)}>Delete post</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
  postsLoaded: state.postReducer.postsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getPostsAction: () => {
    dispatch(getPost);
  },
  getDeletePostAction: (id) => {
    dispatch(deletePost(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonPage);
