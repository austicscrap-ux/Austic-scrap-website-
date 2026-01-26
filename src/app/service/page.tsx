// src/app/service/page.tsx
import EwasteHero from "@/components/sections/EwasteHero";
import ServiceCardsSection from "@/components/sections/ServiceCardsSection";
import CtaSection from "@/components/ui/CtaSection";
import {
  ewasteRecyclingCards,
  officeFurnitureCards,
  metalScrapCards,
} from "@/data/services";

export const metadata = {
  title: "Service | Austic Scrap Solutions",
  description:
    "Comprehensive e-waste, office scrap, and metal recycling services in Kolkata.",
};

export default function EwastePage() {
  return (
    <main className="bg-amber-50/30 min-h-screen">
      <EwasteHero />

      <div className="py-20 space-y-10">
        <ServiceCardsSection
          sectionTitle="E-WASTE RECYCLING & DISPOSAL"
          cards={ewasteRecyclingCards}
          titleColorClass="text-neutral-900"
        />

        {/* Divider */}
        <div className="container mx-auto px-4 lg:px-[86px]">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-50"></div>
        </div>

        <ServiceCardsSection
          sectionTitle="Office Furniture Recycling"
          cards={officeFurnitureCards}
          titleColorClass="text-neutral-900"
        />

        {/* Divider */}
        <div className="container mx-auto px-4 lg:px-[86px]">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-50"></div>
        </div>

        <ServiceCardsSection
          sectionTitle="Metal Scrap Recycling"
          cards={metalScrapCards}
          titleColorClass="text-neutral-900"
        />
      </div>

      <CtaSection />
    </main>
  );
}
