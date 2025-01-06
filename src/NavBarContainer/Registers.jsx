import React, { useContext, useState } from "react";
import NavBar from "./NavBar";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import GoggleLogin from "../Shared/GoggleLogin";
import WelcomeBanner from "../Shared/WelcomeBanner";
import "../Feature/style.css";
import Logo from "../Shared/Logo";

const Registers = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
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

    if (password.length < 6) {
      setError("Password should be 6 character");
      return;
    }
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;

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
            <h2 className="text-2xl font-bold text-left">Register</h2>
            <p className="text-left font-semibold mb-2">
              Already have a Account ?
              <Link to="/login" className="text-[#023E8A] pl-1">
                Login
              </Link>
            </p>
            <form onSubmit={handleRegisterSubmit} className="pb-3">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">
                    Name
                  </span>
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
                  <span className="label-text text-gray-700 font-semibold">
                    Image URL
                  </span>
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
                  <span className="label-text text-gray-700 font-semibold">
                    Email
                  </span>
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
                  <span className="label-text text-gray-700 font-semibold">
                    Password
                  </span>
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
                <button className="btn wonder-button text-white">
                  Register
                </button>
                {error && <div className="text-red-700 pt-2 ">{error}</div>}
              </div>
            </form>
            <div>
              {/* Google */}
              <GoggleLogin></GoggleLogin>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <WelcomeBanner />
        </div>
      </div>
    </div>
  );
};

export default Registers;
