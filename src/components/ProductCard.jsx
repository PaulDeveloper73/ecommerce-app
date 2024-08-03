import { UseCreateContext } from "./ContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  const { addToCart } = UseCreateContext();
  const discount = product.price * 0.4;

  return (
    <div
      key={product.id}
      className="bg-white p-2  group hover:border cursor-pointer hover:border-indigo-500 hover:border-opacity-60 rounded-lg shadow-md w-full  sm:w-[200px] h-[340px] shadow-indigo-200 "
    >
      <Link to={`/products/product-details/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          title={product.title}
          className="object-cover w-full h-48 mb-4"
        />
      </Link>
      <Link to={`/products/product-details/${product.id}`}>
        <h2 className="text-sm font-normal text-center text-slate-500 line-clamp-1 ">
          {product.title}
        </h2>
      </Link>
      <p className="pt-2 text-lg font-bold text-center text-indigo-500">
        $ {(product.price - discount).toFixed(2)}
      </p>
      <p className="text-sm font-light text-center line-through text-slate-400">
        $ {product.price}
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
              quantity: 1,
            })
          }
        >
          Add to Cart
        </button>
        <Link to={`/products/cart`}>
          <button
            type="button"
            className=" hidden px-4 pt-[6px] pb-[3px] group-has-[:hover]:inline-flex mt-4 text-sm font-normal text-center ring-1 focus:outline-none focus:border-none text-indigo-700 rounded-full hover:bg-indigo-700 hover:text-slate-100"
          >
            View Cart
            <FontAwesomeIcon icon={faEye} className="ps-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
