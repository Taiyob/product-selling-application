import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Reset from "../pages/Reset/Reset";
import Profile from "../pages/Profile/Profile";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/reset',
          element: <Reset></Reset>
        }, 
        {
          path:'/profile',
          element: <Profile></Profile>
        }
      ]
    },
  ]);

export default Router;