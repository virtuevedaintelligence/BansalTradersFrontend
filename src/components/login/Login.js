import React, { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Modal } from "react-bootstrap";
import { MDBContainer, MDBInput, MDBBtn, MDBIcon } from "mdb-react-ui-kit";

import { useDispatch, useSelector } from "react-redux";
import { usersOTPGenAction } from "../../store/slices/UserSlice";

function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = useSelector((state) => {
    return state.users;
  }
  )
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    number: "",
    otp: ""
  });

  const sendOTP = (e) => {
    e.preventDefault();
    dispatch(usersOTPGenAction(user))
  };
  const verifyOTP = (e) => {
    e.preventDefault();
  };

  const handleChangeNumber = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };
  const handleChangeOTP = (e) => {
    const value = e.target.value;
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
            {data.dataOTPGen && data.dataOTPGen.message === "OTP Generated Successfully" ? (
              <div>
                <MDBInput wrapperClass="mb-4" label="Enter OTP" name="otp" defaultValue={user.otp}
                  id="OTP" type="number" onChange={(e) => handleChangeOTP(e)} />
                <MDBBtn className="mb-4 col-12" onClick={verifyOTP}>
                  Proceed
                </MDBBtn>
                <MDBBtn className="mb-2 btn-sm col-12" onClick={sendOTP}>
                  Request Another OTP
                </MDBBtn>
              </div>
            ) : (
              <div>
                <MDBInput wrapperClass="mb-4" label="Phone Number" name="number" id="phoneNumber" type="contact"
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
