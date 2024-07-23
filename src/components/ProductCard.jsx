import { UseCreateContext } from "./ContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  const { addToCart } = UseCreateContext();

  return (
    <div
      key={product.id}
      className="bg-white p-4 hover:border cursor-pointer hover:border-indigo-500 hover:border-opacity-60 rounded-lg shadow-md m-4 w-[200px] h-[300px] shadow-indigo-200"
    >
      <img
        src={product.image}
        alt={product.title}
        title={product.title}
        className="object-cover w-full h-48 mb-4"
      />
      <h2 className="text-sm font-bold text-center text-slate-700 line-clamp-1 ">
        {product.title}
      </h2>
      <p className="text-sm font-bold text-center text-indigo-500">
        ${product.price}
      </p>
      <div className="text-center">
        <button
          type="button"
          className="px-4 py-1 mt-4 text-sm font-normal text-center text-white bg-indigo-500 rounded-full hover:bg-indigo-700"
          onClick={() =>
            addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
            })
          }
        >
          Add to Cart
        </button>
        <button
          type="button"
          className="px-4 py-1 mt-4 text-sm font-normal text-center text-white bg-indigo-400 rounded-full hover:bg-indigo-700"
        >
          View Cart
          <FontAwesomeIcon icon={faEye} className="ps-2" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
