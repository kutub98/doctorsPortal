import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../../cloned/src/Components/Loading/Loading";
import { authContext } from "../../../../cloned/src/Context/AuthContext/AuthContext";

import useAdmin from "../../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.role);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <h1>Hello Loading...</h1>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
