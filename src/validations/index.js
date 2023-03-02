import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const signUpSchema = Yup.object({
  firstName: Yup.string().min(2).max(25).required("Please Enter Firstname"),
  lastName: Yup.string().min(2).max(25).required("Please Enter Lastname"),
  regEmail: Yup.string().email().required("Please Enter Email"),
  contactNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Please Contact Number"),
  regPassword: Yup.string().min(6).required("Please Enter Password"),
  confirmpassword: Yup.string()
    .required("Please Enter Confirm Password")
    .oneOf([Yup.ref("password"), null, "Confirm Password must match Password"]),
});

export const signInSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Email"),
  password: Yup.string().min(6).required("Please Enter Password"),
});
