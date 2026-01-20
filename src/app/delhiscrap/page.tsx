// src/app/delhiscrap/page.tsx
import DelhiScrapHero from '@/components/sections/DelhiScrapHero';
import DelhiScrapMainContent from '@/components/sections/DelhiScrapMainContent';
import DelhiWhyChooseUs from '@/components/sections/DelhiWhyChooseUs';

export const metadata = {
  title: 'Office Scrap Collection Experts in Delhi | Austic',
  description: 'Austic specializes in office scrap collection in Delhi, offering quick and hassle-free removal of office outdated item, IT equipment, and electronic waste. Get a fair quote today!',
};

export default function DelhiScrapPage() {
  return (
    <main className="pt-20"> {/* Add padding top to account for fixed navbar */}
      <DelhiScrapHero />
      <DelhiScrapMainContent />
      <DelhiWhyChooseUs />
    </main>
  );
}