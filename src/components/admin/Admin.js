import React from "react";
import { NavLink } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AdminLogin from "../admin/AdminLogin";
import AdminRegister from "../admin/AdminRegister";
import "./admin.css";

function admin() {
  return (
    <div className="col-sm-4 mx-auto my-5">
      <Tabs defaultActiveKey="login" id="fill-tab-example" className="mb-3" fill>
        <Tab eventKey="login" title="Login" className="loginTab">
          <AdminLogin />
        </Tab>
        <Tab eventKey="register" title="Register" className="registerTab">
          <AdminRegister />
        </Tab>
      </Tabs>
    </div>
  );
}

export default admin;
