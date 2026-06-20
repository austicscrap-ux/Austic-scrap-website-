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

// Store the component itself, NOT the element, to fix the lint error and allow cleaner usage
const locationItems = [
  { href: "/delhi-e-waste", icon: Landmark, title: "Delhi" },
  { href: "/ewaste-recycling-kolkata", icon: Waves, title: "Kolkata" },
  { href: "/hyderabad-e-waste", icon: Building, title: "Hyderabad" },
  { href: "/bengaluru-e-waste", icon: Factory, title: "Bengaluru" },
  { href: "/pune-e-waste", icon: Monitor, title: "Pune" },
  { href: "/mumbai-e-waste", icon: Building2, title: "Mumbai" },
  { href: "/chennai-e-waste", icon: MapPin, title: "Chennai" },
  { href: "#", icon: Leaf, title: "Haryana" },
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

        {/* Mobile: Marquee Layout */}
        <div className="md:hidden flex w-full relative">
          <div className="flex animate-marquee-infinite whitespace-nowrap py-4">
            {/* Duplicated 3 times for seamless infinite loop */}
            {[...locationItems, ...locationItems, ...locationItems].map(
              (item, index) => (
                <MobileLocationCard key={`mobile-${index}`} item={item} />
              ),
            )}
          </div>
        </div>

        {/* Desktop: Horizontal Scroll (Marquee) Layout */}
        <div className="hidden md:flex w-full relative overflow-hidden">
          <div className="flex animate-marquee-infinite whitespace-nowrap py-6">
            {/* Duplicated 3 times for seamless infinite loop */}
            {[...locationItems, ...locationItems, ...locationItems].map(
              (item, index) => (
                <DesktopLocationCard
                  key={`desktop-scroll-${index}`}
                  item={item}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted component to handle individual InView state for Mobile
const MobileLocationCard = ({ item }: { item: (typeof locationItems)[0] }) => {
  const ref = React.useRef(null);
  // Active when element is in the horizontal center of the viewport
  const isInView = useInView(ref, {
    margin: "0px -40% 0px -40%", // Narrow active zone to simulate "selection"
  });

  return (
    <Link
      ref={ref}
      href={item.href}
      className={`inline-flex flex-col items-center justify-center mx-3 border rounded-2xl p-6 w-[160px] flex-shrink-0 transition-all duration-500 ${
        isInView
          ? "bg-[#127749] border-[#127749] scale-105 shadow-xl"
          : "bg-white border-[#127749]/10 scale-100"
      }`}
    >
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-colors duration-500 ${
          isInView ? "bg-white/20 text-white" : "bg-[#127749]/10 text-[#127749]"
        }`}
      >
        <item.icon className="w-7 h-7" strokeWidth={2} />
      </div>
      <h5
        className={`text-lg font-bold font-primary transition-colors duration-500 ${
          isInView ? "text-white" : "text-neutral-900"
        }`}
      >
        {item.title}
      </h5>
    </Link>
  );
};

// Extracted component to handle individual InView state for Desktop
const DesktopLocationCard = ({ item }: { item: (typeof locationItems)[0] }) => {
  const ref = React.useRef(null);
  // Broader active zone for desktop since it's wider
  const isInView = useInView(ref, {
    margin: "0px -40% 0px -40%",
  });

  return (
    <Link
      ref={ref}
      href={item.href}
      className={`group relative border rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-1 mx-3 w-48 flex-shrink-0 ${
        isInView
          ? "bg-[#127749] border-[#127749] shadow-lg scale-105"
          : "bg-[#127749]/5 border-[#127749]/10 hover:bg-[#127749] scale-100"
      }`}
    >
      <div
        className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-500 ${
          isInView
            ? "bg-white/20 text-white"
            : "bg-[#127749]/20 text-[#127749] group-hover:bg-white/20 group-hover:text-white"
        }`}
      >
        <item.icon className="w-6 h-6" strokeWidth={2} />
      </div>
      <h5
        className={`text-base font-bold font-primary transition-colors duration-500 whitespace-normal ${
          isInView ? "text-white" : "text-neutral-900 group-hover:text-white"
        }`}
      >
        {item.title}
      </h5>
    </Link>
  );
};

export default Locations;
