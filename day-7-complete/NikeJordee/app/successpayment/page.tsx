"use client"
import React from "react";
import '../../app/globals.css'
import { useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 text-center max-w-md w-full">
        <div className="flex items-center justify-center w-20 h-20 bg-orange-500 text-white rounded-full mx-auto relative">
          <svg
            className="h-12 w-12 text-green-600"
            viewBox="0 0 24 20"
            stroke="currentColor"
            fill="none"
          >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">Thank you for ordering!</h2>
        <p className="text-gray-500 mt-2">
            Your order has been Confirmed and will be shipped shortly.
        </p>
        <div className="mt-6">
          
          <button  onClick={() => router.push('/products')} className="px-4 py-2 bg-orange-500 text-white rounded-md w-1/2 hover:bg-orange-600">
            Continue Shopping
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
