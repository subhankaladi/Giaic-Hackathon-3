"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SiNike } from "react-icons/si";
// import { useHistory } from "react-router-dom"; // For navigation

const REGISTER = () => {
  // const history = useHistory(); // Initialize useHistory for navigation

  const route = useRouter()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Once form is submitted, navigate to the /login page
    route.push("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-full max-w-sm p-6">
        {/* Nike Logo */}
        <div className="flex justify-center mb-6">
          <SiNike size={80} />
        </div>

        {/* Title */}
        <h1 className="text-center text-lg font-bold mb-6">
          CREATE AN ACCOUNT <br /> JOIN THE NIKE FAMILY
        </h1>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First Name */}
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-md p-3 text-sm"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          {/* Last Name */}
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded-md p-3 text-sm"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-md p-3 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md p-3 text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-bold text-sm tracking-wide"
          >
            Join us
          </button>
        </form>

        <p className="text-xs text-center text-gray-600 mt-4">
          By signing up, you agree to Nike{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Terms of Use
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default REGISTER;
