import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { RingLoader } from "react-spinners";

import useSimpleuser from "../../hooks/useSimpleuser";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isUsers, isUsersLoading] = useSimpleuser(user?.email);
  const location = useLocation();

  if (loading || isUsersLoading) {
    return (
      <h1 className=" flex justify-center mt-32 items-center">
        <RingLoader color="#36d7b7" />
      </h1>
    );
  }

  if (user && isUsers) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellerRoute;
