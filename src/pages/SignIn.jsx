import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <section id="contentarea" className="px-10 mt-12 py-7">
      <div className="flex items-center justify-between">
        <a href="#" title="Flutter Login">
          E-Shop- N0:1 Online Supermarket
        </a>
        <Link to="/sign-up" title="Create Account">
          <button
            type="button"
            className="p-2 px-4 bg-indigo-200 border-none rounded hover:bg-indigo-200"
          >
            Create Account
          </button>
        </Link>
      </div>

      <section className="pt-0 mt-14 md:ms-12" id="form-wrapper">
        <form
          id="loginform"
          className="flex flex-col space-y-6 sm:w-[370px] bg-white p-8 rounded-lg py-6"
        >
          <h3 className="mt-2 mb-8 text-xl text-sky-700">
            Login to your account
          </h3>
          <div className="group">
            <input
              type="email"
              name="email"
              id="emailaddress"
              title="Email Address"
              placeholder="Email Address"
              required
              className="w-full p-2 font-light border border-gray-300 rounded outline-none text-slate-600 placeholder:text-sm ring-indigo-200 focus:ring-1"
            />
            <p
              id="emailmsg"
              className="pt-1 text-sm text-center text-red-500"
            ></p>
          </div>

          <div className="group">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              title="Password"
              required
              className="w-full p-2 font-light border border-gray-300 rounded outline-none text-slate-600 placeholder:text-sm ring-indigo-200 focus:ring-1"
            />
            <p
              id="passmsg"
              className="pt-1 text-sm text-center text-red-500"
            ></p>
          </div>
          <button
            type="submit"
            id="loginbtn"
            className="p-4 text-lg bg-indigo-200 rounded hover:bg-indigo-200"
          >
            Login
          </button>
          <div className="flex items-center justify-center space-x-3 text-sm divide-x divide-indigo-300">
            <Link to={"/recover-account"} title="Recover Account">
              <p className="text-sm text-blue-600">Forgot Password?</p>
            </Link>
            <Link to={"/sign-up"} title="Login" className="ps-2">
              <p className="text-sm text-blue-600">Sign-Up</p>
            </Link>
          </div>
        </form>
      </section>
    </section>
  );
};

export default SignIn;
