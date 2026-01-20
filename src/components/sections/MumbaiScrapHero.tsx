// src/components/sections/MumbaiScrapHero.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const MumbaiScrapHero: React.FC = () => {
  return (
    <section id="hero" className="hero-section relative w-full h-96 flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/Ewsate greenbackground and right logo.png"
        alt="Office Scrap Collection in Mumbai"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}

      <div className="hero-content relative z-10 p-4 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-josefin-sans">
          Eco-Friendly Scrap Collection and Recycling in Mumbai for a Sustainable Future
        </h1>
        <div className="flex justify-center space-x-4 mt-6">
          <Link href="/">
            <Button variant="default" className="main-btn border-white text-white">
              Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="default" className="main-btn border-white text-white">
              Sale Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MumbaiScrapHero;
