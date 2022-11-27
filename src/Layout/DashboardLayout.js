import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import useSimpleuser from "../hooks/useSimpleuser";
import Footer from "../Shared/Footer/Footer";

import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isUsers] = useSimpleuser(user?.email);

  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content  ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 md:bg-orange-200 md:rounded-xl md:font-bold text-base-content">
            {isUsers && (
              <>
                <li>
                  <Link to="/dashboard/myorders"> My Orders </Link>
                </li>
              </>
            )}

            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/myProduct"> My Products </Link>
                </li>
                <li>
                  <Link to="/dashboard/addaproduct"> Add Products </Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers"> All Users </Link>
                </li>
                <li>
                  <Link to="/dashboard/allsellers"> All Sellers </Link>
                </li>
                <li>
                  <Link to="/dashboard/ReportProduct">Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
