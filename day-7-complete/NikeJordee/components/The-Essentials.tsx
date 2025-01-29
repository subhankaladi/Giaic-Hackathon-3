import {
  getEssentialsKidsData,
  getEssentialsMensData,
  getEssentialsWomensData,
} from "@/sanity/lib/getData";
import { urlFor } from "@/sanity/lib/image";
import { BannerData } from "@/types/banner";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ESSENTIALS = async () => {
  const menbanners: BannerData[] = await getEssentialsMensData();
  const singleMenBanner = menbanners[0];

  const womenbanners: BannerData[] = await getEssentialsWomensData();
  const singleWomenBanner = womenbanners[0];

  const kidsbanners: BannerData[] = await getEssentialsKidsData();
  const singlekidsBanner = kidsbanners[0];

  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-xl font-bold mb-8">The Essentials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative group">
          {singleMenBanner?.image && (
            <Image
              width={1920}
              height={1080}
              src={urlFor(singleMenBanner?.image)?.url()}
              alt={"men-banner"}
              className="object-cover w-full h-full"
              priority
            />
          )}
          <button className="absolute bottom-4 left-4 bg-white text-black font-semibold py-2 px-4 rounded-full shadow-md group-hover:scale-105 transition-transform">
            <Link href="/men">Mens</Link>
          </button>
        </div>
        <div className="relative group">
          {singleWomenBanner?.image && (
            <Image
              width={1920}
              height={1080}
              src={urlFor(singleWomenBanner?.image)?.url()}
              alt={"hero-banner"}
              className="object-cover w-full h-full"
              priority
            />
          )}
          <button className="absolute bottom-4 left-4 bg-white text-black font-semibold py-2 px-4 rounded-full shadow-md group-hover:scale-105 transition-transform">
            <Link href="/women">Womens</Link>
          </button>
        </div>
        <div className="relative group">
          {singlekidsBanner?.image && (
            <Image
              width={1920}
              height={1080}
              src={urlFor(singlekidsBanner?.image)?.url()}
              alt={"hero-banner"}
              className="object-cover w-full h-full"
              priority
            />
          )}
          <button className="absolute bottom-4 left-4 bg-white text-black font-semibold py-2 px-4 rounded-full shadow-md group-hover:scale-105 transition-transform">
            <Link href="/kids">Kids</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ESSENTIALS;
