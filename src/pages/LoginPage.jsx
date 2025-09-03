import { useState } from "react";
import { Input, Button } from "@heroui/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../utils/LoginSchema.js";
import { loginApi } from "../services/AuthServices.js";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  async function handleLogin(formData) {
    setIsLoading(true);
    const data = await loginApi(formData);
    setIsLoading(false);
    console.log(data);
    if (data.message == "success") {
      localStorage.setItem("token", data.token);
      navigate("/");
    } else {
      setErrorMsg(data);
    }
  }
  return (
    <div className="max-w-xl py-10 mx-auto my-10 p-4 shadow-2xl rounded-2xl">
      <form onSubmit={handleSubmit(handleLogin)}>
        <h1 className="text-center my-5">Login</h1>
        <div className="flex flex-col gap-6">
          <Input
            variant="underlined"
            label="Email"
            type="email"
            {...register("email")}
            size="lg"
          />
          {errors.email && (
            <p className="text-red-400">{errors.email?.message}</p>
          )}

          <Input
            variant="underlined"
            label="Password"
            type="password"
            {...register("password")}
            size="lg"
          />
          {errors.password && (
            <p className="text-red-400">{errors.password?.message}</p>
          )}

          <Button
            isLoading={isLoading}
            type="submit"
            color="primary"
            variant="bordered"
          >
            Login
          </Button>
          {errorMsg && (
            <p className="text-red-400 bg-red-200 p-2 rounded-md">{errorMsg}</p>
          )}
          <p>
            U don't have an account?
            <Link to={"/register"} className="text-primary-500 ml-3">
              create account now
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
