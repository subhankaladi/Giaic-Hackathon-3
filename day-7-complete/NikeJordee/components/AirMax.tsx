import Link from "next/link";
import React from "react";

const Air = () => {
  return (
    <div className=" flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-medium text-gray-500">First Look</p>
        <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black">
          NIKE AIR MAX PULSE
        </h1>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse
          <br />
          —designed to push you past your limits and help you go to the max.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 sm:px-8 sm:py-3">
            <Link href="/products">Notify Me</Link>
          </button>
          <button className="px-6 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 sm:px-8 sm:py-3">
            <Link href="/products">Shop Air Max</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Air;