import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { RingLoader } from "react-spinners";
import useAdmin from "../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <h1 className=" flex justify-center mt-32 items-center">
        <RingLoader color="#36d7b7" />
      </h1>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
