"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceModal from "@/components/ui/ServiceModal";
import SectionWrapper from "@/components/common/SectionWrapper";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardData {
  title: string;
  shortDescription: string;
  longDescription: string;
}

interface ServiceCardsSectionProps {
  sectionTitle: string;
  cards: ServiceCardData[];
  titleColorClass?: string;
  id?: string;
}

const ServiceCardsSection: React.FC<ServiceCardsSectionProps> = ({
  sectionTitle,
  cards,
  titleColorClass = "text-neutral-900",
  id,
}) => {
  const [selectedCard, setSelectedCard] = useState<ServiceCardData | null>(
    null,
  );

  const handleOpenModal = (card: ServiceCardData) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <SectionWrapper id={id || "service-cards"} className="bg-transparent py-16">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative inline-block"
        >
          <h3
            className={`${titleColorClass} text-3xl md:text-4xl lg:text-5xl font-bold font-primary leading-tight mb-4 uppercase tracking-tight`}
          >
            {sectionTitle}
          </h3>
          <div className="w-full h-1 bg-[#127749] absolute -bottom-2 left-0 transform origin-left scale-x-50" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-[86px] max-w-7xl">
        {/* Changed gap-0 to gap-6/8 and removed outer border container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              // Added border to each card individually, maintained strict rectangular shape (no rounded)
              className="group relative bg-white border border-neutral-200 p-8 cursor-pointer hover:border-[#127749] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleOpenModal(card)}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex justify-between items-start">
                  <h4 className="text-xl font-bold font-primary text-neutral-900 group-hover:text-[#127749] transition-colors uppercase max-w-[80%] leading-snug">
                    {card.title}
                  </h4>
                  <div className="w-8 h-8 flex items-center justify-center bg-neutral-50 group-hover:bg-[#127749] transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                <p className="text-neutral-500 text-sm leading-relaxed font-secondary font-medium mb-8 line-clamp-4 flex-grow">
                  {card.shortDescription}
                </p>

                <div className="mt-auto pt-6 border-t border-neutral-100">
                  <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-neutral-400 group-hover:text-[#127749] transition-colors duration-300">
                    View Details
                  </span>
                </div>
              </div>

              {/* Optional: Thick bottom border on hover for that "Enterprise" feel */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#127749] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>

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
