const ProductDescription = ({ description }) => {
  return (
    <>
      <p className="text-sm font-normal leading-7 first-letter:uppercase text-balance text-slate-500">
        {description}
      </p>
    </>
  );
};

export default ProductDescription;
