"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("austic_cookie_consent");
    if (!consent) {
      // Small delay so it doesn't jarringly appear before the page renders
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("austic_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("austic_cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-[999999] bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-2xl rounded-2xl p-5 md:p-6 text-neutral-800"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent banner"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#127749]/10 text-[#127749] flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 font-primary">
                Cookie & Privacy Choices
              </h3>
            </div>
            <button
              onClick={handleDecline}
              aria-label="Dismiss cookie notice"
              className="text-neutral-400 hover:text-neutral-700 transition-colors p-1 rounded-lg hover:bg-neutral-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs md:text-sm text-neutral-600 leading-relaxed mb-4">
            We use essential and analytics cookies to enhance your browsing experience, measure performance, and support secure scrap consultation inquiries. Review our{" "}
            <Link
              href="/privacy-policy"
              className="text-[#127749] font-medium underline hover:text-[#0e5e3a] transition-colors"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms-of-service"
              className="text-[#127749] font-medium underline hover:text-[#0e5e3a] transition-colors"
            >
              Terms
            </Link>
            .
          </p>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleAccept}
              className="flex-1 py-2.5 px-4 rounded-xl text-xs md:text-sm font-semibold bg-[#127749] hover:bg-[#0e5e3a] text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4" />
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="py-2.5 px-4 rounded-xl text-xs md:text-sm font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 transition-colors"
            >
              Essential Only
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
