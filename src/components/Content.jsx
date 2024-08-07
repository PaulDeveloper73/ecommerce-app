import { Link } from "react-router-dom";
import shirts from "../assets/shirts.jpg";
import skarts from "../assets/skart.jpg";
import MinHeader from "./MinHeader";
import { UseCreateContext } from "./ContextProvider";

const Content = () => {
  const { categoryRef } = UseCreateContext();

  return (
    <section
      ref={categoryRef}
      className="flex flex-col items-center justify-center mt-10"
    >
      <MinHeader title={"Product Categories"} />
      {/* images */}
      <section className="flex flex-wrap items-center justify-center w-full max-w-5xl p-4 px-20 mt-4 space-x-6 sm:justify-between bg-slate-100">
        <div className="flex-1">
          <p className="p-2 text-sm text-slate-400">New Arrivals</p>
          <div className="text-center">
            <Link to={"/products/men's clothing"}>
              <img
                src={shirts}
                alt="shirts"
                className="object-cover object-center w-full max-h-[300px] rounded-md shadow-md"
              />
            </Link>
            <Link to={"/products/men's clothing"}>
              <button className="px-4 py-1 mt-4 font-medium text-indigo-500 rounded-md shadow-md ring-1 hover:bg-indigo-500 hover:text-white">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <p className="p-2 text-sm text-slate-400">New Arrivals</p>
          <div className="text-center">
            <Link to={"/products/women's clothing"}>
              <img
                src={skarts}
                alt="shirts"
                className="object-cover object-center w-full rounded-md shadow-md max-h-[300px]"
              />
            </Link>
            <Link to={"/products/women's clothing"}>
              <button className="px-4 py-1 mt-4 font-medium text-indigo-500 rounded-md shadow-md ring-1 hover:bg-indigo-500 hover:text-white">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Content;
