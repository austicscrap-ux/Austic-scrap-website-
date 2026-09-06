// src/app/about/page.tsx
import { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";
import MissionVisionGoal from "@/components/sections/MissionVisionGoal";
import TeamSupport from "@/components/sections/TeamSupport";
import HeroSection from "@/components/ui/HeroSection";
import CtaSection from "@/components/ui/CtaSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About Austic Scrap | India's Trusted Scrap Buyer & E-Waste Recycler",
  description:
    "Learn about Austic Scrap — India's leading office scrap buyer and certified e-waste recycling company based in Kolkata. Discover our mission, vision, and commitment to sustainable recycling.",
  alternates: {
    canonical: "/about",
  },
  keywords: [
    "About Austic Scrap company",
    "Office scrap buyer Kolkata",
    "Certified e-waste recycler India",
    "Sustainable recycling company",
    "Corporate scrap management India",
    "Green recycling mission Kolkata",
    "ISO certified scrap buyer",
    "E-waste recycling company history",
    "Pan-India scrap buyer",
    "Austic Scrap and Recycling",
  ],
  openGraph: {
    type: "website",
    url: "https://www.austicscrap.com/about",
    title: "About Austic Scrap | India's Trusted Scrap & E-Waste Recycler",
    description:
      "India's leading office scrap buyer and certified e-waste recycler. Discover our mission, vision & commitment to sustainable recycling.",
    siteName: "Austic Scrap & E-Waste Recycling",
    images: [{ url: "/images/home-page.jpg", width: 1200, height: 630, alt: "About Austic Scrap recycling company India" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Austic Scrap | India's Trusted Scrap & E-Waste Recycler",
    description:
      "India's leading office scrap buyer and certified e-waste recycler. Discover our mission & vision.",
    images: ["/images/home-page.jpg"],
    creator: "@austicscrap",
  },
};

export default function About() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "About Us", url: "/about" },
        ]}
      />
      <HeroSection
        title="About Us"
        subtitle="Leading the way in responsible scrap management and recycling solutions across India."
      />
      <AboutContent />
      <MissionVisionGoal />
      <TeamSupport />
      <CtaSection />
    </main>
  );
}

