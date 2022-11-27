import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const DisplayError = () => {
  const { UserSignout } = useContext(AuthContext);
  const error = useRouteError();

  const handleLogout = () => {
    UserSignout()
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div>
      <p className=" text-red-500">Something went Wrong</p>
      <p className=" text-red-500"> {error.statusText || error.message}</p>
      <h4 className="text-3xl">
        Please{" "}
        <button className="font-bold text-xl" onClick={handleLogout}>
          Logout
        </button>{" "}
      </h4>
    </div>
  );
};

export default DisplayError;
