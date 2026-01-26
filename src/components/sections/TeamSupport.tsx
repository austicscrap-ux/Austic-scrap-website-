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
    <section className="bg-gray-50 py-16 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-[86px] max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 font-josefin-sans mb-4"
          >
            Our <span className="text-green-600">Operations</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamSupportItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-40 w-full overflow-hidden bg-white border-b border-gray-50">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content Container */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-2">
                  <h4 className="text-xl font-bold text-gray-900 font-josefin-sans uppercase border-l-4 border-green-500 pl-3">
                    {item.title}
                  </h4>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed font-light text-justify flex-1">
                  {item.description}
                </p>

                {/* Decorative Bottom Bar */}
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-green-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSupport;
