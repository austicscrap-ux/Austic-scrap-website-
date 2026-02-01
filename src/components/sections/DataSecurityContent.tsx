"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/Button";

const DataSecurityContent: React.FC = () => {
  const securityFeatures = [
    {
      title: "Hard Drive Shredding",
      description:
        "Complete physical destruction of storage devices to prevent any possibility of data retrieval. Our industrial shredders ensure zero recovery.",
    },
    {
      title: "Advanced Data Wiping",
      description:
        "Software solutions that overwrite data multiple times using military-grade algorithms, ensuring total erasure of all logical drives.",
    },
    {
      title: "Degaussing",
      description:
        "A powerful electromagnetic field is applied to disrupt magnetic storage media, rendering hard drives and tapes permanently unreadable.",
    },
    {
      title: "Advanced Encryption",
      description:
        "We employ advanced encryption technologies during transit and temporary storage, ensuring your information remains confidential until destruction.",
    },
    {
      title: "End-to-End Security",
      description:
        "Comprehensive security measures covering the entire lifecycle from collection to final destruction, with strict chain-of-custody protocols.",
    },
    {
      title: "Legal Compliance",
      description:
        "Strict adherence to the IT Act 2000 and the 2011 Privacy Rules, ensuring your organization remains fully compliant with national data laws.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[15vh] min-h-[200px] md:h-auto md:min-h-[250px] flex items-center justify-center pt-24 md:pt-28 pb-6 overflow-hidden bg-gray-900">
        <Image
          src="/images/austic_data_security_hero.png"
          alt="Data Security and Integrity Hero"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-3 text-sm font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full font-secondary">
              Data Integrity & Protection
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4 font-primary text-white leading-tight max-w-7xl mx-auto whitespace-nowrap">
              Data Integrity &{" "}
              <span className="text-secondary">Data Protection</span>
            </h1>
            <p className="text-neutral-200 text-lg md:text-xl mb-8 max-w-3xl mx-auto font-secondary leading-relaxed">
              We define data integrity as the assurance that your sensitive
              information remains uncompromised and is handled with the highest
              level of protection throughout its lifecycle.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <Link href="/">
                <Button className="px-10 py-4 bg-white text-primary font-bold rounded-full hover:bg-secondary hover:text-white transition-all shadow-xl text-lg">
                  Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="px-10 py-4 bg-secondary text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all shadow-xl text-lg">
                  Protect Your Data
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <SectionWrapper id="about-data-security" className="bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
              Absolute Integrity
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-8 text-neutral-900 leading-tight">
              Guardians of Your{" "}
              <span className="text-[#127749]">Data Integrity</span>
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                Are you overwhelmed by electronic waste and the security risks
                associated with it? Austic Scrap is your dedicated partner in
                Kolkata for certified data destruction. We provide a
                security-first approach to tech lifecycle management.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                Our team is dedicated to giving your assets a secure end.
                Whether you have towering stacks of servers or mountains of
                mobile devices, we'll handle data erasure safely, responsibly,
                and with absolute transparency.
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
                src="/images/IT Asset Disposition Buyer.jpeg"
                alt="Secure Data Destruction Process"
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
              Certified{" "}
              <span className="text-[#127749]">Destruction Methods</span>
            </h3>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {securityFeatures.map((type, index) => (
              <motion.div
                key={index}
                className="group bg-white p-10 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-50 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-110" />

                <h4 className="text-2xl font-bold font-primary mb-4 text-secondary group-hover:text-black transition-colors relative z-10 capitalize">
                  {type.title}
                </h4>
                <p className="text-neutral-500 leading-relaxed font-secondary relative z-10 group-hover:text-neutral-600 transition-colors">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-[#127749] rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <h3 className="text-3xl font-bold font-primary mb-6 relative z-10">
              Uncompromising Protocols
            </h3>
            <p className="text-white/80 text-lg mb-8 font-secondary leading-relaxed relative z-10">
              From the moment we collect your devices to final destruction, we
              implement industry-leading security. Our facilities are equipped
              with state-of-the-art surveillance and access control systems to
              prevent unauthorized handling at every step.
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
              Legal & Ethical Compliance
            </h3>
            <p className="text-white/70 text-lg mb-8 font-secondary leading-relaxed relative z-10">
              We strictly adhere to India’s{" "}
              <span className="font-bold text-white">
                E-Waste (Management) Rules, 2016
              </span>{" "}
              and IT Act 2000. Our commitment ensures your electronic waste is
              recycled responsibly, protecting your organization from liability
              and contributing to a greener future.
            </p>
          </motion.div>
        </div>

        <div className="mt-24 text-center">
          <Link href="/contact">
            <Button className="px-12 py-5 bg-secondary text-white font-bold rounded-full hover:bg-neutral-900 transition-all shadow-xl text-lg">
              Secure Your Data Now →
            </Button>
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default DataSecurityContent;
