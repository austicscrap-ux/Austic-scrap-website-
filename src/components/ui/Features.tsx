"use client";

import React, { useState, useEffect } from "react";
import { Recycle, Wrench, Building2, Truck } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";

const features = [
  {
    icon: Recycle,
    title: "E-Waste Recycling",
    desc: "Electronic waste recycling safely disposes of electronics and recovers valuable materials",
    colorClass: "red",
  },
  {
    icon: Wrench,
    title: "Workstation Dismantling",
    desc: "Workstation dismantling safely removes and recycles office setups efficiently.",
    colorClass: "green",
  },
  {
    icon: Building2,
    title: "Corporate Scrap",
    desc: "Corporate scrap services recycle office materials for eco-friendly disposal.",
    colorClass: "yellow",
  },
  {
    icon: Truck,
    title: "Office Shifting",
    desc: "Office shifting relocates furniture and equipment with minimal disruption.",
    colorClass: "blue",
  },
];

const Features = () => {
  const [activeCard, setActiveCard] = useState<number>(-1);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    // Auto-rotate cards on mobile
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % features.length);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <SectionWrapper
      id="feature"
      className="bg-amber-50/30 border-y border-amber-100/50"
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-1"
        >
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
            Since 2003
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-primary font-bold text-neutral-900 mb-6 leading-tight">
            Leading the Way in{" "}
            <span className="text-[#127749]">Eco-Friendly</span> Recycling
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-secondary">
              AUSTIC SCRAP is a premier scrap service provider founded with a
              mission to transform electronic waste management. For over 20
              years, we have been recognized as leaders in the recycling
              industry, committed to sustainable disposal and recovery.
            </p>
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-secondary">
              We specialize in sourcing and recycling from corporate offices,
              luxury hotels, institutions, and the banking sector. Our expert
              team works around the clock to guarantee rapid response times and
              smooth operations, ensuring maximum value for our clients.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-primary font-bold">
              <div className="w-10 h-10 rounded-full bg-[#127749]/10 flex items-center justify-center">
                <span className="text-[#127749]">✓</span>
              </div>
              <span>Certified Recycling</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold">
              <div className="w-10 h-10 rounded-full bg-[#127749]/10 flex items-center justify-center">
                <span className="text-[#127749]">✓</span>
              </div>
              <span>Instant Quotation</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - 4 Squares */}
        <div className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-2">
          <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-[500px] w-full aspect-square">
            {features.map((item, index) => {
              const isActive = isMobile && activeCard === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={!isMobile ? { scale: 1.05 } : {}}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative w-full h-full perspective-1000"
                >
                  <div
                    className={`relative w-full h-full transform-style-3d transition-all duration-700 rounded-2xl shadow-xl hover:shadow-2xl ${
                      isActive ? "rotate-y-180" : ""
                    } ${!isMobile ? "group-hover:rotate-y-180" : ""}`}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0 backface-hidden flex flex-col justify-center items-center text-white p-4 md:p-6 rounded-2xl overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(135deg, #127749 0%, #0e512e 100%)",
                      }}
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150" />
                      <item.icon
                        className={`mb-3 md:mb-6 text-white drop-shadow-lg transition-all duration-700 ${
                          isActive
                            ? "w-20 h-20 md:w-24 md:h-24"
                            : "w-12 h-12 md:w-16 md:h-16"
                        }`}
                      />
                      <h3 className="text-base md:text-xl lg:text-2xl font-bold text-center text-white font-primary uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <div className="mt-3 md:mt-4 w-12 h-1 bg-white/50 rounded-full" />
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-neutral-900 rounded-2xl flex flex-col justify-center items-center p-4 md:p-8 text-center border-2 border-[#127749]/30">
                      <item.icon
                        className={`mb-3 md:mb-4 text-[#127749] transition-all duration-700 ${
                          isActive
                            ? "w-16 h-16 md:w-20 md:h-20"
                            : "w-10 h-10 md:w-12 md:h-12"
                        }`}
                      />
                      <p className="text-neutral-300 text-xs md:text-sm lg:text-base font-medium leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="mt-4 md:mt-6 text-[#127749] font-bold text-xs md:text-sm tracking-widest uppercase">
                        Expert Solutions
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Features;
