"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const EwasteHero: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Opacity for 'Deep' Look */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Ewsate greenbackground and right logo.png"
          alt="E-waste Recycling & Disposal"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="container mx-auto px-4 lg:px-[86px] relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-green-400 uppercase bg-green-900/30 border border-green-500/30 rounded-full font-secondary backdrop-blur-md">
            Sustainable Solutions
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-primary text-white leading-tight max-w-5xl mx-auto tracking-tight drop-shadow-xl">
            Responsible E-Waste{" "}
            <span className="text-[#4CAF50]">Recycling & Disposal</span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto font-secondary leading-relaxed font-light mb-8">
            Leading the way in secure and environmentally friendly electronic
            waste management. Certified data destruction and sustainable
            material recovery for a cleaner future.
          </p>

          {/* Decorative Divider Logic from PageHeader */}
          <div className="w-24 h-1.5 bg-[#4CAF50] mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(76,175,80,0.5)]" />

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/">
              <Button className="px-10 py-6 h-auto bg-white text-[#127749] font-bold rounded-full hover:bg-[#127749] hover:text-white transition-all shadow-xl text-lg font-secondary border-2 border-transparent hover:border-white">
                Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="px-10 py-6 h-auto bg-[#127749] text-white font-bold rounded-full hover:bg-white hover:text-[#127749] transition-all shadow-xl text-lg font-secondary border-2 border-[#127749]">
                Sale Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bounce Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20 opacity-70">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default EwasteHero;
