import React from "react";
import { connect } from "react-redux";
import { pagePostAndComments, getUsers } from "../api/api";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";

class PostsId extends React.Component {
  componentDidMount = () => {
    this.props.getPostsIdAction(this.props.match.params.id);
    this.props.getUsersAction(this.props.match.params.id);
  };

  render = () => {
    const { posts, comments, users } = this.props;

    return (
      <div className="col-md-12 ">
        <Nav />
        <div className="container">
          <h3 className="font-weight-bold text-md-center">PostsID</h3>
          <div>
            <h5 className="card-title">{posts.title}</h5>
            <h6 className="body-1 text-muted">{posts.body}</h6>
          </div>
          <div>
            <h2 className="text-md-center">Comments</h2>
            {comments.map((comment, key) => (
              <div key={key}>
                <div className="card">
                  <div>
                    <div className="flex-grow-1 pl-0 pl-sm-3">
                      <h4 className="mb-0">{comment.name}</h4>
                      <NavLink to={`/users/${users.id}`}>
                        <h5 className="text-muted">{comment.email}</h5>
                      </NavLink>
                      <p>{comment.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
  usersLoaded: state.usersReducer.usersLoaded,
  posts: state.postsAndCommentsReducer.posts,
  comments: state.postsAndCommentsReducer.comments,
  commentsLoaded: state.postsAndCommentsReducer.commentsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getPostsIdAction: (id) => {
    dispatch(pagePostAndComments(id));
  },
  getUsersAction: (id) => {
    dispatch(getUsers(id));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(PostsId);
