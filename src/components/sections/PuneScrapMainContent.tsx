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
      "Are you upgrading your office furniture in Pune? Austic is here for corporate offices, banks, insurance, and IT companies. We provide services including buying and recycling office furniture such as desks, office chairs, reception counters, or filing cabinets.",
    delay: 0,
  },
  {
    title: "Office Workstation scrap",
    description:
      "Is your office filled with old workstations? We are devoted to buying and disposing of old office workstations in Pune. Our team will carefully dismantle the office workstation along with old chairs, letting you focus on your growth.",
    delay: 100,
  },
  {
    title: "IT & Software Office Scrap",
    description:
      "In Pune tech hubs, staying up-to-date often means upgrading IT assets. Austic buys all kinds of old and used IT asset scrap. We handle everything from securely wiping old devices to recycling them responsibly.",
    delay: 200,
  },
  {
    title: "Old Computer and IT Scrap",
    description:
      "Don't let old hardware pile up. Our team will pick up your old devices and ensure they're recycled in an environmentally friendly way. We are accountable for data security and destruction, ensuring no data reaches wrong hands.",
    delay: 300,
  },
  {
    title: "Electronic Scrap",
    description:
      "Electronic waste is a challenge in tech-driven Pune. We pick up electronic waste, dispose of it safely, and recycle it efficiently. This keeps harmful materials out of the environment and keeps Pune clean and green.",
    delay: 400,
  },
  {
    title: "AC Scrap",
    description:
      "We buy all kinds of old office air conditioners, including ducted AC systems, split units, and cassette ACs. Our professional technicians safely remove heavy systems, taking care of hazardous materials and eco-friendly disposal.",
    delay: 500,
  },
];

const PuneScrapMainContent: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SectionWrapper id="feature" className="bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
              Pune Presence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-8 text-neutral-900 leading-tight">
              Scrap Collection Services:{" "}
              <span className="text-[#127749]">Sustainable Recycling</span> with
              Austic
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                At Austic, we&apos;re here to make scrap collection and
                recycling in Pune hassle-free for you. Whether you manage a
                corporate office, IT company, shopping center, bank, insurance
                firm, or organization, our services are tailored for your city's
                tech-driven environment.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                We collect various types of scrap—office waste, old
                workstations, metal, electrical parts, furniture, and server
                equipment. Our simple process involves site inspection, fair
                quoting, professional dismantling, and efficient logistics for a
                stress-free experience.
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
              Scrap We <span className="text-[#127749]">Buy</span>
            </h3>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {scrapItems.map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white p-10 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item.delay / 1000 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-50 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-110" />

                <h4 className="text-2xl font-bold font-primary mb-4 text-[#127749] group-hover:text-black transition-colors relative z-10 capitalize">
                  {item.title}
                </h4>
                <p className="text-neutral-500 leading-relaxed font-secondary relative z-10 group-hover:text-neutral-600 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default PuneScrapMainContent;
