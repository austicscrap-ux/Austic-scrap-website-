// src/components/sections/WorkingArea.tsx
"use client";

import React from "react";
import { Building2, Landmark, Hotel, Network } from "lucide-react";

interface WorkingItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const workingItems: WorkingItemProps[] = [
  {
    icon: <Building2 />,
    title: "Corporate Office Scrap",
    description:
      "Purchasing furniture and electronic scrap from corporate offices for seamless disposal.",
  },
  {
    icon: <Landmark />,
    title: "Banking Sector Scrap",
    description:
      "Acquiring Workstation scrap from banks, we ensure secure and responsible disposal services.",
  },
  {
    icon: <Hotel />,
    title: "Luxury Hotel Scrap",
    description:
      "Collecting old furniture and used materials from luxury hotels, we prioritize eco-friendly practices.",
  },
  {
    icon: <Network />,
    title: "Organizational Scrap",
    description:
      "We buy various scrap from organizations and offer thorough, eco-friendly removal.",
  },
];

const WorkingArea: React.FC = () => {
  return (
    <section className="working-area py-12">
      <div className="container mx-auto px-4 lg:px-[86px] mt-[-40px] md:mt-0">
        {" "}
        {/* Adjusted margin-top for desktop */}
        <div className="row flex flex-wrap justify-center">
          {workingItems.map((item, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 col-sm-12 mb-4 w-full lg:w-1/4 md:w-1/2 px-2"
            >
              <div className="single-working-item text-center bg-bg-white p-5 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:bg-grad-green-end-1 group">
                <div className="icon-box text-5xl mb-4 text-grad-green-end-1 transition-colors duration-300 group-hover:text-color-wheat">
                  {item.icon}
                </div>
                <div className="text-box">
                  <h5 className="text-xl mb-2 text-text-black-dark transition-colors duration-300 group-hover:text-color-wheat">
                    {item.title}
                  </h5>
                  <p className="text-text-black-dark transition-colors duration-300 group-hover:text-color-wheat">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingArea;
