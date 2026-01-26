// src/components/sections/TeamSupport.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TeamSupportItemProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean; // For alternating layout
}

const teamSupportItems: TeamSupportItemProps[] = [
  {
    title: "TEAM WORK",
    description:
      "Our team is dedicated to providing the best service in the market to ensure customer satisfaction. Our team will collect your scrap with just one call, right from your location—whether it's at your doorstep, house, office, or factory/company.",
    imageSrc: "/images/team%20(1).png",
    imageAlt: "Team Work",
    reverse: false,
  },
  {
    title: "LABOUR & WORKER",
    description:
      "We have skilled labor and hardworking workers dedicated to providing the best service to our clients in the market. In addition to our labor team, we have an experienced team that plays a vital role in planning, execution, and monitoring of projects to ensure timely completion.",
    imageSrc: "/images/team%20(3).png",
    imageAlt: "Labour & Worker",
    reverse: true, // This item will have the image on the left
  },
  {
    title: "24 * 7 - SUPPORT",
    description:
      "Austic has a highly experienced team that works around the clock to provide fast and efficient service. Our team will collect your scrap with just one call from your location. Contact us to sell any type of scrap and quickly turn it into cash!",
    imageSrc: "/images/team%20(2).png",
    imageAlt: "24/7 Support",
    reverse: false,
  },
];

const TeamSupport: React.FC = () => {
  return (
    <section className="bg-amber-50/30 py-16 lg:py-20 relative overflow-hidden border-y border-amber-100/50">
      <div className="container mx-auto px-4 lg:px-[86px] max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-neutral-900 font-primary mb-3"
          >
            Our <span className="text-[#127749]">Operations</span>
          </motion.h2>
          <div className="w-20 h-1 bg-[#127749] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamSupportItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100/50 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-40 w-full overflow-hidden bg-white border-b border-amber-100/30">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content Container */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-2">
                  <h4 className="text-xl font-bold text-neutral-900 font-primary uppercase border-l-4 border-[#127749] pl-3">
                    {item.title}
                  </h4>
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed font-secondary font-medium text-justify flex-1">
                  {item.description}
                </p>

                {/* Decorative Bottom Bar */}
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-[#127749] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSupport;
