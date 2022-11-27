import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../ErrorPage/ErrorPage";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import AllSellers from "../../Pages/AllSellers/AllSellers";
import AllUsers from "../../Pages/AllUsers/AllUsers";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import CategoryAll from "../../Pages/Home/Catagory/CategoryAll";
import CategoryDetails from "../../Pages/Home/Catagory/CategoryDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import MyProduct from "../../Pages/MyProduct/MyProduct";
import ReportProduct from "../../Pages/ReportProduct/ReportProduct";
import Signup from "../../Pages/Signup/Signup";
import SpecificCatagory from "../../Pages/SpecificCatagory/SpecificCatagory";
import AdminRoute from "../AdminRoutes/AdminRoutes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/specificcatagory",
        element: <SpecificCatagory></SpecificCatagory>,
      },
      // {
      //   path: "/addaproduct",
      //   element: <AddProduct></AddProduct>,
      // },
      // {
      //   path: "/categorydetails",
      //   element: <CategoryDetails></CategoryDetails>,
      // },
      {
        path: "/categoriall/:id",
        element: (
          <PrivateRoute>
            <CategoryAll></CategoryAll>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allProducts/${params.id}`),
      },

      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/addaproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/myProduct",
        element: <MyProduct></MyProduct>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/ReportProduct",
        element: (
          <AdminRoute>
            <ReportProduct></ReportProduct>
          </AdminRoute>
        ),
      },
    ],
  },
]);
