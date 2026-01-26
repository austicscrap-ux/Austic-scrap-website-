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

      <div className="container mx-auto px-4 lg:px-[86px] relative z-10 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-3/5 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full font-secondary">
              Premium Scrap Solutions
            </div>
            <h1 className="font-primary font-bold text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-6 leading-tight text-white">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-200 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 font-secondary leading-relaxed font-medium">
              Leading the way in professional scrap management. We offer{" "}
              <span className="text-accent">fair market value</span> and{" "}
              <span className="text-secondary">fast pickup</span> for all
              corporate and industrial assets.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
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

          {/* Right Form - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
          >
            <div className="bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] w-full max-w-md border border-white/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-accent"></div>

              <h2 className="text-2xl font-primary font-bold mb-1 text-neutral-900">
                Get a Free Quote
              </h2>
              <p className="text-neutral-500 font-secondary mb-5 text-sm">
                Quick estimation for your scrap assets
              </p>

              <form
                id="contactForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message sent! (Frontend only mode)");
                }}
                className="space-y-3"
              >
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#127749] ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#127749] focus:border-transparent outline-none transition-all placeholder-neutral-400 text-neutral-900 font-medium text-sm"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#127749] ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#127749] focus:border-transparent outline-none transition-all placeholder-neutral-400 text-neutral-900 font-medium text-sm"
                    name="number"
                    placeholder="Enter your mobile"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#127749] ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#127749] focus:border-transparent outline-none transition-all placeholder-neutral-400 text-neutral-900 font-medium text-sm"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#127749] hover:bg-black text-white font-bold text-base shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 mt-3"
                >
                  Request Estimation →
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
