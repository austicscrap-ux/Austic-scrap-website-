"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Briefcase, Info } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  name: string;
  position: string;
  description: string;
  imageSrc: string;
}

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  teamMembers: TeamMember[];
}

const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose, teamMembers }) => {
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

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col z-[10001] border border-neutral-100"
          >
            {/* Header Accent */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#127749] to-[#4CAF50]" />

            {/* Header */}
            <div className="flex items-center justify-between p-6 md:p-10 border-b border-neutral-100">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-primary">
                  Our <span className="text-[#127749]">Leadership</span> Team
                </h2>
                <p className="text-neutral-500 mt-2 font-secondary font-medium">The experts driving our vision for a sustainable future.</p>
              </div>
              <button
                onClick={onClose}
                className="p-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 transition-all duration-300 transform hover:rotate-90"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col md:flex-row gap-6 bg-neutral-50/50 p-6 rounded-3xl border border-neutral-100 hover:border-[#127749]/30 transition-all duration-300 group"
                  >
                    <div className="w-full md:w-40 h-40 relative flex-shrink-0">
                      <div className="absolute inset-0 bg-[#127749]/10 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-300" />
                      <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white shadow-md">
                         <Image
                          src={member.imageSrc}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <User size={16} className="text-[#127749]" />
                          <h3 className="text-xl font-bold text-neutral-900 font-primary">
                            {member.name}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-[#127749] font-bold text-sm uppercase tracking-wider font-secondary">
                          <Briefcase size={14} />
                          {member.position}
                        </div>
                      </div>
                      <p className="text-neutral-600 text-sm leading-relaxed font-secondary font-medium text-justify">
                        {member.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 md:p-8 bg-neutral-50/80 border-t border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-neutral-500">
                <Info size={18} className="text-[#127749]" />
                <span className="text-sm font-medium">Click outside or press ESC to close</span>
              </div>
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-[#127749] text-white rounded-full font-bold hover:bg-[#0e5c38] transition-all duration-300 shadow-lg shadow-[#127749]/20"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TeamModal;
