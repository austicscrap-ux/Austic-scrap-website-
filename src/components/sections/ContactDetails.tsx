"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactDetails: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {/* Phone Card */}
      <Link
        href="tel:+916205518929"
        className="group flex items-center p-6 bg-white rounded-xl shadow-sm border border-neutral-100/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-[#127749] group-hover:bg-[#127749] group-hover:text-white transition-colors duration-300 mr-5">
          <Phone size={24} />
        </div>
        <div>
          <h4 className="text-lg font-bold font-primary text-neutral-900 mb-1">
            Call Us
          </h4>
          <p className="text-neutral-600 font-secondary font-medium">
            +91 62055 18929
          </p>
        </div>
      </Link>

      {/* WhatsApp Card */}
      <Link
        href="https://wa.me/+916205518929"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center p-6 bg-white rounded-xl shadow-sm border border-neutral-100/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-[#127749] group-hover:bg-[#127749] group-hover:text-white transition-colors duration-300 mr-5">
          <FaWhatsapp size={24} />
        </div>
        <div>
          <h4 className="text-lg font-bold font-primary text-neutral-900 mb-1">
            WhatsApp
          </h4>
          <p className="text-neutral-600 font-secondary font-medium">
            Chat on WhatsApp
          </p>
        </div>
      </Link>

      {/* Email Card */}
      <Link
        href="mailto:austicscrap@gmail.com"
        className="group flex items-center p-6 bg-white rounded-xl shadow-sm border border-neutral-100/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-[#127749] group-hover:bg-[#127749] group-hover:text-white transition-colors duration-300 mr-5">
          <Mail size={24} />
        </div>
        <div>
          <h4 className="text-lg font-bold font-primary text-neutral-900 mb-1">
            Email Us
          </h4>
          <p className="text-neutral-600 font-secondary font-medium">
            austicscrap@gmail.com
          </p>
        </div>
      </Link>

      {/* Location 1 Card */}
      <a
        href="https://maps.google.com/?q=40/c/1c/1/H+Raja+Santosh+Roy+Road+Kolkata-27"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center p-6 bg-white rounded-xl shadow-sm border border-neutral-100/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-[#127749] group-hover:bg-[#127749] group-hover:text-white transition-colors duration-300 mr-5 flex-shrink-0">
          <MapPin size={24} />
        </div>
        <div>
          <h4 className="text-lg font-bold font-primary text-neutral-900 mb-1">
            Office 1 (Registered)
          </h4>
          <p className="text-neutral-600 font-secondary font-medium leading-tight">
            40/c/1c/1/H Raja Santosh Roy Road, Kolkata-700027
          </p>
        </div>
      </a>

      {/* Location 2 Card */}
      <a
        href="https://maps.google.com/?q=1,+1E,+Ripon+St,+Esplanade,+Park+Street+area,+Kolkata,+West+Bengal+700016"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center p-6 bg-white rounded-xl shadow-sm border border-neutral-100/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-[#127749] group-hover:bg-[#127749] group-hover:text-white transition-colors duration-300 mr-5 flex-shrink-0">
          <MapPin size={24} />
        </div>
        <div>
          <h4 className="text-lg font-bold font-primary text-neutral-900 mb-1">
            Office 2 (Park Street)
          </h4>
          <p className="text-neutral-600 font-secondary font-medium leading-tight">
            1, 1E, Ripon St, Esplanade, Park Street area, Kolkata 700016
          </p>
        </div>
      </a>
    </div>
  );
};

export default ContactDetails;
