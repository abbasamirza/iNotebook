import React from "react";
import { isUserLoggedIn } from "../utils/utils";
import { Navigate } from "react-router";
import path from "../constants/paths";

const ProtectedPaths = ({ element }) => {
  return isUserLoggedIn() ? element : <Navigate to={path.home} />;
};

export default ProtectedPaths;
