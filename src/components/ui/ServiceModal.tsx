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
        <div className="fixed inset-0 top-0 left-0 z-[10000] flex items-center justify-center px-4 h-screen w-screen">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] z-[10001] border border-neutral-100 mt-20 md:mt-24"
          >
            {/* Header / Accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#127749] to-[#4CAF50]" />

            <div className="flex items-start justify-between p-8 pb-0">
              <div className="pr-12">
                <h3 className="text-3xl font-bold text-neutral-900 font-primary leading-tight">
                  {title}
                </h3>
                <div className="w-16 h-1 mt-4 bg-[#127749] rounded-full" />
              </div>

              {/* Close Icon Only */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 hover:bg-red-50 text-neutral-500 hover:text-red-500 transition-all duration-300 transform hover:rotate-90"
                aria-label="Close modal"
              >
                <X size={24} strokeWidth={2.5} />
              </button>
            </div>

            {/* Body */}
            <div className="p-8 pt-6 overflow-y-auto custom-scrollbar">
              <p className="text-neutral-600 text-[17px] leading-8 whitespace-pre-line font-secondary text-justify">
                {description}
              </p>
            </div>

            {/* Bottom Fade (visual polish) */}
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
