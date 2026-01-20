"use client";

import React from "react";
import { Building2, Landmark, Hotel, Network } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="working-area py-12 bg-white">
      <div className="container1 w-full px-5 mx-auto -mt-10 md:-mt-[40px] max-w-7xl">
        <div className="flex flex-wrap -mx-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8"
            >
              <div className="single-working-item text-center bg-white p-5 rounded-[10px] shadow-[0_40px_60px_rgba(12,127,52,0.1)] opacity-90 relative z-10 overflow-hidden transition-all duration-300 hover:-translate-y-2.5 hover:shadow-lg hover:z-50 hover:bg-secondary hover:text-wheat group h-full">
                <div className="icon-box text-[50px] mb-[15px] text-secondary transition-colors duration-300 group-hover:text-wheat flex justify-center">
                  <item.icon />
                </div>
                <div className="text-box">
                  <h5 className="text-xl mb-2.5 text-black group-hover:text-wheat font-secondary font-medium">
                    {item.title}
                  </h5>
                  <p className="text-black group-hover:text-wheat text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
