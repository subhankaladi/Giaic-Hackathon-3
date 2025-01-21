import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ESSENTIALS = () => {
  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-xl font-bold mb-8">The Essentials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative group">
          <Image
            width={200}
            height={200}
            src="/es3.png"
            alt="Men's Essentials"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-semibold py-2 px-4 rounded-full shadow-md group-hover:scale-105 transition-transform">
            <Link href="/fourcompo/shoes">Mens</Link>
          </button>
        </div>
        <div className="relative group">
          <Image
            width={200}
            height={200}
            src="/es2.png"
            alt="Women's Essentials"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-semibold py-2 px-4 rounded-full shadow-md group-hover:scale-105 transition-transform">
          <Link href="/components/women">Womens</Link>
          </button>
        </div>
        <div className="relative group">
          <Image
            width={200}
            height={200}
            src="/es1.png"
            alt="Kids' Essentials"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-semibold py-2 px-4 rounded-full shadow-md group-hover:scale-105 transition-transform">
          <Link href="/thirdcompo/second">Kids</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ESSENTIALS;
