"use client";

import React from "react";
import ContactInfo from "@/components/sections/ContactInfo";
import CalendlyBooking from "@/components/common/CalendlyBooking";

export default function ContactPageContent() {
  return (
    <>
      <section className="py-20 bg-amber-50/30">
        <div className="container mx-auto px-4 lg:px-[86px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Left Column: Contact Info & Offices */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>

            {/* Right Column: Schedule Your Consultation via Calendly */}
            <div className="lg:col-span-2">
              <CalendlyBooking />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[450px] bg-neutral-100 relative grayscale hover:grayscale-0 transition-all duration-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.710404419791!2d88.3530503!3d22.5549376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x20a4a1d9df8f9afa!2sScrap+Buyer!5e0!3m2!1sen!2sin!4v1625576000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Austic Scrap Location"
        />
      </section>
    </>
  );
}
