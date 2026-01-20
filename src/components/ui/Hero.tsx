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
  backgroundImage = "/images/home page.jpg" 
}) => {
  return (
    <section id="home" className="relative text-white">
      <div 
        className="relative bg-cover bg-center bg-no-repeat min-h-[600px] lg:min-h-[700px] flex items-center"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="font-primary font-bold text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight text-white drop-shadow-md">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-neutral-200 mb-8 max-w-lg mx-auto md:mx-0 font-secondary leading-relaxed">
                 We are the leading scrap buyers in Kolkata, offering best prices for corporate and industrial scrap.
              </p>
            </div>

            {/* Right Form */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full border-t-4 border-primary">
                <h2 className="text-2xl font-primary font-bold mb-6 text-neutral-800 text-center">Get a Free Quote</h2>
                <form id="contactForm" onSubmit={(e) => { e.preventDefault(); alert("Message sent! (Frontend only mode)"); }} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      className="w-full p-3 bg-neutral-100 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-neutral-500 text-neutral-800"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="w-full p-3 bg-neutral-100 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-neutral-500 text-neutral-800"
                      name="number"
                      placeholder="Your Mobile"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="w-full p-3 bg-neutral-100 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-neutral-500 text-neutral-800"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <Button type="submit" variant="default" size="lg" className="w-full">
                    Sell Now
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
