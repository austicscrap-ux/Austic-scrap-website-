import HeroSection from "@/components/ui/HeroSection";
import AcScrapContent from "@/components/sections/AcScrapContent";

export const metadata = {
  title: "Old AC Buyer & Second AC Buyer in Kolkata | Austic Scrap",
  description:
    "Sell your old and used air conditioners in Kolkata. We are the top buyer for second-hand ACs, office cooling systems, and scrap AC units. Best rates guaranteed.",
};

export default function ACPage() {
  return (
    <main>
      <HeroSection
        title={
          <>
            Old AC Buyer &{" "}
            <span className="text-[#4CAF50]">Second AC Buyer</span> in Kolkata
          </>
        }
        subtitle="Leading the way in responsible AC disposal. We offer premium rates for old office cooling systems, ensuring eco-friendly recycling and fast pickup."
        backgroundImage="/images/Air con-compressed.jpg"
      />
      <AcScrapContent />
    </main>
  );
}
