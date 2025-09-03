import * as yup from "yup";
export const loginSchema = yup.object().shape({
  email: yup.string().email("not a valid email").required("email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      " Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
    )
    .required(),
});
