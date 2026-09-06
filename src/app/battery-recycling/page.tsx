import HeroSection from "@/components/ui/HeroSection";
import BatteryRecyclingContent from "@/components/sections/BatteryRecyclingContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Battery Recycling in Kolkata | Eco-Friendly Battery Disposal Services",
  description:
    "Looking for a battery recycling service in Kolkata? We offer safe battery disposal services for the Corporate office and banking sector. Contact us today",
  alternates: {
    canonical: "/battery-recycling",
  },
  keywords: [
    "battery recycling Kolkata",
    "lead acid battery buyer",
    "UPS battery scrap buyer",
    "lithium ion battery recycling India",
    "industrial battery disposal",
    "inverter battery scrap buyer Kolkata",
    "corporate battery recycling",
    "telecom battery scrap buyer",
    "eco-friendly battery disposal",
    "battery scrap rate today",
  ],
  openGraph: {
    title: "Battery Recycling in Kolkata | Eco-Friendly Disposal",
    description: "Safe battery disposal services for corporate offices and banking sector in Kolkata.",
    url: "https://www.austicscrap.com/battery-recycling",
    siteName: "Austic Scrap & E-Waste Recycling",
    type: "website",
    images: [{ url: "/images/battery-recycling.jpeg", width: 1200, height: 630, alt: "Professional battery recycling services in Kolkata" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Battery Recycling Kolkata | Austic Scrap",
    description: "Safe battery disposal for corporate offices and banking sector.",
    images: ["/images/battery-recycling.jpeg"],
  },
};

export default function BatteryPage() {
  return (
    <main>
      <HeroSection
        title={
          <>
            Professional{" "}
            <span className="text-[#4CAF50]">Battery Recycling</span> in Kolkata
          </>
        }
        subtitle="Safe, efficient, and eco-friendly disposal for corporate and industrial battery assets. Join us in protecting our environment through responsible recycling."
        backgroundImage="/images/battery-recycling.jpeg"
      />
      <BatteryRecyclingContent />
    </main>
  );
}
