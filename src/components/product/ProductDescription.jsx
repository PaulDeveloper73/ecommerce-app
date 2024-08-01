/* eslint-disable react/prop-types */
const ProductDescription = ({ description }) => {
  return (
    <>
      <p className="text-sm font-normal leading-7 first-letter:uppercase text-slate-500">
        {description}
      </p>
    </>
  );
};

export default ProductDescription;
