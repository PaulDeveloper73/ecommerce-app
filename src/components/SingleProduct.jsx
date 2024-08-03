import shirt from "../assets/shirts.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStarHalf,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ContactPerson from "./ContactPerson";
import RelatedProducts from "../../RelatedProducts";
import { useState } from "react";
import ProductDescription from "./product/ProductDescription";
import ProductReviews from "./product/ProductReviews";
import AdditionInfo from "./product/AdditionInfo";
import { Link } from "react-router-dom";
import { UseCreateContext } from "./ContextProvider";

/* eslint-disable react/prop-types */
const SingleProduct = ({ product }) => {
  const [isActive, setIsActive] = useState("description");
  //description/reviews/moreinfo
  const { addToCart } = UseCreateContext();

  const [qty, setQty] = useState(1);
  const handleQtyIncrease = () => {
    setQty(qty + 1);
  };
  const handleQtyDecrease = () => {
    if (qty <= 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  };
  const stars = [];
  const discount = product.price * 0.4;
  const activeClass =
    "px-3 py-2  bg-white border-t-2 shadow-md border-indigo-300 text-slate-800 cursor-pointer smpx-6 rounded-t-md text-md";
  const inActiveClass = "hover:bg-indigo-100 px-3 py-2 cursor-pointer text-md";
  let data = "";

  switch (isActive) {
    case "description":
      data = <ProductDescription description={product.description} />;

      break;
    case "moreinfo":
      data = <AdditionInfo product={product} discount={discount} />;

      break;
    case "reviews":
      data = <ProductReviews title={product.title} />;

      break;

    default:
      break;
  }

  for (let i = 0; i < 5; i++) {
    if (i === 4) {
      stars.push(
        <FontAwesomeIcon
          className="text-yellow-400"
          key={i}
          icon={faStarHalf}
        />
      );
    } else {
      stars.push(
        <FontAwesomeIcon className="text-yellow-400" key={i} icon={faStar} />
      );
    }
  }

  console.log(product);
  return (
    <>
      <section className="grid place-content-center sm:flex sm:flex-wrap  sm:justify-center sm:items-start sm:*:w-[45%] sm:space-x-[5%] mt-28 ">
        <div>
          <div className="p-2 bg-white">
            <img
              src={product.image}
              className=" w-full h-[450px] object-contain"
              alt="product"
            />
          </div>
          <section className="relative flex items-center justify-center gap-4 py-4 overflow-x-auto flex-nowrap snap-x snap-proximity">
            <div className="flex space-x-4 flex-nowrap">
              <img
                className="w-24 snap-center"
                src={shirt}
                alt="Product Gallery"
              />
              <img
                className="w-24 snap-center"
                src={shirt}
                alt="Product Gallery"
              />
              <img
                className="w-24 snap-center"
                src={shirt}
                alt="Product Gallery"
              />
              <img
                className="w-24 snap-center"
                src={shirt}
                alt="Product Gallery"
              />
              <img
                className="w-24 snap-center"
                src={shirt}
                alt="Product Gallery"
              />
            </div>
          </section>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-medium text-slate-600 sm:line-clamp-3 line-clamp-5">
            {product.title}
          </h1>
          <div className="space-x-4 divide-x divide-indigo-300">
            <span>
              <span>{stars}</span>
              <span className="text-sm font-bold text-slate-600">
                Customer Rating
              </span>
            </span>
            <span className="text-xs font-light ps-2 text-slate-400">
              SKU:SY789001
            </span>
            <span className="p-1 text-xs text-green-600 bg-green-200 rounded-md ps-2 hover:bg-green-300 hover:cursor-pointer">
              In Stock
            </span>
          </div>
          <div className="space-x-6">
            <span className="text-xl font-normal line-through text-slate-400 ">
              $ {product.price.toFixed(2)}
            </span>
            <span className="text-3xl font-bold text-indigo-600 ">
              $ {(product.price - discount).toFixed(2)}
            </span>
          </div>
          <p className="font-normal text-slate-600 text-md">
            We provide all the best qualities only.
          </p>
          <div className="space-x-4">
            <span>
              <button
                className="px-2 border rounded-md hover:bg-indigo-400 hover:text-slate-100 border-slate-300"
                onClick={handleQtyDecrease}
              >
                -
              </button>
              <span className="px-2">{qty}</span>
              <button
                className="px-2 border rounded-md hover:bg-indigo-400 hover:text-slate-100 border-slate-300"
                onClick={handleQtyIncrease}
              >
                +
              </button>
            </span>
            <button
              type="button"
              className="px-8 py-2 mt-4 text-sm font-normal text-center text-white bg-indigo-500 rounded-full focus:outline-none hover:ring-1 hover:ring-offset-4 hover:ring-offset-indigo-100 hover:bg-indigo-700"
              onClick={() => {
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                  quantity: qty,
                });
                setQty(1);
              }}
            >
              Add to Cart
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-slate-600 text-balance">
              Did you like this product? Add to favorites now and follow the
              product.
            </span>
            <span className="">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-red-500 hover:ring-1 hover:ring-offset-4 hover:ring-offset-red-100 hover:cursor-pointer active:ring-offset-red-600"
              />
            </span>
          </div>
          <ContactPerson />
          <div>
            <span className="text-xs text-slate-400">Categories: </span>
            <Link to={`/products/${product.category}`}>
              <span className="text-sm capitalize text-slate-800">
                {product.category}
              </span>
            </Link>
          </div>
          <div className="flex space-x-2">
            <a href="#">
              <span>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="cursor-pointer text-slate-500 hover:text-indigo-500 size-4"
                />
              </span>
            </a>
            <a href="#">
              <span>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="cursor-pointer text-slate-500 hover:text-indigo-500 size-4"
                />
              </span>
            </a>
            <a href="#">
              <span>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="cursor-pointer text-slate-500 hover:text-indigo-500 size-4"
                />
              </span>
            </a>
            <a href="#">
              <span>
                <FontAwesomeIcon
                  icon={faPinterest}
                  className="cursor-pointer text-slate-500 hover:text-indigo-500 size-4"
                />
              </span>
            </a>
            <a href="#">
              <span>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="cursor-pointer text-slate-500 hover:text-indigo-500 size-4"
                />
              </span>
            </a>
            <a href="#">
              <span>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="cursor-pointer text-slate-500 hover:text-indigo-500 size-4"
                />
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="p-4 py-16 mt-10 shadow-sm sm:p-10">
        <div className="flex *:text-center space-x-1 border-b border-gray-200 rounded-md sm:space-x-2 ">
          <span
            className={isActive === "description" ? activeClass : inActiveClass}
            onClick={() => setIsActive("description")}
          >
            Description
          </span>
          <span
            className={isActive === "moreinfo" ? activeClass : inActiveClass}
            onClick={() => setIsActive("moreinfo")}
          >
            Additional Information
          </span>
          <span
            className={isActive === "reviews" ? activeClass : inActiveClass}
            onClick={() => setIsActive("reviews")}
          >
            Reviews(2)
          </span>
        </div>
        <div className="w-full px-4 py-10 bg-white border-b border-gray-200 sm:px-8">
          {data}
        </div>
      </section>
      <div className="mt-10"></div>
      <RelatedProducts category={product.category} />
    </>
  );
};

export default SingleProduct;
