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

const items = [
  { icon: Building2, text: "Corporate Office Scrap Buyer" },
  { icon: Hotel, text: "Hotel Scrap Buyer" },
  { icon: Factory, text: "Organizational Scrap Buyer" },
  { icon: Wrench, text: "Corporate Office Dismantling" },
  { icon: Recycle, text: "E-Waste Recycling" },
  { icon: Truck, text: "Office Shifting" },
  { icon: Warehouse, text: "Warehouse Scrap" },
  { icon: Settings, text: "Metal Scrap" },
];

const Marquee = () => {
  return (
    <div className="w-full h-[40px] overflow-hidden bg-bg-light-green flex items-center -mt-[41px] relative z-20">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Render items twice to ensure seamless looping */}
        {[...items, ...items, ...items].map((item, index) => (
          <p
            key={index}
            className="inline-flex items-center text-wheat mx-5 leading-[40px]"
          >
            <item.icon className="mr-2" /> {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
