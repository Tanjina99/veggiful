import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component, ...rest }) => {
  const token = localStorage.getItem("myToken");

  if (!rest.public && !token) {
    return <Navigate to="/login" />;
  }

  return component;
};

export default PrivateRoute;
