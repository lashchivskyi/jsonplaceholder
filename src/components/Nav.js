import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <h3 className="navbar-header">
          <NavLink to="/" className="nav-link-a">
            REACT APP
          </NavLink>
        </h3>
        <div>
          <h4>
            <NavLink to="/" className="nav-link active ">
              Home
            </NavLink>
            {/* <NavLink to="/comments" className="nav-link active">
              Comments
            </NavLink> */}
          </h4>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
