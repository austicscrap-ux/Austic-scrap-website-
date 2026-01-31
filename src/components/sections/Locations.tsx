// src/components/sections/Locations.tsx
"use client";

import React from "react";
import Link from "next/link";
import {
  Landmark,
  Waves,
  Building,
  Monitor,
  Building2,
  MapPin,
  Leaf,
  Factory,
} from "lucide-react";

interface LocationItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
}

const locationItems: LocationItemProps[] = [
  { href: "/delhi-e-waste", icon: <Landmark />, title: "Delhi" },
  { href: "/ewaste-recycling-kolkata", icon: <Waves />, title: "Kolkata" },
  { href: "/hyderabad-e-waste", icon: <Building />, title: "Hyderabad" },
  { href: "/bengaluru-e-waste", icon: <Factory />, title: "Bengaluru" },
  { href: "/pune-e-waste", icon: <Monitor />, title: "Pune" },
  { href: "/mumbai-e-waste", icon: <Building2 />, title: "Mumbai" },
  { href: "/chennai-e-waste", icon: <MapPin />, title: "Chennai" },
  { href: "#", icon: <Leaf />, title: "Haryana" }, // Haryana has no specific link in original
];

const Locations: React.FC = () => {
  return (
    <section className="heritage-section py-16 bg-amber-50/30 border-y border-amber-100/50">
      <div className="container mx-auto px-4 lg:px-[86px]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-widest text-white uppercase bg-[#127749] rounded-full font-secondary">
            Locations
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-primary text-neutral-900 mb-6">
            We Serve Across Major Cities
          </h2>
          <div className="w-24 h-1.5 bg-[#127749] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {locationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group relative bg-[#127749]/5 hover:bg-[#127749] border border-[#127749]/10 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#127749]/20 text-[#127749] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center mb-4 transition-all duration-500">
                {/* Clone element to pass className if icon is standard element, otherwise wrap */}
                <div className="w-8 h-8">
                  {React.cloneElement(item.icon as React.ReactElement, {
                    size: 32,
                    strokeWidth: 2,
                  })}
                </div>
              </div>
              <h5 className="text-lg md:text-xl font-bold font-primary text-neutral-900 group-hover:text-white transition-colors duration-500">
                {item.title}
              </h5>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
