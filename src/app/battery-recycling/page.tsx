import HeroSection from "@/components/ui/HeroSection";
import BatteryRecyclingContent from "@/components/sections/BatteryRecyclingContent";

export const metadata = {
  title:
    "Battery Recycling in Kolkata | Eco-Friendly Battery Disposal Services",
  description:
    "Looking for a battery recycling service in Kolkata? We offer safe battery disposal services for the Corporate office and banking sector. Contact us today",
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
        backgroundImage="/images/bettery recycling.jpeg"
      />
      <BatteryRecyclingContent />
    </main>
  );
}
