import { useRouter } from 'next/navigation';
import React from 'react'

const success = () => {

      const router = useRouter();
    
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
    <div className="max-w-4xl mx-auto p-8 bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-md">
      <h1 className="text-4xl font-semibold text-center animate__animated animate__fadeInUp">
        Order Successfully Placed!
      </h1>
      <div className="mt-8 p-8 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 rounded-lg shadow-xl border-t-8 border-white transform hover:scale-105 transition-all">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">
            Thank You
          </h2>
          <p className="text-lg mb-4">
            Your order has been successfully placed and is now being
            processed.
          </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full shadow-lg text-lg hover:bg-gradient-to-l hover:scale-105 transition-all"
        >
          Back to Homepage
        </button>
      </div>
    </div>
  </div>
  )
}

export default success