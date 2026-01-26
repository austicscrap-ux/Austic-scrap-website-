"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";

const services = [
  {
    title: "Air Conditioner",
    desc: "Specializing in buying used AC units from commercial buildings, we ensure hassle-free pickup and responsible recycling.",
    img: "/images/Air con-compressed.jpg",
    link: "/ac",
  },
  {
    title: "Electrical Scrap",
    desc: "Purchase old office electric scrap such as wires cables and used electronic device from caproate office",
    img: "/images/electrical scrap-compressed.jpg",
    link: "/electrical",
  },
  {
    title: "Metal Scrap",
    desc: "We specialize in purchasing and recycling various types of metal scrap, including aluminum, copper, and steel in Kolkata",
    img: "/images/coppper crop.jpg",
    link: "/metal",
  },
  {
    title: "Battery Recycling",
    desc: "We specialize in purchasing workstations and office furniture from corporate, institution, and banking sector",
    img: "/images/bettery recycling.jpeg",
    link: "/battery",
  },
  {
    title: "Corporate Scrap",
    desc: "Our Kolkata-based scrap company buy corporate office scrap, ensuring eco-friendly disposal and top prices.",
    img: "/images/office furniture scrap.jpeg",
    link: "/corporate",
  },
  {
    title: "Old DG Generator",
    desc: "We buy old office furniture like outdated desk, Office Scrap, cabinets, office chair to minimize office waste effectively",
    img: "/images/dg set crop.jpg",
    link: "/old-dg-generator",
  },
  {
    title: "IT Asset Disposition",
    desc: "IT Asset Disposition services prioritize security for IT disposal, ensuring the best price and offering the best service in Kolkata",
    img: "/images/IT Asset Disposition Buyer.jpeg",
    link: "/asset-disposition",
  },
  {
    title: "E-waste Recycling",
    desc: "Buy corporate Office E-waste item such as computers and Laptop for recycling ensuring data security and environmental protection",
    img: "/images/e-waste-recycling-kolkata.jpeg",
    link: "/kolkata-e-waste",
  },
];

const ServiceGrid = () => {
  return (
    <SectionWrapper
      id="services"
      className="bg-amber-50/30 border-y border-amber-100/50"
    >
      <div className="flex flex-col items-center text-center mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
            Our Expertise
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-primary font-bold text-neutral-900 mb-4 md:mb-6 leading-tight">
            Procurement Sources &{" "}
            <span className="text-[#127749]">Specialized Services</span>
          </h2>
          <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-secondary">
            We provide specialized scrap management and recycling solutions for
            high-end commercial sectors, ensuring the best value and absolute
            environmental compliance.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group h-full"
          >
            <Link
              href={service.link}
              className="block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 h-full border border-neutral-200 flex flex-col hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white font-bold text-sm tracking-widest uppercase flex items-center">
                    <span>Learn More</span>
                    <span className="ml-1 text-[#127749]">→</span>
                  </span>
                </div>
              </div>

              <div className="p-3 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-neutral-900 font-primary line-clamp-1 group-hover:text-[#127749] transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3 mb-1 font-secondary flex-grow">
                  {service.desc}
                </p>
                <div className="w-full h-px bg-neutral-200 mt-2" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8 md:mt-12 mb-8 relative z-10">
        <Link
          href="/ewaste"
          className="inline-flex items-center justify-center px-8 py-3 text-base md:text-lg font-semibold text-white bg-[#127749] rounded-md hover:bg-[#0e512e] transition-shadow duration-150 shadow-md hover:shadow-lg"
        >
          Explore All Services
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default ServiceGrid;
