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
    <SectionWrapper id="why-choose-us" className="bg-white">
      <div
        className="rounded-[40px] px-8 py-16 md:py-24 overflow-hidden relative shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #127749 0%, #0e512e 100%)",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full font-secondary">
                Why Us
              </div>
              <h2 className="text-3xl md:text-5xl font-primary font-bold text-white mb-6 leading-tight">
                Why Choose Austic Scrap Company in Kolkata?
              </h2>
              <div className="w-24 h-1.5 bg-accent mx-auto rounded-full" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white transition-all duration-500 hover:-translate-y-2 flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent group-hover:bg-[#127749] group-hover:text-white transition-all duration-500">
                  <point.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-black transition-colors font-primary">
                    {point.title}
                  </h3>
                  <p className="text-white/80 group-hover:text-neutral-600 transition-colors leading-relaxed font-secondary">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;
