"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/Button";

const MetalScrapContent: React.FC = () => {
  const metalTypes = [
    {
      title: "Aluminum Scrap",
      description:
        "Aluminum scrap includes discarded cans, foil, and structural components. As a lightweight and highly recyclable metal, we ensure efficient sorting and melting to produce premium recycled products.",
    },
    {
      title: "Copper Scrap",
      description:
        "Copper is a highly valuable metal found in electrical wiring and plumbing. We specialize in stripping insulation and recycling copper responsibly to conserve its unique conductivity properties.",
    },
    {
      title: "Steel Scrap",
      description:
        "Steel beams, automotive parts, and appliances are processed through magnetic separation and shredding. Recycled steel remains incredibly strong and is essential for new construction materials.",
    },
    {
      title: "Iron Scrap",
      description:
        "Iron materials are collected and melted to produce high-quality new iron products. Our process ensures that even the heaviest iron scrap is handled with industrial efficiency.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}

      {/* Main Content */}
      <SectionWrapper id="about-metal-scrap" className="bg-white">
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
              Leading the Way in{" "}
              <span className="text-[#127749]">
                Sustainable Metal Management
              </span>
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                Our scrap-buying company in Kolkata specializes in collecting,
                transporting, and recycling metal scrap from businesses in
                various sectors like corporate, banking, hospitality, and
                industrial. We recycle metals such as steel, aluminum, copper,
                and brass to conserve resources and reduce the environmental
                impact of mining.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                Our process is seamless, from collection to processing in our
                advanced facility. Recycling metal scrap helps businesses earn
                revenue, save on production costs, and comply with environmental
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
                src="/images/coppper crop.jpg"
                alt="Metal Recycling Process"
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
              Types of <span className="text-[#127749]">Metal Scrap</span>
            </h3>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {metalTypes.map((type, index) => (
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
      </SectionWrapper>
    </div>
  );
};

export default MetalScrapContent;
