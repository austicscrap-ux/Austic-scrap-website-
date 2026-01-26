// src/components/sections/MumbaiScrapHero.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const MumbaiScrapHero: React.FC = () => {
  return (
    <section
      id="hero"
      className="hero-section relative w-full h-[40vh] min-h-[300px] mt-20 flex items-center justify-center text-center overflow-hidden bg-gray-900"
    >
      {/* Background Image */}
      <Image
        src="/images/Ewsate greenbackground and right logo.png"
        alt="Office Scrap Collection in Mumbai"
        fill
        className="object-cover -z-10 opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      <div className="hero-content relative z-10 p-4 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-josefin-sans">
          Eco-Friendly Scrap Collection and Recycling in Mumbai for a
          Sustainable Future
        </h1>
        <div className="flex justify-center space-x-4 mt-6">
          <Link href="/">
            <Button
              variant="default"
              className="main-btn border-white text-white"
            >
              Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="default"
              className="main-btn border-white text-white"
            >
              Sale Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MumbaiScrapHero;
