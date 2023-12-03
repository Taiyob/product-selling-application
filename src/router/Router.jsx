import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Reset from "../pages/Reset/Reset";
import Profile from "../pages/Profile/Profile";
import Users from "../components/Users/Users";
import Brands from "../components/Brands/Brands";
import InputBrand from "../components/InputBrand/InputBrand";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brand-name"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/reset",
        element: <Reset></Reset>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/input-brands",
        element: <InputBrand></InputBrand>,
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
      },
    ],
  },
]);

export default Router;
