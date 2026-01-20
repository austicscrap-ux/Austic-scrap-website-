// src/components/sections/ServiceCardsSection.tsx
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button'; // Assuming you have a Button component
import ServiceModal from '@/components/ui/ServiceModal';

interface ServiceCardData {
  title: string;
  shortDescription: string;
  longDescription: string;
}

interface ServiceCardsSectionProps {
  sectionTitle: string;
  cards: ServiceCardData[];
  titleColorClass?: string; // Optional class for section title color
}

const ServiceCardsSection: React.FC<ServiceCardsSectionProps> = ({
  sectionTitle,
  cards,
  titleColorClass = 'text-text-black-dark', // Default to black-ish text
}) => {
  const [selectedCard, setSelectedCard] = useState<ServiceCardData | null>(null);

  const handleOpenModal = (card: ServiceCardData) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <section id="service-cards" className="team_wrapper wrapper py-12">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-sm-12 text-center mb-10">
            <h3 className={`${titleColorClass} text-3xl md:text-4xl font-bold font-josefin-sans`}>
              {sectionTitle}
            </h3>
          </div>
        </div>
        <div className="row flex flex-wrap -mx-2">
          {cards.map((card, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-8 px-2 w-full md:w-1/2 lg:w-1/4">
              <div 
                onClick={() => handleOpenModal(card)}
                className="card rounded-lg block overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-0.625rem] hover:shadow-lg h-full flex flex-col justify-between p-4 bg-white cursor-pointer group"
              >
                <div className="team-info pt-4 text-center">
                  <h5 className="text-xl font-semibold text-text-black-dark mb-2 group-hover:text-secondary transition-colors">{card.title}</h5>
                  <p className="text-text-gray text-justify text-base line-clamp-4">
                    {card.shortDescription}
                  </p>
                  <Button
                    size="sm"
                    className="mt-4 pointer-events-none bg-secondary hover:bg-secondary/90 text-white" // Custom styling if variant 'fill' doesn't exist
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ServiceModal
        isOpen={!!selectedCard}
        onClose={handleCloseModal}
        title={selectedCard?.title || ''}
        description={selectedCard?.longDescription || selectedCard?.shortDescription || ''}
      />
    </section>
  );
};

export default ServiceCardsSection;
