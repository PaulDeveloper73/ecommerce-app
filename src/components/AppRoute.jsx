import { lazy } from "react";
import Notfound from "../pages/Notfound";
import Dashboad from "../pages/Dashboad";
import Products from "../pages/Products";
import AboutUs from "../pages/AboutUs";

const AppRoute = [
  { path: "/", element: <Dashboad />, requireAuth: false },
  { path: "/products", element: <Products />, requireAuth: false },
  { path: "/shop", element: <shop />, requireAuth: false },
  { path: "/about-us", element: <AboutUs />, requireAuth: false },
  { path: "*", element: <Notfound />, requireAuth: false },
];

export default AppRoute;
