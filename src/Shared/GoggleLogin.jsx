import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const GoggleLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);
        toast.success("Login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        // console.log(err);
        toast.error("login", { type: "manual", message: err.message }); //
      });
  };

  return (
    <div>
      {/* Goggle */}
      <div className="flex items-center justify-center pb-1">
        <button
          onClick={handleGoogleSignIn}
          className="flex text-center items-center btn text-xl  rounded-lg w-full bg-white border-2 border-[#023E8A] text-[#023E8A]"
        >
          <FcGoogle></FcGoogle>
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default GoggleLogin;
