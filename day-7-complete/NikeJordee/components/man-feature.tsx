import { getManBannersData } from '@/sanity/lib/getData';
import { urlFor } from '@/sanity/lib/image';
import { BannerData } from '@/types/banner';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ManBanner = async () => {

      const banners: BannerData[] = await getManBannersData();
      const singleBanner = banners[0];

  return (
    <div className="flex  mt-12 mb-12 flex-col items-center px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h2 className="text-left w-full max-w-4xl text-lg font-semibold mb-4 sm:text-xl md:text-2xl lg:mb-6">
        Featured
      </h2>

      {/* Image Section */}
      <div className="w-full max-w-4xl h-[50vh] sm:h-[60vh] lg:h-[70vh] relative mb-8">
          {singleBanner?.image && (
              <Image
                width={1920}
                height={1080}
                src={urlFor(singleBanner?.image)?.url()}
                alt={"hero-banner"}
                className="object-cover w-full h-full"
                priority
              />
            )}
      </div>

      {/* Text and Button Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-2xl font-bold mb-2 sm:text-3xl lg:text-4xl">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        
          <Link href="/products" className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition text-sm sm:text-base lg:text-lg">
            Find Your Shoe
     </Link>
      </div>
    </div>
  );
};

export default ManBanner;
