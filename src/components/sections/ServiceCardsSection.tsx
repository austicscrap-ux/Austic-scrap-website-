"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceModal from "@/components/ui/ServiceModal";
import SectionWrapper from "@/components/common/SectionWrapper";
import ServiceCard from "@/components/ui/ServiceCard"; // Import the designated component
import { Shield } from "lucide-react";

// Keeping the interface compatible
interface ServiceCardData {
  title: string;
  shortDescription: string;
  longDescription: string;
  category?: string;
  certification?: string[];
  features?: string[];
  // Additional props that might be in the data but not strictly typed in the old interface
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
    <SectionWrapper
      id={id || "service-cards"}
      className="bg-transparent py-16 lg:py-24" // Adjusted vertical spacing
    >
      {/* Enterprise Header */}
      <header className="text-center mb-12 lg:mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#127749]" />
            <div className="w-2.5 h-2.5 bg-[#127749] rounded-full" />
            <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#127749]" />
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${titleColorClass} tracking-tight`}
          >
            {sectionTitle}
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-5 h-5 text-[#127749]" />
            <p className="text-sm sm:text-base text-neutral-600 font-medium max-w-xl mx-auto">
              Certified enterprise solutions with industry-leading standards
            </p>
            <Shield className="w-5 h-5 text-[#127749]" />
          </div>

          <div className="w-24 h-1.5 bg-[#127749] mx-auto rounded-full opacity-80" />
        </motion.div>
      </header>

      {/* Responsive Grid Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div key={index} className="h-full">
              <ServiceCard
                title={card.title}
                desc={card.shortDescription}
                // Mapping data props to ServiceCard props.
                // Note: 'img' is missing in ServiceCardData interface locally defined here but might exist in actual data.
                // The component has a fallback image.
                // To support images if they exist in `card`, we can cast or spread:
                img={(card as any).img} // Assuming data sources have 'img' or similar
                link={(card as any).link || "#"}
                index={index}
                category={card.category}
                certification={card.certification}
                features={card.features}
                rating={card.rating}
                clients={card.clients}
                completionRate={card.completionRate}
                responseTime={card.responseTime}
                status={card.status}
                metrics={card.metrics}
                onClick={() => handleOpenModal(card)}
              />
            </div>
          ))}
        </div>

        {/* View All CTA - Optional based on prop */}
        {showViewAll && cards.length > 8 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12 sm:mt-16"
          >
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#127749] text-white font-semibold rounded-full hover:bg-[#0f5f3a] transition-all shadow-md hover:shadow-lg hover:-translate-y-1">
              <span>View All Services</span>
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
