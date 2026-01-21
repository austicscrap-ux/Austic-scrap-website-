// src/components/sections/DelhiScrapMainContent.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";

interface ScrapItem {
  title: string;
  description: string;
  delay: number;
}

const scrapItems: ScrapItem[] = [
  {
    title: "Corporate furniture scrap",
    description:
      "Are you upgrading your office furniture in Delhi? That’s great! But what about the old stuff? Don’t worry—Austic is here to help. We work for corporate offices, banks, insurance, and IT companies. Austic provides services including buying and recycling office furniture such as desks, office chairs, reception counters, or filing cabinets. Our skilled team makes the removal process easy and smooth. IT Company and Software Office Scrap",
    delay: 0,
  },
  {
    title: "Office Workstation scrap",
    description:
      "Is your office filled up with old workstations or office furniture? We understand—it happens in offices. That’s why Austic is here! We are devoted to buying and disposing of old office workstations in Delhi. Our labor and team will carefully dismantle the office workstation along with the old chairs. Let us handle the heavy lifting so you can enjoy a more organized workspace!",
    delay: 100,
  },
  {
    title: "IT Companies and software offices scrap",
    description:
      "In IT companies and the tech corporate world, staying up-to-date often means upgrading their IT assets. But what happens to the old IT asset that gets outdated is very hectic for corporate officers to maintain. So, Austic is here to buy all kinds of old and used IT asset scrap in Delhi. We understand how important it is to keep tech industries' data safe, so we handle everything—from securely wiping old devices to recycling them responsibly.",
    delay: 200,
  },
  {
    title: "Old Computer and IT Scrap",
    description:
      "As technology keeps moving, hardware is outdated, and old computers and IT equipment can quickly become outdated. But don’t let them pile up. Austic offers an easy solution! Our team will pick up your old devices and ensure they’re recycled in an environmentally friendly way. We are accountable for data security and destruction, so our technical team erases or removes all the data safely so your data doesn't get breached.",
    delay: 300,
  },
  {
    title: "electronic scrap",
    description:
      "Electronic waste is becoming a big challenge with all the tech advances in Delhi. “That’s where Austic comes in. We’re here to handle your old electronics. We pick up electronic waste, dispose of it safely, and recycle it. This keeps harmful stuff out of the wrong places. By choosing Austic, you're helping Delhi stay clean and green.",
    delay: 400,
  },
  {
    title: "AC Scrap",
    description:
      "We all know how essential air conditioners are in corporate offices in Delhi’s heat. But when they stop working, getting rid of ducted AC can be tough because ducted AC systems are very heavy to manage. We are here to buy all kinds of old office air conditioners, such as ducted AC systems, split air conditioning systems, and cassette AC systems. Our professional AC technician safely removes your old office AC, taking care of hazardous materials. Old air conditioners are being safely and eco-friendly disposed of.",
    delay: 500,
  },
];

const DelhiScrapMainContent: React.FC = () => {
  return (
    <SectionWrapper id="feature" className="bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
        {/* Content Part */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
            Delhi Presence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-primary mb-8 text-neutral-900 leading-tight">
            Scrap Collection Services in Delhi:{" "}
            <span className="text-[#127749]">Sustainable Recycling</span> with
            Austic
          </h2>
          <div className="space-y-6">
            <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
              At Austic, we’re here to make scrap collection and recycling in
              Delhi hassle-free for you. We understand that life can get busy in
              the office, so we’re ready to help. Whether you manage a corporate
              office, IT company, shopping center, bank, insurance firm, or
              organization, our services include purchasing and recycling office
              scrap, office workstations, and IT and non-IT scrap.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
              Our goal is to provide an easy and stress-free waste management
              service that not only handles your office scrap but also helps
              keep our city clean and green. We collect various types of
              scrap—office waste, old workstations, metal, electrical parts,
              furniture, wood items, and even server equipment.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
              Our process is simple: our inspection team will first inspect the
              site and see which kind of scrap the company wants to dispose of,
              whether it is e-waste or furniture, then our team will give you a
              clear and fair quote in the market once the deal is closed between
              us.
            </p>
          </div>

          <div className="mt-10 p-6 bg-neutral-50 rounded-2xl border border-neutral-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#127749]/10 flex items-center justify-center text-[#127749]">
              <span className="font-bold">✓</span>
            </div>
            <p className="text-neutral-700 font-bold">
              Fast Inspection & Immediate Quote in Delhi
            </p>
          </div>
        </motion.div>

        {/* Image Part */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src="/images/workstation scrap buyer.jpeg"
              alt="Workstation Scrap Buyer"
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
            Scrap We Buy in <span className="text-[#127749]">Delhi</span>
          </h3>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {scrapItems.map((item, index) => (
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
                {item.title}
              </h4>
              <p className="text-neutral-500 leading-relaxed font-secondary relative z-10 group-hover:text-neutral-600 transition-colors">
                {item.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-secondary font-bold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DelhiScrapMainContent;
