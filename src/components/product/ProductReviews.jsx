const ProductReviews = ({ title }) => {
  return (
    <section className="space-y-6">
      <h4 className="p-2 text-xl font-bold text-slate-700 ">
        <span className="pe-2">{2}</span>
        <span>{`Reviews for ${title}`}</span>
      </h4>
      <section className="flex items-center justify-start space-x-4">
        <div>
          <img
            src="/user.png"
            alt="customer"
            className="rounded-full size-10"
          />
        </div>
        <div className="flex flex-col items-start justify-start ">
          <span className="text-yellow-400 ">****</span>
          <span className="text-sm font-medium">
            {"Admin"}
            <span className="text-xs font-light text-slate-500 ps-1">
              - August 1, 2024
            </span>
          </span>
          <span className="pt-2 text-sm text-slate-700">
            Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor.
          </span>
        </div>
      </section>

      <section className="">
        <h5 className="pb-2 text-lg font-normal border-b border-slate-300 text-slate-700">
          Add Review
        </h5>
        <p className="pt-4 text-sm text-slate-700">
          Your email address will not be published. Required fields are marked *
        </p>
        <p className="pt-4 text-sm text-slate-700">Choose Your rating</p>
        <p className="flex space-x-4 mt-2 *:text-2xl divide-x *:ps-2">
          <span className="cursor-pointer hover:text-indigo-600 active:text-yellow-400 text-slate-400">
            *
          </span>
          <span className="cursor-pointer hover:text-indigo-600 active:text-yellow-400 text-slate-400">
            **
          </span>
          <span className="cursor-pointer hover:text-indigo-600 active:text-yellow-400 text-slate-400">
            ***
          </span>
          <span className="cursor-pointer hover:text-indigo-600 active:text-yellow-400 text-slate-400">
            ****
          </span>
          <span className="cursor-pointer hover:text-indigo-600 active:text-yellow-400 text-slate-400">
            *****
          </span>
        </p>
        <p className="pt-4 text-xs text-slate-700">Your review</p>
        <form action="#" className="flex flex-col items-start justify-start ">
          <textarea
            name="review"
            id="review"
            className="w-full h-20 p-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:border-none border-slate-300 text-slate-600 placeholder:text-sm placeholder:font-light"
            required
            placeholder="Type the review here..."
          />
          <label htmlFor="name" className="mt-6 text-xs">
            Your Name <span>*</span>
          </label>
          <input
            type="text"
            className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:border-none border-slate-300 text-slate-600 placeholder:text-sm placeholder:font-light"
            placeholder="Enter your name"
            required
            name="name"
            id="name"
          />
          <label htmlFor="email" className="mt-6 text-xs">
            Email Address<span>*</span>
          </label>
          <input
            type="email"
            className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:border-none border-slate-300 text-slate-600 placeholder:text-sm placeholder:font-light"
            required
            name="email"
            placeholder="example@gmail.com"
            id="email"
          />

          <button
            type="submit"
            className="w-full px-4 py-2 mt-16 font-medium bg-gray-100 rounded-md text-slate-600 text-md ring-1 ring-gray-200 hover:bg-indigo-300 hover:text-white active:bg-indigo-300"
          >
            Submit
          </button>
        </form>
      </section>
    </section>
  );
};

export default ProductReviews;
