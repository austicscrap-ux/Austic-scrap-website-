// src/components/sections/Locations.tsx
"use client";

import React from "react";
import Link from "next/link";
import {
  Landmark,
  Waves,
  Building,
  Buildings,
  Monitor,
  Building2,
  MapPin,
  Leaf,
} from "lucide-react";

interface LocationItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
}

const locationItems: LocationItemProps[] = [
  { href: "/delhi-e-waste", icon: <Landmark />, title: "Delhi" },
  { href: "/kolkata-e-waste", icon: <Waves />, title: "Kolkata" },
  { href: "/hyderabad-e-waste", icon: <Building />, title: "Hyderabad" },
  { href: "/bengaluru-e-waste", icon: <Buildings />, title: "Bengaluru" },
  { href: "/pune-e-waste", icon: <Monitor />, title: "Pune" },
  { href: "/mumbai-e-waste", icon: <Building2 />, title: "Mumbai" },
  { href: "/chennai-e-waste", icon: <MapPin />, title: "Chennai" },
  { href: "#", icon: <Leaf />, title: "Haryana" }, // Haryana has no specific link in original
];

const Locations: React.FC = () => {
  return (
    <section className="heritage-section py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center -mx-2">
          {locationItems.map((item, index) => (
            <div
              key={index}
              className="heritage-item mb-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 px-2"
            >
              {" "}
              {/* Responsive widths */}
              <Link
                href={item.href}
                className="block bg-white rounded-lg p-5 shadow-md transition-transform duration-300 hover:scale-105"
              >
                <div className="heritage-icon text-5xl text-grad-green-end-1 mb-4">
                  {item.icon}
                </div>
                <h5 className="heritage-title text-lg font-semibold text-text-black-dark">
                  {item.title}
                </h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
