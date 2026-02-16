"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Shield,
  Award,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  BarChart3,
  Star,
  Globe,
  Lock,
  ChevronRight,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  desc: string;
  img?: string; // Made optional as some data might not have it, though fallback is used
  link?: string;
  index?: number;
  category?: string;
  certification?: string[];
  features?: string[];
  rating?: number;
  clients?: number;
  completionRate?: number;
  responseTime?: string;
  status?: "active" | "premium" | "enterprise";
  metrics?: {
    projectsCompleted?: number;
    satisfactionRate?: number;
    avgResponseTime?: string;
  };
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  desc,
  img = "/images/placeholder.jpg", // Fallback image
  link,
  index = 0,
  category = "Service",
  certification = [],
  features = [],
  rating = 4.8,
  clients = 150,
  completionRate = 98,
  responseTime = "2 hours",
  status = "active",
  metrics = {
    projectsCompleted: 500,
    satisfactionRate: 96,
    avgResponseTime: "2 hours",
  },
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const statusColors = {
    active: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
    premium: "bg-amber-500/10 text-amber-700 border-amber-200",
    enterprise: "bg-indigo-500/10 text-indigo-700 border-indigo-200",
  };

  const statusIcons = {
    active: <CheckCircle className="w-3 h-3" />,
    premium: <Star className="w-3 h-3" />,
    enterprise: <Award className="w-3 h-3" />,
  };

  // Content wrapper component to handle Link vs div (for onClick)
  const Wrapper = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className: string;
  }) => {
    if (onClick) {
      return (
        <div onClick={onClick} className={`${className} cursor-pointer`}>
          {children}
        </div>
      );
    }
    return (
      <Link href={link || "#"} className={className}>
        {children}
      </Link>
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full group"
      role="article"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Wrapper className="relative flex flex-col h-full bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300">
        {/* Image Section */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-100">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            quality={85}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <div
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border backdrop-blur-sm ${statusColors[status] || statusColors.active}`}
            >
              {statusIcons[status] || statusIcons.active}
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                {status}
              </span>
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <div className="inline-flex items-center px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
              <Globe className="w-3 h-3 mr-1.5 text-emerald-600" />
              <span className="text-[10px] sm:text-xs font-bold text-neutral-800 uppercase tracking-widest">
                {category}
              </span>
            </div>
          </div>

          {/* Floating Metrics (On Image) */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-white/90">
              <div className="flex items-center gap-2 text-xs font-medium">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>{rating} Rating</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>{clients}+ Clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-grow p-5 sm:p-6 bg-white">
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 leading-snug mb-2 group-hover:text-emerald-700 transition-colors duration-300 line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
              {desc}
            </p>
          </div>

          {/* Features */}
          {features.length > 0 && (
            <div className="mb-5 space-y-2">
              {features.slice(0, 3).map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-xs sm:text-sm text-neutral-600 font-medium line-clamp-1">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-auto pt-5 border-t border-neutral-100">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold block mb-1">
                  Success Rate
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-neutral-900">
                    {completionRate}%
                  </span>
                  <TrendingUp className="w-3 h-3 text-emerald-500" />
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold block mb-1">
                  Response
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-neutral-900">
                    {responseTime}
                  </span>
                  <Clock className="w-3 h-3 text-amber-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="bg-neutral-50 p-4 border-t border-neutral-100 flex items-center justify-between group-hover:bg-emerald-50/50 transition-colors duration-300">
          <div className="flex items-center gap-1.5 text-neutral-500">
            <Shield className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Certified
            </span>
          </div>
          <span className="flex items-center gap-1 text-sm font-bold text-emerald-700 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            View Details <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </Wrapper>
    </motion.article>
  );
};

export default ServiceCard;
