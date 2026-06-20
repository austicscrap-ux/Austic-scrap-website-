"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/Button";

const PuneEWasteContent: React.FC = () => {
  const ewasteServices = [
    {
      title: "Hinjewadi ITAD",
      description:
        "Advanced IT asset disposition for Pune’s technology leaders. We ensure secure disposal with 100% certified data destruction and environmental compliance.",
    },
    {
      title: "Data Center Decommissioning",
      description:
        "Specialized management of server rooms and network infrastructure, focusing on secure decommissioning and high-value material recovery.",
    },
    {
      title: "Manufacturing E-Waste",
      description:
        "Customized solutions for Pune’s industrial sector, recovering rare components from outdated machinery and electronic assemblies.",
    },
    {
      title: "Critical Power Recycling",
      description:
        "Safe handling of industrial UPS systems and batteries, ensuring hazardous materials are neutralized while reclaiming valuable lead and lithium.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] mt-20 flex items-center justify-center overflow-hidden bg-gray-900">
        <Image
          src="/images/workstation scrap buyer"
          alt="E-Waste Recycling Pune Tech Hub"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full font-secondary">
              Cultural Capital’s Green Choice
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-primary text-white leading-tight max-w-5xl mx-auto">
              Pune’s Strategic{" "}
              <span className="text-secondary">E-Waste Solutions</span>
            </h1>
            <p className="text-neutral-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto font-secondary leading-relaxed">
              Powering Pune’s sustainable transition with advanced e-waste
              management. We bridge the gap between industrial innovation and
              environmental responsibility.
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
      <SectionWrapper id="about-pune-ewaste" className="bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
              Heritage & Modernity
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-8 text-neutral-900 leading-tight">
              E-Waste Management{" "}
              <span className="text-[#127749]">Leadership in Pune</span>
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                Pune, a city balancing heritage and contemporary growth, has
                carved a significant niche in the IT and manufacturing sectors.
                As its tech footprint expands, the management of electronic
                waste becomes a critical priority.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                At Austic Scrap, we provide e-waste management solutions
                specifically tailored to Pune’s evolving business needs. We
                specialize in secure disposal, absolute data protection, and
                recovering high-value materials for a sustainable future.
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
                src="/images/workstation scrap buyer"
                alt="Pune ITAD Services"
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
              Industry-Specific{" "}
              <span className="text-[#127749]">E-Waste Services</span>
            </h3>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

        <div className="mt-24 bg-neutral-900 rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-3xl font-bold font-primary mb-6">
              Why Choose Austic in Pune?
            </h3>
            <p className="text-white/70 text-lg mb-8 font-secondary leading-relaxed">
              At Austic Scrap and Recycling, we offer the most competitive
              prices for electronic waste across Pune and Maharashtra. For the
              city’s thriving tech and educational sectors, we provide
              cutting-edge data destruction protocols that ensure absolute
              security. Our deep understanding of local regulations ensures your
              business stays compliant while contributing to Pune’s green
              initiatives.
            </p>
            <div className="flex flex-wrap gap-8 text-accent font-bold font-secondary text-sm uppercase tracking-widest">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Hinjewadi Tech Specialist</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span>Certified Data Security</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default PuneEWasteContent;
