"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/Button";

const MumbaiEWasteContent: React.FC = () => {
  const ewasteServices = [
    {
      title: "Financial Sector ITAD",
      description:
        "Specialized IT asset disposition for Mumbai’s banking and insurance industries. We ensure total data erasure and secure asset retirement.",
    },
    {
      title: "Advanced Data Wiping",
      description:
        "Utilizing cutting-edge technology for complete data destruction, safeguarding sensitive corporate information for Mumbai’s enterprises.",
    },
    {
      title: "Bulk Corporate E-Waste",
      description:
        "Management of large-scale technology turnover for major corporate offices, focusing on efficient recycling and material recovery.",
    },
    {
      title: "Battery & UPS Management",
      description:
        "Careful handling of hazardous components from power systems, ensuring safe disposal and adherence to stringent safety standards.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/e-waste-mumbai.jpg"
          alt="E-Waste Recycling Mumbai Financial Capital"
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
              Financial Capital’s Preferred Partner
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-primary text-white leading-tight max-w-5xl mx-auto">
              Mumbai’s Premier{" "}
              <span className="text-secondary">E-Waste Solutions</span>
            </h1>
            <p className="text-neutral-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto font-secondary leading-relaxed">
              Serving the corporate and financial giants of Mumbai with
              certified e-waste management. We bridge technology turnover with
              absolute environmental responsibility.
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
      <SectionWrapper id="about-mumbai-ewaste" className="bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
              Urban Sustainability
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-8 text-neutral-900 leading-tight">
              E-Waste Management{" "}
              <span className="text-[#127749]">Leadership in Mumbai</span>
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                Mumbai, India's bustling financial capital, generates
                significant e-waste due to its thriving business sector and
                rapid technology turnover. Managing this waste responsibly is
                crucial for the city's future.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                At Austic Scrap, we understand the unique challenges of the
                Mumbai market. We specialize in buying Information Technology
                (IT) e-waste and offering tailored IT Asset Disposition (ITAD)
                services for corporate and financial clients.
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
                src="/images/e-waste-mumbai.jpg"
                alt="IT Asset Disposition Mumbai"
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
              Corporate <span className="text-[#127749]">E-Waste Services</span>
            </h3>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {ewasteServices.map((type, index) => (
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

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-[#127749] rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <h3 className="text-3xl font-bold font-primary mb-6 relative z-10">
              Banking Grade Security
            </h3>
            <p className="text-white/80 text-lg mb-8 font-secondary leading-relaxed relative z-10">
              Our ITAD services are designed to meet the stringent security
              requirements of Mumbai’s financial sector. We provide documented
              proof of data destruction, ensuring complete peace of mind for
              institutions handling sensitive client information.
            </p>
          </motion.div>

          <motion.div
            className="bg-neutral-900 rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <h3 className="text-3xl font-bold font-primary mb-6 relative z-10 text-accent">
              Commitment to the Metropolis
            </h3>
            <p className="text-white/70 text-lg mb-8 font-secondary leading-relaxed relative z-10">
              We are dedicated to supporting Mumbai’s transition to a circular
              economy. By choosing Austic, you are helping to reduce the city’s
              environmental footprint and promote sustainable business practices
              across the metropolis.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default MumbaiEWasteContent;
