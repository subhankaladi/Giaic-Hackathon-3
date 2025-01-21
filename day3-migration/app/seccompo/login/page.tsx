import Image from "next/image";
import React from "react";

const LOGIN = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-full max-w-sm p-6">
        {/* Nike Logo */}
        <div className="flex justify-center mb-6">
          <Image width={100} height={100}
            src="/nike.png" // Replace with your Nike logo path
            alt="Nike Logo"
            className="h-8"
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-lg font-bold mb-6">
          YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
        </h1>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-md p-3 text-sm"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md p-3 text-sm"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded focus:ring-0"
              />
              <span className="ml-2">Keep me signed in</span>
            </label>
            <a href="#" className="hover:underline">
              Forgotten your password?
            </a>
          </div>

          {/* Sign-In Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-bold text-sm tracking-wide"
          >
            SIGN IN
          </button>
        </form>

        <p className="text-xs text-center text-gray-600 mt-4">
          By logging in, you agree to Nikes{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Terms of Use
          </a>
          .
        </p>

        <p className="text-center text-sm mt-4">
          Not a Member?{" "}
          <a href="/fourcompo/joinus" className="text-black underline font-semibold">
            Join Us.
          </a>
        </p>
      </div>
    </div>
  );
};

export default LOGIN;
