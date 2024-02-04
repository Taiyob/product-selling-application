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
import StaticBrand from "../components/Brands/StaticBrand";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch("https://myapp-88098zwbe-md-oli-ullahs-projects.vercel.app/brandName"),
        loader: () => fetch("https://myapp-tawny-psi.vercel.app/brandName"),
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
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/users",
        element: (
          <PrivateRoute>
            <Users></Users>
          </PrivateRoute>
        ),
        // loader: () => fetch("https://myapp-88098zwbe-md-oli-ullahs-projects.vercel.app/users"),
        loader: () => fetch("https://myapp-tawny-psi.vercel.app/users"),
      },
      {
        path: "/inputBrands",
        element: (
          <PrivateRoute>
            <InputBrand></InputBrand>
          </PrivateRoute>
        ),
      },
      {
        path: "/brands/:id",
        element: (
          <PrivateRoute>
            <Brands></Brands>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const brandResponse = await fetch(
            `https://myapp-tawny-psi.vercel.app/brandName/${params.id}`
          );
          const productResponse = await fetch(
            "https://myapp-tawny-psi.vercel.app/addProducts"
          );

          const brandData = await brandResponse.json();
          const productData = await productResponse.json();

          return { brandData, productData };
        },
      },
      {
        path: "/staticBrandPage",
        element: <StaticBrand></StaticBrand>,
        loader: () => fetch("https://myapp-tawny-psi.vercel.app/addProducts"),
      },
      {
        path: "/addProducts",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

export default Router;
