"use client";

import React from "react";
import Image from "next/image";

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
    <div className="kaishu-marquee-container py-10 bg-white overflow-hidden border-t">
       {/* Re-using the marquee animation logic from global css if valid, or just simple flex loop */}
       <div className="flex w-full overflow-hidden relative">
            <div className="flex animate-marquee whitespace-nowrap items-center">
                {[...clients, ...clients, ...clients].map((src, i) => (
                    <div key={i} className="mx-8 w-32 h-20 relative flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                        <Image 
                            src={src} 
                            alt={`Client ${i}`} 
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
       </div>
    </div>
  );
};

export default ClientMarquee;
