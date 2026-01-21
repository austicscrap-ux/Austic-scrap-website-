// src/app/about/page.tsx
import AboutContent from "@/components/sections/AboutContent";
import MissionVisionGoal from "@/components/sections/MissionVisionGoal";
import TeamSupport from "@/components/sections/TeamSupport";

export default function About() {
  return (
    <main>
      <AboutContent />
      <MissionVisionGoal />
      <TeamSupport />
    </main>
  );
}
