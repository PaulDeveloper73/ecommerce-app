import slider from "../assets/e-shop-slide.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full bg-indigo-400 h-[500px] ">
        <img
          src={slider}
          alt="slider"
          className="object-cover object-top w-full h-full "
        />
      </div>
      <div className="absolute right-4 sm:right-12 flex flex-col items-center justify-center top-[40%] text-balance space-y-4 ">
        <h1 className="text-3xl font-bold text-white sm:text-5xl ">
          Welcome to E-Shop
        </h1>
        <p className="text-white">Buy your products from here</p>
        <button className="px-4 py-2 mt-4 text-white transition-all duration-300 ease-in-out bg-indigo-800 rounded-md shadow-md cursor-pointer hover:bg-black ring-1 ring-slate-100 hover:outline-none focus:outline-none">
          Shop Now
          <span>
            <FontAwesomeIcon icon={faShoppingCart} className="ml-2" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
