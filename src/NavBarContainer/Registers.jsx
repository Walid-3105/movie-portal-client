import React, { useContext, useState } from "react";
import NavBar from "./NavBar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Registers = () => {
  const { signInWithGoogle, createUser, updateUserProfile } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    if (password.length < 6) {
      setError("Password should be 6 character");
      return;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!passwordRegex.test(password)) {
      setError("At least one Uppercase-Lowercase and number");
      toast.error("Give Valid Password");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          e.target.reset();
          toast.success("User created successfully!");
          navigate("/");
        });
      })
      .catch((err) => {
        // console.log(err.message);
        setError(err.message);
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
        setError(err.message);
      });
  };
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <NavBar></NavBar>
      </div>
      <div>
        <div className="mx-auto flex justify-center items-center">
          <div className="card w-full md:max-w-[380px] lg:max-w-[440px] shrink-0 p-10 mt-6 bg-gradient-to-r from-orange-100 via-gray-100 to-blue-300 text-gray-800">
            <h2 className="text-2xl font-semibold text-center">
              Register Your Account
            </h2>
            <form
              onSubmit={handleRegisterSubmit}
              className="card-body pt-3 pb-3"
            >
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="image-url"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute right-4 bottom-[13px]"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                {error && <div className="text-red-700 pt-2 ">{error}</div>}
              </div>
            </form>
            <div className="px-8 ">
              <div className="flex items-center justify-center my-2 ">
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="px-4 text-gray-600">Or Sign In With</span>
                <div className="border-t border-gray-300 flex-grow"></div>
              </div>

              <div className="flex items-center justify-center pb-1">
                <button
                  onClick={handleGoogleSignIn}
                  className="flex text-center items-center btn text-xl border-gray-400 rounded-lg"
                >
                  <FcGoogle></FcGoogle>
                  Google
                </button>
              </div>
            </div>
            <p className="text-center font-semibold">
              Already have a Account ?
              <Link to="/login" className="text-red-600 pl-2">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registers;
