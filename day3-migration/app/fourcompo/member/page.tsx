import React from "react";
import Link from "next/link";
import Image from "next/image";

const Member = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 w-full max-w-md rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <Image width={200} height={200}
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
            alt="Nike Logo"
            className="w-12"
          />
        </div>
        <h1 className="text-center text-lg font-semibold mb-4">
          BECOME A NIKE MEMBER
        </h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <select
            className="w-full border rounded px-3 py-2 text-sm"
            defaultValue="India"
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input type="radio" name="gender" className="h-4 w-4" />
              <span className="text-sm">Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="gender" className="h-4 w-4" />
              <span className="text-sm">Female</span>
            </label>
          </div>
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <input type="checkbox" className="h-4 w-4" />
            <span>
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits.
            </span>
          </label>
          <p className="text-xs text-gray-600">
            By creating an account, you agree to Nike’s{" "}
            <a
              href="#"
              className="text-blue-500 hover:underline"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-blue-500 hover:underline"
            >
              Terms of Use
            </a>.
          </p>
          <Link href="/fourcompo/joinus">
            <button
              type="button"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              JOIN US
            </button>
          </Link>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already a Member?{" "}
          <Link href="/seccompo/login" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Member;
