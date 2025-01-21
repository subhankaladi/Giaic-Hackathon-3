import React from "react";
import { FiShoppingCart, FiGrid } from "react-icons/fi"; // Icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiNike } from "react-icons/si";
import Image from "next/image";

// Static images array
const images = [
    { id: 1, src: "/Image (73).png", alt: "Frame 1" },
    { id: 2, src: "/Image (74).png", alt: "Frame 2" },
    { id: 3, src: "/Image (75).png", alt: "Frame 3" },
    { id: 4, src: "/Image (76).png", alt: "Frame 4" },
    { id: 5, src: "/Image (77).png", alt: "Frame 5" },
    { id: 6, src: "/Image (78).png", alt: "Frame 6" },
    { id: 7, src: "/Image (79).png", alt: "Frame 7" },
    { id: 8, src: "/Image (80).png", alt: "Frame 8" },
    { id: 9, src: "/Image (81).png", alt: "Frame 9" },
    { id: 10, src: "/Image (82).png", alt: "Frame 10" },
    { id: 11, src: "/Image (83).png", alt: "Frame 11" },
    { id: 12, src: "/Image (84).png", alt: "Frame 12" },
    { id: 13, src: "/Image (13).png", alt: "Frame 13" },
    { id: 14, src: "/Image (14).png", alt: "Frame 14" },
    { id: 15, src: "/Image (15).png", alt: "Frame 15" },
    { id: 16, src: "/Image (16).png", alt: "Frame 16" },
    { id: 17, src: "/Image (17).png", alt: "Frame 17" },
    { id: 18, src: "/Image (18).png", alt: "Frame 18" },
    { id: 19, src: "/Image (19).png", alt: "Frame 19" },
    { id: 20, src: "/Image (20).png", alt: "Frame 20" },
    { id: 21, src: "/Image (21).png", alt: "Frame 21" },
    { id: 22, src: "/Image (22).png", alt: "Frame 22" },
    { id: 23, src: "/Image (23).png", alt: "Frame 23" },
    { id: 24, src: "/Image (24).png", alt: "Frame 24" },
    { id: 25, src: "/Image (25).png", alt: "Frame 25" },
    { id: 26, src: "/Image (26).png", alt: "Frame 26" },
    { id: 27, src: "/Image (27).png", alt: "Frame 27" },
    { id: 28, src: "/Image (28).png", alt: "Frame 28" },
    { id: 29, src: "/Image (29).png", alt: "Frame 29" },
    { id: 30, src: "/Image (30).png", alt: "Frame 30" },
    { id: 31, src: "/Image (31).png", alt: "Frame 31" },
    { id: 32, src: "/Image (32).png", alt: "Frame 32" },
    { id: 33, src: "/Image (33).png", alt: "Frame 33" },
    { id: 34, src: "/Image (34).png", alt: "Frame 34" },
    { id: 35, src: "/Image (35).png", alt: "Frame 35" },
    { id: 36, src: "/Image (36).png", alt: "Frame 36" },
    { id: 37, src: "/Image (37).png", alt: "Frame 37" },
    { id: 38, src: "/Image (38).png", alt: "Frame 38" },
    { id: 39, src: "/Image (39).png", alt: "Frame 39" },
    { id: 40, src: "/Image (40).png", alt: "Frame 40" },
    { id: 41, src: "/Image (41).png", alt: "Frame 41" },
    { id: 42, src: "/Image (42).png", alt: "Frame 42" },
    { id: 43, src: "/Image (43).png", alt: "Frame 43" },
    { id: 44, src: "/Image (44).png", alt: "Frame 44" },
    { id: 45, src: "/Image (45).png", alt: "Frame 45" },
    { id: 46, src: "/Image (46).png", alt: "Frame 46" },
    { id: 47, src: "/Image (47).png", alt: "Frame 47" },
    { id: 48, src: "/Image (48).png", alt: "Frame 48" },
    { id: 49, src: "/Image (49).png", alt: "Frame 49" },
    { id: 50, src: "/Image (50).png", alt: "Frame 50" },
    { id: 51, src: "/Image (51).png", alt: "Frame 51" },
    { id: 52, src: "/Image (52).png", alt: "Frame 52" },
    { id: 53, src: "/Image (53).png", alt: "Frame 53" },
    { id: 54, src: "/Image (54).png", alt: "Frame 54" },
    { id: 55, src: "/Image (55).png", alt: "Frame 55" },
    { id: 56, src: "/Image (56).png", alt: "Frame 56" },
    { id: 57, src: "/Image (57).png", alt: "Frame 57" },
    { id: 58, src: "/Image (58).png", alt: "Frame 58" },
    { id: 59, src: "/Image (59).png", alt: "Frame 59" },
    { id: 60, src: "/Image (60).png", alt: "Frame 60" },
    { id: 61, src: "/Image (61).png", alt: "Frame 61" },
    { id: 62, src: "/Image (62).png", alt: "Frame 62" },
    { id: 63, src: "/Image (63).png", alt: "Frame 63" },
    { id: 64, src: "/Image (64).png", alt: "Frame 64" },
    { id: 65, src: "/Image (65).png", alt: "Frame 65" },
    { id: 66, src: "/Image (66).png", alt: "Frame 66" },
    { id: 67, src: "/Image (67).png", alt: "Frame 67" },
    { id: 68, src: "/Image (68).png", alt: "Frame 68" },
    { id: 69, src: "/Image (69).png", alt: "Frame 69" },
    { id: 70, src: "/Image (70).png", alt: "Frame 70" },
    { id: 71, src: "/Image (71).png", alt: "Frame 71" },
    { id: 72, src: "/Image (72).png", alt: "Frame 72" },
    { id: 73, src: "/Image (73).png", alt: "Frame 73" },
  ];
  

const SECOND = () => {
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
          <a href="/thirdcompo/first" className="hover:text-black text-gray-500">
            Feed
          </a>
          <a href="#" className="hover:text-black text-gray-500 md:underline">
            In Stock
          </a>
          <a href="/thirdcompo/third" className="hover:text-black text-gray-500">
            Upcoming
          </a>
        </nav>
      </header>

      {/* Grid Section */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-8">
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

export default SECOND;
