import React, { useContext, useState } from "react";
import NavBar from "./NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

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

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);
        toast.success("Login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        // console.log(err);
        setError("login", { type: "manual", message: err.message }); //
      });
  };

  return (
    <div>
      <div className="w-full lg:w-11/12 mx-auto">
        <NavBar></NavBar>
      </div>
      <div>
        <div
          className="w-full flex justify-center items-center py-14"
          style={{
            minHeight: "calc(100vh - 80px)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
          }}
        >
          <div className="card w-full  md:max-w-[380px] lg:max-w-[440px] shrink-0 p-10 bg-gradient-to-r from-orange-100 via-gray-100 to-blue-300 text-gray-800">
            <h2 className="text-2xl font-semibold text-center">
              Login Your Account
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-3">
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="px-8">
              <div className="flex items-center justify-center my-2">
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="px-4 text-gray-600">Or Sign In With</span>
                <div className="border-t border-gray-300 flex-grow"></div>
              </div>

              <div className="flex items-center justify-center pb-1">
                <button
                  onClick={handleGoogleSignIn}
                  className="flex text-center items-center btn text-xl border-gray-400 rounded-lg"
                >
                  <FcGoogle />
                  Google
                </button>
              </div>
            </div>

            <p className="text-center font-semibold">
              Do not have an account?
              <Link to="/registers" className="text-red-600 pl-1">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
