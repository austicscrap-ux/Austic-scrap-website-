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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent -translate-y-1/2 z-0" />

        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="group bg-white p-10 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-100 flex flex-col items-center text-center h-full hover:-translate-y-4">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-neutral-900 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:bg-[#127749] transition-colors duration-500">
                0{item.step}
              </div>

              <div className="w-24 h-24 rounded-[30px] bg-amber-100/50 flex items-center justify-center mb-8 group-hover:bg-[#127749] transition-all duration-500 group-hover:rotate-[10deg] shadow-inner">
                <item.icon className="w-12 h-12 text-[#127749] group-hover:text-white transition-colors duration-500" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-neutral-900 font-primary group-hover:text-[#127749] transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed font-secondary font-medium">
                {item.desc}
              </p>

              <div className="mt-8 overflow-hidden h-1 w-0 group-hover:w-full bg-[#127749]/20 transition-all duration-700 rounded-full">
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
