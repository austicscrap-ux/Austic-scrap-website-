import React from "react";
import { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import MumbaiScrapContent from "@/components/sections/MumbaiScrapContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reliable Office Scrap Services in Mumbai | Scrap Vendors | Austic",
  description:
    "Looking for Bulk scrap buyers in Mumbai? Austic offers eco-friendly solutions for office disposal, industries disposal and organization. Contact us today!",
  alternates: {
    canonical: "/mumbaiscrap",
  },
  keywords: [
    "Office scrap buyers in Mumbai",
    "Bulk scrap buyer BKC Andheri",
    "Corporate scrap vendor Lower Parel",
    "IT equipment scrap Powai Mumbai",
    "Office furniture disposal Navi Mumbai",
    "Scrap dealer Thane Kalyan",
    "Industrial scrap buyer Bhiwandi",
    "Old workstation buyer Goregaon Mumbai",
    "E-waste recycling services Mumbai",
    "Server scrap buyer SEEPZ Andheri",
  ],
  openGraph: {
    type: "website",
    url: "https://www.austicscrap.com/mumbaiscrap",
    title: "Reliable Office Scrap Services in Mumbai | Austic",
    description:
      "Eco-friendly office scrap buying and recycling in Mumbai. Serving BKC, Andheri, Powai, Navi Mumbai, Thane & across Maharashtra.",
    siteName: "Austic Scrap & E-Waste Recycling",
    images: [{ url: "/images/home-page.jpg", width: 1200, height: 630, alt: "Office scrap collection and recycling services in Mumbai by Austic Scrap" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliable Office Scrap Services in Mumbai | Austic",
    description:
      "Eco-friendly office scrap buying and recycling in Mumbai. Serving BKC, Andheri, Powai & across Maharashtra.",
    images: ["/images/home-page.jpg"],
    creator: "@austicscrap",
  },
};

export default function MumbaiScrapPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Locations", url: "/#locations" },
          { name: "Mumbai Scrap", url: "/mumbaiscrap" },
        ]}
      />
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
