"use client";

import React from "react";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

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
          Whether you have a question about our services, pricing, or want to schedule a pickup, our team is ready to assist you.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="tel:+916205518929"
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
            className="group flex items-center p-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300"
          >
            <MessageCircle size={20} className="mr-3" />
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
          <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral-100/50">
            <h4 className="text-lg font-bold font-primary text-neutral-900 mb-3">
              Kolkata Office
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="text-[#127749] mr-3 mt-1 shrink-0" />
                <div>
                  <p className="text-neutral-600 font-medium">
                    Park Street Taltala, Kolkata-700016<br />
                    West Bengal, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone size={18} className="text-[#127749] mr-3 shrink-0" />
                <a href="tel:+916205518929" className="text-neutral-600 font-medium hover:text-[#127749] transition-colors">
                  +91 62055 18929
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail size={18} className="text-[#127749] mr-3 shrink-0" />
                <a href="mailto:austicscrap@gmail.com" className="text-neutral-600 font-medium hover:text-[#127749] transition-colors">
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
