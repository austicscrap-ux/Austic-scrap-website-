"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";

const clients = [
  "/images/tata-consultancy-services-1.svg",
  "/images/wipro-1.svg",
  "/images/bharti-airtel-limited.svg",
  "/images/hdfc-bank-logo.svg",
  "/images/POLO_FLOATEL_LOGO_(1).avif",
  "/images/yes_bank-removebg-preview.png",
  "/images/accenture-7.svg",
];

const ClientMarquee = () => {
  return (
    <SectionWrapper
      id="clients"
      className="bg-amber-50/30 border-y border-amber-100/50 !py-4 md:!py-6"
    >
      <div className="flex flex-col items-center text-center mb-4 md:mb-6">
        <span className="text-[#127749] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
          Trusted by Industry Leaders
        </span>
      </div>
      <div className="flex w-full overflow-hidden relative">
        <div className="flex animate-marquee-infinite whitespace-nowrap items-center">
          {[...clients, ...clients, ...clients].map((src, i) => (
            <LogoItem key={i} src={src} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const LogoItem = ({ src, index }: { src: string; index: number }) => {
  const ref = React.useRef(null);
  // Detects when the logo is in the center 40% of the screen horizontally
  const isInView = useInView(ref, {
    margin: "0px -30% 0px -30%",
  }); // Card is "active" when it passes through the center 40% of the screen

  return (
    <div
      ref={ref}
      className={`mx-4 md:mx-8 w-20 sm:w-28 md:w-32 h-8 sm:h-12 md:h-14 relative flex-shrink-0 transition-all duration-700 cursor-default ${
        isInView
          ? "grayscale-0 opacity-100 scale-110"
          : "grayscale opacity-40 scale-100"
      }`}
    >
      <Image
        src={src}
        alt={`Client Logo ${index}`}
        fill
        className="object-contain"
      />
    </div>
  );
};

export default ClientMarquee;
