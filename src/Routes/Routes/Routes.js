import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../ErrorPage/ErrorPage";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import CategoryAll from "../../Pages/Home/Catagory/CategoryAll";
import CategoryDetails from "../../Pages/Home/Catagory/CategoryDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import Signup from "../../Pages/Signup/Signup";
import SpecificCatagory from "../../Pages/SpecificCatagory/SpecificCatagory";
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
    ],
  },
]);
