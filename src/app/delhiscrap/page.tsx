// src/app/delhiscrap/page.tsx
import HeroSection from "@/components/ui/HeroSection";
import DelhiScrapMainContent from "@/components/sections/DelhiScrapMainContent";
import DelhiWhyChooseUs from "@/components/sections/DelhiWhyChooseUs";

export const metadata = {
  title: "Office Scrap Collection Experts in Delhi | Austic",
  description:
    "Austic specializes in office scrap collection in Delhi, offering quick and hassle-free removal of office outdated item, IT equipment, and electronic waste. Get a fair quote today!",
};

export default function DelhiScrapPage() {
  return (
    <main>
      <HeroSection
        title={
          <>
            Reliable Office Scrap Buyers &{" "}
            <span className="text-[#4CAF50]">Vendors in Delhi</span>
          </>
        }
        subtitle="Quick and hassle-free removal of office assets, IT equipment, and electronic waste. Professional scrap management for Delhi's leading corporate sectors."
      />
      <DelhiScrapMainContent />
      <DelhiWhyChooseUs />
    </main>
  );
}
