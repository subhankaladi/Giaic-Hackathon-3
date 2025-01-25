import { SignedOut, SignInButton} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { SiNike } from "react-icons/si";

const Login = () => {

  return (
    
    <div className="flex flex-col lg:flex-row w-full h-screen ">
      {/* Right Section */}
      <div className="flex-1 bg-black flex justify-center items-center">
        <SiNike size={150} className="text-white" />
      </div>
      {/* Left Section */}
      <div className="flex-1 bg-white flex flex-col justify-center px-8 lg:px-20">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">
                👁
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-700 text-sm">Remember Me</span>
            </label>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Forgot Password
            </Link>
          </div>
          <div className="text-center bg-black text-white py-3 rounded-lg hover:bg-gray-800">
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
