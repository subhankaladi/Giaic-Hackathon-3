import Image from "next/image";
import React from "react";

const FIRST = () => {
  // Array of product data
  const products = [
    { id: 1, label: "Just In", name: "Nike Air Force 1 Mid '07", category: "Men's Shoes", color: "1 Colour", price: "₹ 10,795.00", image: "/sc1.png" },
    { id: 2, label: "Just In", name: "Nike Court Vision Low Next Nature", category: "Men's Shoes", color: "1 Colour", price: "₹ 4,995.00", image: "/sc2.png" },
    { id: 3, label: "Just In", name: "Nike Air Force 1 PLT.AF.ORM", category: "Women's Shoes", color: "1 Colour", price: "₹ 8,695.00", image: "/sc3.png" },
    { id: 4, label: "Just In", name: "Nike Air Force 1 React", category: "Men's Shoes", color: "1 Colour", price: "₹ 13,295.00", image: "/sc4.png" },
    { id: 5, label: "Promo Exclusive", name: "Air Jordan 1 Elevate Low", category: "Women's Shoes", color: "1 Colour", price: "₹ 11,895.00", image: "/sc5.png" },
    { id: 6, label: "Just In", name: "Nike Standard Issue", category: "Women's Basketball Jersey", color: "1 Colour", price: "₹ 2,895.00", image: "/sc6.png" },
    { id: 7, label: "Just In", name: "Nike Revolution 6 FlyEase", category: "Men's Shoes", color: "1 Colour", price: "₹ 5,695.00", image: "/Rectangle (1).png" },
    { id: 8, label: "Just In", name: "Nike Dunk High Retro", category: "Men's Shoes", color: "1 Colour", price: "₹ 9,295.00", image: "/Rectangle (2).png" },
    { id: 9, label: "Just In", name: "Nike Air Max 97", category: "Men's Shoes", color: "1 Colour", price: "₹ 15,995.00", image: "/Rectangle (3).png" },
    { id: 10, label: "Just In", name: "Nike Zoom Fly 5", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 12,895.00", image: "/Rectangle (4).png" },
    { id: 11, label: "Just In", name: "Nike Sportswear Club Fleece", category: "Men's Sweatpants", color: "1 Colour", price: "₹ 3,295.00", image: "/Rectangle (5).png" },
    { id: 12, label: "Just In", name: "Nike Pegasus 40", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 10,495.00", image: "/Rectangle (6).png" },
    { id: 13, label: "Just In", name: "Nike Air Zoom Structure 25", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 12,995.00", image: "/Rectangle (7).png" },
    { id: 14, label: "Just In", name: "Nike Air Max 1", category: "Men's Shoes", color: "1 Colour", price: "₹ 13,495.00", image: "/Rectangle (8).png" },
    { id: 15, label: "Just In", name: "Nike Air Max 90", category: "Men's Shoes", color: "1 Colour", price: "₹ 14,295.00", image: "/Rectangle (9).png" },
    { id: 16, label: "Just In", name: "Nike Blazer Low", category: "Men's Shoes", color: "1 Colour", price: "₹ 7,495.00", image: "/Rectangle (10).png" },
    { id: 17, label: "Just In", name: "Nike Air Max 270", category: "Men's Shoes", color: "1 Colour", price: "₹ 16,495.00", image: "/Rectangle (11).png" },
    { id: 18, label: "Promo Exclusive", name: "Nike Air Presto", category: "Men's Shoes", color: "1 Colour", price: "₹ 8,295.00", image: "/Rectangle (12).png" },
    { id: 19, label: "Just In", name: "Nike Air Zoom Pegasus 38", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 11,995.00", image: "/Rectangle (13).png" },
    { id: 20, label: "Promo Exclusive", name: "Air Jordan 4 Retro", category: "Men's Shoes", color: "1 Colour", price: "₹ 18,495.00", image: "/Rectangle (14).png" },
    { id: 21, label: "Just In", name: "Nike Air Max 97 Ultra", category: "Men's Shoes", color: "1 Colour", price: "₹ 16,995.00", image: "/Rectangle (15).png" },
    { id: 22, label: "Just In", name: "Nike Free Run 5.0", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 9,695.00", image: "/Rectangle (16).png" },
    { id: 23, label: "Just In", name: "Nike Air Force 1 High", category: "Men's Shoes", color: "1 Colour", price: "₹ 13,995.00", image: "/Rectangle (17).png" },
    { id: 24, label: "Just In", name: "Nike Air Max 180", category: "Men's Shoes", color: "1 Colour", price: "₹ 12,395.00", image: "/Rectangle (18).png" },
    { id: 25, label: "Just In", name: "Nike Air Zoom Winflo 8", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 9,895.00", image: "/Rectangle (19).png" },
    { id: 26, label: "Just In", name: "Nike React Infinity Run Flyknit", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 14,995.00", image: "/Rectangle (20).png" },
    { id: 27, label: "Just In", name: "Nike Air Max 2090", category: "Men's Shoes", color: "1 Colour", price: "₹ 16,695.00", image: "/Rectangle (21).png" },
    { id: 28, label: "Promo Exclusive", name: "Air Jordan 3 Retro", category: "Men's Shoes", color: "1 Colour", price: "₹ 17,395.00", image: "/Rectangle (22).png" },
    { id: 29, label: "Just In", name: "Nike Free RN 5.0", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 10,495.00", image: "/Rectangle (23).png" },
    { id: 30, label: "Just In", name: "Nike Air Max 720", category: "Men's Shoes", color: "1 Colour", price: "₹ 18,495.00", image: "/Rectangle (24).png" },
    { id: 31, label: "Just In", name: "Nike VaporMax", category: "Men's Shoes", color: "1 Colour", price: "₹ 19,995.00", image: "/Rectangle (25).png" },
    { id: 32, label: "Just In", name: "Nike Air Zoom Alphafly Next%", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 22,495.00", image: "/Rectangle (26).png" },
    { id: 33, label: "Just In", name: "Nike Zoom Freak 5", category: "Men's Basketball Shoes", color: "1 Colour", price: "₹ 15,795.00", image: "/Rectangle (27).png" },
    { id: 34, label: "Promo Exclusive", name: "Air Jordan 5 Retro", category: "Men's Shoes", color: "1 Colour", price: "₹ 18,995.00", image: "/Rectangle (28).png" },
    { id: 35, label: "Just In", name: "Nike Air Max 97 SE", category: "Men's Shoes", color: "1 Colour", price: "₹ 17,295.00", image: "/Rectangle (29).png" },
    { id: 36, label: "Just In", name: "Nike Air Max 95", category: "Men's Shoes", color: "1 Colour", price: "₹ 14,495.00", image: "/Rectangle (30).png" },
    { id: 37, label: "Promo Exclusive", name: "Air Jordan 1 Retro", category: "Men's Shoes", color: "1 Colour", price: "₹ 18,295.00", image: "/Rectangle (31).png" },
    { id: 38, label: "Just In", name: "Nike Air Max 95 Premium", category: "Men's Shoes", color: "1 Colour", price: "₹ 18,295.00", image: "/Rectangle (32).png" },
    { id: 39, label: "Promo Exclusive", name: "Air Jordan 1 Retro", category: "Men's Shoes", color: "1 Colour", price: "₹ 19,395.00", image: "/Rectangle (33).png" },
    { id: 40, label: "Just In", name: "Nike React Element 55", category: "Men's Shoes", color: "1 Colour", price: "₹ 11,495.00", image: "/Rectangle (34).png" },
    { id: 41, label: "Just In", name: "Nike Air Max 1 Premium", category: "Men's Shoes", color: "1 Colour", price: "₹ 15,395.00", image: "/Rectangle (35).png" },
    { id: 42, label: "Just In", name: "Nike Air Zoom Vomero 15", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 13,295.00", image: "/Rectangle (36).png" },
    { id: 43, label: "Just In", name: "Nike React Miler", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 13,795.00", image: "/Rectangle (37).png" },
    { id: 44, label: "Just In", name: "Nike Air Zoom X", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 18,795.00", image: "/Rectangle (38).png" },
    { id: 45, label: "Just In", name: "Nike React Vision", category: "Men's Shoes", color: "1 Colour", price: "₹ 13,495.00", image: "/Rectangle (39).png" },
    { id: 46, label: "Promo Exclusive", name: "Air Jordan 2 Retro", category: "Men's Shoes", color: "1 Colour", price: "₹ 17,495.00", image: "/Rectangle (40).png" },
    { id: 47, label: "Just In", name: "Nike Blazer Mid '77 Vintage", category: "Men's Shoes", color: "1 Colour", price: "₹ 8,695.00", image: "/Rectangle (41).png" },
    { id: 48, label: "Just In", name: "Nike Zoom Fly 4", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 11,295.00", image: "/Rectangle (42).png" },
    { id: 49, label: "Promo Exclusive", name: "Air Jordan 6 Retro", category: "Men's Shoes", color: "1 Colour", price: "₹ 20,495.00", image: "/Rectangle (43).png" },
    { id: 50, label: "Just In", name: "Nike ZoomX Vaporfly NEXT%", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 23,495.00", image: "/Rectangle (44).png" },
    { id: 51, label: "Just In", name: "Nike Air Max Tailwind 5", category: "Men's Shoes", color: "1 Colour", price: "₹ 15,495.00", image: "/Rectangle (45).png" },
    { id: 52, label: "Just In", name: "Nike Free RN 3.0", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 9,995.00", image: "/Rectangle (46).png" },
    { id: 53, label: "Just In", name: "Nike Air Max 270 React", category: "Men's Shoes", color: "1 Colour", price: "₹ 17,495.00", image: "/Rectangle (47).png" },
    { id: 54, label: "Promo Exclusive", name: "Air Jordan 12 Retro", category: "Men's Shoes", color: "1 Colour", price: "₹ 18,995.00", image: "/Rectangle (48).png" },
    { id: 55, label: "Just In", name: "Nike Air Zoom Alpha", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 14,895.00", image: "/Rectangle (49).png" },
    { id: 56, label: "Just In", name: "Nike Zoom Gravity", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 10,995.00", image: "/Rectangle (50).png" },
    { id: 57, label: "Promo Exclusive", name: "Air Jordan 7 Retro", category: "Men's Shoes", color: "1 Colour", price: "₹ 20,495.00", image: "/Rectangle (51).png" },
    { id: 58, label: "Just In", name: "Nike Air Zoom Structure 24", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 12,995.00", image: "/Rectangle (52).png" },
    { id: 59, label: "Just In", name: "Nike Air Max 2090 SE", category: "Men's Shoes", color: "1 Colour", price: "₹ 17,795.00", image: "/Rectangle (53).png" },
    { id: 60, label: "Just In", name: "Nike Air Zoom Tempo NEXT%", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 16,295.00", image: "/Rectangle (54).png" }
  ];
  
  return (
    <div className="bg-white min-h-screen p-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-gray-50 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">New (500)</h2>
          <ul className="space-y-2">
            <li className="text-gray-700 font-medium">Shoes</li>
            <li className="text-gray-700 font-medium">Sports Bras</li>
            <li className="text-gray-700 font-medium">Tops & T-Shirts</li>
            <li className="text-gray-700 font-medium">Hoodies & Sweatshirts</li>
            <li className="text-gray-700 font-medium">Jackets</li>
            <li className="text-gray-700 font-medium">Trousers & Tights</li>
            <li className="text-gray-700 font-medium">Shorts</li>
            <li className="text-gray-700 font-medium">Tracksuits</li>
            <li className="text-gray-700 font-medium">Jumpsuits & Rompers</li>
            <li className="text-gray-700 font-medium">Socks</li>
          </ul>
          <h3 className="text-lg font-bold mt-6">Gender</h3>
          <ul className="space-y-2">
            <li className="text-gray-700">Men</li>
            <li className="text-gray-700">Women</li>
            <li className="text-gray-700">Unisex</li>
          </ul>
          <h3 className="text-lg font-bold mt-6">Kids</h3>
          <ul className="space-y-2">
            <li className="text-gray-700">Boys</li>
            <li className="text-gray-700">Girls</li>
          </ul>
          <h3 className="text-lg font-bold mt-6">Shop by Price</h3>
          <ul className="space-y-2">
            <li className="text-gray-700">Under ₹ 2,500.00</li>
            <li className="text-gray-700">₹ 2,501.00 - ₹ 5,000.00</li>
          </ul>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 bg-white shadow-md"
              >
                <div className="w-full h-40 relative mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <div className="text-sm text-red-500 font-semibold mb-1">
                  {product.label}
                </div>
                <div className="font-medium text-gray-800">{product.name}</div>
                <div className="text-sm text-gray-500">{product.category}</div>
                <div className="text-sm text-gray-500">{product.color}</div>
                <div className="font-semibold text-gray-800 mt-2">
                  MRP: {product.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FIRST;
