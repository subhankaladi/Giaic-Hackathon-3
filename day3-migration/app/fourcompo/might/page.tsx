"use client"

import Image from "next/image";
import React, { useState } from "react";

const MIGHT = () => {
    const gear = [
        { id: 1, name: "Jordan Why Not .6 PF", price: "₹ 3 995", category: "Men's Shoes", img: "/Frame (33).png" },
        { id: 2, name: "Zion 2 PF", price: "₹ 3 895", category: "Men's Basketball Shoes", img: "/Frame (34).png" },
        { id: 3, name: "Air Jordan 1 Mid SE", price: "₹ 6 995", category: "Men's Shoes", img: "/Frame (35).png" },
        { id: 4, name: "Nike Zoom Running Shoes", price: "₹ 4 995", category: "Women's Shoes", img: "/Frame (16).png" },
        { id: 5, name: "Nike Pegasus Trail Shoes", price: "₹ 4 995", category: "Women's Shoes", img: "/Frame (17).png" },
        { id: 6, name: "Nike Flex Experience Shoes", price: "₹ 3 895", category: "Men's Shoes", img: "/Frame (18).png" },
        { id: 7, name: "Nike Revolution Shoes", price: "₹ 3 995", category: "Men's Shoes", img: "/Frame (19).png" },
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
        <h2 className="text-xl font-bold">Gear up</h2>
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

export default MIGHT;
