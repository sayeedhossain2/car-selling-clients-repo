import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, UserSignout } = useContext(AuthContext);

  const handleLogout = () => {
    UserSignout()
      .then(() => {})
      .catch((error) => {});
  };

  const menuInfo = (
    <>
      <li>
        {" "}
        <Link to="/">Home</Link>
      </li>
      {/* <Link to="/categorydetails">All product</Link> */}
      <li>
        {" "}
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        {" "}
        <Link to="/addaproduct">Add a Product</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
      ) : (
        <>
          <li>
            {" "}
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            {" "}
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
      <li>{user?.displayName && <Link>{user.displayName}</Link>}</li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuInfo}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Car Selling
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuInfo}</ul>
      </div>
      {/* <label tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label> */}
      <div className="navbar-end">
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
