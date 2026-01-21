"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";

const Appointment = () => {
  return (
    <SectionWrapper
      id="appointment"
      className="relative z-10 bg-neutral-900 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("/images/Ewsate greenbackground and right logo.png")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent" />

      <div className="relative z-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full font-secondary">
            Get Started
          </div>
          <h2 className="text-3xl md:text-5xl font-primary font-bold text-white mb-8 leading-tight">
            Professional Scrap Management <br className="hidden md:block" />
            <span className="text-secondary">Tailored for Your Business</span>
          </h2>
          <p className="text-neutral-300 text-lg md:text-xl mb-10 leading-relaxed font-secondary max-w-2xl">
            We purchase office furniture, workstations, and electronics,
            providing efficient and responsible solutions for Kolkata's leading
            enterprises.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-secondary text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all shadow-xl hover:shadow-secondary/40 transform hover:-translate-y-1 text-lg"
            >
              Request Appointment
            </Link>
            <div className="flex items-center gap-3 text-white/80 px-6 py-4 border border-white/10 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold tracking-wide uppercase">
                Available 24/7 in Kolkata
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Appointment;
