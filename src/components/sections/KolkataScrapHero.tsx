// src/components/sections/KolkataScrapHero.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import SectionWrapper from "@/components/common/SectionWrapper";

const KolkataScrapHero: React.FC = () => {
  return (
    <section className="relative w-full h-[40vh] min-h-[300px] mt-20 flex items-center justify-center overflow-hidden bg-gray-900">
      <Image
        src="/images/Ewsate greenbackground and right logo.png"
        alt="Office Scrap Collection in Kolkata"
        fill
        className="object-cover opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full font-secondary">
            Scrap Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-primary text-white leading-tight max-w-5xl mx-auto">
            Professional Office Scrap Buyers &{" "}
            <span className="text-secondary">Recycling in Kolkata</span>
          </h1>
          <p className="text-neutral-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto font-secondary leading-relaxed">
            Premium scrap management for corporate offices, banks, and IT parks
            across Kolkata. Fair prices, instant quotes, and responsible
            disposal.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <Link href="/">
              <Button className="px-10 py-4 bg-white text-primary font-bold rounded-full hover:bg-secondary hover:text-white transition-all shadow-xl text-lg">
                Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="px-10 py-4 bg-secondary text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all shadow-xl text-lg">
                Sale Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default KolkataScrapHero;
