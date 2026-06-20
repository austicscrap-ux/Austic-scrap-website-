// src/app/about/page.tsx
import AboutContent from "@/components/sections/AboutContent";
import MissionVisionGoal from "@/components/sections/MissionVisionGoal";
import TeamSupport from "@/components/sections/TeamSupport";
import HeroSection from "@/components/ui/HeroSection";
import CtaSection from "@/components/ui/CtaSection";

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
