"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/Button";

const KolkataEWasteContent: React.FC = () => {
  const ewasteServices = [
    {
      title: "Laptop Recycling",
      description:
        "Professional disposal and material recovery from outdated laptops. We ensure secure data wiping and eco-friendly dismantling.",
    },
    {
      title: "UPS Recycling",
      description:
        "Specialized management of UPS systems, safely recovering batteries and capacitors while neutralizing toxic internal components.",
    },
    {
      title: "IT & Telecom Gear",
      description:
        "Expert recycling for servers, routers, and networking equipment, maximizing resource recovery for Kolkata’s tech sector.",
    },
    {
      title: "Desktop & CPU Disposal",
      description:
        "Safe resource recovery from large-scale desktop deployments, ensuring no hazardous elements enter the local environment.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] mt-20 flex items-center justify-center overflow-hidden bg-gray-900">
        <Image
          src="/images/e-waste-recycling-kolkata.jpeg"
          alt="Expert E-Waste Management Kolkata"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full font-secondary">
              Kolkata's Primary E-Waste Solution
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-primary text-white leading-tight max-w-5xl mx-auto">
              Expert E-Waste <span className="text-secondary">Management</span>{" "}
              for Kolkata
            </h1>
            <p className="text-neutral-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto font-secondary leading-relaxed">
              Leading the way in responsible technology disposal for corporate
              and industrial sectors. We provide certified recycling and high
              market value for your assets.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <Link href="/">
                <Button className="px-10 py-4 bg-white text-primary font-bold rounded-full hover:bg-secondary hover:text-white transition-all shadow-xl text-lg">
                  Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="px-10 py-4 bg-secondary text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all shadow-xl text-lg">
                  Sale Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <SectionWrapper id="about-kolkata-ewaste" className="bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
              Our Vision
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-8 text-neutral-900 leading-tight">
              Leading <span className="text-[#127749]">E-Waste Recycling</span>{" "}
              in Kolkata
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                Are you dealing with a buildup of outdated electronics? Austic
                Scrap is your solution. As Kolkata’s leading e-waste recycling
                service, we specialize in managing old technology, from obsolete
                computers to entire enterprise systems.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                With Salt Lake City and Newtown rapidly developing as key IT
                hubs, our services are essential. By choosing Austic Scrap, you
                efficiently clear your space while supporting sustainable
                practices for a greener future.
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
            <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/e-waste-kolkata.jpg"
                alt="Series of outdated laptops prepared for e-waste recycling"
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
              Our <span className="text-[#127749]">Specialized Services</span>
            </h3>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {ewasteServices.map((type, index) => (
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

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-[#127749] rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <h3 className="text-3xl font-bold font-primary mb-6 relative z-10">
              EPR Compliance
            </h3>
            <p className="text-white/80 text-lg mb-8 font-secondary leading-relaxed relative z-10">
              We strictly follow Extended Producer Responsibility (EPR)
              regulations. We ensure electronic waste is collected, treated, and
              recycled correctly, keeping it out of landfills and ensuring
              hazardous materials are managed safely.
            </p>
          </motion.div>

          <motion.div
            className="bg-neutral-900 rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <h3 className="text-3xl font-bold font-primary mb-6 relative z-10 text-accent">
              Strategic Local Solutions
            </h3>
            <p className="text-white/70 text-lg mb-8 font-secondary leading-relaxed relative z-10">
              Tailored for Kolkata's commercial landscape—from the burgeoing IT
              hubs in Salt Lake to Newtown. We provide end-to-end support,
              competitive pricing, and uncompromising data destruction services.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default KolkataEWasteContent;
