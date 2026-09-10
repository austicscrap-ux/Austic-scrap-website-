// src/components/sections/Locations.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useInView } from "framer-motion";
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

const locationItems = [
  { href: "/delhi-e-waste", icon: Landmark, title: "Delhi" },
  { href: "/ewaste-recycling-kolkata", icon: Waves, title: "Kolkata" },
  { href: "/hyderabad-e-waste", icon: Building, title: "Hyderabad" },
  { href: "/bengaluru-e-waste", icon: Factory, title: "Bengaluru" },
  { href: "/pune-e-waste", icon: Monitor, title: "Pune" },
  { href: "/mumbai-e-waste", icon: Building2, title: "Mumbai" },
  { href: "/chennai-e-waste", icon: MapPin, title: "Chennai" },
  { href: "/delhiscrap", icon: Leaf, title: "Haryana" },
];

const Locations: React.FC = () => {
  return (
    <section className="heritage-section py-16 bg-amber-50/30 border-y border-amber-100/50 overflow-hidden">
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

        {/* Responsive Marquee Layout */}
        <div className="flex w-full relative overflow-hidden" aria-label="Locations Marquee">
          <div className="flex animate-marquee-infinite whitespace-nowrap py-5">
            {/* Primary Semantic Links (Rendered for users, search engines and accessibility) */}
            {locationItems.map((item, index) => (
              <LocationCard key={`loc-primary-${index}`} item={item} />
            ))}
            {/* Cloned sets for seamless infinite loop (aria-hidden and non-anchor to avoid duplicate anchors / heading skipping) */}
            {locationItems.map((item, index) => (
              <LocationCardClone key={`loc-clone-1-${index}`} item={item} />
            ))}
            {locationItems.map((item, index) => (
              <LocationCardClone key={`loc-clone-2-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Primary Card with genuine Semantic Link and H3 heading
const LocationCard = ({ item }: { item: (typeof locationItems)[0] }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    margin: "0px -40% 0px -40%",
  });

  return (
    <Link
      ref={ref}
      href={item.href}
      aria-label={`Scrap and E-Waste Services in ${item.title}`}
      className={`group relative border rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-1 mx-3 w-[160px] md:w-48 flex-shrink-0 ${
        isInView
          ? "bg-[#127749] border-[#127749] shadow-xl scale-105"
          : "bg-white border-[#127749]/10 hover:bg-[#127749] scale-100"
      }`}
    >
      <div
        className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-3 transition-colors duration-500 ${
          isInView
            ? "bg-white/20 text-white"
            : "bg-[#127749]/10 text-[#127749] group-hover:bg-white/20 group-hover:text-white"
        }`}
      >
        <item.icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
      </div>
      <h3
        className={`text-base md:text-lg font-bold font-primary transition-colors duration-500 whitespace-normal ${
          isInView ? "text-white" : "text-neutral-900 group-hover:text-white"
        }`}
      >
        {item.title}
      </h3>
    </Link>
  );
};

// Decorative Clone for Marquee animation continuity (aria-hidden, not indexed as duplicate link)
const LocationCardClone = ({ item }: { item: (typeof locationItems)[0] }) => {
  return (
    <div
      aria-hidden="true"
      tabIndex={-1}
      onClick={() => {
        if (item.href && item.href !== "#") window.location.href = item.href;
      }}
      className="group relative border rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-1 mx-3 w-[160px] md:w-48 flex-shrink-0 bg-white border-[#127749]/10 hover:bg-[#127749] scale-100 cursor-pointer select-none"
    >
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-3 transition-colors duration-500 bg-[#127749]/10 text-[#127749] group-hover:bg-white/20 group-hover:text-white">
        <item.icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
      </div>
      <span className="text-base md:text-lg font-bold font-primary transition-colors duration-500 whitespace-normal text-neutral-900 group-hover:text-white">
        {item.title}
      </span>
    </div>
  );
};

export default Locations;
