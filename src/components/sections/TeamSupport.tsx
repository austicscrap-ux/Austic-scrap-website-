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
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-[86px] max-w-7xl">
        {teamSupportItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-32 mb-32 last:mb-0
              ${item.reverse ? "md:flex-row-reverse" : ""}`}
          >
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-8">
              <div className="relative">
                <h4 className="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight font-josefin-sans leading-tight">
                  {item.title.split(" ").map((word, i) => (
                    <span
                      key={i}
                      className={
                        word === "&" || word === "*" || word === "-"
                          ? "text-green-600"
                          : ""
                      }
                    >
                      {word}{" "}
                    </span>
                  ))}
                </h4>
                {/* Gemini Added: Stylish underline */}
                <span
                  className="block h-2 w-24 bg-green-500 rounded-full mt-4"
                  title="Added by Gemini"
                ></span>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed text-justify lg:text-left font-light">
                {item.description}
              </p>
            </div>

            {/* Image Content */}
            <div className="w-full md:w-1/2">
              <div className="relative group perspective-1000">
                {/* Gemini Added: Decorative backdrop for image */}
                <div
                  className={`absolute top-0 ${item.reverse ? "-left-6" : "-right-6"} w-full h-full bg-green-50 rounded-[2.5rem] -z-10 transition-transform duration-700 group-hover:scale-105`}
                  title="Added by Gemini"
                ></div>

                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl transition-all duration-700 transform group-hover:-translate-y-4 bg-white border-4 border-white">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={800}
                    height={600}
                    quality={95}
                    style={{ width: "100%", height: "auto" }}
                    className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Gemini Added: Shine effect on hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    title="Added by Gemini"
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSupport;
