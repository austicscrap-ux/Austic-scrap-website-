"use client";

import React from "react";
import {
  Building2,
  Hotel,
  Factory,
  Wrench,
  Recycle,
  Truck,
  Warehouse,
  Settings,
} from "lucide-react";

const marqueeItems = [
  { icon: <Building2 />, text: "Corporate Office Scrap Buyer" },
  { icon: <Hotel />, text: "Hotel Scrap Buyer" },
  { icon: <Factory />, text: "Organizational Scrap Buyer" },
  { icon: <Wrench />, text: "Corporate Office Dismantling" },
  { icon: <Recycle />, text: "E-Waste Recycling" },
  { icon: <Truck />, text: "Office Shifting" },
  { icon: <Warehouse />, text: "Warehouse Scrap" },
  { icon: <Settings />, text: "Metal Scrap" },
];

const MarqueeSection: React.FC = () => {
  return (
    <div className="w-full h-10 overflow-hidden bg-grad-green-end-1 flex items-center mt-[-41px] sm:mt-[-40px]">
      <div className="flex-shrink-0 whitespace-nowrap will-change-transform animate-marquee">
        {marqueeItems.map((item, index) => (
          <p
            key={index}
            className="inline-block text-color-wheat mx-5 leading-10 flex items-center justify-center text-xs sm:text-sm md:text-base"
          >
            {React.cloneElement(item.icon, { className: "mr-2" })} {item.text}
          </p>
        ))}
        {/* Duplicate items to ensure seamless loop for marquee effect */}
        {marqueeItems.map((item, index) => (
          <p
            key={`duplicate-${index}`}
            className="inline-block text-color-wheat mx-5 leading-10 flex items-center justify-center text-xs sm:text-sm md:text-base"
          >
            {React.cloneElement(item.icon, { className: "mr-2" })} {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
