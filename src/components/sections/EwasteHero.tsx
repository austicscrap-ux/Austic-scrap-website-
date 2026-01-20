// src/components/sections/EwasteHero.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const EwasteHero: React.FC = () => {
  return (
    <section id="hero" className="hero-section relative w-full h-96 flex items-center justify-center text-center overflow-hidden">
      {/* Background Image - original used an <img> tag with a hero-image class, which suggests it might have been positioned */}
      <Image
        src="/images/Ewsate greenbackground and right logo.png"
        alt="E-waste recycling banner"
        fill
        className="object-cover -z-10" // Use negative z-index to place behind content
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}

      <div className="hero-content relative z-10 p-4 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-josefin-sans">Your Headline Here</h1>
        <p className="text-lg md:text-xl mb-6">Your subtext or description goes here. Make it catchy and informative.</p>
        <Link href="#">
          <Button variant="default" className="main-btn border-white text-white">
            Learn More
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default EwasteHero;
