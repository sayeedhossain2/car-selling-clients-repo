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
        <Link className="font-bold text-xl" to="/">
          Home
        </Link>
      </li>
      <li>
        {" "}
        <Link className="font-bold text-xl" to="/blog">
          Blog
        </Link>
      </li>

      <li>
        {" "}
        <Link className="font-bold text-xl" to="/dashboard">
          Dashboard
        </Link>
      </li>

      {user?.email ? (
        <>
          <li>
            <button className="font-bold text-xl" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            {" "}
            <Link className="font-bold text-xl" to="/signup">
              SignUp
            </Link>
          </li>
          <li>
            {" "}
            <Link className="font-bold text-xl" to="/login">
              Login
            </Link>
          </li>
        </>
      )}
      {/* <li>
        {user?.displayName && (
          <button className="btn btn-outline btn-secondary rounded-xl md:mt-1">
            {user.displayName}
          </button>
        )}
      </li> */}
    </>
  );

  return (
    <div className="navbar bg-base-100  ">
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
        <Link
          to="/"
          className="btn btn-outline btn-warning normal-case text-2xl"
        >
          Car Selling
        </Link>
      </div>
      <div className="  navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuInfo}</ul>
      </div>

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

      {/* <li className="navbar-end  hidden lg:block">
        {user?.displayName && (
          <button className="btn btn-outline btn-secondary rounded-xl md:mt-1">
            {user.displayName}
          </button>
        )}
      </li> */}
    </div>
  );
};

export default Navbar;
