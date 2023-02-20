import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { adminRegister } from "../../store/slices/UserSlice";

function AdminRegister() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmpassword: "",
  };
  const dispatch = useDispatch();
  const register = (e) => {
    e.preventDefault();
    dispatch(adminRegister(initialValues));
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <div>
      <div className="p-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <MDBInput wrapperClassName="mb-4" label="First Name" name="firstName" id="firstName" type="text" value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
            {errors.firstName && touched.firstName ? <p className="form-error">{errors.firstName}</p> : null}
          </div>
          <div className="mb-3">
            <MDBInput wrapperClassName="mb-4" label="Last Name" name="lastName" id="lastName" type="text" value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
            {errors.lastName && touched.lastName ? <p className="form-error">{errors.lastName}</p> : null}
          </div>
          <div className="mb-3">
            <MDBInput wrapperClassName="mb-4" label="Email" name="email" id="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {errors.email && touched.email ? <p className="form-error">{errors.email}</p> : null}
          </div>
          <div className="mb-3">
            <MDBInput wrapperClassName="mb-4" label="Contact Number" name="contactNumber" id="contactNumber" type="text" value={values.contactNumber} onChange={handleChange} onBlur={handleBlur} />
            {errors.contactNumber && touched.contactNumber ? <p className="form-error">{errors.contactNumber}</p> : null}
          </div>
          <div className="mb-3">
            <MDBInput wrapperClassName="mb-4" label="Password" name="password" id="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
            {errors.password && touched.password ? <p className="form-error">{errors.password}</p> : null}
          </div>
          <div className="mb-3">
            <MDBInput wrapperClassName="mb-4" label="Confirm Password" name="confirmpassword" id="confirmpassword" type="password" value={values.confirmpassword} onChange={handleChange} onBlur={handleBlur} />
            {errors.confirmpassword && touched.confirmpassword ? <p className="form-error">{errors.confirmpassword}</p> : null}
          </div>
          <div className="mb-3 text-center">
            <MDBBtn outline rounded type="submit" onClick={register}>
              Register
            </MDBBtn>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminRegister;
