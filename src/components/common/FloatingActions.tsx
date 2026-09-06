"use client";

import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { trackPhoneClick, trackWhatsAppClick } from "@/components/analytics/events";

const FloatingActions: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact options"
      className="fixed bottom-20 right-4 sm:right-6 z-[99999] flex flex-col items-end gap-2.5 pointer-events-auto"
    >
      {/* Phone Hotline Button */}
      <a
        href="tel:+916205518929"
        className="group flex items-center gap-2 bg-neutral-900/90 hover:bg-black text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/10"
        target="_blank"
        rel="noreferrer"
        aria-label="Call Austic Scrap Hotline +91-6205518929"
        onClick={() => trackPhoneClick("+916205518929", "floating_button")}
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium px-0 group-hover:max-w-xs group-hover:px-2 transition-all duration-300 ease-in-out">
          Call Hotline
        </span>
        <Phone size={18} className="text-white" />
      </a>

      {/* WhatsApp Chat Bubble */}
      <a
        href="https://wa.me/916205518929?text=Hi%20Austic%20Scrap%2C%20I%20would%20like%20to%20inquire%20about%20scrap%20pickup%20and%20recycling%20services."
        className="group relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Austic Scrap on WhatsApp"
        onClick={() => trackWhatsAppClick("+916205518929", "floating_button")}
      >
        {/* Soft pulse ping dot */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-100 border border-emerald-500"></span>
        </span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold px-0 group-hover:max-w-xs group-hover:px-2 transition-all duration-300 ease-in-out">
          Chat with Us
        </span>
        <FaWhatsapp size={24} className="text-white" />
      </a>
    </aside>
  );
};

export default FloatingActions;
