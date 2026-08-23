"use client";

import React, { useState } from "react";
import Script from "next/script";
import { Calendar, Clock, Video, CheckCircle2, ArrowRight, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { trackCalendlyClick, trackPhoneClick, trackWhatsAppClick } from "@/components/analytics/events";

interface CalendlyBookingProps {
  calendlyUrl?: string;
}

const CalendlyBooking: React.FC<CalendlyBookingProps> = ({
  calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/austicscrap",
}) => {
  const [isPopupLoading, setIsPopupLoading] = useState(false);

  const handleOpenCalendly = () => {
    trackCalendlyClick(calendlyUrl, "schedule_consultation_card");

    // Check if Calendly window script is loaded for popup
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: calendlyUrl,
      });
    } else {
      // Fallback: Open Calendly link directly in new window
      window.open(calendlyUrl, "_blank", "noopener,noreferrer");
    }
  };

  const consultationPerks = [
    "Comprehensive scrap & obsolete IT asset evaluation",
    "Tailored corporate dismantling & pickup schedule",
    "Verified data destruction & EPR compliance certificate roadmap",
    "Instant transparent price estimation",
  ];

  return (
    <>
      {/* Load Calendly popup CSS & JS dynamically */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 p-8 md:p-12 overflow-hidden relative">
        {/* Decorative subtle background accents */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-[#127749]/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#127749]/10 text-[#127749] text-sm font-semibold mb-4">
              <Sparkles size={16} className="text-[#127749]" />
              Direct 1-on-1 Consultation
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 font-primary mb-3">
              Schedule Your Consultation
            </h3>
            <p className="text-neutral-600 text-base leading-relaxed max-w-xl font-secondary">
              Pick a convenient date and time on our calendar to discuss your office scrap,
              e-waste recycling, ITAD disposition, or plant dismantling requirements.
            </p>
          </div>

          {/* Meeting Info Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/70">
              <div className="w-10 h-10 rounded-lg bg-[#127749]/10 flex items-center justify-center text-[#127749] shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-medium">Duration</p>
                <p className="text-sm font-bold text-neutral-800">15 – 30 Mins</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/70">
              <div className="w-10 h-10 rounded-lg bg-[#127749]/10 flex items-center justify-center text-[#127749] shrink-0">
                <Video size={20} />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-medium">Format</p>
                <p className="text-sm font-bold text-neutral-800">Google Meet / Call</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/70">
              <div className="w-10 h-10 rounded-lg bg-[#127749]/10 flex items-center justify-center text-[#127749] shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-medium">Cost</p>
                <p className="text-sm font-bold text-green-700">100% Free</p>
              </div>
            </div>
          </div>

          {/* Consultation Perks List */}
          <div className="mb-8 p-6 rounded-2xl bg-neutral-50/80 border border-neutral-200/60">
            <h4 className="text-sm font-bold text-neutral-800 uppercase tracking-wider mb-4 font-secondary">
              What We Cover in the Meeting:
            </h4>
            <div className="space-y-3">
              {consultationPerks.map((perk, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#127749] shrink-0 mt-0.5" />
                  <span className="text-neutral-700 text-sm font-medium">{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary CTA Button: Book on Calendly */}
          <div className="space-y-4">
            <button
              onClick={handleOpenCalendly}
              className="w-full group relative flex items-center justify-center gap-3 py-4 px-8 bg-[#127749] hover:bg-[#0e5e3a] text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar size={22} className="transition-transform group-hover:scale-110" />
              <span>Book a Meeting on Calendly</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-center text-xs text-neutral-400 font-medium">
              Opens instant calendar slot selector • No credit card or pre-commitment required
            </p>
          </div>

          {/* Direct Contact Alternative */}
          <div className="mt-8 pt-6 border-t border-neutral-200/70">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-neutral-800">Need an urgent scrap clearance?</p>
                <p className="text-xs text-neutral-500">Reach our response team right away</p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="tel:+916205518929"
                  onClick={() => trackPhoneClick("+916205518929", "calendly_card_fallback")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-sm font-bold transition-colors"
                >
                  <Phone size={16} className="text-[#127749]" />
                  Call Us
                </a>

                <a
                  href="https://wa.me/+916205518929"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("+916205518929", "calendly_card_fallback")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-50 hover:bg-green-100 text-green-700 text-sm font-bold transition-colors"
                >
                  <FaWhatsapp size={16} className="text-green-600" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendlyBooking;
