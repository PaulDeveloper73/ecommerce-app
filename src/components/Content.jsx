import shirts from "../assets/shirts.jpg";
import skarts from "../assets/skart.jpg";
const Content = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-2xl font-semibold text-indigo-900">
        Product Categories
      </h1>
      <div className="flex items-center justify-center w-full p-4 mt-4 space-x-6 divide-x-2 divide-indigo-600 bg-slate-200">
        <div className="text-md ps-6">
          <h2 className="px-6 py-2 font-medium bg-indigo-100 shadow-md">
            Women's Fashion
          </h2>
        </div>
        <div className="text-md ps-6">
          <h2 className="px-6 py-2 font-medium bg-indigo-100 rounded-md shadow-md">
            Men's Fashion
          </h2>
        </div>
      </div>

      {/* images */}
      <section className="flex flex-wrap items-center justify-center w-full max-w-5xl p-4 px-20 mt-4 space-x-6 sm:justify-between bg-slate-100">
        <div className="flex-1">
          <p className="p-2 text-sm text-slate-400">New Arrivals</p>
          <div className="text-center">
            <img
              src={shirts}
              alt="shirts"
              className="object-cover object-center w-full max-h-[300px] rounded-md shadow-md"
            />
            <button className="px-4 py-1 mt-4 font-medium text-indigo-500 rounded-md shadow-md ring-1 hover:bg-indigo-500 hover:text-white">
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex-1">
          {" "}
          <p className="p-2 text-sm text-slate-400">New Arrivals</p>
          <div className="text-center">
            <img
              src={skarts}
              alt="shirts"
              className="object-cover object-center w-full rounded-md shadow-md max-h-[300px]"
            />
            <button className="px-4 py-1 mt-4 font-medium text-indigo-500 rounded-md shadow-md ring-1 hover:bg-indigo-500 hover:text-white">
              Shop Now
            </button>
          </div>
        </div>
        {/* <div>
          <p className="text-sm text-slate-400">New Arrivals</p>
          <div>
            <img src={skarts} alt="shirts" className="w-full h-96" />
            <button className="px-4 py-2 mt-4 font-medium text-white bg-indigo-600 rounded-md shadow-md">
              Shop Now
            </button>
          </div>
        </div> */}
      </section>
    </section>
  );
};

export default Content;
