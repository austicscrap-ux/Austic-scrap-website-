import React from "react";
import Hero from "@/components/ui/Hero";
import ServiceGrid from "@/components/ui/ServiceGrid";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import SectionWrapper from "@/components/common/SectionWrapper";
import { motion } from "framer-motion";

const MetalRecyclingPage = () => {
  return (
    <main>
      <Hero
        title="Metal Recycling Services"
        backgroundImage="/images/coppper crop.jpg"
      />

      <SectionWrapper id="metal-recycling-about" className="bg-white">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
              Eco-Friendly Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-primary font-bold text-neutral-900 mb-8 leading-tight">
              Expert Metal Scrap{" "}
              <span className="text-[#127749]">Recycling & Disposal</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#127749] mx-auto mb-10 rounded-full" />

            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-secondary">
              <p>
                Austic Scrap is a leader in metal recycling, handling ferrous
                and non-ferrous metals like copper, aluminum, brass, steel, and
                iron. We ensure that your metal scrap is processed and recycled
                responsibly, contributing to a circular economy and saving
                natural resources.
              </p>
              <p>
                We offer the{" "}
                <span className="text-[#127749] font-bold">
                  best market rates
                </span>{" "}
                based on daily metal prices. Whether you have industrial metal
                waste or construction scrap, we provide efficient collection and
                payment solutions across Kolkata and surrounding areas.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <ServiceGrid />
      <WhyChooseUs />
    </main>
  );
};

export default MetalRecyclingPage;
