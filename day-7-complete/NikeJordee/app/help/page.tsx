"use client";

import { client } from "@/sanity/lib/client";
import { helpQuery } from "@/sanity/lib/queries";
import { HelpType } from "@/types/help";
import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link for routing

const Help = () => {
  const [helps, setHelps] = useState<HelpType[]>([]);

  useEffect(() => {
    async function fetchHelps() {
      const fetchedHelps: HelpType[] = await client.fetch(helpQuery);
      setHelps(fetchedHelps);
    }
    fetchHelps();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Help Topics</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {helps.map((help) => (
            <div
              key={help._id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <Link href={`/help/${help.slug.current}`}>
                  <h2 className="text-2xl font-semibold text-blue-600 hover:underline">
                    {help.name}
                  </h2>
                  <p className="text-gray-600 mt-2">{help.subtitle}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
