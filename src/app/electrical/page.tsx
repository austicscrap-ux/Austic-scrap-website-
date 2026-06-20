import HeroSection from "@/components/ui/HeroSection";
import ElectricalScrapContent from "@/components/sections/ElectricalScrapContent";

export const metadata = {
  title:
    "Electrical Scrap Buyers in Kolkata | Reliable Electrical Scrap Disposal | Austic",
  description:
    "We buy electrical scrap from Corporate offices, banks, and Organizations. Safe and eco-friendly disposal of your electrical waste. Contact us for best prices",
};

export default function ElectricalPage() {
  return (
    <main>
      <HeroSection
        title={
          <>
            Electrical <span className="text-[#4CAF50]">Scrap Buyers</span> in
            Kolkata
          </>
        }
        subtitle="Leading the way in professional electrical waste management. We offer the best market rates for corporate and industrial electrical assets."
        backgroundImage="/images/electrical scrap-compressed.jpg"
      />
      <ElectricalScrapContent />
    </main>
  );
}
