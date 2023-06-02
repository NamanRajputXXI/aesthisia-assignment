import React, { useState, ChangeEvent, FormEvent } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import petals from "../assets/images/petals.png";

interface FormErrors {
  email?: string;
  password?: string;
}

const SignForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Perform sign-in logic here
      console.log("Sign in successful");
    }
  };

  const validateForm = (): FormErrors => {
    const validationErrors: FormErrors = {};

    if (!email) {
      validationErrors.email = "Email is required";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    }

    return validationErrors;
  };

  return (
    <>
      <div className="w-[40vw] font-Inter gap-8 flex  flex-col items-center mr-2">
        <div className="flex flex-col items-center gap-2">
          <img src={petals} alt="petals" className="h-[50px]" />
          <div className="font-[500] text-[34px] leading-[40px]">
            <span>Welcome</span>
            <span className="text-[#08A593]"> Back !</span>
          </div>
          <h3 className="text-sm text-[#667085]">Glad to see you, Again!</h3>
        </div>
        <form
          className="flex flex-col max-w-sm gap-4 mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="w-[360px] flex items-center h-12 text-sm px-5 border-[#464660]   border rounded-[10px]"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-[360px] flex items-center h-12 text-sm px-5 border-[#464660]   border rounded-[10px]"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute transform -translate-y-1/2 top-1/2 right-3 focus:outline-none"
              onClick={handleTogglePassword}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
            {errors.password && (
              <span className="text-red-500">{errors.password}</span>
            )}
          </div>
          <a
            href="/"
            className="mt-[-30px] text-end text-[12px] leading-[15px] text-[#667085] opacity-50 "
          >
            Forget Password ?
          </a>
          <button
            type="submit"
            className="text-[18px] my-10 font-[600] text-white w-[360px] h-[50px] shadow-md bg-[#020100] rounded-[10px]"
          >
            Login
          </button>
          <span className="my-4 text-sm text-center ">
            <p className="text-[#667085]">
              Don't have an account yet?{" "}
              <a href="/" className="text-[#08A593]">
                Sign up
              </a>
            </p>
          </span>
        </form>
      </div>
    </>
  );
};

export default SignForm;
