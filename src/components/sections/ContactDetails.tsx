"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const ContactDetails: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {/* Phone Card */}
      <Link
        href="tel:+919831027550"
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
            +91 98310 27550
          </p>
        </div>
      </Link>

      {/* WhatsApp Card */}
      <Link
        href="https://wa.me/+919831027550"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center p-6 bg-white rounded-xl shadow-sm border border-neutral-100/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-[#127749] group-hover:bg-[#127749] group-hover:text-white transition-colors duration-300 mr-5">
          <MessageCircle size={24} />
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
        href="mailto:fexmonscrap98@gmail.com"
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
            fexmonscrap98@gmail.com
          </p>
        </div>
      </Link>

      {/* Location Card */}
      <Link
        href="https://www.google.com/maps/place/Scrap+Buyer/@22.5549376,88.3530503,17z"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center p-6 bg-white rounded-xl shadow-sm border border-neutral-100/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-[#127749] group-hover:bg-[#127749] group-hover:text-white transition-colors duration-300 mr-5 flex-shrink-0">
          <MapPin size={24} />
        </div>
        <div>
          <h4 className="text-lg font-bold font-primary text-neutral-900 mb-1">
            Our Location
          </h4>
          <p className="text-neutral-600 font-secondary font-medium leading-tight">
            Park Street Taltala, Kolkata-700016
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ContactDetails;
