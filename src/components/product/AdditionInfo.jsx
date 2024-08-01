/* eslint-disable react/prop-types */
const AdditionInfo = ({ product, discount }) => {
  return (
    <div>
      <h2 className="mb-4 text-xl font-normal text-gray-700 border-b ">
        Product Details:
      </h2>
      <span className="text-md text-slate-700">Product Name: </span>
      <span className="text-sm text-slate-500">{product.title}</span>
      <div className="pt-4"></div>
      <span className="text-md text-slate-700">Product Price: </span>{" "}
      <span className="text-sm text-slate-500">
        {(product.price - discount).toFixed(2)}
      </span>
      <div className="pt-4"></div>
      <span className="text-md text-slate-700">Product Description: </span>
      <span className="text-sm text-slate-500">
        <p className="leading-7">{product.description}</p>
      </span>
      <div className="pt-4"></div>
      <span className="text-md text-slate-700">Product Rating: </span>
      <span className="text-sm text-slate-500">{product.rating.rate}</span>
      <div className="pt-4"></div>
      <span className="text-md text-slate-700">Product Stock: </span>{" "}
      <span className="text-sm text-slate-500">{product.rating.count}</span>
      <div className="pt-4"></div>
    </div>
  );
};

export default AdditionInfo;
