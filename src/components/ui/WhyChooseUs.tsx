"use client";

import React from "react";
import { Factory, IndianRupee, MapPin, Recycle } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";

const points = [
  {
    icon: Factory,
    title: "Focused on Scrap Buying for Businesses",
    desc: "Our services are designed with the commercial sectors in mind. We provide efficient scrap buying services to cater specifically to the Kolkata market.",
  },
  {
    icon: IndianRupee,
    title: "Best Prices for Scrap",
    desc: "At Austic Scrap, we offer competitive prices for old air conditioning units, ensuring that you receive the best value based on Kolkata’s market rates.",
  },
  {
    icon: MapPin,
    title: "Hassle-Free Pickup Across Kolkata",
    desc: "No matter where your business is located, whether in the heart of the city or outskirts, we handle the entire process including pickup, transport, and payment.",
  },
  {
    icon: Recycle,
    title: "Environmentally Responsible Recycling",
    desc: "We follow strict environmental guidelines for recycling and disposal, ensuring that all scrap is handled with minimal impact on the ecosystem.",
  },
];

const WhyChooseUs = () => {
  return (
    <SectionWrapper
      id="why-choose-us"
      className="bg-amber-50/30 border-y border-amber-100/50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-widest text-white uppercase bg-[#127749] rounded-full font-secondary">
              Why Us
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-primary font-bold text-neutral-900 mb-4 md:mb-6 leading-tight">
              Why Choose Austic Scrap Company in Kolkata?
            </h2>
            <div className="w-24 h-1.5 bg-[#127749] mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#127749]/5 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-[#127749]/10 hover:bg-[#127749] transition-all duration-500 hover:-translate-y-2 flex items-start gap-4 md:gap-6"
            >
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#127749]/20 flex items-center justify-center text-[#127749] group-hover:bg-[#127749] group-hover:text-white transition-all duration-500">
                <point.icon className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 text-neutral-900 group-hover:text-white transition-colors font-primary">
                  {point.title}
                </h3>
                <p className="text-sm md:text-base text-neutral-600 group-hover:text-white/90 transition-colors leading-relaxed font-secondary">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;
