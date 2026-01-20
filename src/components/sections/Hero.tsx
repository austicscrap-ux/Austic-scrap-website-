'use client';

import React from 'react';
import Image from 'next/image';
import ContactForm from '@/components/common/ContactForm';
import { Button } from '@/components/ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-cover bg-center pt-20" style={{ backgroundImage: "url('/images/home page.jpg')" }}>
      {/* Background Image */}
      {/* <Image
        src="/images/home page.jpg"
        alt="Office Scrap Buyers in Kolkata"
        fill
        className="object-cover -z-10" // Use negative z-index to place behind content
        priority // Preload the image as it's part of the hero section
      /> */}

      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}

      <div className="container mx-auto relative z-10 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left p-4">
            <h1 className="text-white text-5xl md:text-6xl font-josefin-sans font-semibold mb-5 leading-tight">
              Office Scrap Buyers in Kolkata
            </h1>
            {/* Original content had more text but was commented out. Keeping it lean as per original visible content. */}
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 mb-5 md:mb-0 flex justify-center md:justify-end">
            {/* Form Section */}
            <div className="bg-white/90 p-5 rounded-lg shadow-lg max-w-sm w-full">
                <h4 className="text-2xl mb-5 text-gray-800 text-center">ENQUIRY NOW</h4>
                <ContactForm fields={[
                  { name: 'name', type: 'text', placeholder: 'Your Name', required: true },
                  { name: 'email', type: 'email', placeholder: 'Your Email', required: true },
                  { name: 'message', type: 'textarea', placeholder: 'Your Message', required: true },
                ]} submissionEndpoint="https://formspree.io/f/your_form_id" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;