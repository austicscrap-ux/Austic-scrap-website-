"use client";

import HeroSection from "@/components/ui/HeroSection";
import ServiceGrid from "@/components/ui/ServiceGrid";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import SectionWrapper from "@/components/common/SectionWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const SecondHandScrapPage = () => {
  return (
    <main>
      <HeroSection
        title="Second Hand Scrap Buyers"
        subtitle="Turn your second-hand scrap into cash with Austic Scrap. We buy a wide range of second-hand materials including machinery, industrial equipment, and furniture."
      />

      <SectionWrapper id="second-hand-scrap-details" className="bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
              Turn Assets into Capital
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-8 text-neutral-900 leading-tight">
              We Buy <span className="text-[#127749]">Second Hand Scrap</span> &
              Materials
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                Turn your second-hand scrap into cash with Austic Scrap. We buy
                a wide range of second-hand materials including machinery,
                industrial equipment, furniture, and various metals.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                Our team evaluates your items fairly and provides instant,
                competitive quotes. We handle everything—from dismantling and
                loading to transportation—making the selling process effortless
                and efficient for you.
              </p>
              <div className="pt-6">
                <Link href="/contact">
                  <Button className="px-10 py-4 bg-secondary text-white font-bold rounded-full hover:bg-white hover:text-[#127749] hover:border-[#127749] border border-transparent transition-all shadow-xl text-lg">
                    Sell Your Scrap Now →
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
            <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/home page.jpg"
                alt="Second Hand Scrap"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[32px]" />
            </div>
          </motion.div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-16 border-t border-neutral-100">
          {[
            {
              title: "Fair Market Valuation",
              text: "Transparent pricing based on current scrap trends.",
            },
            {
              title: "Complete Logistics",
              text: "We handle dismantling, loading, and secure transport.",
            },
            {
              title: "Instant Closures",
              text: "Fast assessments and quick payment settlements.",
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
              <p className="text-neutral-500 font-secondary leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <ServiceGrid />
      <WhyChooseUs />
    </main>
  );
};

export default SecondHandScrapPage;
