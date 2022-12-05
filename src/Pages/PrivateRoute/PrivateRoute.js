import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
    const location = useLocation()

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
        </div>
      </>
    );
  }
  if (user) {
    return children
  }
  return <Navigate to="/Login" state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;
