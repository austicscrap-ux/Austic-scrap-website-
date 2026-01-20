"use client";

import React from "react";
import { Factory, IndianRupee, MapPin, Recycle } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  {
    icon: Factory,
    title: "Focused on Scrap Buying for Businesses",
    desc: "Our services are designed with the commercial sectors in mind. We provide efficient scrap buying services to cater specifically to the Kolkata market.",
  },
  {
    icon: IndianRupee,
    title: "Best Prices for Scrap",
    desc: "At Austic Scrap, we offer competitive prices for old air conditioning units, ensuring that you receive the best value based on Kolkata’s market rates.",
  },
  {
    icon: MapPin,
    title: "Hassle-Free Pickup Across Kolkata",
    desc: "No matter where your business is located, whether in the heart of the city or outskirts, we handle the entire process including pickup, transport, and payment.",
  },
  {
    icon: Recycle,
    title: "Environmentally Responsible Recycling",
    desc: "We follow strict environmental guidelines for recycling and disposal, ensuring that all scrap is handled with minimal impact on the ecosystem.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="why-choose-austic-scrap-company-section py-[60px] px-5 max-w-[1200px] mx-auto my-[50px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] rounded-xl transition-all duration-300"
      style={{
        background: "linear-gradient(135deg, #127749, #54b888, #6eba95)",
      }}
    >
      <div className="why-choose-austic-scrap-company-container max-w-[1100px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="why-choose-austic-scrap-company-title text-[32px] text-[#2c3e50] text-center mb-10 font-bold bg-white/10 p-2 rounded inline-block w-full backdrop-blur-sm shadow-sm md:bg-transparent md:backdrop-blur-none md:shadow-none md:text-white"
        >
          Why Choose Austic Scrap Company in Kolkata?
        </motion.h2>
        <div className="why-choose-austic-scrap-company-content flex flex-wrap justify-between -m-2.5">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="why-choose-austic-scrap-company-point bg-white p-5 rounded-[10px] flex-1 min-w-[300px] md:basis-[calc(50%-20px)] m-2.5 flex items-start shadow-sm transition-all duration-300 cursor-default group hover:-translate-y-[5px]"
              style={{
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "calc(50% - 20px)",
              }}
            >
              <div className="why-choose-austic-scrap-company-icon text-[40px] text-secondary mr-5 group-hover:text-white transition-colors duration-300">
                <point.icon />
              </div>
              <div className="why-choose-austic-scrap-company-text">
                <h3 className="text-xl text-[#2c3e50] mb-2.5 group-hover:text-white transition-colors duration-300 font-secondary font-bold">
                  {point.title}
                </h3>
                <p className="text-base text-gray-600 group-hover:text-white transition-colors duration-300">
                  {point.desc}
                </p>
              </div>
              {/* Inline style for hover effect logic is complex in React, managed via group-hover classes */}
              <style jsx>{`
                .why-choose-austic-scrap-company-point:hover {
                  background: linear-gradient(135deg, #1e824c, #145d35);
                  color: white;
                }
              `}</style>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
