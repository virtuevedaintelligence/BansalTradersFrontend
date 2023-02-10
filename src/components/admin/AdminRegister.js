import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";

const initialValues = {
  fullname: "",
  email: "",
  contactnumber: "",
  password: "",
  confirmpassword: "",
};

function AdminRegister() {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      action.resetForm();
    },
  });

  return (
    <div>
      <div className="p-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <MDBInput wrapperClassName="mb-4" label="Fullname" name="fullname" id="fullname" type="text" value={values.fullname} onChange={handleChange} onBlur={handleBlur} />
            {errors.fullname && touched.fullname ? <p className="form-error">{errors.fullname}</p> : null}
          </div>
          <div className="mb-3">
            <MDBInput wrapperClassName="mb-4" label="Email" name="email" id="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {errors.email && touched.email ? <p className="form-error">{errors.email}</p> : null}
          </div>
          <div className="mb-3">
            <MDBInput wrapperClassName="mb-4" label="Contact Number" name="contactnumber" id="contactnumber" type="text" value={values.contactnumber} onChange={handleChange} onBlur={handleBlur} />
            {errors.contactnumber && touched.contactnumber ? <p className="form-error">{errors.contactnumber}</p> : null}
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
            <MDBBtn outline rounded>
              Register
            </MDBBtn>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminRegister;
