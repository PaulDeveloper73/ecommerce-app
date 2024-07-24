import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { UseCreateContext } from "../components/ContextProvider";

const Cart = () => {
  const { cartItems, addItemQty, substractItemQty, removeFromCart, clearCart } =
    UseCreateContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!Array.isArray(cartItems.items)) {
    console.error("cartItems.items is not an array", cartItems.items);
    return null; // or you can render a message indicating the issue
  }
  return (
    <>
      <section className="w-full h-4 bg-slate-200"> </section>
      <section className="flex flex-wrap items-center justify-center gap-6 p-4 lg:p-20 group">
        <div className="lg:w-[60%] w-full rounded-lg ">
          <p className="p-4 text-center text-green-600 animate-pulse">
            Cart is updated
            <span className="ps-2">
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </p>
          <section className="h-[350px] overflow-y-auto px-2">
            <table className="table w-full border-collapse border-none table-auto lg:table-fixed border-spacing-2 border-slate-200">
              <thead>
                <tr className="text-center border-b border-slate-200">
                  <th className="p-4 font-light text-slate-400">#</th>
                  <th className="p-4 font-light text-slate-400">Product</th>
                  <th className="p-4 font-light text-slate-400">Quantity</th>
                  <th className="hidden p-4 font-light sm:inline-block text-slate-400">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.items.length > 0 ? (
                  cartItems.items.map((item) => {
                    return (
                      <tr
                        key={item.id}
                        className="text-center even:bg-slate-100 hover:bg-indigo-50  hover: cursor-pointer hover:border-b hover:border-indigo-200 odd:bg-salte-50 border-b *:text-slate-700 *:font-light border-slate-200"
                      >
                        <td className="relative ">
                          <img
                            src={item.image}
                            alt=""
                            className="w-10 h-10 mx-auto"
                          />
                          <span
                            className="absolute cursor-pointer left-14 -top-1"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <FontAwesomeIcon
                              icon={faClose}
                              className="text-red-400 hover:p-[2px] rounded-md hover:bg-red-400 hover:text-slate-100 size-3"
                            />
                          </span>
                        </td>
                        <td className="p-4 ">
                          <p className="line-clamp-1">{item.title}</p>
                        </td>
                        <td className="p-4">
                          <div>
                            <button
                              className="px-2 border rounded-md  hover:bg-indigo-400 hover:text-slate-100 border-slate-300"
                              onClick={() => substractItemQty(item.id)}
                            >
                              -
                            </button>
                            <span className="px-2">{item.quantity}</span>
                            <button
                              className="px-2 border rounded-md  hover:bg-indigo-400 hover:text-slate-100 border-slate-300"
                              onClick={() => addItemQty(item.id)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="hidden p-4 space-x-2 sm:inline-block">
                          <span>
                            $ {(item.price * item.quantity).toFixed(2)}{" "}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td className="p-4 text-center " colSpan={4}>
                      No items in cart
                    </td>
                  </tr>
                )}

                {/* add product and price */}
              </tbody>
            </table>
          </section>
          <section className="flex flex-wrap justify-between p-4 gap-y-4 gap-x-2">
            <div className="flex items-center justify-between w-full space-x-2 sm:w-auto">
              <input
                type="text"
                name="coupon"
                id="coupon"
                className="flex-1 px-4 py-1 rounded-md sm:flex-none focus:shadow-md focus:ring-2 focus:outline-none border-non ring-1 ring-indigo-200"
              />
              <label
                htmlFor="coupon"
                className="px-4 py-2 text-sm bg-gray-200 rounded-md cursor-pointer sm:px-6 hover:bg-slate-300"
              >
                Apply Coupon
              </label>
            </div>
            <div className="flex-1 sm:flex-none">
              <button
                type="button"
                className="w-full px-6 py-2 text-sm bg-gray-200 rounded-md cursor-pointer lg- hover:bg-slate-300"
                onClick={() => clearCart()}
              >
                Remove All
              </button>
            </div>
          </section>
        </div>
        <div className="w-full  p-4 mt-10 lg:w-[30%] border rounded-md shadow-sm shadow-indigo-300  group-has-[:hover]:bg-slate-50  group-has[:hover]:shadow-md">
          <p className="p-4 font-bold text-slate-700">CART TOTALS</p>
          <div className="space-y-10 divide-y-2 divide-slate-100">
            <p className="flex items-center justify-between pt-8 border-t">
              <span className="text-sm font-extralight">Total</span>
              <span className="font-light">
                $ {cartItems.totalPrice.toFixed(2)}
              </span>
            </p>
            <p className="flex items-center justify-between pt-8 ">
              <span className="text-sm font-semibold">Subtotal</span>
              <span className="text-xl font-bold text-slate-700">
                $ {cartItems.totalPrice.toFixed(2)}
              </span>
            </p>
            <div className="border"></div>
            <button
              type="button"
              className="w-full py-3 text-lg text-white bg-indigo-500 border-none rounded-md shadow-md hover:bg-indigo-700 focus:outline-none hover:ring-1 hover:ring-offset-4 hover:ring-indigo-500"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
