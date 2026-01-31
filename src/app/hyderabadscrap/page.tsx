import HeroSection from "@/components/ui/HeroSection";
import HyderabadScrapContent from "@/components/sections/HyderabadScrapContent";

export const metadata = {
  title: "Reliable Office Scrap Collection & Disposal Services in Hyderabad",
  description:
    "Looking for scrap collection and disposal services in Hyderabad? Austic Scrap offers reliable solutions for office furniture, e-waste, machinery, AC systems.",
};

export default function HyderabadScrapPage() {
  return (
    <main>
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
