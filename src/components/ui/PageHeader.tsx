"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage = "/images/home page.jpg", // Default fallback if needed
}) => {
  return (
    <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-josefin-sans tracking-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Decorative Divider */}
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
