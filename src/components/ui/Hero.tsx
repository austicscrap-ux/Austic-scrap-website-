"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";

interface HeroProps {
  title?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Office Scrap Buyers in Kolkata",
  backgroundImage = "/images/home page.jpg",
}) => {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Background with advanced overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-transparent z-0"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-[86px] relative z-10 pt-28 pb-12 lg:py-12">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col items-center"
          >
            <div className="inline-block px-3 py-1 mb-3 text-xs sm:text-sm sm:px-4 sm:py-1.5 sm:mb-4 font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full font-secondary">
              Premium Scrap Solutions
            </div>
            <h1 className="font-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 lg:mb-6 leading-tight text-white">
              {title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-200 mb-5 sm:mb-6 lg:mb-8 max-w-2xl mx-auto font-secondary leading-relaxed font-medium">
              Leading the way in professional scrap management. We offer{" "}
              <span className="text-accent">fair market value</span> and{" "}
              <span className="text-secondary">fast pickup</span> for all
              corporate and industrial assets.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-white font-bold text-sm uppercase tracking-wider font-secondary">
                  Market Best Rates
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-white font-bold text-sm uppercase tracking-wider font-secondary">
                  Eco-Friendly Disposal
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
