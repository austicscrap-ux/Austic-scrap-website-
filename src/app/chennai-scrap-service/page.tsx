import HeroSection from "@/components/ui/HeroSection";
import ChennaiScrapServiceContent from "@/components/sections/ChennaiScrapServiceContent";

export const metadata = {
  title: "Corporate Scrap Buyers in Chennai | Office Scrap Disposal | Austic",
  description:
    "Eco-friendly scrap collection services in Chennai with Austic. We offer professional disposal solutions for office furniture, DG sets, chiller AC plants,",
};

export default function ChennaiScrapServicePage() {
  return (
    <main>
      <HeroSection
        title={
          <>
            Eco-Friendly Scrap{" "}
            <span className="text-[#4CAF50]">Recycling in Chennai</span>
          </>
        }
        subtitle="Premium scrap management for Chennai's vibrant industrial and corporate sectors. Sustainable disposal solutions for office furniture, DG sets, and mechanical plants."
      />
      <ChennaiScrapServiceContent />
    </main>
  );
}
