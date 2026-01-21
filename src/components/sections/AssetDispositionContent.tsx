"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/Button";

const AssetDispositionContent: React.FC = () => {
  const assetSteps = [
    {
      title: "Computers & Laptops",
      description:
        "Dismantling and resource recovery of individual units. We extract precious metals like gold and silver while managing hazardous components.",
    },
    {
      title: "Servers & Networking",
      description:
        "Industrial-scale disposal of heavy-duty IT infrastructure. We ensure secure removal and full material reclamation from data centers.",
    },
    {
      title: "Storage & Data Erasure",
      description:
        "Certified data destruction for hard drives and SSDs. We use military-grade wiping techniques to ensure zero data leakage.",
    },
    {
      title: "Secure Logistics",
      description:
        "Efficient and secure collection from your premises. Our tracked transportation prevents any unauthorized access or loss during transit.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/IT Asset Disposition Buyer.jpeg"
          alt="IT Asset Disposition Services"
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
              Strategic ITAD Solutions
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-primary text-white leading-tight max-w-5xl mx-auto">
              Secure IT Asset{" "}
              <span className="text-secondary">Disposition</span> in Kolkata
            </h1>
            <p className="text-neutral-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto font-secondary leading-relaxed">
              Certified data destruction and eco-friendly IT disposal. We
              provide Kolkata businesses with reliable, professional management
              of outdated technology assets.
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
      <SectionWrapper id="about-itad" className="bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
              Data First Security
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-8 text-neutral-900 leading-tight">
              Comprehensive{" "}
              <span className="text-[#127749]">ITAD Services</span> for
              Enterprises
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                In a bustling city like Kolkata, outdated IT equipment—such as
                old computers, servers, and other electronics—can quickly
                accumulate. We provide local businesses with a reliable, local
                IT Asset Disposition (ITAD) solution.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                At Austic Scrap, data security is our top priority. We
                understand how vital it is to safeguard your sensitive
                information, which is why our secure data destruction process
                ensures that all your data is completely wiped clean.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                We are proud to serve prominent companies like{" "}
                <span className="text-[#127749] font-bold">
                  Marlin Group, Infosys, and Accenture
                </span>
                , providing them with effective, certified scrap management.
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
                src="/images/IT Asset Disposition Buyer.jpeg"
                alt="Certified Data Destruction"
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
              <span className="text-[#127749]">IT Assets We Manage</span>
            </h3>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {assetSteps.map((type, index) => (
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
          className="mt-24 bg-neutral-900 rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold font-primary mb-6">
              Unwavering Commitment to Sustainability
            </h3>
            <p className="text-white/70 text-lg mb-10 max-w-3xl font-secondary leading-relaxed">
              By choosing Austic Scrap Recycling, you're not just ensuring the
              secure disposal of your old IT assets—you're also contributing to
              a greener Kolkata. Our process recovers critical materials,
              reducing the need for destructive mining and protecting our local
              ecosystem.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="font-bold text-sm uppercase tracking-widest text-accent">
                  Certified Destruction
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="font-bold text-sm uppercase tracking-widest text-secondary">
                  Zero Landfill Goal
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default AssetDispositionContent;
