import React from "react";
import { NavLink } from "react-router-dom";

function AdminProfile() {
  return <div className="container">
    Welcome Admin! Please login using secure api
    <NavLink className="nav-link" to="/secureadmin">
      Login
    </NavLink>
  </div>;
}

export default AdminProfile;
