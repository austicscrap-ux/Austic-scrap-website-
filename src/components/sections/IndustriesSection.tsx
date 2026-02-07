"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Factory,
  RadioTower,
  Building2,
  Landmark,
  Coffee,
  Warehouse,
  Building,
  ArrowUpRight,
} from "lucide-react";

import SectionWrapper from "@/components/common/SectionWrapper";

const industries = [
  {
    title: "IT Service Sector",
    icon: Server,
    desc: "Comprehensive IT solutions for modern businesses.",
  },
  {
    title: "Manufacturing",
    icon: Factory,
    desc: "Optimized processes for the manufacturing industry.",
  },
  {
    title: "Telecom",
    icon: RadioTower,
    desc: "Advanced telecommunication infrastructure services.",
  },
  {
    title: "Public Sector",
    icon: Building2,
    desc: "Reliable services tailored for government agencies.",
  },
  {
    title: "Banking Sector",
    icon: Landmark,
    desc: "Secure and efficient banking technology solutions.",
  },
  {
    title: "Hospitality Industries",
    icon: Coffee,
    desc: "Enhancing guest experiences with smart solutions.",
  },
  {
    title: "Warehouse",
    icon: Warehouse,
    desc: "Streamlined logistics and warehouse management.",
  },
  {
    title: "Corporate Office",
    icon: Building,
    desc: "Efficient workspace solutions for corporate offices.",
  },
];

const IndustriesSection = () => {
  return (
    <SectionWrapper
      id="industries"
      className="bg-amber-50/30 border-y border-amber-100/50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
        {/* Left Column: Title & Description */}
        <div className="lg:col-span-1 lg:sticky lg:top-24">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-neutral-900 font-primary mb-6"
          >
            Industries We Serve
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-20 h-1.5 bg-[#127749] mb-6 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-neutral-600 font-secondary text-lg leading-relaxed"
          >
            Empowering diverse sectors with cutting-edge technology and
            sustainable solutions. From manufacturing to banking, we provide
            enterprise-grade services tailored to your specific industry needs.
          </motion.p>
        </div>

        {/* Right Column: Industries Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-2 rounded-lg border border-neutral-200 hover:border-[#127749]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center aspect-[16/10] justify-center max-w-[160px] mx-auto w-full"
              >
                <div className="mb-2 inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#127749]/5 text-[#127749] group-hover:bg-[#127749] group-hover:text-white transition-colors duration-300">
                  <industry.icon className="w-3.5 h-3.5" />
                </div>

                <h3 className="text-[10px] font-bold text-neutral-900 font-primary group-hover:text-[#127749] transition-colors duration-300 uppercase tracking-wide leading-tight px-1">
                  {industry.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
export default IndustriesSection;
