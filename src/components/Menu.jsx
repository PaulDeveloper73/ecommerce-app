import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { UseCreateContext } from "./ContextProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Menu = () => {
  const { categoryRef } = UseCreateContext();
  const navigate = useNavigate();
  const location = useLocation();
  const handleScrollTocategory = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
    } else {
      navigate("/");
      setTimeout(() => {
        categoryRef.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };
  const handleClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
    }
  };

  return (
    <nav className="flex items-center justify-between max-w-6xl px-10 mx-auto text-white">
      <div className="flex items-center justify-center space-x-20">
        <h1 className="text-xl font-semibold">
          <Link to={"/"} onClick={(e) => handleClick(e, "/")}>
            E-SHOP
          </Link>
        </h1>
        <ul className="items-center justify-center hidden space-x-6 text-lg lg:flex">
          <li>
            <Link to="/products" onClick={(e) => handleClick(e, "/products")}>
              Products
            </Link>
          </li>
          <li
            onClick={(e) => handleScrollTocategory(e)}
            className="cursor-pointer"
          >
            Shop
          </li>
          <li>
            <Link to={"/about-us"} onClick={(e) => handleClick(e, "/about-us")}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <ul className="items-center justify-center hidden space-x-6 lg:flex">
        <li>
          <div className="items-center justify-center hidden space-x-6 lg:flex">
            <Link to={"/sign-in"} onClick={(e) => handleClick(e, "/sign-in")}>
              <button
                type="button"
                className="ring-1 px-6 lg:px-4 py-[3px] rounded-md border border-slate-200  bg-indigo-600 hover:ring-offset-1 hover:bg-slate-200 hover:text-indigo-600"
              >
                Sign In
              </button>
            </Link>
            <Link to={"/sign-up"} onClick={(e) => handleClick(e, "/sign-up")}>
              <button
                type="button"
                className="ring-1 px-6 lg:px-4 py-[3px] rounded-md border border-slate-200 hover:ring-offset-1 hover:text-slate-200 hover:bg-indigo-600 "
              >
                Sign Up
              </button>
            </Link>
          </div>
        </li>
        <li>
          <FontAwesomeIcon icon={faSearch} className="cursor-pointer" />
        </li>
        <li className="relative">
          <Link
            to={"/products/cart"}
            onClick={(e) => handleClick(e, "/products/cart")}
          >
            <span className="absolute text-xs bg-red-500 rounded-full shadow-md -top-2 -right-3 animate-pulse size-4 ps-1">
              7
            </span>
            <FontAwesomeIcon icon={faCartPlus} className="cursor-pointer" />
          </Link>
        </li>
      </ul>
      <span className="flex items-center justify-center lg:hidden">
        <FontAwesomeIcon icon={faBars} />
      </span>
    </nav>
  );
};

export default Menu;
