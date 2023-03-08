import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import React from "react";
import { useFormik } from "formik";
import { signInSchema } from "../../validations";

const initialValues = {
  email: "",
  password: "",
};

function AdminLogin() {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signInSchema,
    onSubmit: (values, action) => {
      action.resetForm();
    },
  });
  return (
    <div className="p-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <MDBInput className="" label="Email Address" name="email" id="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
          {errors.email && touched.email ? <p className="form-error">{errors.email}</p> : null}
        </div>
        <div className="mb-3">
          <MDBInput className="" label="Password" name="password" id="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
          {errors.password && touched.password ? <p className="form-error">{errors.password}</p> : null}
        </div>
        <div className="mb-3 text-center">
          <MDBBtn outline rounded type="submit">
            Login
          </MDBBtn>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
