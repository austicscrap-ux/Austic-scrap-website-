"use client";

import React from "react";
import Image from "next/image";
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
      className="bg-white border-t border-neutral-100 py-12 md:py-16"
    >
      <div className="flex flex-col items-center text-center mb-10">
        <span className="text-neutral-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
          Trusted by Industry Leaders
        </span>
      </div>
      <div className="flex w-full overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...clients, ...clients, ...clients].map((src, i) => (
            <div
              key={i}
              className="mx-10 w-32 md:w-40 h-16 md:h-20 relative flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 cursor-default"
            >
              <Image
                src={src}
                alt={`Client Logo ${i}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ClientMarquee;
