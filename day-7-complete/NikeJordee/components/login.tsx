"use client"

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { SiNike } from "react-icons/si";

const Login = () => {
  const { user } = useUser(); // Use Clerk's useUser hook to get user details

  return (
    <div className="flex flex-col lg:flex-row w-full h-[600px]">
      {/* Right Section */}
      <div className="flex-1 mb-4 mt-4 bg-black flex justify-center items-center">
        <SiNike size={150} className="text-white" />
      </div>

      {/* Left Section */}
      <div className="flex-1 bg-white flex flex-col justify-center px-8 lg:px-20">
        <SignedIn>
          {/* When signed in */}
          <div className="flex flex-col items-center">
            <UserButton />
            <h1 className="text-3xl font-bold mb-4">
              Welcome, {user?.firstName || "User"}!
            </h1>
            <p className="mt-4 text-lg text-center">
      Shop now and use the coupon <span className="font-bold text-black">"kaladi"</span> to get a $50 discount on your next purchase!
    </p>
          </div>
        </SignedIn>

        <SignedOut>
          {/* When signed out */}
          <div>
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
            </form>
            <div className="text-center bg-black text-white py-3 rounded-lg hover:bg-gray-800">
              <SignInButton mode="modal" />
            </div>
          </div>
        </SignedOut>
      </div>
    </div>
  );
};

export default Login;
