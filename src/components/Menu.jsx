import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="flex items-center justify-between max-w-6xl px-10 mx-auto text-white">
      <div className="flex items-center justify-center space-x-20">
        <h1 className="text-xl font-semibold">
          <Link to={"/"}>E-SHOP</Link>
        </h1>
        <ul className="items-center justify-center hidden space-x-6 text-lg md:flex">
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <span>Shop</span>
          </li>
          <li>
            {" "}
            <Link to={"/about-us"}>About Us</Link>
          </li>
        </ul>
      </div>
      <ul className="items-center justify-center hidden space-x-6 md:flex">
        <li>
          <div className="items-center justify-center hidden space-x-6 md:flex">
            <Link to={"/sign-in"}>
              <button
                type="button"
                className="ring-1 px-6 md:px-4 py-[3px] rounded-md border border-slate-200  bg-indigo-600 hover:ring-offset-1 hover:bg-slate-200 hover:text-indigo-600"
              >
                Sign In
              </button>
            </Link>
            <Link to={"/sign-up"}>
              <button
                type="button"
                className="ring-1 px-6 md:px-4 py-[3px] rounded-md border border-slate-200 hover:ring-offset-1 hover:text-slate-200 hover:bg-indigo-600 "
              >
                Sign Up
              </button>
            </Link>
          </div>
        </li>
        <li>
          <FontAwesomeIcon icon={faSearch} className="cursor-pointer" />
        </li>
      </ul>
      <span className="flex items-center justify-center md:hidden">
        <FontAwesomeIcon icon={faBars} />
      </span>
    </nav>
  );
};

export default Menu;
