import { lazy } from "react";

const Notfound = lazy(() => import("../pages/Notfound"));
const Dashboad = lazy(() => import("../pages/Dashboad"));
const Products = lazy(() => import("../pages/Products"));
const Cart = lazy(() => import("../pages/Cart"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const SignUp = lazy(() => import("../pages/SignUp"));
const SignIn = lazy(() => import("../pages/SignIn"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));

const AppRoute = [
  { path: "/", component: Dashboad, requireAuth: false },
  {
    path: "/products/:productcategory?",
    component: Products,
    requireAuth: false,
  },
  {
    path: "/products/product-details/:id?",
    component: ProductDetails,
    requireAuth: false,
  },
  {
    path: "/products/cart",
    component: Cart,
    requireAuth: false,
  },
  { path: "/about-us", component: AboutUs, requireAuth: false },
  { path: "/sign-up", component: SignUp, requireAuth: false },
  { path: "/sign-in", component: SignIn, requireAuth: false },
  { path: "*", component: Notfound, requireAuth: false },
];

export default AppRoute;
