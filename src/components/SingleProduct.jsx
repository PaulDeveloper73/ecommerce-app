/* eslint-disable react/prop-types */
const SingleProduct = ({ product }) => {
  return (
    <>
      <section className="grid place-content-center sm:flex sm:flex-wrap  sm:justify-center sm:items-center sm:*:w-[45%] sm:space-x-[5%] mt-28 ">
        <div>
          <div className="bg-white p-2">
            <img
              src={product.image}
              className=" w-full h-[450px] object-contain"
              alt="product"
            />
          </div>
        </div>

        <div className="">
          <h1 className="font-medium text-4xl text-slate-600">
            {product.title}
          </h1>
          <div>
            <span>****** Customer Rating</span>
            <span>SKU:SY789001</span>
            <span>In Stock</span>
          </div>
          <div>
            <span>$ 200.90</span>
            <span>$ {product.price.toFixed(2)}</span>
          </div>
          <p>We provide all the best qualities only.</p>
          <div>
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
              className="px-4 py-1 mt-4 text-sm font-normal text-center text-white bg-indigo-500 rounded-full hover:bg-indigo-700"
            >
              Add to Cart
            </button>
          </div>
          <p>
            Did you like this product? Add to favorites now and follow the
            product.
          </p>
          <div>
            <span>
              <img src="#" alt="user" />
            </span>
            <div>
              <p>
                Have a Question? Ask a Specialist
                <span>(+800) 1234 5678 90</span>
                <span> Start Live Chat</span>
              </p>
            </div>
            <div className=" flex flex-col sm:grid sm:grid-cols-2">
              <div>
                <h4>Low Prices</h4>
                <p>Price match guarantee</p>
              </div>
              <div>
                <h4>Guaranteed Fitment.</h4>
                <p>Always the quality products</p>
              </div>
              <div>
                <h4>In-House Experts</h4>
                <p>We know our products</p>
              </div>
              <div>
                <h4>Easy Returns</h4>
                <p>Quick & Hassle Free</p>
              </div>
            </div>
            <div>
              <span>Categories:</span>
              <span>Men's Fashion, Wowens Fashion</span>
            </div>
            <div className="flex space-x-2">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
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
