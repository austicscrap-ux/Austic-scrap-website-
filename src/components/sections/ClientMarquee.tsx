// src/components/sections/ClientMarquee.tsx
'use client';

import React from 'react';
import Image from 'next/image';

interface ClientLogo {
  src: string;
  alt: string;
}

const clientLogos: ClientLogo[] = [
  { src: '/images/tata-consultancy-services-1.svg', alt: 'Tata Consultancy Services' },
  { src: '/images/wipro-1.svg', alt: 'Wipro' },
  { src: '/images/bharti-airtel-limited.svg', alt: 'Bharti Airtel' },
  { src: '/images/hdfc-bank-logo.svg', alt: 'HDFC Bank' },
  { src: '/images/POLO_FLOATEL_LOGO_(1).avif', alt: 'Polo Floatel' },
  { src: '/images/yes_bank-removebg-preview.png', alt: 'Yes Bank' },
  { src: '/images/accenture-7.svg', alt: 'Accenture' },
];

const ClientMarquee: React.FC = () => {
  return (
    <div className="kaishu-marquee-container w-full overflow-hidden bg-marquee-blue py-5">
      <div className="kaishu-marquee flex w-full animate-kaishu-scroll">
        <div className="kaishu-marquee-content flex w-full">
          {clientLogos.map((logo, index) => (
            <div key={index} className="kaishu-marquee-item flex flex-col items-center justify-center min-w-[150px] mx-4 flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100} // Adjust width as needed
                height={100} // Adjust height as needed, max-height was 100px in original CSS
                className="max-w-full h-auto max-h-[100px] object-contain"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {clientLogos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="kaishu-marquee-item flex flex-col items-center justify-center min-w-[150px] mx-4 flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className="max-w-full h-auto max-h-[100px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientMarquee;
