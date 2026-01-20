// src/components/sections/ContactDetails.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const ContactDetails: React.FC = () => {
  return (
    <div className="info space-y-6">
      <div className="phone">
        <Link
          href="tel:+919831027550"
          className="flex items-center text-text-black-dark hover:text-text-primary transition-colors"
        >
          <Phone className="text-3xl text-primary-color mr-3" />
          <div>
            <h4 className="text-xl font-semibold">Call:</h4>
            <p className="text-text-gray">9831027550</p>
          </div>
        </Link>
      </div>

      <div className="whatsapp">
        <Link
          href="https://wa.me/+919831027550"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-text-black-dark hover:text-text-primary transition-colors"
        >
          <MessageCircle className="text-3xl text-primary-color mr-3" />
          <div>
            <h4 className="text-xl font-semibold">Whatsapp:</h4>
            <p className="text-text-gray">9831027550</p>
          </div>
        </Link>
      </div>

      <div className="email">
        <Link
          href="mailto:fexmonscrap98@gmail.com"
          className="flex items-center text-text-black-dark hover:text-text-primary transition-colors"
        >
          <Mail className="text-3xl text-primary-color mr-3" />
          <div>
            <h4 className="text-xl font-semibold">Email:</h4>
            <p className="text-text-gray">fexmonscrap98@gmail.com</p>
          </div>
        </Link>
      </div>

      <div className="address">
        <Link
          href="https://www.google.com/maps/place/Scrap+Buyer/@22.5549376,88.3530503,17z/data=!4m12!1m6!3m5!1s0x0:0x20a4a1d9df8f9afa!2sScrap+Buyer!8m2!3d22.5549376!4d88.3530503"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-text-black-dark hover:text-text-primary transition-colors"
        >
          <MapPin className="text-3xl text-primary-color mr-3" />
          <div>
            <h4 className="text-xl font-semibold">Location:</h4>
            <p className="text-text-gray">Park Street Taltala Kolkata-700016</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
