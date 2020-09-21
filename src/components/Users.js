import React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";

class UsersPage extends React.Component {

  render = () => {
    const { users } = this.props;
    return (
      <div >
        <Nav />
        <h3 className="font-weight-bold text-center">Users</h3>
        <div className="row justify-content-center">
          <div >
            <h5 className="body-1 text-muted">{users.name}</h5>
            <h6 className="body-1 text-muted">{users.email}</h6>
            <h6 className="body-1 text-muted">{users.phone}</h6>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
});

export default connect(mapStateToProps, {})(UsersPage);
