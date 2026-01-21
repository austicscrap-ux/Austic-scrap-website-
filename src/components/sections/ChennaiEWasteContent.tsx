"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/Button";

const ChennaiEWasteContent: React.FC = () => {
  const ewasteServices = [
    {
      title: "Industrial ITAD",
      description:
        "Customized scrap management for Chennai’s manufacturing and IT corridors. We ensure maximum value recovery for outdated industrial electronics.",
    },
    {
      title: "Startup Asset Disposal",
      description:
        "Streamlined e-waste solutions for Chennai’s growing tech ecosystem. We offer secure, bulk purchasing of devices with certified recycling.",
    },
    {
      title: "R&D Equipment Disposal",
      description:
        "Specialized management of research and development assets, focusing on recovering valuable components while supporting local innovation.",
    },
    {
      title: "Power System Management",
      description:
        "Safe handling and recycling of heavy-duty UPS systems and batteries, ensuring absolute environmental compliance and safety.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/e-waste-chennai.jpg"
          alt="E-Waste Recycling Chennai Industrial Hub"
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
              South India’s Green Gateway
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-primary text-white leading-tight max-w-5xl mx-auto">
              Chennai’s Advanced{" "}
              <span className="text-secondary">E-Waste Management</span>
            </h1>
            <p className="text-neutral-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto font-secondary leading-relaxed">
              Serving Chennai’s vibrant industrial and tech landscape with
              sustainable recycling. We provide premium ITAD and secure data
              destruction for a cleaner future.
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
      <SectionWrapper id="about-chennai-ewaste" className="bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
              Industrial Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-8 text-neutral-900 leading-tight">
              E-Waste Management{" "}
              <span className="text-[#127749]">Leadership in Chennai</span>
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                In Chennai’s vibrant industrial and corporate environments,
                managing surplus technical assets is crucial. We provide
                customized scrap-buying services specifically for the region's
                manufacturing and tech corridors.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                Our skilled team ensuring businesses achieve maximum value for
                their legacy equipment. We support operational efficiency and
                strict adherence to waste management regulations, offering a
                dependable solution for the Detroit of Asia.
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
                src="/images/e-waste-chennai.jpg"
                alt="Vibrant tech corridor E-waste disposal"
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
              Specialized{" "}
              <span className="text-[#127749]">Chennai Services</span>
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

        <div className="mt-24 bg-neutral-900 rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-3xl font-bold font-primary mb-6">
              Why Austic in Chennai?
            </h3>
            <p className="text-white/70 text-lg mb-8 font-secondary leading-relaxed">
              In a city as dynamic as Chennai, you need a partner that
              understands the unique industrial landscape (OMR, Sriperumbudur).
              We stand out for our commitment to sustainability, data security,
              and specialized local support. Our comprehensive end-to-end
              services ensure your electronic waste is managed with absolute
              efficiency and responsibility.
            </p>
            <div className="flex flex-wrap gap-8 text-accent font-bold font-secondary text-sm uppercase tracking-widest">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Industrial Tech Recovery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span>Secure Asset Disposal</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ChennaiEWasteContent;
