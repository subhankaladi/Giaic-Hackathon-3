import Image from "next/image";
import React from "react";
import MIGHT from "../might/page";

const SHOES = () => {
  const images = Array.from({ length: 12 }, (_, i) => `/Frame (${16 + i}).png`);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Product Details Section */}
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Images Section */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <Image width={200} height={200}
              key={index}
              src={image}
              alt={`Nike Air Max ${index + 1}`}
              className="rounded-lg shadow-md"
            />
          ))}
        </div>

        {/* Details Section */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Nike Air Max 97 SE</h1>
          <p className="text-gray-600 text-sm mt-2">Mens Shoes</p>
          <p className="text-gray-900 font-bold text-xl mt-4">MRP: ₹16,995.00</p>
          <p className="text-gray-600 text-sm mt-1">incl. of taxes</p>
          <p className="text-gray-600 text-sm mb-4">
            (Also includes all applicable duties)
          </p>

          {/* Size Selection */}
          <div className="mt-4">
            <h3 className="text-lg font-medium">Select Size</h3>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {[
                "UK 6",
                "UK 6.5",
                "UK 7",
                "UK 7.5",
                "UK 8",
                "UK 8.5",
                "UK 9",
                "UK 9.5",
                "UK 10",
                "UK 10.5",
                "UK 11",
                "UK 12",
              ].map((size, index) => (
                <button
                  key={index}
                  className="border rounded-lg py-2 text-sm font-medium hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 space-y-4">
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
              Add to Bag
            </button>
            <button className="w-full border border-gray-400 py-3 rounded-lg hover:bg-gray-100">
              Favourite
            </button>
          </div>

          {/* Description */}
          <div className="mt-6">
            <p className="text-gray-600 text-sm">
              Layer up style with the Air Max 97. The cracked leather and soft
              suede update the iconic design while the original look (inspired
              by Japanese bullet trains and water droplets) still takes centre
              stage. Easy-to-style colours let you hit the streets quickly.
            </p>
            <p className="text-gray-800 text-sm mt-4">
              <span className="font-bold">Colour Shown:</span> Flat Pewter/Light
              Bone/Black/White
            </p>
            <p className="text-gray-800 text-sm mt-1">
              <span className="font-bold">Style:</span> DV7421-001
            </p>
            <a href="#" className="text-blue-500 text-sm mt-4 underline block">
              View Product Details
            </a>
          </div>
        </div>
      </div>

      {/* Additional Image Section */}
      <div className="w-full max-w-7xl mt-10">
  <p className="text-center text-gray-600 text-sm mt-4">
    Explore the Nike Air Max 97 SE Mens Shoes
  </p>
  <Image
    width={1000}
    height={1000}
    src="/Frame (28).png"
    alt="Nike Air Max 97 Lifestyle"
    className="rounded-lg shadow-lg mx-auto w-9/12	"
  />
  <p className="text-center text-gray-600 text-sm mt-4">
  Originally designed for performance running, the full-length Max Air unit adds soft cushioning.
  </p>
</div>
<div className="w-full max-w-7xl mt-10">
  <Image
    width={1000}
    height={1000}
    src="/Frame (31).png"
    alt="Nike Air Max 97 Lifestyle"
    className="rounded-lg shadow-lg mx-auto w-9/12	"
  />
  <p className="text-center text-gray-600 text-sm mt-4">
  The suede and synthetic leather upper with mesh underlays adds breathability and durability.
  </p>
</div>
<div className="w-full max-w-7xl mt-10">
  <Image
    width={1000}
    height={1000}
    src="/Frame (32).png"
    alt="Nike Air Max 97 Lifestyle"
    className="rounded-lg shadow-lg mx-auto w-9/12"
  />
  <p className="text-center text-gray-600 text-sm mt-4">
  Hidden lacing system was a first of its kind and delivers a streamlined look.  </p>
</div>
<MIGHT/>
    </div>
  );
};

export default SHOES;
