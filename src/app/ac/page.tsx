// src/app/ac/page.tsx
import AcScrapContent from '@/components/sections/AcScrapContent';

export const metadata = {
  title: 'Top Air Conditioner Scrap Buyer in Kolkata | Best AC Scrap Dealer | Austic',
  description: 'Looking to sell your old office air conditioner? We are Kolkata\'s top second-hand air conditioner scrap buyers. Get the best prices for your AC scrap today.',
};

export default function ACPage() {
  return (
    <main className="pt-20"> {/* Add padding top to account for fixed navbar */}
      <AcScrapContent />
    </main>
  );
}
