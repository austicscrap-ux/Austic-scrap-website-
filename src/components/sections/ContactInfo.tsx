"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { trackPhoneClick, trackWhatsAppClick } from "@/components/analytics/events";

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h5 className="text-[#127749] font-bold tracking-widest uppercase mb-3 text-sm font-secondary">
          Get in Touch
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold font-primary text-neutral-900 mb-4">
          We&apos;re Here to Help
        </h2>
        <p className="text-neutral-600 text-lg leading-relaxed font-secondary mb-6">
          Whether you have a question about our services, pricing, or want to
          schedule a pickup, our team is ready to assist you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="tel:+916205518929"
            onClick={() => trackPhoneClick("+916205518929", "contact_info_card")}
            className="group flex items-center p-4 bg-[#127749] text-white rounded-xl hover:bg-[#0e5e3a] transition-all duration-300"
          >
            <Phone size={20} className="mr-3" />
            <div>
              <h4 className="font-bold font-primary">Call Now</h4>
              <p className="text-sm opacity-90">+91 62055 18929</p>
            </div>
          </a>

          <a
            href="https://wa.me/+916205518929"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("+916205518929", "contact_info_card")}
            className="group flex items-center p-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300"
          >
            <FaWhatsapp size={20} className="mr-3" />
            <div>
              <h4 className="font-bold font-primary">WhatsApp</h4>
              <p className="text-sm opacity-90">Chat with us</p>
            </div>
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold font-primary text-neutral-900 mb-4">
          Our Offices
        </h3>

        <div className="space-y-4">
          {/* Office 1 */}
          <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral-100/50">
            <h4 className="text-lg font-bold font-primary text-neutral-900 mb-3">
              Office 1 (Registered Facility)
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin
                  size={18}
                  className="text-[#127749] mr-3 mt-1 shrink-0"
                />
                <div>
                  <a
                    href="https://maps.google.com/?q=40/c/1c/1/H+Raja+Santosh+Roy+Road+Kolkata-27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 font-medium hover:text-[#127749] transition-colors"
                  >
                    40/c/1c/1/H Raja Santosh Roy Road
                    <br />
                    Kolkata, West Bengal 700027
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Phone size={18} className="text-[#127749] mr-3 shrink-0" />
                <a
                  href="tel:+916205518929"
                  className="text-neutral-600 font-medium hover:text-[#127749] transition-colors"
                >
                  +91 62055 18929
                </a>
              </div>

              <div className="flex items-center">
                <Mail size={18} className="text-[#127749] mr-3 shrink-0" />
                <a
                  href="mailto:austicscrap@gmail.com"
                  className="text-neutral-600 font-medium hover:text-[#127749] transition-colors"
                >
                  austicscrap@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Office 2 */}
          <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral-100/50">
            <h4 className="text-lg font-bold font-primary text-neutral-900 mb-3">
              Office 2 (Park Street Branch)
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin
                  size={18}
                  className="text-[#127749] mr-3 mt-1 shrink-0"
                />
                <div>
                  <a
                    href="https://maps.google.com/?q=1,+1E,+Ripon+St,+Esplanade,+Park+Street+area,+Kolkata,+West+Bengal+700016"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 font-medium hover:text-[#127749] transition-colors"
                  >
                    1, 1E, Ripon St, Esplanade
                    <br />
                    Park Street area, Kolkata, West Bengal 700016
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Phone size={18} className="text-[#127749] mr-3 shrink-0" />
                <a
                  href="tel:+916205518929"
                  className="text-neutral-600 font-medium hover:text-[#127749] transition-colors"
                >
                  +91 62055 18929
                </a>
              </div>

              <div className="flex items-center">
                <Mail size={18} className="text-[#127749] mr-3 shrink-0" />
                <a
                  href="mailto:austicscrap@gmail.com"
                  className="text-neutral-600 font-medium hover:text-[#127749] transition-colors"
                >
                  austicscrap@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
