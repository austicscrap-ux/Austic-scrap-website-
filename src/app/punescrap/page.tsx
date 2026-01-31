// src/app/punescrap/page.tsx
import HeroSection from "@/components/ui/HeroSection";
import PuneScrapMainContent from "@/components/sections/PuneScrapMainContent";
import PuneWhyChooseUs from "@/components/sections/PuneWhyChooseUs";

export const metadata = {
  title: "Efficient Scrap Buying and Disposal Services in Pune | Austic",
  description:
    "Discover reliable scrap buying services in Pune with Austic. We offer hassle-free disposal for office and Factory Contact us for best price.",
};

export default function PuneScrapPage() {
  return (
    <main>
      <HeroSection
        title={
          <>
            Efficient Scrap Buying and{" "}
            <span className="text-[#4CAF50]">Disposal in Pune</span>
          </>
        }
        subtitle="Reliable scrap management for Pune's tech corridors and industrial zones. Get fair market value and hassle-free pickup for your office and factory assets."
      />
      <PuneScrapMainContent />
      <PuneWhyChooseUs />
    </main>
  );
}
