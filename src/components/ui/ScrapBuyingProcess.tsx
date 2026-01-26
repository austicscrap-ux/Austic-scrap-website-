"use client";

import React from "react";
import { User, Scale, FileText, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";

const steps = [
  {
    icon: User,
    step: 1,
    title: "Client Meeting",
    desc: "First step of our scrap buying process is to meet clients and discuss the overall requirements",
  },
  {
    icon: Scale,
    step: 2,
    title: "Evaluation of Scrap",
    desc: "Second step is to evaluate scrap price as per standards that will suit both parties’ best",
  },
  {
    icon: FileText,
    step: 3,
    title: "Quotation Subimt",
    desc: "In the third step, we send the best quotation after real-time/spot evaluation of scrap price",
  },
  {
    icon: Handshake,
    step: 4,
    title: "Execution",
    desc: "We execute the scrap moving process in 48 hours depending on the work volume",
  },
];

const ScrapBuyingProcess = () => {
  return (
    <SectionWrapper
      id="process"
      className="bg-amber-50/30 border-y border-amber-100/50"
    >
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
            Our Workflow
          </div>
          <h2 className="text-4xl md:text-5xl font-primary font-bold text-neutral-900 mb-6 leading-tight">
            Our <span className="text-[#127749]">Scrap Buying</span> Process
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
            Experience a streamlined, transparent, and fair process perfected
            over 20 years to ensure you get the best value with zero hassle.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent -translate-y-1/2 z-0" />

        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="group bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100 flex flex-col items-center text-center h-full hover:-translate-y-2">
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-neutral-900 text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-lg group-hover:bg-[#127749] transition-colors duration-500">
                0{item.step}
              </div>

              <div className="w-14 h-14 rounded-xl bg-amber-100/50 flex items-center justify-center mb-4 group-hover:bg-[#127749] transition-all duration-500 group-hover:rotate-[10deg] shadow-inner">
                <item.icon className="w-7 h-7 text-[#127749] group-hover:text-white transition-colors duration-500" />
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-3 text-neutral-900 font-primary group-hover:text-[#127749] transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-secondary font-medium flex-grow">
                {item.desc}
              </p>

              <div className="mt-4 overflow-hidden h-1 w-0 group-hover:w-full bg-[#127749]/20 transition-all duration-700 rounded-full">
                <div className="h-full w-1/3 bg-[#127749] animate-marquee" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ScrapBuyingProcess;
