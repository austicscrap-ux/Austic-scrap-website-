"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/Button";

const OldDgGeneratorContent: React.FC = () => {
  const generatorTypes = [
    {
      title: "Industrial Diesel Generators",
      description:
        "Used in factories and large plants. we buy old and outdated industrial DG sets, offering industrial-grade removal and premium valuation.",
    },
    {
      title: "Corporate Office Generators",
      description:
        "Medium-sized backup power sources from corporate halls. We provide efficient dismantling and the best market price for your office assets.",
    },
    {
      title: "Silent Generators",
      description:
        "Popular in commercial settings. We offer excellent rates for silent generators being replaced due to wear, tear, or modern upgrades.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}

      {/* Main Content */}
      <SectionWrapper id="about-dg-generator" className="bg-white">
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
              Best Place to Sell{" "}
              <span className="text-[#127749]">Obsolete DG Sets</span>
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                In the bustling city of Kolkata, where industries and corporate
                offices rely heavily on Diesel Generator (DG) sets for backup
                power, there comes a time when these generators become old or
                damaged.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                At Austic Scrap, we specialize in buying used and scrap DG
                generators from businesses all across Kolkata. Whether it’s a
                small office generator or a massive industrial setup, we offer
                the best value, ensuring a smooth and eco-friendly disposal
                process.
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
                src="/images/dg set crop.jpg"
                alt="DG Generator Recycling"
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
              <span className="text-[#127749]">DG Generators We Buy</span>
            </h3>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {generatorTypes.map((type, index) => (
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

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Best Scrap Prices",
              text: "Highly competitive prices for old and unused DG sets with absolute transparency.",
            },
            {
              title: "Hassle-Free Process",
              text: "From inspection to dismantling and removal, our experienced team handles everything.",
            },
            {
              title: "Eco-Friendly Manner",
              text: "We follow strict environmental guidelines to reduce mechanical waste in Kolkata.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-neutral-50 p-8 rounded-[32px] border border-neutral-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold font-primary mb-3 text-[#127749]">
                {item.title}
              </h4>
              <p className="text-neutral-600 font-secondary leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-24 p-12 bg-[#127749] rounded-[40px] text-white relative overflow-hidden shadow-2xl text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold font-primary mb-6">
              Contact Us for DG Generator Scrap Buying
            </h3>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto font-secondary">
              Get the best scrap price across Kolkata. Assessment, dismantling,
              and quick pickup included.
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

export default OldDgGeneratorContent;
