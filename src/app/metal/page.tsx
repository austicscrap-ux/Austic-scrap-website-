import HeroSection from "@/components/ui/HeroSection";
import MetalScrapContent from "@/components/sections/MetalScrapContent";

export const metadata = {
  title: "Metal Scrap Buyers in Kolkata | Top Metal Scrap Dealers | Austic",
  description:
    "Get the best rates for your metal scrap in Kolkata. We specialize in buying ferrous and non-ferrous metal scrap. Sell your scrap today",
};

export default function MetalPage() {
  return (
    <main>
      <HeroSection
        title={
          <>
            Expert Metal Scrap{" "}
            <span className="text-[#4CAF50]">Recycling Services</span>
          </>
        }
        subtitle="Leading collector and recycler of ferrous and non-ferrous metals in Kolkata. We provide industrial-grade scrap management to conserve resources."
        backgroundImage="/images/coppper crop.jpg"
      />
      <MetalScrapContent />
    </main>
  );
}
