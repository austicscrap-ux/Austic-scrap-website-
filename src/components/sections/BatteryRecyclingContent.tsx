"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/Button";

const BatteryRecyclingContent: React.FC = () => {
  const batteryTypes = [
    {
      title: "Lead-Acid Batteries",
      description:
        "Commonly used in vehicles and backup power systems. We recover valuable lead and ensure safe disposal of sulfuric acid, following strict environmental protocols.",
    },
    {
      title: "Nickel-Cadmium Batteries",
      description:
        "Found in power tools and medical equipment. Our specialized recycling process extracts nickel and cadmium for reuse while preventing toxic leaks.",
    },
    {
      title: "Lithium-Ion Batteries",
      description:
        "Used in modern electronics and EVs. We utilize advanced techniques to recover lithium, cobalt, and other critical metals for the next generation of energy storage.",
    },
    {
      title: "Alkaline Batteries",
      description:
        "Common household batteries contain zinc and manganese. We provide bulk recycling solutions to divert these materials from landfills and recover useful minerals.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}

      {/* Main Content */}
      <SectionWrapper id="about-battery-recycling" className="bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
              Responsible Disposal
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-8 text-neutral-900 leading-tight">
              Kolkata's Trusted Partner for{" "}
              <span className="text-[#127749]">
                Sustainable Battery Solutions
              </span>
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                At Austic Scrap, we understand the importance of responsibly
                managing used batteries, especially those discarded by corporate
                offices, banks, malls, and other organizations. These batteries
                contain hazardous substances like lead, cadmium, and mercury,
                which can severely harm the environment if not properly handled.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary font-bold">
                Our mission is to provide an easy, efficient, and eco-friendly
                solution for disposing of these second-hand batteries.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                We start by offering hassle-free pickup services for used
                batteries from various corporate clients across Kolkata. Knowing
                your time is valuable, we ensure the process is seamless. Toxic
                elements are disposed of safely, following the highest
                environmental standards.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/bettery recycling.jpeg"
                alt="Battery Recycling Process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[32px]" />
            </div>
          </motion.div>
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold font-primary mb-4 text-neutral-900">
              Types of{" "}
              <span className="text-[#127749]">Batteries We Recycle</span>
            </h3>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {batteryTypes.map((type, index) => (
              <motion.div
                key={index}
                className="group bg-white p-10 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-50 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-110" />

                <h4 className="text-2xl font-bold font-primary mb-4 text-[#127749] group-hover:text-black transition-colors relative z-10 capitalize">
                  {type.title}
                </h4>
                <p className="text-neutral-500 leading-relaxed font-secondary relative z-10 group-hover:text-neutral-600 transition-colors">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-24 bg-[#127749] rounded-[40px] p-12 text-center text-white relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold font-primary mb-6">
              Ready to Recycle Your Batteries?
            </h3>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto font-secondary">
              Contact Austic Scrap today to schedule your hassle-free battery
              pickup and join us in our commitment to sustainability.
            </p>
            <Link href="/contact">
              <Button className="px-12 py-5 bg-white text-[#127749] font-bold rounded-full hover:bg-neutral-100 transition-all shadow-xl text-lg">
                Get a Free Quote →
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default BatteryRecyclingContent;
