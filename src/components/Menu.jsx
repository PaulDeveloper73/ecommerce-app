import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  return (
    <nav className="flex items-center justify-between max-w-6xl px-10 mx-auto text-white">
      <div className="flex items-center justify-center space-x-20">
        <h1 className="text-xl font-semibold">E-SHOP</h1>
        <ul className="items-center justify-center hidden space-x-6 text-lg md:flex">
          <li>Products</li>
          <li>Shop</li>
          <li>About Us</li>
        </ul>
      </div>
      <ul className="items-center justify-center hidden space-x-6 md:flex">
        <li>
          <div className="items-center justify-center hidden space-x-6 md:flex">
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
      <span className="flex items-center justify-center md:hidden">
        <FontAwesomeIcon icon={faBars} />
      </span>
    </nav>
  );
};

export default Menu;
