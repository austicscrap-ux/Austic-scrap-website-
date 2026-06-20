import React from "react";
import { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import MumbaiScrapContent from "@/components/sections/MumbaiScrapContent";

export const metadata: Metadata = {
  title: "Reliable Office Scrap Services in Mumbai | Scrap Vendors | Austic",
  description:
    "Looking for Bulk scrap buyers in Mumbai? Austic offers eco-friendly solutions for office Disposal , industries disposal  and Organization Contact us today!",
};

export default function MumbaiScrapPage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Eco-Friendly Scrap Collection &{" "}
            <span className="text-[#4CAF50]">Recycling in Mumbai</span>
          </>
        }
        subtitle="Sustainable waste management and scrap buying for Mumbai's corporate offices and industrial hubs. Turning waste into value with fairness and transparency."
      />

      <MumbaiScrapContent />
    </main>
  );
}
