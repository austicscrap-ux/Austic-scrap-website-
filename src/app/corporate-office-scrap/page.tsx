import HeroSection from "@/components/ui/HeroSection";
import CorporateScrapContent from "@/components/sections/CorporateScrapContent";

export const metadata = {
  title: "Corporate Office Scrap Buyers in Kolkata | Office Scrap Dealers",
  description:
    "We buy corporate office scrap in Kolkata. Get a hassle-free scrap selling experience with competitive rates. Contact us today.",
};

export default function CorporatePage() {
  return (
    <main>
      <HeroSection
        title={
          <>
            Corporate Office{" "}
            <span className="text-[#4CAF50]">Scrap Buyers</span> in Kolkata
          </>
        }
        subtitle="Professional asset disposal and furniture recycling for modern businesses. We provide fair market assessments and rapid logistics for all corporate scrap."
        backgroundImage="/images/office furniture scrap.jpeg"
      />
      <CorporateScrapContent />
    </main>
  );
}
