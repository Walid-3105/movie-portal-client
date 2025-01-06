import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import "./navBar.css";
import "../Feature/style.css";
import Logo from "../Shared/Logo";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHovering, setIsHovering] = useState(false);
  const profile = user?.photoURL;
  const displayName = user?.displayName;

  const myFunction = () => {
    const element = document.body;
    element.classList.toggle("dark-mode");
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        console.error("Logout Error:", error.message);
        toast.error("An error occurred while logging out. Please try again.");
      });
  };

  return (
    <div className="navbar flex fixed z-10 mx-auto w-full px-8 lg:px-14">
      {/* Navbar Start */}
      <Logo></Logo>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          <NavLink to="/" className=" text-lg font-medium">
            Home
          </NavLink>
          <NavLink to="/allmovie" className=" text-lg font-medium">
            All Movies
          </NavLink>
          {user && user?.email ? (
            <div>
              <NavLink to="/myFavorite" className=" text-lg font-medium">
                My Favorites
              </NavLink>
              <NavLink to="/addMovie" className=" text-lg font-medium ml-3">
                Add Movie
              </NavLink>
            </div>
          ) : (
            ""
          )}
          <NavLink to="/contactUs" className=" text-lg font-medium">
            Contact Us
          </NavLink>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-2">
        {/* User Profile and Logout */}
        {user && user?.email ? (
          <div
            className="flex items-center gap-2 relative "
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Hover Effects */}
            {isHovering && (
              <div className="absolute  p-2 w-36 rounded-md shadow-md top-10 left-0 z-10 bg-slate-400">
                <p className="text-sm mb-1">
                  {displayName || "Anonymous User"}
                </p>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm wonder-button text-white  rounded-xl"
                >
                  Log-Out
                </button>
              </div>
            )}

            {/* Profile Image */}
            <img
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white"
              src={profile || "https://via.placeholder.com/150"}
              alt="User Profile"
            />
          </div>
        ) : (
          // Login/Register Links
          <div className="items-center gap-2 lg:flex hidden">
            <NavLink to="/login" className=" btn-sm  wonder-button text-white">
              Login
            </NavLink>
            <NavLink
              to="/registers"
              className=" btn-sm rounded-none  py-1 wonder-button text-white"
            >
              Register
            </NavLink>
          </div>
        )}

        {/* Theme Toggle */}
        <label className="swap swap-rotate ml-2" aria-label="Toggle Dark Mode">
          <input
            type="checkbox"
            className="theme-controller"
            onClick={myFunction}
          />
          {/* Sun Icon */}
          <svg
            className="swap-off h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          {/* Moon Icon */}
          <svg
            className="swap-on h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 right-0 dropBar"
          >
            <NavLink to="/" className="text-lg ">
              Home
            </NavLink>
            <NavLink to="/allMovie" className="text-lg">
              All Movie
            </NavLink>
            <NavLink to="/myFavorite" className="text-lg">
              My Favorites
            </NavLink>
            <NavLink to="/addMovie" className="text-lg">
              Add Movie
            </NavLink>
            <div className="mt-2">
              {user && user?.email ? (
                <NavLink
                  onClick={() => {
                    logOut()
                      .then(() => {
                        toast.success("log out!");
                      })
                      .catch((error) => {
                        toast.error(
                          "An error occurred while logging out. Please try again."
                        );
                      });
                  }}
                  className="btn btn-sm lg:btn-md bg-[#0f9ccf] text-white  rounded-xl"
                >
                  Log-Out
                </NavLink>
              ) : (
                <div>
                  <NavLink
                    to="/login"
                    className="btn btn-sm wonder-button text-white"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="btn btn-sm wonder-button text-white ml-1"
                  >
                    Register
                  </NavLink>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
