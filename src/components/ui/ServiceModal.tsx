"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const ServiceModal: React.FC<ServiceModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 top-0 left-0 z-[10000] flex items-start justify-center px-4 pt-16 md:pt-20 lg:pt-24 pb-8 h-screen w-screen overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative bg-white w-full max-w-4xl md:max-w-5xl lg:max-w-6xl rounded-2xl shadow-2xl overflow-hidden flex flex-col z-[10001] border border-neutral-100 mt-8 md:mt-12 lg:mt-16"
          >
            {/* Header / Accent */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#127749] to-[#4CAF50]" />

            {/* Header Section */}
            <div className="flex items-start justify-between p-6 md:p-8 pb-4 md:pb-6">
              <div className="flex-1 pr-12">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 font-primary leading-tight">
                  {title}
                </h3>
                <div className="w-16 h-1 mt-3 md:mt-4 bg-[#127749] rounded-full" />
              </div>

              {/* Close Button - X Icon */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 rounded-full bg-neutral-100 hover:bg-red-50 text-neutral-500 hover:text-red-500 transition-all duration-300 transform hover:rotate-90"
                aria-label="Close modal"
              >
                <X size={20} className="md:w-6 md:h-6" strokeWidth={2.5} />
              </button>
            </div>

            {/* Body Content - Full Height Available */}
            <div className="flex-1 overflow-y-auto px-6 md:px-8 pb-6 md:pb-8">
              <div className="h-full">
                <p className="text-neutral-600 text-base md:text-lg leading-relaxed md:leading-8 whitespace-pre-wrap font-secondary text-justify">
                  {description}
                </p>
              </div>
            </div>

            {/* Footer Section */}
            <div className="border-t border-neutral-100 p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#127749] rounded-full" />
                  <span className="text-sm text-neutral-500 font-medium">
                    Service Details
                  </span>
                </div>
                <div className="w-2 h-2" />
              </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-16 left-0 w-full h-4 bg-gradient-to-t from-white to-transparent pointer-events-none md:hidden" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
