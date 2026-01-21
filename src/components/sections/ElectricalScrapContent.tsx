"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/Button";

const ElectricalScrapContent: React.FC = () => {
  const scrapTypes = [
    {
      title: "Wiring & Cables",
      description:
        "Contain valuable copper and aluminum. We process insulation and sheathing materials to recover high-purity conductors for electrical manufacturing.",
    },
    {
      title: "Transformers",
      description:
        "Valuable sources of steel and copper. We manage the dismantling and recycling of transformers, ensuring safe disposal of any internal hazardous fluids.",
    },
    {
      title: "Circuit Boards",
      description:
        "Found in all electronic equipment. We extract precious metals like gold, silver, and copper while meticulously managing hazardous substances.",
    },
    {
      title: "Electronic Components",
      description:
        "Resistors, capacitors, and connectors contain specialized materials. We provide industrial sorting to recover every possible resource efficiently.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/electrical scrap-compressed.jpg"
          alt="Electrical Scrap Buyer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-[2px]"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full font-secondary">
              Premium Resource Recovery
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-primary text-white leading-tight max-w-5xl mx-auto">
              Electrical <span className="text-secondary">Scrap Buyers</span> in
              Kolkata
            </h1>
            <p className="text-neutral-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto font-secondary leading-relaxed">
              Leading the way in professional electrical waste management. We
              offer the best market rates for corporate and industrial
              electrical assets.
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
      <SectionWrapper id="about-electrical-scrap" className="bg-white">
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
              Kolkata's Leader in{" "}
              <span className="text-[#127749]">
                Electrical Resource Recycling
              </span>
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                Our Kolkata-based scrap-buying company focuses on recycling
                electrical scrap, including wiring, cables, circuit boards, and
                electrical components. We recover valuable metals like copper,
                aluminum, and gold while ensuring hazardous substances are
                handled carefully.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                We collect electrical scrap from businesses, transport it to our
                facility, and sort and dismantle it. This process helps conserve
                resources and prevent environmental contamination. Recycling
                electrical scrap offers economic benefits and compliance with
                regulations.
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
                src="/images/electrical scrap-compressed.jpg"
                alt="Electrical Recycling Process"
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
              Types of <span className="text-[#127749]">Electrical Scrap</span>
            </h3>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {scrapTypes.map((type, index) => (
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
          className="mt-24 bg-[#127749] rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-3xl font-bold font-primary mb-6">
              Regulatory & Safety Excellence
            </h3>
            <p className="text-white/80 text-lg mb-8 font-secondary leading-relaxed">
              Electrical scrap recycling is subject to various regulations
              designed to ensure environmental protection and worker safety. We
              strictly adhere to safety standards to protect workers from
              potential hazards. Proper training, equipment, and procedures are
              used to handle hazardous materials safely and ensure compliance
              with regulatory requirements.
            </p>
            <div className="flex items-center gap-4 text-accent font-bold font-secondary">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-xl">✓</span>
              </div>
              <span>Certified and Regulated Process</span>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default ElectricalScrapContent;
