import { useState } from "react";
const MinHeader = ({
  title,

  handleCategory = null,
  category = null,
}) => {
  const [activeCategory, setActiveCategory] = useState("all"); //all/men/women

  const activeClass =
    "px-6 py-2 font-medium bg-indigo-100 rounded-md shadow-md transition-all duration-200 ease-in-out";
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
              handleCategory("all");
              setActiveCategory("all");
            }}
          >
            All
          </h2>
        </div>
        <div className="text-md ps-6">
          {}
          <h2
            className={
              activeCategory === "women" ? activeClassPro : activeClass
            }
            onClick={() => {
              handleCategory(category.women);
              setActiveCategory("women");
            }}
          >
            Women's Fashion
          </h2>
        </div>
        <div className="text-md ps-6">
          <h2
            className={activeCategory === "men" ? activeClassPro : activeClass}
            onClick={() => {
              handleCategory(category.men);
              setActiveCategory("men");
            }}
          >
            Men's Fashion
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MinHeader;
