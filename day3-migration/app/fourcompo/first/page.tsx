import React from "react";

const First = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
        {/* Header Section */}
        <h2 className="text-xl font-semibold text-center text-gray-900">
          View or Manage Your Order
        </h2>
        <p className="text-sm text-center text-gray-600 mt-2">
          To check the status of your order, or to start a return, please enter
          your order number and email address.
        </p>

        {/* Form Section */}
        <form className="mt-6 space-y-4">
          {/* Order Number Input */}
          <div>
            <label
              htmlFor="orderNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Order Number*
            </label>
            <input
              type="text"
              id="orderNumber"
              placeholder="Order Number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 text-gray-900"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 text-gray-900"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md shadow-sm cursor-pointer hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Footer Section */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already a member?{" "}
          <a href="/seccompo/login" className="text-gray-900 font-medium hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default First;
