import React from "react";
import { Link } from "react-router-dom";
import error from "../../src/assets/error.png";
const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 via-blue-200 to-gray-300 text-gray-800">
      <div className="text-center space-y-6">
        <p className="text-2xl font-semibold">Oops! Page Not Found</p>
        <img src={error} alt="" />
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div>
          <Link
            to="/"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg shadow-md transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
