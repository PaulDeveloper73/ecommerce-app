const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="bg-white p-4 hover:border cursor-pointer hover:border-indigo-500 hover:border-opacity-60 rounded-lg shadow-md m-4 w-[200px] h-[300px]"
    >
      <img
        src={product.image}
        alt={product.title}
        title={product.title}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="font-bold text-slate-700  line-clamp-1 text-sm text-center ">
        {product.title}
      </h2>
      {/* <p className="text-gray-600 text-balance">{product.description}</p> */}
      <p className="text-sm  text-center font-bold text-indigo-500">
        ${product.price}
      </p>
      <div className="text-center">
        <button
          type="button"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-normal py-1 px-4 rounded-full mt-4 text-center text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
