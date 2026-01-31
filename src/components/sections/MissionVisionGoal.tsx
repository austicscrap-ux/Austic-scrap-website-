// src/components/sections/MissionVisionGoal.tsx
"use client";

import React from "react";
import { Target, Eye, Gem } from "lucide-react";
import { motion } from "framer-motion";

interface GoalItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const goalItems: GoalItemProps[] = [
  {
    icon: <Target className="w-10 h-10" />,
    title: "Mission",
    description:
      "At Austic Scrap, our mission is to transform the scrap recycling industry through high-quality, eco-friendly services. We assist businesses in effectively managing electronic waste and excess materials, promoting sustainability and conservation. With a commitment to quality and ethics, we strive to create greener future.",
  },
  {
    icon: <Eye className="w-10 h-10" />,
    title: "Vision",
    description:
      "Our vision is to lead India's scrap recycling industry with innovative solutions, environmental stewardship, and a customer-centric ethos. We envision a world of minimal waste and preserved resources. Austic Scrap strives to establish new standards, setting benchmarks for reliability and excellence.",
  },
  {
    icon: <Gem className="w-10 h-10" />,
    title: "Values",
    description:
      "Integrity, transparency, and trust anchor our values. We uphold environmental accountability, embracing sustainable methods to protect our planet. Customer focus propels us beyond expectations. Innovation is pivotal; we constantly refine practices for client service. Stringent standards ensure excellence in all endeavors.",
  },
];

const MissionVisionGoal: React.FC = () => {
  return (
    <section className="py-24 bg-amber-50/30 border-y border-amber-100/50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 lg:px-[86px] max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="text-[#127749] font-bold tracking-widest uppercase mb-4 text-sm font-secondary">
              Core Principles
            </h5>
            <h3 className="text-4xl lg:text-5xl font-bold font-primary text-neutral-900">
              Guiding Our <span className="text-[#127749]">Journey</span>
            </h3>
            <div className="w-24 h-1.5 bg-[#127749] mx-auto mt-6 rounded-full"></div>
          </motion.div>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 items-stretch">
          {goalItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="min-w-[85vw] sm:min-w-[45vw] md:min-w-0 snap-center group bg-white p-5 md:p-6 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-amber-100/50 relative overflow-hidden flex flex-col h-full"
            >
              {/* Card Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex p-2.5 rounded-lg bg-[#127749]/10 text-[#127749] group-hover:bg-[#127749] group-hover:text-white transition-all duration-300 transform group-hover:rotate-3 flex-shrink-0">
                    <div className="w-7 h-7 flex items-center justify-center">
                      {/* Directly render icon */}
                      {item.icon}
                    </div>
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold text-neutral-900 font-primary group-hover:text-[#127749] transition-colors m-0">
                    {item.title}
                  </h4>
                </div>

                <p className="text-neutral-600 leading-relaxed font-secondary font-medium text-base md:text-lg flex-grow">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionGoal;
