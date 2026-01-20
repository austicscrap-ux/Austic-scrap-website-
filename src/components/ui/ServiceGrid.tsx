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
    <SectionWrapper id="services" className="bg-neutral-50">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-3xl md:text-4xl font-primary font-bold text-neutral-800 relative inline-block mb-4">
          Procurement Sources and Services
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary rounded-full"></span>
        </h3>
        <p className="text-neutral-600 max-w-2xl mx-auto mt-4 text-lg">
          We offer comprehensive scrap buying services for various sectors, ensuring best prices and eco-friendly disposal.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Link href={service.link} className="block group card-base h-full overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-200">
                  <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow text-center">
                <h4 className="text-xl font-bold mb-3 text-primary group-hover:text-primary-dark transition-colors font-primary line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
                  {service.title}
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed line-clamp-4 mb-4 flex-grow">
                  {service.desc}
                </p>
                <span className="inline-block text-secondary font-semibold text-sm border-b-2 border-transparent group-hover:border-secondary transition-all uppercase tracking-wide">
                  Learn More →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-16 relative z-10">
          <Link href="/contact" className="btn-secondary px-8 py-3 rounded-full">
              View All Services
          </Link>
      </div>
    </SectionWrapper>
  );
};

export default ServiceGrid;
