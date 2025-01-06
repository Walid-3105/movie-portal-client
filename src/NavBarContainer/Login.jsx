import React, { useContext, useState } from "react";
import NavBar from "./NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import GoggleLogin from "../Shared/GoggleLogin";
import "../Feature/style.css";
import WelcomeBanner from "../Shared/WelcomeBanner";
import Logo from "../Shared/Logo";

const Login = () => {
  const { userLogin, signInWithGoogle, updateEmail } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, password } = data;
    updateEmail(email);

    userLogin(email, password)
      .then((result) => {
        // console.log(result);
        toast.success("Login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        // console.log(err);
        setError("login", { type: "manual", message: err.code });
        toast.error("Error Problem");
      });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-full flex justify-center items-center">
          <div className="card w-full md:max-w-[380px] lg:max-w-[440px] p-10 mt-6">
            <div className="mb-10">
              <Logo></Logo>
            </div>
            <div>
              <Link
                to="/"
                className="flex gap-2 text-center items-center font-semibold mb-4"
              >
                <FaArrowLeft />
                <h3>Home</h3>
              </Link>
            </div>
            <h2 className="text-2xl font-bold text-left">Log In</h2>
            <p className="text-left font-semibold mb-2">
              Do not have a Account ?
              <Link to="/registers" className="text-[#023E8A] pl-1">
                Register
              </Link>
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="pb-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute right-4 bottom-[46px]"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}

                <label className="label">
                  <Link
                    to="/auth/forgetPassword"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>

              {errors.login && (
                <label className="label text-red-600">
                  {errors.login.message}
                </label>
              )}

              <div className="form-control mt-6">
                <button className="btn btn-primary wonder-button">Login</button>
              </div>
            </form>
            <div>
              <GoggleLogin></GoggleLogin>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <WelcomeBanner></WelcomeBanner>
        </div>
      </div>
    </div>
  );
};

export default Login;
