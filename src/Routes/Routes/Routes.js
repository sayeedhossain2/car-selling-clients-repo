import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CategoryAll from "../../Pages/Home/Catagory/CategoryAll";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import SpecificCatagory from "../../Pages/SpecificCatagory/SpecificCatagory";

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
      {
        path: "/categoriall/:id",
        element: <CategoryAll></CategoryAll>,
        loader: ({ params }) => fetch(`catagories.json/${params.id}`),
      },

      {
        path: "*",
        element: <h2>this page is not found 404</h2>,
      },
    ],
  },
]);
