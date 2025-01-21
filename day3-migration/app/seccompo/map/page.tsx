import Image from "next/image";
import React from "react";

const stores = [
  {
    name: "Nike NYC - House of Innovation 000",
    address: "650 5th Ave, New York, NY, 10019, US",
    status: "Closed",
    opensAt: "11:00 AM",
  },
  {
    name: "Nike By Upper East Side",
    address: "1131 3rd Ave, New York, NY, 10065, US",
    status: "Closed",
    opensAt: "11:00 AM",
  },
  {
    name: "Nike By Flatiron",
    address: "156 Fifth Ave, New York, NY, 10010, US",
    status: "Closed",
    opensAt: "11:00 AM",
  },
];

const MAP = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 p-4 bg-white shadow-lg overflow-y-auto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search Location"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button className="w-full mb-4 bg-black text-white py-2 rounded-md">
          Filter
        </button>
        <ul>
          {stores.map((store, index) => (
            <li
              key={index}
              className="mb-6 border-b border-gray-200 pb-4 last:border-none"
            >
              <h3 className="text-lg font-semibold">{store.name}</h3>
              <p className="text-gray-600">{store.address}</p>
              <p>
                <span className="text-red-500">{store.status}</span> • Opens at{" "}
                {store.opensAt}
              </p>
            </li>
          ))}
        </ul>
        <button className="w-full mt-4 bg-black text-white py-2 rounded-md">
          View All Stores
        </button>
      </div>

      {/* Image Placeholder */}
      <div className="flex-1 h-full">
        <Image width={200} height={200}
          src="/map.png"
          alt="Map Placeholder"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default MAP;
