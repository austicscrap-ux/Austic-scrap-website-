"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  desc: string;
  img: string;
  link: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  desc,
  img,
  link,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link
        href={link}
        className="group relative flex flex-col h-full bg-white border border-neutral-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
      >
        {/* Image Container */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Subtle gradient overlay for better text contrast if header overlaps, though text is below */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Action Button (Absolute Positioned) */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
            <ArrowUpRight className="w-5 h-5 text-[#127749]" />
          </div>
        </div>

        {/* Content Container */}
        <div className="p-8 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-neutral-900 font-primary mb-3 group-hover:text-[#127749] transition-colors duration-300">
            {title}
          </h3>

          <p className="text-neutral-500 text-sm leading-relaxed font-secondary mb-8 flex-grow line-clamp-3">
            {desc}
          </p>

          {/* Bottom Action Area */}
          <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-6">
            <span className="text-sm font-semibold tracking-wide uppercase text-neutral-400 group-hover:text-[#127749] transition-colors duration-300">
              Explore Solution
            </span>
            <div className="w-8 h-8 border border-neutral-200 flex items-center justify-center group-hover:bg-[#127749] group-hover:border-[#127749] transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
