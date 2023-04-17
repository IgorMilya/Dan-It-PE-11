import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  secondName: "",
  age: "",
  phoneNumber: "",
  address: {
    city: "",
    country: ""
  }
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short! Please enter no more than 20, and no less than 2")
    .max(20, "Too Long! Please enter no more than 20, and no less than 2")
    .matches(/\p{Lu}/u, 'First Name must contain at least one uppercase letter')
    .required("Required"),
  secondName: Yup.string()
    .min(2, "Too Short! Please enter no more than 20, and no less than 2")
    .max(20, "Too Long! Please enter no more than 20, and no less than 2")
    .matches(/\p{Lu}/u, 'Second Name must contain at least one uppercase letter')
    .required("Required"),
  age: Yup.number()
    .min(16, "Too Young! You must be 16 years old")
    .max(150, "Too Elderly! You must be till 150 years old")
    .integer()
    .required("Required only numbers"),
  phoneNumber: Yup.number()
    .integer()
    .positive()
    .test("len", "Phone number must be 13 digits", (val) => val.toString().length >= 12 && val.toString().length <= 12)
    .required("Required only numbers"),
  city: Yup.string()
    .min(2, "Too Short! 3-20 symbols")
    .max(20, "Too Long! 3-20 symbols")
    .matches(/\p{Lu}/u, 'Address must contain at least one uppercase letter')
    .required("Required"),
  country: Yup.string()
    .min(2, "Too Short! 3-20 symbols")
    .max(20, "Too Long! 3-20 symbols")
    .matches(/\p{Lu}/u, 'Address must contain at least one uppercase letter')
    .required("Required"),
});

