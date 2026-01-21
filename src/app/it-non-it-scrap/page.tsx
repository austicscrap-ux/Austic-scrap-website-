import React from "react";
import Hero from "@/components/ui/Hero";
import ServiceGrid from "@/components/ui/ServiceGrid";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import SectionWrapper from "@/components/common/SectionWrapper";
import { motion } from "framer-motion";

const ItNonItScrapPage = () => {
  return (
    <main>
      <Hero
        title="IT & Non-IT Scrap Buyers"
        backgroundImage="/images/IT Asset Disposition Buyer.jpeg"
      />

      <SectionWrapper id="about-it-non-it-scrap" className="bg-white">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-secondary uppercase bg-secondary/10 rounded-full font-secondary">
              Comprehensive Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-primary font-bold text-neutral-900 mb-8 leading-tight">
              We Buy All Types of{" "}
              <span className="text-[#127749]">IT & Non-IT Scrap</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#127749] mx-auto mb-10 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 shadow-sm"
              >
                <h3 className="text-2xl font-bold font-primary mb-4 text-[#127749]">
                  IT Scrap
                </h3>
                <p className="text-neutral-600 leading-relaxed font-secondary">
                  We buy old computers, laptops, servers, printers, networking
                  equipment, and other electronic waste. We ensure data security
                  and proper e-waste management compliance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 shadow-sm"
              >
                <h3 className="text-2xl font-bold font-primary mb-4 text-secondary">
                  Non-IT Scrap
                </h3>
                <p className="text-neutral-600 leading-relaxed font-secondary">
                  We also purchase office furniture, old AC units, scrap metal,
                  electrical wiring, generator sets, and dismantling scrap from
                  corporate offices and industrial sites.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 text-lg text-neutral-600 leading-relaxed font-secondary"
            >
              <p>
                At Austic Scrap, we provide comprehensive solutions for the
                disposal and recycling of both IT and Non-IT scrap materials.
                Whether you are upgrading your office technology or clearing out
                old inventory, we offer{" "}
                <span className="text-[#127749] font-bold">
                  competitive prices
                </span>{" "}
                and environmentally responsible recycling services.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      <ServiceGrid />
      <WhyChooseUs />
    </main>
  );
};

export default ItNonItScrapPage;
