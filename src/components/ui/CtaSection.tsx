"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CtaSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title = "Ready to Dispose Your Scrap?",
  description = "Join the thousands of businesses trusting Austic Scrap for their e-waste and office scrap management needs. Get a quote today.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
}) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-green-900 z-0">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-800 opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-[86px] max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-josefin-sans text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-10 font-light">
            {description}
          </p>

          <Link
            href={buttonLink}
            className="inline-flex items-center gap-2 bg-white text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
          >
            {buttonText}
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
