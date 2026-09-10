"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";

interface HeroProps {
  title?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Office Scrap Buyers & E-Waste Recycling in Kolkata",
  backgroundImage = "/images/home-page.jpg",
}) => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden py-20 lg:py-0">
      {/* Background with advanced overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-transparent z-0"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-[86px] relative z-10 pt-20 pb-12 lg:py-12">
        <div className="w-full flex flex-col items-center justify-center text-center mx-auto">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col items-center"
          >
            <h1 className="font-primary font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 lg:mb-5 leading-tight text-[#00FB82] max-w-4xl">
              {title}
            </h1>
            <p className="w-full text-base sm:text-lg md:text-xl text-neutral-200 mb-5 sm:mb-6 lg:mb-8 font-secondary leading-relaxed font-medium">
              Austic Scrap is your trusted partner for corporate scrap management and certified e-waste recycling across Kolkata and Pan-India. We offer{" "}
              <span className="text-accent">fair market value</span> and{" "}
              <span className="text-secondary">fast doorstep pickup</span> for all
              corporate, IT, and industrial assets.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
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
            <div className="flex justify-center">
              <a
                href={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/austicscrap"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  const url = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/austicscrap";
                  if (typeof window !== "undefined" && (window as any).Calendly) {
                    (window as any).Calendly.initPopupWidget({ url });
                  }
                }}
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-[#127749] hover:bg-[#0e5e3a] text-white font-bold text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-[#127749]"
              >
                <span>Book Free Consultation</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
