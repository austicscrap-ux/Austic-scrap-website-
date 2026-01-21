"use client";

import React from "react";
import { Building2, Landmark, Hotel, Network } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";

const items = [
  {
    icon: Building2,
    title: "Corporate Office Scrap",
    desc: "Purchasing furniture and electronic scrap from corporate offices for seamless disposal.",
  },
  {
    icon: Landmark,
    title: "Banking Sector Scrap",
    desc: "Acquiring Workstation scrap from banks, we ensure secure and responsible disposal services.",
  },
  {
    icon: Hotel,
    title: "Luxury Hotel Scrap",
    desc: "Collecting old furniture and used materials from luxury hotels, we prioritize eco-friendly practices.",
  },
  {
    icon: Network,
    title: "Organizational Scrap",
    desc: "We buy various scrap from organizations and offer thorough, eco-friendly removal.",
  },
];

const WorkingProcess = () => {
  return (
    <SectionWrapper id="working-process" className="bg-white">
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-secondary uppercase bg-secondary/10 rounded-full font-secondary">
            Our Sectors
          </div>
          <h2 className="text-4xl md:text-5xl font-primary font-bold text-neutral-900 mb-6 leading-tight">
            Who We <span className="text-secondary">Serve</span>
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
            We provide seamless scrap disposal and recycling services across
            diverse industries, from multinational corporations to luxury
            hospitality.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="group h-full bg-white p-10 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute top-0 left-0 w-2 h-0 bg-secondary transition-all duration-500 group-hover:h-full" />

              <div className="icon-box w-20 h-20 rounded-2xl bg-secondary/5 text-secondary text-4xl mb-8 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                <item.icon className="w-10 h-10" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 text-neutral-900 font-primary group-hover:text-secondary transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed font-secondary">
                {item.desc}
              </p>

              <div className="mt-8 pt-8 border-t border-neutral-100 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-secondary font-bold text-xs tracking-widest uppercase">
                  Premium Partner
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WorkingProcess;
