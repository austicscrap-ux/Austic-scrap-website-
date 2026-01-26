"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/Button";

interface CityContentProps {
  cityName: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  introTitle: string;
  introText: string;
  introImage: string;
  scrapMaterials?: {
    title: string;
    description: string;
  }[];
  whyNeedRecycling?: {
    title: string;
    description: string;
  };
  scrapList?: {
    title: string;
    description: string;
  }[];
  itAssets?: {
    title: string;
    description: string;
  }[];
  whyChoose?: {
    title: string;
    points: {
      title: string;
      description: string;
    }[];
  };
}

const CityContent: React.FC<CityContentProps> = ({
  cityName,
  heroTitle,
  heroDescription,
  heroImage,
  introTitle,
  introText,
  introImage,
  scrapMaterials,
  whyNeedRecycling,
  scrapList,
  itAssets,
  whyChoose,
}) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt={`${cityName} E-Waste Management`}
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
              E-Waste Solution
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-primary text-white leading-tight max-w-5xl mx-auto">
              {heroTitle}
            </h1>
            <p className="text-neutral-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto font-secondary leading-relaxed">
              {heroDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <Link href="/">
                <Button className="px-10 py-4 bg-white text-primary font-bold rounded-full hover:bg-secondary hover:text-white transition-all shadow-xl text-lg">
                  Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="px-10 py-4 bg-secondary text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all shadow-xl text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <SectionWrapper
        id={`about-${cityName.toLowerCase()}`}
        className="bg-white"
      >
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-primary mb-6 text-neutral-900 leading-tight">
              {introTitle}
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
              {introText}
            </p>
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
                src={introImage}
                alt={`${cityName} Recycling`}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Scrap Materials We Handle (if provided/reused logic) */}
        {scrapMaterials && (
          <div className="mb-24">
            <h3 className="text-2xl font-bold mb-6 text-[#127749]">
              Scrap Materials We Handle
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scrapMaterials.map((item, idx) => (
                <div key={idx} className="bg-neutral-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-neutral-600 font-secondary text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Why Need Recycling */}
        {whyNeedRecycling && (
          <div className="mb-24 bg-neutral-900 text-white p-12 rounded-[40px]">
            <h3 className="text-3xl font-bold mb-4">
              {whyNeedRecycling.title}
            </h3>
            <p className="font-secondary text-lg leading-relaxed opacity-90">
              {whyNeedRecycling.description}
            </p>
          </div>
        )}

        {/* Scrap List Items */}
        {scrapList && (
          <div className="mb-24">
            <ul className="space-y-4">
              {scrapList.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-white border border-neutral-100 rounded-lg shadow-sm"
                >
                  <div className="w-2 h-2 mt-2 bg-[#127749] rounded-full flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#127749]">
                      {item.title}:{" "}
                    </span>
                    <span className="text-neutral-600">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* IT Assets */}
        {itAssets && (
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-center mb-12">
              Types of IT Assets
            </h3>
            <div className="space-y-12">
              {itAssets.map((asset, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100"
                >
                  <strong className="block text-xl mb-4 text-[#127749]">
                    {asset.title}
                  </strong>
                  <p className="text-neutral-600 leading-relaxed font-secondary">
                    {asset.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Why Choose */}
        {whyChoose && (
          <div className="mt-24">
            <h3 className="text-3xl font-bold mb-8">{whyChoose.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChoose.points.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-[#127749]/5 p-8 rounded-2xl border border-[#127749]/10"
                >
                  <h4 className="font-bold text-lg text-[#127749] mb-3">
                    {point.title}
                  </h4>
                  <p className="text-neutral-600 font-secondary text-sm">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </SectionWrapper>
    </div>
  );
};

export default CityContent;
