import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";

import "react-loading-skeleton/dist/skeleton.css";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};
export default PrivateRoutes;
