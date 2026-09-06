import HeroSection from "@/components/ui/HeroSection";
import HyderabadScrapContent from "@/components/sections/HyderabadScrapContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliable Office Scrap Collection & Disposal Services in Hyderabad | Austic",
  description:
    "Looking for scrap collection and disposal services in Hyderabad? Austic Scrap offers reliable solutions for office furniture, e-waste, machinery, AC systems.",
  alternates: {
    canonical: "/hyderabadscrap",
  },
  keywords: [
    "scrap buyers Hyderabad",
    "office scrap buyer HITEC City",
    "corporate scrap disposal Gachibowli",
    "furniture scrap buyer Hyderabad",
    "metal scrap dealer Hyderabad",
    "office dismantling Financial District",
    "workstation scrap buyer Madhapur",
    "AC scrap buyer Hyderabad",
    "DG set buyer Hyderabad",
    "industrial scrap buyer Secunderabad",
  ],
  openGraph: {
    title: "Reliable Office Scrap Collection & Disposal in Hyderabad",
    description: "Scrap collection and disposal services in Hyderabad. Office furniture, e-waste, machinery, AC systems.",
    url: "https://www.austicscrap.com/hyderabadscrap",
    siteName: "Austic Scrap & E-Waste Recycling",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyderabad Scrap Buyers | Austic Scrap",
    description: "Reliable scrap collection and disposal services in Hyderabad.",
  },
};

export default function HyderabadScrapPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Locations", url: "/#locations" },
          { name: "Hyderabad Scrap", url: "/hyderabadscrap" },
        ]}
      />
      <HeroSection
        title={
          <>
            Reliable Scrap Collection &{" "}
            <span className="text-[#4CAF50]">Disposal in Hyderabad</span>
          </>
        }
        subtitle="Professional scrap management for Hyderabad's booming IT and industrial sectors. Transparent pricing and sustainable disposal for all office assets."
      />
      <HyderabadScrapContent />
    </main>
  );
}
