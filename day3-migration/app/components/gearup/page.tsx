"use client"

import Image from "next/image";
import React, { useState } from "react";

const GEAR = () => {
  const gear = [
    { id: 1, name: "Nike Dri-FIT ADV TechKnit Ultra", price: "₹ 3 995", category: "Men's", img: "/gr1.png" },
    { id: 2, name: "Nike Dri-FIT Challenger", price: "₹ 3 895", category: "Men's 18cm", img: "/gr2.png" },
    { id: 3, name: "Nike Dri-FIT ADV Run Division", price: "₹ 6 995", category: "Women's Long Sleeve", img: "/gr3.png" },
    { id: 4, name: "Nike Fast", price: "₹ 4 995", category: "Women's Mid-Rise 7/8 Running", img: "/gr4.png" },
    { id: 5, name: "Nike Fast", price: "₹ 4 995", category: "Women's Mid-Rise 7/8 Running", img: "/gr5.png" },
    { id: 6, name: "Nike Dri-FIT Challenger", price: "₹ 3 895", category: "Men's 18cm", img: "/gr6.png" },
    { id: 7, name: "Nike Dri-FIT ADV TechKnit Ultra", price: "₹ 3 995", category: "Men's", img: "/gr7.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gear.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? gear.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Gear UP</h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="bg-gray-200 text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-200"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-200 text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-200"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="flex overflow-hidden space-x-4">
        {gear.slice(currentIndex, currentIndex + 3).map((shoe) => (
          <div key={shoe.id} className="flex-shrink-0 w-1/3">
            <div className="bg-gray-100 rounded-lg p-4">
              <Image width={200} height={200}
                src={shoe.img}
                alt={shoe.name}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-sm font-semibold">{shoe.name}</h3>
              <p className="text-sm text-gray-500">{shoe.category}</p>
              <p className="text-sm font-medium">{shoe.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GEAR;
