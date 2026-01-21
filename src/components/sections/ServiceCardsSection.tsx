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
    <SectionWrapper id={id || "service-cards"} className="bg-white">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-widest text-secondary uppercase bg-secondary/10 rounded-full font-secondary">
          Our Services
        </div>
        <h3
          className={`${titleColorClass} text-3xl md:text-5xl font-bold font-primary leading-tight max-w-3xl mx-auto`}
        >
          {sectionTitle}
        </h3>
        <div className="w-20 h-1.5 bg-secondary mx-auto mt-8 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="group bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => handleOpenModal(card)}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-50 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-110" />

            <div className="relative z-10 flex flex-col h-full">
              <h4 className="text-xl font-bold font-primary mb-4 text-[#127749] group-hover:text-black transition-colors">
                {card.title}
              </h4>
              <p className="text-neutral-500 leading-relaxed font-secondary mb-8 line-clamp-4 group-hover:text-neutral-600">
                {card.shortDescription}
              </p>
              <div className="mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-[#127749] text-[#127749] group-hover:bg-[#127749] group-hover:text-white transition-all w-full md:w-auto"
                >
                  Read More
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
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
