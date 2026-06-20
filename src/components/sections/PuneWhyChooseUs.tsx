"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";

const PuneWhyChooseUs: React.FC = () => {
  return (
    <SectionWrapper id="why-choose-us" className="bg-neutral-50/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
            Our Advantage
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-primary mb-8 text-neutral-900 leading-tight">
            Why Choose <span className="text-[#127749]">Austic?</span>
          </h2>
          <div className="w-16 h-1.5 bg-secondary mx-auto rounded-full mb-8" />
          <p className="text-neutral-600 text-lg md:text-xl leading-relaxed font-secondary">
            Austic draws on extensive experience in the recycling field to
            expertly handle a wide range of scrap materials in Pune. We
            prioritize eco-friendly practices, working to minimize the
            environmental impact of each item we process. Our process is
            characterized by openness, featuring fair rates and consistent
            updates throughout. We offer bespoke services tailored to each
            client&apos;s specific needs, aiming for a seamless and rewarding
            experience.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default PuneWhyChooseUs;
