const MinHeader = ({ title }) => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold text-center text-indigo-900">
        {title}
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
    </div>
  );
};

export default MinHeader;
