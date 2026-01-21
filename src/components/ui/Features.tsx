"use client";

import React from "react";
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
  return (
    <SectionWrapper id="feature" className="bg-amber-50/30 border-y border-amber-100/50">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
            Since 2003
          </div>
          <h2 className="text-4xl md:text-5xl font-primary font-bold text-neutral-900 mb-8 leading-tight">
            Leading the Way in{" "}
            <span className="text-[#127749]">Eco-Friendly</span> Recycling
          </h2>
          <div className="space-y-6">
            <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
              AUSTIC SCRAP is a premier scrap service provider founded with a
              mission to transform electronic waste management. For over 20
              years, we have been recognized as leaders in the recycling
              industry, committed to sustainable disposal and recovery.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
              We specialize in sourcing and recycling from corporate offices,
              luxury hotels, institutions, and the banking sector. Our expert
              team works around the clock to guarantee rapid response times and
              smooth operations, ensuring maximum value for our clients.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
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
        <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-[500px] w-full aspect-square">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative w-full h-full perspective-1000"
              >
                <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  {/* Front */}
                  <div
                    className="absolute inset-0 backface-hidden flex flex-col justify-center items-center text-white p-6 rounded-2xl overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #127749 0%, #0e512e 100%)",
                    }}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150" />
                    <item.icon className="w-16 h-16 mb-6 text-[#127749]" />
                    <h3 className="text-xl md:text-2xl font-bold text-center text-white font-primary uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <div className="mt-4 w-12 h-1 bg-[#127749]/50 rounded-full" />
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-neutral-900 rounded-2xl flex flex-col justify-center items-center p-8 text-center border-2 border-primary/20">
                    <p className="text-neutral-300 text-sm md:text-lg font-medium leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="mt-6 text-[#127749] font-bold text-sm tracking-widest uppercase">
                      Expert Solutions
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Features;
