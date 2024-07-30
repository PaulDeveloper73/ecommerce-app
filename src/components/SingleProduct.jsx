import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStarHalf,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import {
  faForward,
  faShare,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faDollar, faCheck } from "@fortawesome/free-solid-svg-icons";
import DeveloperPic from "../assets/Kisakye-Paul-Developer.png";
/* eslint-disable react/prop-types */
const SingleProduct = ({ product }) => {
  const stars = [];
  const discount = product.price * 0.4;

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
  return (
    <>
      <section className="grid place-content-center sm:flex sm:flex-wrap  sm:justify-center sm:items-start sm:*:w-[45%] sm:space-x-[5%] mt-28 ">
        <div>
          <div className="bg-white p-2">
            <img
              src={product.image}
              className=" w-full h-[450px] object-contain"
              alt="product"
            />
          </div>
          <section>
            <p className="text-center">Image Slider</p>
          </section>
        </div>

        <div className="space-y-4">
          <h1 className="font-medium text-4xl text-slate-600 sm:line-clamp-3 line-clamp-5">
            {product.title}
          </h1>
          <div className="space-x-4 divide-x divide-indigo-300">
            <span>
              <span>{stars}</span>
              <span className="font-bold text-sm text-slate-600">
                Customer Rating
              </span>
            </span>
            <span className="ps-2 text-xs font-light text-slate-400">
              SKU:SY789001
            </span>
            <span className="ps-2 text-xs text-green-600 hover:bg-green-300 hover:cursor-pointer bg-green-200 p-1 rounded-md">
              In Stock
            </span>
          </div>
          <div className="space-x-6">
            <span className="text-xl  font-normal text-slate-400 line-through ">
              $ {(product.price - discount).toFixed(2)}
            </span>
            <span className="text-3xl font-bold text-indigo-600 ">
              $ {product.price.toFixed(2)}
            </span>
          </div>
          <p className="text-slate-600 text-md font-normal">
            We provide all the best qualities only.
          </p>
          <div className="space-x-4">
            <span>
              <button className="px-2 border rounded-md hover:bg-indigo-400 hover:text-slate-100 border-slate-300">
                -
              </button>
              <span className="px-2">4</span>
              <button className="px-2 border rounded-md hover:bg-indigo-400 hover:text-slate-100 border-slate-300">
                +
              </button>
            </span>
            <button
              type="button"
              className="px-8 py-2 mt-4 text-sm font-normal text-center text-white bg-indigo-500 rounded-full focus:outline-none hover:ring-1 hover:ring-offset-4 hover:ring-offset-indigo-100 hover:bg-indigo-700"
            >
              Add to Cart
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-600 text-sm font-light text-balance">
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
          <div className="flex justify-start items-center space-x-6 ">
            <span>
              <img
                src={DeveloperPic}
                alt="user"
                className="size-16 rounded-full"
              />
            </span>
            <span>
              <p className="text-slate-500 font-light text-sm">
                Have a Question? Ask a Specialist
              </p>
              <a href="tel:+256774185964">
                <span className="font-semibold text-slate-600">
                  (+256) 774 185 964
                </span>
              </a>
              <a href="tel:+256774185964">
                <span className="ps-2 ms-4 text-sm text-blue-600 hover:bg-blue-100 hover:cursor-pointer  p-1 rounded-md">
                  <FontAwesomeIcon icon={faPhone} className="pe-2" />
                  Start Live Chat
                </span>
              </a>
            </span>
          </div>
          <div className=" flex flex-col sm:grid sm:gap-y-2 sm:grid-cols-2">
            <div className="flex space-x-4 justify-start items-center">
              <span className="border p-4 py-2 rounded-full hover:bg-slate-200 cursor-pointer">
                <FontAwesomeIcon icon={faDollar} className="text-slate-600" />
              </span>
              <span>
                <h4 className="text-xs font-bold text-slate-600">Low Prices</h4>
                <p className="text-slate-600 text-[13px] font-light text-balance">
                  Price match guarantee
                </p>
              </span>
            </div>
            <div className="flex space-x-4  justify-start items-center">
              <span className="border p-3 py-2 rounded-full hover:bg-slate-200 cursor-pointer">
                <FontAwesomeIcon icon={faCheck} className="text-slate-600" />
              </span>
              <span>
                <h4 className="text-xs font-bold text-slate-600">
                  Guaranteed Fitment
                </h4>
                <p className="text-slate-600 text-[13px] font-light text-balance">
                  Always the quality products
                </p>
              </span>
            </div>
            <div className="flex space-x-4 justify-start items-center">
              <span className="border p-3 py-2 rounded-full hover:bg-slate-200 cursor-pointer">
                <FontAwesomeIcon
                  icon={faHeadphones}
                  className="text-slate-600"
                />
              </span>
              <span>
                <h4 className="text-xs font-bold text-slate-600">
                  In-House Experts
                </h4>
                <p className="text-slate-600 text-[13px] font-light text-balance">
                  We know our products
                </p>
              </span>
            </div>
            <div className="flex space-x-4 justify-start items-center">
              <span className="border hover:bg-slate-200 cursor-pointer p-3 py-2 rounded-full">
                <FontAwesomeIcon icon={faShare} className="text-slate-600" />
              </span>
              <span>
                <h4 className="text-xs font-bold text-slate-600">
                  Easy Returns
                </h4>
                <p className="text-slate-600 text-[13px] font-light text-balance">
                  Quick & Hassle Free
                </p>
              </span>
            </div>
          </div>
          <div>
            <span className="text-slate-400 text-sm">Categories: </span>
            <a href="#">
              <span className="text-slate-800 text-sm">
                Men's Fashion, Wowens Fashion
              </span>
            </a>
          </div>
          <div className="flex space-x-2">
            <a href="#">
              <span>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-indigo-400 size-6 cursor-pointer"
                />
              </span>
            </a>
            <a href="#">
              <span>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-indigo-400 size-6 cursor-pointer"
                />
              </span>
            </a>
            <a href="#">
              <span>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-indigo-400 size-6 cursor-pointer"
                />
              </span>
            </a>
            <a href="#">
              <span>
                <FontAwesomeIcon
                  icon={faPinterest}
                  className="text-indigo-400 size-6 cursor-pointer"
                />
              </span>
            </a>
            <a href="#">
              <span>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-indigo-400 size-6 cursor-pointer"
                />
              </span>
            </a>
            <a href="#">
              <span>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-indigo-400 size-6 cursor-pointer"
                />
              </span>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="flex space-x-10">
          <span>Description</span>
          <span>Additional Information</span>
          <span>Reviews(2)</span>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
