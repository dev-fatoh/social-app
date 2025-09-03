import * as yup from "yup";
export const schema = yup.object().shape({
  name: yup.string().required("name must be required"),
  email: yup.string().email("not a valid email").required("email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      " Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
    )
    .required(),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords not matches")
    .required(),
  dateOfBirth: yup
    .date()
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
      "u must be at least 18 years old",
    )
    .required(),
  gender: yup.string().oneOf(["male", "female"]).required(),
});
