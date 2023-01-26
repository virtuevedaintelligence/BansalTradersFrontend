import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button, Form, Modal, Row } from "react-bootstrap";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
  from 'mdb-react-ui-kit';

function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button onClick={handleShow}>
        Login
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login with OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <MDBInput wrapperClass='mb-4' label='Phone Number' id='phoneNumber' type='contact' />
            <MDBBtn className="mb-4">Get OTP</MDBBtn>
            <div className="text-center">
              <p>or sign up with:</p>
              <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm" />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm" />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm" />
                </MDBBtn>
              </div>
            </div>
          </MDBContainer>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Login;