// src/app/about/page.tsx
import { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";
import MissionVisionGoal from "@/components/sections/MissionVisionGoal";
import TeamSupport from "@/components/sections/TeamSupport";
import HeroSection from "@/components/ui/HeroSection";
import CtaSection from "@/components/ui/CtaSection";

export const metadata: Metadata = {
  title: "About Austic Scrap | India's Trusted Scrap Buyer & E-Waste Recycler",
  description:
    "Learn about Austic Scrap — India's leading office scrap buyer and certified e-waste recycling company based in Kolkata. Discover our mission, vision, and commitment to sustainable recycling.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <main>
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
