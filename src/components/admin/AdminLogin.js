import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import React from "react";
import { useFormik } from "formik";
import { signInSchema } from "../../validations";
import { adminLogin } from "../../store/slices/AdminSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../services/AuthService";

function AdminLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };
  const { values, errors, handleBlur, touched,
    handleChange, handleSubmit } = useFormik({
      initialValues: initialValues,
      onSubmit: (values, action) => {
        login(values);
        action.resetForm();
      },
      validationSchema: signInSchema,
    });
  const data = useSelector((state) => {
    return state.admin;
  }
  )
  const login = (values) => {
    dispatch(adminLogin(values));
    navigateTo();
  };
  function navigateTo() {
    if (data.dataAdminLogin.message === "Admin logged in successfully") {
      navigate("/products/dryfruits");
    } else {
      navigate("/secureadmin");
    }
  }
  return (
    <div className="p-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <MDBInput className="" label="Username" name="username" id="username" type="text"
            value={values.username} onChange={handleChange} onBlur={handleBlur} />
          {errors.username && touched.username ? <p className="form-error">{errors.username}</p> : null}
        </div>
        <div className="mb-3">
          <MDBInput className="" label="Password" name="password" id="password" type="password"
            value={values.password} onChange={handleChange} onBlur={handleBlur} />
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
