import { lazy } from "react";

const Notfound = lazy(() => import("../pages/Notfound"));
const Dashboad = lazy(() => import("../pages/Dashboad"));
const Products = lazy(() => import("../pages/Products"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Shop = lazy(() => import("../pages/Shop"));
const SignUp = lazy(() => import("../pages/SignUp"));
const SignIn = lazy(() => import("../pages/SignIn"));

const AppRoute = [
  { path: "/", element: <Dashboad />, requireAuth: false },
  { path: "/products", element: <Products />, requireAuth: false },
  { path: "/shop", element: <Shop />, requireAuth: false },
  { path: "/about-us", element: <AboutUs />, requireAuth: false },
  { path: "/sign-up", element: <SignUp />, requireAuth: false },
  { path: "/sign-in", element: <SignIn />, requireAuth: false },
  { path: "*", element: <Notfound />, requireAuth: false },
];

export default AppRoute;
