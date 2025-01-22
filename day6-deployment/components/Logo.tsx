import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { SiNike } from "react-icons/si";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <h1
        className={twMerge(
          "text-2xl text-black hover:text-red-600 font-bold uppercase relative group overflow-hidden duration-300",
          className
        )}
      >
      <SiNike className="text-5xl ml-3 inline-block" />
        <span className="absolute w-full h-px bg-red-600 inline-block left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 duration-300" />
      </h1>
    </Link>
  );
};
