import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const categorySchema = Yup.object({
  categoryName: Yup.string().min(2).max(25).required("Please Enter Category Name"),
  categoryType: Yup.string().min(2).max(25).required("Please Select Category Type"),
});

export const productSchema = Yup.object({
  productName: Yup.string().min(2).max(25).required("Please Enter Product Name"),
  productDescription: Yup.string().min(2).max(100).required("Please Enter Product Description Type"),
  productPrice: Yup.number().required("Please Enter Product Price"),
  productPriceWithoutDiscount: Yup.number().required("Please Enter MRP"),
  quantity: Yup.number().required("Please Enter Quantity"),
  weight: Yup.number().required("Please Enter Weight"),
  categoryName: Yup.string().min(2).max(25).required("Please Select Category Name"),
});

export const validationSchema = Yup.object({
  firstName: Yup.string().min(2).max(25).required("Please Enter Firstname"),
  lastName: Yup.string().min(2).max(25).required("Please Enter Lastname"),
  email: Yup.string().email().required("Please Enter Email"),
  contactNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Please Contact Number"),
  password: Yup.string().min(6).required("Please Enter Password"),
  confirmpassword: Yup.string()
    .required("Please Enter Confirm Password")
    .oneOf([Yup.ref("password"), null, "Confirm Password must match Password"]),
});

export const signInSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Email"),
  password: Yup.string().min(6).required("Please Enter Password"),
});
