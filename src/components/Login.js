import React from "react";
import Header from "../Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <img
            className="absolute"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="bgrimg"
          />
        </div>
        <form className="bg-black absolute p-12 w-3/12 my-56 mx-auto right-0 left-0 opacity-80 rounded-3xl">
          <h1 className="p-2 font-bold text-3xl text-white">Sign In</h1>
          <input
            type="text"
            placeholder="Enter email"
            className="p-2 my-4 bg-gray-700 rounded-lg w-full"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="p-2 my-4 bg-gray-700 rounded-lg w-full"
          />
          <button className="bg-red-600 p-2 my-6 rounded-lg w-full">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
