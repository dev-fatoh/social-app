import { useState } from "react";
import { Input, Select, SelectItem, Button } from "@heroui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../utils/FormValidation.js";
import { registerApi } from "../services/AuthServices.js";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: "",
    },
    resolver: yupResolver(schema),
  });

  async function handleRegister(formData) {
    setIsLoading(true);
    const data = await registerApi(formData);
    setIsLoading(false);
    if (data.error) {
      setErrorMsg(data.error);
      setSuccessMsg("");
    } else {
      setErrorMsg("");
      console.log(data);
      setSuccessMsg(data.message);
    }
  }
  return (
    <div className="max-w-xl py-10 mx-auto my-10 p-4 shadow-2xl rounded-2xl">
      <form onSubmit={handleSubmit(handleRegister)}>
        <h1 className="text-center my-5">Register</h1>
        <div className="flex flex-col gap-6">
          <Input
            variant="underlined"
            label="Name"
            type="name"
            {...register("name")}
            size="lg"
          />
          {errors.name && (
            <p className="text-red-400">{errors.name?.message}</p>
          )}
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

          <Input
            variant="underlined"
            label="Confirm Password"
            type="password"
            size="lg"
            {...register("rePassword")}
          />
          {errors.rePassword && (
            <p className="text-red-400">{errors.rePassword?.message}</p>
          )}

          <Input
            variant="underlined"
            label="Date Of Birth"
            type="date"
            name="dateOfBirth"
            {...register("dateOfBirth")}
            size="lg"
          />
          {errors.dateOfBirth && (
            <p className="text-red-400">{errors.dateOfBirth?.message}</p>
          )}

          <Select
            label="select gender"
            {...register("gender")}
            variant="underlined"
            size="lg"
          >
            <SelectItem key={"male"}>male</SelectItem>
            <SelectItem key={"female"}>female</SelectItem>
          </Select>
          {errors.gender && (
            <p className="text-red-400">{errors.dateOfBirth?.message}</p>
          )}

          <Button
            isLoading={isLoading}
            type="submit"
            color="primary"
            variant="bordered"
          >
            Register
          </Button>
          {errorMsg && (
            <p className="text-red-400 bg-red-200 p-2 rounded-md">{errorMsg}</p>
          )}
          {successMsg && (
            <p className="text-green-500 bg-green-200 p-2 rounded-md">
              {successMsg}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
