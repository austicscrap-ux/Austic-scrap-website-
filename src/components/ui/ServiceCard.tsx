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
  Lock
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  desc: string;
  img: string;
  link: string;
  index: number;
  category?: string;
  certification?: string[];
  features?: string[];
  rating?: number;
  clients?: number;
  completionRate?: number;
  responseTime?: string;
  status?: 'active' | 'premium' | 'enterprise';
  metrics?: {
    projectsCompleted?: number;
    satisfactionRate?: number;
    avgResponseTime?: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  desc,
  img,
  link,
  index,
  category = "Service",
  certification = [],
  features = [],
  rating = 4.8,
  clients = 150,
  completionRate = 98,
  responseTime = "2 hours",
  status = 'active',
  metrics = {
    projectsCompleted: 500,
    satisfactionRate: 96,
    avgResponseTime: "2 hours"
  }
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const statusColors = {
    active: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
    premium: 'bg-amber-500/10 text-amber-600 border-amber-200',
    enterprise: 'bg-purple-500/10 text-purple-600 border-purple-200'
  };

  const statusIcons = {
    active: <CheckCircle className="w-3 h-3" />,
    premium: <Star className="w-3 h-3" />,
    enterprise: <Award className="w-3 h-3" />
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1, 
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full group"
      role="article"
      aria-labelledby={`service-${index}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link
        href={link}
        className="relative flex flex-col h-full bg-white border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
        aria-label={`Learn more about ${title}`}
      >
        {/* Rectangular Header with Image - Mobile Responsive */}
        <div className="relative h-40 sm:h-48 md:h-52 w-full overflow-hidden bg-neutral-100">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            quality={85}
            priority={index < 4}
          />
          
          {/* Simple Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <div className={`inline-flex items-center gap-1 px-2 py-1 border ${statusColors[status]}`}>
              {statusIcons[status]}
              <span className="text-xs font-semibold uppercase">
                {status}
              </span>
            </div>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <div className="inline-flex items-center px-2 py-1 bg-white/90 border border-neutral-200">
              <Globe className="w-3 h-3 mr-1 text-blue-600" />
              <span className="text-xs font-semibold text-neutral-700 uppercase">
                {category}
              </span>
            </div>
          </div>
          
          {/* Simple Metrics */}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-black/50 px-2 py-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-semibold text-white">{rating}</span>
                </div>
                <div className="flex items-center gap-1 bg-black/50 px-2 py-1">
                  <Users className="w-3 h-3 text-white" />
                  <span className="text-xs font-semibold text-white">{clients}+</span>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-black/50 px-2 py-1">
                <TrendingUp className="w-3 h-3 text-emerald-400" />
                <span className="text-xs font-semibold text-white">{completionRate}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rectangular Content Container - Mobile Responsive */}
        <div className="flex flex-col flex-grow p-3 sm:p-4 bg-white">
          {/* Title Section */}
          <header className="mb-3">
            <h3 
              id={`service-${index}`}
              className="text-base sm:text-lg font-bold text-neutral-900 leading-tight mb-2 group-hover:text-[#127749] transition-colors duration-300"
            >
              {title}
            </h3>
          </header>

          {/* Description */}
          <div className="mb-3 flex-grow">
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3 line-clamp-3">
              {desc}
            </p>
            
            {/* Features List */}
            {features.length > 0 && (
              <div className="space-y-1">
                {features.slice(0, 2).map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="flex items-start gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-[#127749] rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Simple Metrics Dashboard - Mobile Responsive */}
          <div className="mb-3 p-3 sm:p-4 bg-neutral-50 border border-neutral-200">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  <span className="text-xs sm:text-sm font-bold text-neutral-900">{metrics.projectsCompleted}</span>
                </div>
                <span className="text-xs text-neutral-500">Projects</span>
              </div>
              <div className="text-center border-x border-neutral-200">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
                  <span className="text-xs sm:text-sm font-bold text-neutral-900">{metrics.satisfactionRate}%</span>
                </div>
                <span className="text-xs text-neutral-500">Satisfaction</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" />
                  <span className="text-xs sm:text-sm font-bold text-neutral-900">{metrics.avgResponseTime}</span>
                </div>
                <span className="text-xs text-neutral-500">Response</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-auto pt-3 border-t border-neutral-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="w-3 h-3 text-[#127749]" />
                <Lock className="w-3 h-3 text-neutral-400" />
                <span className="text-xs font-semibold uppercase text-neutral-600 group-hover:text-[#127749] transition-colors duration-300">
                  Certified
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-neutral-600 group-hover:text-[#127749] transition-colors duration-300">
                  Explore
                </span>
                <div className="w-6 h-6 border border-neutral-300 flex items-center justify-center group-hover:bg-[#127749] group-hover:border-[#127749] transition-all duration-300">
                  <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
            </div>
          </footer>
        </div>
        
        {/* Simple Border Effect */}
        <div className="absolute inset-0 border border-transparent group-hover:border-[#127749]/50 transition-all duration-300 pointer-events-none" />
      </Link>
    </motion.article>
  );
};

export default ServiceCard;
