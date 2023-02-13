import React, { useEffect, useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import UserService from "../../services/UserService";

function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [msg, setData] = useState(null);

  const [user, setUser] = useState({
    contactNo: "",
    otp: ""
  });

  const sendOTP = (e) => {
    e.preventDefault();

  };
  const verifyOTP = (e) => {
    e.preventDefault();
  };

  const handleChangeNumber = (e) => {
    const value = e.target.value;
    console.log(value);
    setUser({ ...user, [e.target.name]: value });
  };
  const handleChangeOTP = (e) => {
    const value = e.target.value;
    console.log(value);
    setUser({ ...user, [e.target.name]: value });
  };

  return (
    <>
      <span variant="primary" onClick={handleShow} className="cartOpenBtn">
        <i className="fas fa-user" onClick={handleShow}></i>
      </span>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login with OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            {msg === "OTP Generated Successfully" ? (
              <div>
                <MDBInput wrapperClass="mb-4" label="Enter OTP" name="otp" id="OTP" type="number" onChange={(e) => handleChangeOTP(e)} />
                <MDBBtn className="mb-4" onClick={verifyOTP}>
                  Proceed
                </MDBBtn>
                <MDBBtn className="mb-4" onClick={sendOTP}>
                  Request Another OTP
                </MDBBtn>
              </div>
            ) : (
              <div>
                <MDBInput wrapperClass="mb-4" label="Phone Number" name="contactNo" id="phoneNumber" type="contact"
                  onChange={(e) => handleChangeNumber(e)} />
                <MDBBtn className="mb-4" onClick={sendOTP}>
                  Get OTP
                </MDBBtn>
                <div className="text-center">
                  Sign up With <MDBIcon fab icon="google" size="sm" />
                </div>
              </div>
            )}
          </MDBContainer>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
