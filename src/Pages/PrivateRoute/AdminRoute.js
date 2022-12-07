import React, { useContext } from "react";
import {  Navigate, useLocation} from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";



import useAdmin from "../../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.role);
  const location = useLocation();

  

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
