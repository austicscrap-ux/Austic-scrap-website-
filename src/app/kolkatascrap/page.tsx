// src/app/kolkatascrap/page.tsx
import HeroSection from "@/components/ui/HeroSection";
import KolkataScrapMainContent from "@/components/sections/KolkataScrapMainContent";
import KolkataWhyChooseUs from "@/components/sections/KolkataWhyChooseUs";

export const metadata = {
  title:
    "Professional Office Scrap Buyers in Kolkata | Scrap Recycling Services",
  description:
    "Austic Scrap offers professional scrap buying and recycling services in Kolkata. We purchase office furniture, workstations, IT scrap, and e-waste with competitive prices and eco-friendly disposal.",
};

export default function KolkataScrapPage() {
  return (
    <main>
      <HeroSection
        title={
          <>
            Professional Office Scrap Buyers &{" "}
            <span className="text-[#4CAF50]">Recycling in Kolkata</span>
          </>
        }
        subtitle="Premium scrap management for corporate offices, banks, and IT parks across Kolkata. Fair prices, instant quotes, and responsible disposal."
      />
      <KolkataScrapMainContent />
      <KolkataWhyChooseUs />
    </main>
  );
}
