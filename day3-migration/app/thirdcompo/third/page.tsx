import React from "react";
import { FiShoppingCart, FiGrid } from "react-icons/fi"; // Icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiNike } from "react-icons/si";
import Image from "next/image";

// Static images array
const images = [
  { id: 1, src: "/Frame (10).png", alt: "Frame 1" },
  { id: 2, src: "/Frame (11).png", alt: "Frame 2" },
  { id: 3, src: "/Frame (12).png", alt: "Frame 3" },
  { id: 4, src: "/Frame (13).png", alt: "Frame 4" },
  { id: 5, src: "/Frame (14).png", alt: "Frame 5" },
  { id: 6, src: "/Image (16).png", alt: "Frame 6" },
  { id: 7, src: "/Image (18).png", alt: "Frame 7" },
  { id: 8, src: "/Image (19).png", alt: "Frame 8" },
  
];

const THIRD = () => {
  return (
    <div className="bg-white min-h-screen font-sans p-16">
      {/* Header/Navbar */}
      <header className="border-b">
        {/* Top Section: Visit Nike.com */}
        <div className="flex justify-between items-center px-8 py-2">
          <a href="#" className="text-gray-500 text-sm">
            &lt; Visit Nike.com
          </a>
          <div className="flex items-center gap-4">
          <a href="/seccompo/first" className="text-gray-500">
              <FiShoppingCart size={20} />
              <span className="sr-only">Cart</span>
            </a>
            <a href="/seccompo/map" className="text-gray-500">
              <HiOutlineLocationMarker size={20} />
              <span className="sr-only">Location</span>
            </a>
            <a href="#" className="text-gray-500">
              <FiGrid size={20} />
              <span className="sr-only">Grid</span>
            </a>
          </div>
        </div>

        {/* Middle Section: Nike Mark and SNKRS */}
        <div className="flex flex-col items-center text-red-500">
          <SiNike size={50} />
          <div className="text-red-500 font-bold text-2xl">SNKERS</div>
        </div>

        {/* Bottom Section: Navigation */}
        <nav className="flex justify-center gap-8 text-sm font-medium border-t pt-2">
          <a href="/thirdcompo/first" className="hover:text-black text-gray-500 ">
            Feed
          </a>
          <a href="/thirdcompo/second" className="hover:text-black text-gray-500">
            In Stock
          </a>
          <a href="/thirdcompo/third" className="hover:text-black text-gray-500 md:underline">
            Upcoming
          </a>
        </nav>
      </header>

      {/* Grid Section */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow"
          >
            <Image width={1000} height={1000}
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-red-500 font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center py-4 border-t">
        <p className="text-sm text-gray-500">© 2024 SNKRS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default THIRD;
