import Link from "next/link";
import React from "react";

const Joinus = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-gray-900">
      {/* Nike Membership Header */}
      <h1 className="text-lg font-medium mb-8 self-start">
        Nike Membership
      </h1>

      {/* Content Section */}
      <div className="text-center max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">
          Where All Athletes Belong
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          When youre with us, youre part of something bigger: a global
          community dedicated to bringing out the best in one another, with
          access to the most effective tools for the job, including
          Member-exclusive products, Nike By You customisation, and special
          offers. And its all free.
        </p>

        {/* Join Us Button */}
        <button className="bg-black text-white text-sm font-medium py-2 px-6 rounded-full hover:bg-gray-800 focus:ring focus:ring-black focus:ring-opacity-50 transition">
          <Link href="/seccompo/login">Join us</Link>
        </button>
      </div>
    </div>
  );
};

export default Joinus;
