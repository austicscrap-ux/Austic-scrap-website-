"use client";

import React from "react";
import Hero from "@/components/ui/Hero";
import ServiceGrid from "@/components/ui/ServiceGrid";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import SectionWrapper from "@/components/common/SectionWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const OfficeWorkstationPage = () => {
  return (
    <main>
      <Hero
        title="Office Workstation Buyers"
        backgroundImage="/images/office furniture scrap.jpeg"
      />

      <SectionWrapper id="office-workstation-details" className="bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
              Professional Office Dismantling
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-8 text-neutral-900 leading-tight">
              Sell Your Old{" "}
              <span className="text-[#127749]">Workstations & Cubicles</span>
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                Upgrading your office layout? We specialize in dismantling and
                buying old office workstations, cubicles, and partitions. Austic
                Scrap ensures safe and efficient removal of your office setups
                with minimal disruption to your operations.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                We offer top prices for wooden, metal, and glass workstations.
                Our team provides professional assessment and swift logistics
                across Kolkata and major cities.
              </p>
              <div className="pt-6">
                <Link href="/contact">
                  <Button className="px-10 py-4 bg-secondary text-white font-bold rounded-full hover:bg-white hover:text-[#127749] hover:border-[#127749] border border-transparent transition-all shadow-xl text-lg">
                    Request Valuation →
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square md:aspect-video rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/office furniture scrap.jpeg"
                alt="Office Workstation Scrap"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[32px]" />
            </div>
          </motion.div>
        </div>

        <div className="mt-32 pt-16 border-t border-neutral-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              {
                title: "Best Market Price",
                text: "Fair valuation based on material quality and volume.",
              },
              {
                title: "Safe Dismantling",
                text: "Professional team handles complex office structures.",
              },
              {
                title: "Fast Logistics",
                text: "Quick pickup services across all major commercial hubs.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold font-primary mb-3 text-[#127749]">
                  {item.title}
                </h4>
                <p className="text-neutral-500 font-secondary">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <ServiceGrid />
      <WhyChooseUs />
    </main>
  );
};

export default OfficeWorkstationPage;
