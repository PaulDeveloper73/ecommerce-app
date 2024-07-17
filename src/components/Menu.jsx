import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  return (
    <nav className="flex justify-between text-white items-center mx-auto max-w-6xl px-10">
      <div className="flex justify-center items-center space-x-20">
        <h1 className="font-semibold text-xl">E-SHOP</h1>
        <ul className="md:flex hidden  justify-center text-lg items-center space-x-6">
          <li>Products</li>
          <li>Shop</li>
          <li>About Us</li>
        </ul>
      </div>
      <ul className="hidden md:flex justify-center items-center space-x-6">
        <li>
          <div className="hidden md:flex justify-center items-center space-x-6">
            <button
              type="button"
              className="ring-1 px-6 md:px-4 py-[3px] rounded-md border border-slate-200  bg-indigo-600 hover:ring-offset-1 hover:bg-slate-200 hover:text-indigo-600"
            >
              Sign In
            </button>
            <button
              type="button"
              className="ring-1 px-6 md:px-4 py-[3px] rounded-md border border-slate-200 hover:ring-offset-1 hover:text-slate-200 hover:bg-indigo-600 "
            >
              Sign Up
            </button>
          </div>
        </li>
        <li>
          <FontAwesomeIcon icon={faSearch} className="cursor-pointer" />
        </li>
      </ul>
      <span className="md:hidden flex justify-center items-center">
        <FontAwesomeIcon icon={faBars} />
      </span>
    </nav>
  );
};

export default Menu;
