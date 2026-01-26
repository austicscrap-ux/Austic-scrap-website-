"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import ServiceModal from "@/components/ui/ServiceModal";
import SectionWrapper from "@/components/common/SectionWrapper";

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
        >
          <h3
            className={`${titleColorClass} text-3xl md:text-4xl lg:text-5xl font-bold font-primary leading-tight max-w-4xl mx-auto mb-4`}
          >
            {sectionTitle}
          </h3>
          <div className="w-24 h-1.5 bg-[#127749] mx-auto rounded-full" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-[86px] max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-lg p-5 border border-neutral-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden cursor-pointer flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleOpenModal(card)}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#127749]/5 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-110" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4">
                  <h4 className="text-xl font-bold font-primary text-neutral-900 group-hover:text-[#127749] transition-colors uppercase border-l-4 border-[#127749] pl-3">
                    {card.title}
                  </h4>
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed font-secondary font-medium mb-6 line-clamp-4 flex-1">
                  {card.shortDescription}
                </p>

                <div className="mt-auto pt-4 border-t border-neutral-100">
                  <span className="inline-flex items-center text-sm font-bold text-[#127749] group-hover:translate-x-2 transition-transform duration-300 font-secondary">
                    Read Details →
                  </span>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#127749] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
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
