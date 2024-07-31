/* eslint-disable react/prop-types */
const RelatedProducts = ({ category }) => {
  return (
    <div>
      <span className=" text-slate-900">Loading related products for: </span>
      <span className="text-xl ps-4 text-slate-100">{category}</span>
    </div>
  );
};

export default RelatedProducts;
