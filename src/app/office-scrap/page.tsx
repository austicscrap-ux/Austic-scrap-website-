import React from "react";
import Hero from "@/components/ui/Hero";
import ServiceGrid from "@/components/ui/ServiceGrid";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import SectionWrapper from "@/components/common/SectionWrapper";
import { motion } from "framer-motion";

const OfficeScrapPage = () => {
  return (
    <main>
      <Hero
        title="Office Scrap Buyers"
        backgroundImage="/images/office furniture scrap.jpeg"
      />

      <SectionWrapper id="about-office-scrap" className="bg-white">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-secondary uppercase bg-secondary/10 rounded-full font-secondary">
              Trusted Partners
            </div>
            <h2 className="text-4xl md:text-5xl font-primary font-bold text-neutral-900 mb-8 leading-tight">
              Best Office Scrap{" "}
              <span className="text-[#127749]">Dealers & Buyers</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#127749] mx-auto mb-10 rounded-full" />

            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-secondary">
              <p>
                Looking to clear out old office furniture or equipment? Austic
                Scrap is your trusted partner for buying all kinds of office
                scrap. From workstations and chairs to partitions and old
                electronics, we offer the{" "}
                <span className="text-[#127749] font-bold">
                  best market rates
                </span>{" "}
                and{" "}
                <span className="text-secondary font-bold">
                  hassle-free pickup
                </span>{" "}
                services.
              </p>
              <p>
                We serve corporate offices, banks, institutes, and commercial
                establishments, ensuring a smooth and eco-friendly disposal
                process for all your scrap materials. Our team of experts
                handles everything from dismantling to transportation, providing
                you with a seamless experience.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <ServiceGrid />
      <WhyChooseUs />
    </main>
  );
};

export default OfficeScrapPage;
