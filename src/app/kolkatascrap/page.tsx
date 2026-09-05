// src/app/kolkatascrap/page.tsx
import HeroSection from "@/components/ui/HeroSection";
import KolkataScrapMainContent from "@/components/sections/KolkataScrapMainContent";
import KolkataWhyChooseUs from "@/components/sections/KolkataWhyChooseUs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = {
  title:
    "Office Scrap Buyers in Kolkata | Salt Lake Sector V, New Town, Rajarhat, Park Street & Dalhousie",
  description:
    "Austic Scrap is the leading office scrap buyer & e-waste recycler in Kolkata. Serving Salt Lake Sector V, New Town, Rajarhat, Park Street, Dalhousie, Howrah, and Hooghly with doorstep pickup, high valuation & certified dismantling.",
  alternates: {
    canonical: "/kolkatascrap",
  },
  keywords: [
    "Office Scrap Buyers in Kolkata",
    "Scrap buyers in Salt Lake Sector V",
    "Office scrap buyer New Town Rajarhat",
    "Corporate scrap vendor Park Street Kolkata",
    "Scrap buyers Dalhousie BBD Bagh",
    "E-waste recycling Salt Lake Kolkata",
    "IT company scrap buyer Sector V",
    "Old workstation scrap buyer Kolkata",
    "Howrah industrial scrap buyer",
    "Dankuni Hooghly scrap recycling",
    "North 24 Parganas scrap dealer",
    "South 24 Parganas corporate scrap",
  ],
};

export default function KolkataScrapPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Services & Locations", url: "/service" },
          { name: "Kolkata Scrap Buyer", url: "/kolkatascrap" },
        ]}
      />
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
