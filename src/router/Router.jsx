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
import AddProducts from "../components/AddProducts/AddProducts";
import Error from "../shared/Error/Error";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "https://myapp-88098zwbe-md-oli-ullahs-projects.vercel.app/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "https://myapp-88098zwbe-md-oli-ullahs-projects.vercel.app/",
        element: <Home></Home>,
        loader: () => fetch("https://myapp-88098zwbe-md-oli-ullahs-projects.vercel.app/brand-name"),
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
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: "/users",
        element: <PrivateRoute><Users></Users></PrivateRoute>,
        loader: () => fetch("https://myapp-88098zwbe-md-oli-ullahs-projects.vercel.app/users"),
      },
      {
        path: "/input-brands",
        element: <PrivateRoute><InputBrand></InputBrand></PrivateRoute>,
      },
      {
        path: "/brands/:id",
        element: <PrivateRoute><Brands></Brands></PrivateRoute>,
        loader: async ({ params }) => {
          const brandResponse = await fetch(`https://myapp-88098zwbe-md-oli-ullahs-projects.vercel.app/brand-name/${params.id}`);
          const productResponse = await fetch("https://myapp-88098zwbe-md-oli-ullahs-projects.vercel.app/add-product");
      
          const brandData = await brandResponse.json();
          const productData = await productResponse.json();
      
          return { brandData, productData };
        },
      },
      {
        path: "/add-products",
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>,
      },
    ],
  },
]);

export default Router;
