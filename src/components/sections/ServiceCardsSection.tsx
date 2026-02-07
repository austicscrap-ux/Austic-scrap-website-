"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceModal from "@/components/ui/ServiceModal";
import SectionWrapper from "@/components/common/SectionWrapper";
import { ArrowUpRight, Shield, Award } from "lucide-react";
import "@/styles/service-cards-responsive.css";
import "@/styles/enterprise-typography.css";
import "@/styles/premium-enterprise.css";
import "@/styles/exact-grid-layout.css";

interface ServiceCardData {
  title: string;
  shortDescription: string;
  longDescription: string;
  category?: string;
  certification?: string[];
  features?: string[];
}

interface ServiceCardsSectionProps {
  sectionTitle: string;
  cards: ServiceCardData[];
  titleColorClass?: string;
  id?: string;
  showViewAll?: boolean;
}

const ServiceCardsSection: React.FC<ServiceCardsSectionProps> = ({
  sectionTitle,
  cards,
  titleColorClass = "text-neutral-900",
  id,
  showViewAll = true,
}) => {
  const [selectedCard, setSelectedCard] = useState<ServiceCardData | null>(null);

  const handleOpenModal = (card: ServiceCardData) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <SectionWrapper 
      id={id || "service-cards"} 
      className="bg-transparent py-20 lg:py-32"
    >
      {/* Enterprise Header */}
      <header className="text-center mb-16 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#127749]" />
            <div className="w-3 h-3 bg-[#127749] rounded-full" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#127749]" />
          </div>
          
          <h2 className={`section-header ${titleColorClass}`}>
            {sectionTitle}
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <Shield className="w-5 h-5 text-[#127749]" />
            <p className="section-subtitle">
              Certified enterprise solutions with industry-leading standards
            </p>
            <Shield className="w-5 h-5 text-[#127749]" />
          </div>
          
          <div className="w-32 h-1 bg-[#127749] mx-auto rounded-full" />
        </motion.div>
      </header>

      {/* Enterprise Grid Container - Exactly 4 cards per row - Aligned with main content */}
      <div className="container mx-auto px-4">
        <div 
          className="grid grid-cols-4 gap-5 mb-5 service-grid-4"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '20px'
          }}
        >
          {cards.map((card, index) => (
            <motion.article
              key={index}
              className="group relative bg-white border border-neutral-200 p-4 cursor-pointer hover:border-[#127749] hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => handleOpenModal(card)}
              role="button"
              tabIndex={0}
              aria-label={`Learn more about ${card.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenModal(card);
                }
              }}
            >
              {/* Card Header */}
              <header className="relative z-10 flex flex-col h-full">
                <div className="mb-3 flex justify-between items-start gap-2">
                  <div className="flex-1">
                    {card.category && (
                      <span className="inline-block text-xs font-bold uppercase text-[#127749] mb-2">
                        {card.category}
                      </span>
                    )}
                    <h3 className="text-base font-bold text-neutral-900 leading-tight group-hover:text-[#127749] transition-colors duration-300">
                      {card.title}
                    </h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center bg-neutral-50 group-hover:bg-[#127749] flex-shrink-0">
                    <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Certification Badges */}
                {card.certification && card.certification.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {card.certification.slice(0, 2).map((cert, certIndex) => (
                      <div key={certIndex} className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-50 border border-emerald-200">
                        <Award className="w-3 h-3 text-emerald-600" />
                        <span className="text-xs font-medium text-emerald-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Description */}
                <div className="mb-3 flex-grow">
                  <p className="text-xs text-neutral-600 leading-relaxed mb-3 line-clamp-3">
                    {card.shortDescription}
                  </p>
                  
                  {/* Features Preview */}
                  {card.features && card.features.length > 0 && (
                    <div className="space-y-1">
                      {card.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-[#127749] rounded-full mt-1.5 flex-shrink-0" />
                          <span className="text-xs text-neutral-500 leading-relaxed line-clamp-1">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <footer className="mt-auto pt-3 border-t border-neutral-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-neutral-400" />
                      <span className="text-xs font-bold uppercase text-neutral-400 group-hover:text-[#127749] transition-colors duration-300">
                        Certified
                      </span>
                    </div>
                    <span className="text-xs font-bold uppercase text-neutral-400 group-hover:text-[#127749] transition-colors duration-300">
                      View Details →
                    </span>
                  </div>
                </footer>
              </header>

              {/* Simple Border Effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#127749]/30 transition-all duration-300 pointer-events-none" />
            </motion.article>
          ))}
        </div>
        
        {/* View All CTA */}
        {showViewAll && cards.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-[#127749] text-white font-semibold rounded-xl hover:bg-[#0f5f3a] enterprise-transition-normal hover:enterprise-shadow-xl hover:-translate-y-1">
              <span className="enterprise-body-medium">View All Services</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <ServiceModal
        isOpen={!!selectedCard}
        onClose={handleCloseModal}
        title={selectedCard?.title || ""}
        description={
          selectedCard?.longDescription || selectedCard?.shortDescription || ""
        }
      />
    </SectionWrapper>
  );
};

export default ServiceCardsSection;
