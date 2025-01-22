import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { SiJordan } from "react-icons/si";

export const Jordan = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <h1
        className={twMerge(
          "text-2xl text-black hover:text-blue-700 font-bold uppercase relative group overflow-hidden duration-300",
          className
        )}
      >
        <SiJordan className="text-4xl ml-3 inline-block" />
        <span className="absolute w-full h-px bg-blue-700 inline-block left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 duration-300" />
      </h1>
    </Link>
  );
};
