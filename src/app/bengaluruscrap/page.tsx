import HeroSection from "@/components/ui/HeroSection";
import BengaluruScrapContent from "@/components/sections/BengaluruScrapContent";

export const metadata = {
  title:
    "Efficient & Eco-Friendly Scrap Collection Services in Bengaluru | Austic",
  description:
    "Streamline your scrap disposal with Austic’s reliable services in Bengaluru. From office furniture to metal waste, we ensure hassle-free, eco-friendly recycling for a cleaner city.",
};

export default function BengaluruScrapPage() {
  return (
    <main>
      <HeroSection
        title={
          <>
            Efficient Scrap Collection &{" "}
            <span className="text-[#4CAF50]">Recycling in Bengaluru</span>
          </>
        }
        subtitle="Premium scrap management for Bengaluru's tech parks, corporate offices, and factories. Sustainable disposal and fair market value for your assets."
      />
      <BengaluruScrapContent />
    </main>
  );
}
