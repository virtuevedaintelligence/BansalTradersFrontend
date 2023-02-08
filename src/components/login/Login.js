import React, { useEffect, useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import axios from "axios";

function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [msg, setData] = useState(null);

  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [error, setError] = useState("");

  const [contact, setContact] = useState({
    contactNo: "",
  });

  const sendOTP = (e) => {
    e.preventDefault();
    const url_ = "http://localhost:8082/v1/users/generateOTP/" + contact.contactNo;

    axios.get(url_).then((response) => {
      console.log(response.data.message);
      setData(response.data.message);
      const msg = response.data.message;
      console.log(setData);
    });
  };
  const verifyOTP = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setContact({ ...contact, [e.target.name]: value });
  };
  const handleChangeOTP = (e) => {
    const value = e.target.value;
    console.log(value);
    setOtp({ ...otp, [e.target.name]: value });
  };

  return (
    <div>
      <Button onClick={handleShow}>Login</Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login with OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            {msg === "OTP Generated Successfully" ? (
              <div>
                <MDBInput wrapperClass="mb-4" label="Enter OTP" name="OTP" id="OTP" type="number" onChange={(e) => handleChangeOTP(e)} />
                <MDBBtn className="mb-4" onClick={verifyOTP}>
                  Login
                </MDBBtn>
              </div>
            ) : (
              <div>
                <MDBInput wrapperClass="mb-4" label="Phone Number" name="contactNo" id="phoneNumber" type="contact" onChange={(e) => handleChange(e)} />
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
    </div>
  );
}

export default Login;
