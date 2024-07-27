import { useState } from "react";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

const MinHeader = ({ title }) => {
  const [activeCategory, setActiveCategory] = useState("all"); //all/men/women

  const activeClass =
    "px-6 text-center py-2 font-medium bg-indigo-100 rounded-md shadow-md transition-all duration-200 ease-in-out";
  const activeClassPro =
    " px-6 py-2 font-medium bg-indigo-200 rounded-md shadow-md transition-all duration-200 ease-in-out";
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold text-center text-indigo-900">
        {title}
      </h1>
      <div className="flex items-center justify-center w-full p-4 mt-4 space-x-6 divide-x-2 divide-indigo-600 bg-slate-200">
        <div className="text-md ps-6">
          {}
          <h2
            className={activeCategory === "all" ? activeClassPro : activeClass}
            onClick={() => {
              setActiveCategory("all");
            }}
          >
            <Link to="/products">All</Link>
          </h2>
        </div>
        <div className="text-md ps-6">
          {}
          <h2
            onClick={() => {
              setActiveCategory("women");
            }}
          >
            <Link to={"/products/women's clothing"}>Women's Fashion</Link>
          </h2>
        </div>
        <div className="text-md ps-6">
          <h2
            onClick={() => {
              setActiveCategory("men");
            }}
          >
            <Link to={"/products/men's clothing"}>Men's Fashion</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MinHeader;
