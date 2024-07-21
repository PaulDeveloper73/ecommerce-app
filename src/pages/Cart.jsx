import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <section className="lg:flex justify-between px-20 py-20 bg-slate-200 items-start">
      <div className="lg:w-[70%]">
        <p className="text-green-600 animate-pulse">
          Cart is updated
          <span className="ps-2">
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </p>

        <table className="border-separate table-auto w-full  border-spacing-2 border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600">#</th>
              <th className="border border-slate-600">Product</th>
              <th className="border border-slate-600">Quantity</th>
              <th className="border border-slate-600">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="*:border border-slate-600">
              <td>#</td>
              <td>Product</td>
              <td>Quantity</td>
              <td>Total</td>
            </tr>{" "}
            {/* add product and price */}
          </tbody>
        </table>
      </div>
      <div className="lg:w-[30%] h-20 bg-indigo-400">cart summary</div>
    </section>
  );
};

export default Cart;
