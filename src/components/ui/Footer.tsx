"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Home,
  Phone,
  Mail,
} from "lucide-react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing, ${email}! (Frontend only mode)`);
      setEmail("");
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer
      id="contact"
      className="bg-neutral-900 text-neutral-300"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 lg:px-[86px] py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="font-primary text-xl font-bold text-white mb-4">
              Austic Scrap
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              We buy office scrap and recycle e-waste, turning electronics into
              value. Sell your scrap today!
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Home
                  size={18}
                  className="mt-1 flex-shrink-0 text-primary-light"
                />
                <a
                  href="https://maps.google.com/?q=40/c/1c/1/H+Raja+Santosh+Roy+Road+Kolkata-27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary-light transition-colors"
                >
                  40/c/1c/1/H Raja Santosh Roy Road Kolkata-27
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-light" />
                <a
                  href="tel:+916205518929"
                  className="text-sm hover:text-primary-light transition-colors"
                >
                  +91 62055 18929
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-light" />
                <a
                  href="mailto:info@austicscrap.com"
                  className="text-sm hover:text-primary-light transition-colors"
                >
                  info@austicscrap.com
                </a>
              </li>
            </ul>
          </div>

          {/* Location Links */}
          <div>
            <h3 className="font-primary text-xl font-bold text-white mb-4">
              Locations
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/kolkatascrap", label: "Scrap Buyer in Kolkata" },
                { href: "/delhiscrap", label: "Scrap Buyer in Delhi NCR" },
                { href: "/mumbaiscrap", label: "Scrap Buyer in Mumbai" },
                { href: "/bengaluruscrap", label: "Scrap Buyer in Bengaluru" },
                { href: "/hyderabadscrap", label: "Scrap Buyer in Hyderabad" },
                {
                  href: "/chennai-scrap-service",
                  label: "Scrap Buyer in Chennai",
                },
                { href: "/punescrap", label: "Scrap Buyer in Pune" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h3 className="font-primary text-xl font-bold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                {
                  href: "/ewaste-recycling-kolkata",
                  label: "E-waste Recycling",
                },
                { href: "/office-scrap", label: "Office Scrap" },
                { href: "/second-hand-scrap", label: "Second-hand Scrap" },
                { href: "/it-non-it-scrap", label: "IT & Non-IT Scrap" },
                { href: "/metal-recycling", label: "Metal Recycling" },
                { href: "/data-security", label: "Data Security" },
                { href: "/office-workstation", label: "Office Workstation" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <h3 className="font-primary text-xl font-bold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-sm mb-3">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 h-10 text-sm text-white w-full focus:outline-none focus:ring-2 focus:ring-primary-light transition-all placeholder-neutral-500"
                  placeholder="Your Email"
                  aria-label="Email for newsletter"
                  required
                  suppressHydrationWarning
                />
                <Button
                  type="submit"
                  variant="default"
                  size="default"
                  className="w-full h-10 bg-[#127749] hover:bg-black text-white font-bold transition-all rounded-lg"
                >
                  Subscribe
                </Button>
              </form>
            </div>
            <div>
              <h3 className="font-primary text-xl font-bold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-neutral-400 hover:text-primary-light transition-colors"
                    aria-label={`Follow us on ${social.label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-950/50 border-t border-neutral-800">
        <div className="container mx-auto px-4 lg:px-[86px] py-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Austic Scrap. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
