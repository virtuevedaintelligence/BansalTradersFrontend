import React, { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Modal } from "react-bootstrap";
import { MDBContainer, MDBBtn, MDBIcon, MDBInput } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { usersOTPGenAction, usersOTPVerifyAction } from "../../store/slices/UserSlice";
import { IoLogIn } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { ToastContainer, toast } from "react-toastify";
import { AuthService } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseLogout = () => setShow(true);
  const handleShowLogout = () => setShow(false);
  const data = useSelector((state) => {
    return state.users;
  }
  )

  const adminData = useSelector((state) => {
    return state.admin;
  }

  )
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    number: "",
    otp: ""
  });

  const sendOTP = (e) => {
    e.preventDefault();
    if (user.number == '') {
      toast.error("Number cannot be empty");
      return
    } else if (user.number.length < 10) {
      toast.error("Number should be 10 digits");
      return
    }
    dispatch(usersOTPGenAction(user))
  };
  const verifyOTP = (e) => {
    e.preventDefault();
    if (user.number == '') {
      toast.error("OTP cannot be empty");
      return
    } else if (user.number.length < 5) {
      toast.error("OTP more than 5 digits");
      return
    }
    dispatch(usersOTPVerifyAction(user));
    navigateTo()
  };

  function navigateTo() {
    if (data.dataOTPVerify && data.dataOTPVerify.message === "User logged in successfully") {
      const authService = new AuthService();
      authService.goLogin(data.dataOTPVerify.response);
      navigate("/products/dryfruits");
    } else {
      navigate("/");
    }
  }

  const handleChangeNumber = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };
  const handleChangeOTP = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const loggedIn = data.dataOTPVerify;

  return (
    <>
      {loggedIn && loggedIn.message === "User logged in successfully" ? (
        <>
          <span variant="primary" onClick={handleClose} className="cartOpenBtn" closeButton>
            <SlLogout onClick={handleCloseLogout} />
          </span>
          <label variant="primary" className="cartOpenBtn" > {loggedIn.response.firstName} </label>
        </>
      ) : adminData.dataAdminLogin && adminData.dataAdminLogin.message === "Admin logged in successfully" ? (
        <>
          <span variant="primary" onClick={handleClose} className="cartOpenBtn" closeButton>
            <SlLogout onClick={handleCloseLogout} />
          </span>
          <label variant="primary" className="cartOpenBtn" > {adminData.dataAdminLogin.response.firstName} </label>
        </>
      ) : (
        <span variant="primary" onClick={handleShow} className="cartOpenBtn">
          <IoLogIn onClick={handleShow} />
        </span>
      )
      }

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login with OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {
            data.dataOTPGen && data.dataOTPGen.message === "OTP Generated Successfully" ? (
              <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <div>
                  <MDBInput className="mb-4" label="Enter OTP" name="otp" value={user.otp}
                    id="OTP" type="number" onChange={(e) => handleChangeOTP(e)} />
                  <MDBBtn className="mb-4 col-12" onClick={verifyOTP}>
                    Proceed
                  </MDBBtn>
                  <MDBBtn className="mb-2 btn-sm col-12" onClick={sendOTP}>
                    Request Another OTP
                  </MDBBtn>
                </div>
              </MDBContainer>
            ) : (
              <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <div>
                  <MDBInput className="mb-4" label="Phone Number" name="number" id="phoneNumber" type="contact"
                    onChange={(e) => handleChangeNumber(e)} />
                  <MDBBtn className="mb-4 col-12" onClick={sendOTP}>
                    Get OTP
                  </MDBBtn>
                  <div className="mb-4 col-12">
                    Sign up With <MDBIcon fab icon="google" size="sm" />
                  </div>
                </div>
              </MDBContainer>
            )
          }
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
