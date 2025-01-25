



import React from "react";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { getBannersData } from "@/sanity/lib/getData";
import { BannerData } from "@/types/banner";

const Banner = async () => {
  const banners: BannerData[] = await getBannersData();
  const singleBanner = banners[0];

  return (
    <div className="w-full ">
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
  );
};

export default Banner;
