// src/app/about/page.tsx
import AboutContent from "@/components/sections/AboutContent";
import MissionVisionGoal from "@/components/sections/MissionVisionGoal";
import TeamSupport from "@/components/sections/TeamSupport";
import PageHeader from "@/components/ui/PageHeader";
import CtaSection from "@/components/ui/CtaSection";

export default function About() {
  return (
    <main>
      <PageHeader
        title="About Us"
        subtitle="Leading the way in responsible scrap management and recycling solutions across India."
        backgroundImage="/images/home page.jpg"
      />
      <AboutContent />
      <MissionVisionGoal />
      <TeamSupport />
      <CtaSection />
    </main>
  );
}
