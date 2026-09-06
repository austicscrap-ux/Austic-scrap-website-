import HeroSection from "@/components/ui/HeroSection";
import CorporateScrapContent from "@/components/sections/CorporateScrapContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Office Scrap Buyers in Kolkata | Office Scrap Dealers",
  description:
    "We buy corporate office scrap in Kolkata. Get a hassle-free scrap selling experience with competitive rates. Contact us today.",
  alternates: {
    canonical: "/corporate-office-scrap",
  },
  keywords: [
    "corporate office scrap buyers Kolkata",
    "office scrap dealer Kolkata",
    "sell office scrap Kolkata",
    "corporate furniture disposal",
    "office dismantling service Kolkata",
    "bulk office scrap buyer India",
    "workstation scrap disposal",
    "office relocation scrap buyer",
    "corporate asset liquidation",
    "old office equipment buyer Kolkata",
  ],
  openGraph: {
    title: "Corporate Office Scrap Buyers in Kolkata",
    description: "Buy corporate office scrap in Kolkata. Hassle-free scrap selling with competitive rates.",
    url: "https://www.austicscrap.com/corporate-office-scrap",
    siteName: "Austic Scrap & E-Waste Recycling",
    type: "website",
    images: [{ url: "/images/office-furniture-scrap.jpg", width: 1200, height: 630, alt: "Corporate office scrap buying services in Kolkata" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Office Scrap Buyers | Austic Scrap",
    description: "Hassle-free corporate office scrap buying in Kolkata.",
    images: ["/images/office-furniture-scrap.jpg"],
  },
};

export default function CorporatePage() {
  return (
    <main>
      <HeroSection
        title={
          <>
            Corporate Office{" "}
            <span className="text-[#4CAF50]">Scrap Buyers</span> in Kolkata
          </>
        }
        subtitle="Professional asset disposal and furniture recycling for modern businesses. We provide fair market assessments and rapid logistics for all corporate scrap."
        backgroundImage="/images/office-furniture-scrap.jpg"
      />
      <CorporateScrapContent />
    </main>
  );
}
