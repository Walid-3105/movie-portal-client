import React from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const Logo = () => {
  return (
    <div className="navbar-start">
      <h3 className="text-md lg:text-xl flex text-center items-center font-bold">
        M
        <span className="text-[#1230AE]">
          <MdOutlineSlowMotionVideo />
        </span>
        VIE HIVE
      </h3>
    </div>
  );
};

export default Logo;
