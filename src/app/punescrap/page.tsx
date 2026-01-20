// src/app/punescrap/page.tsx
import PuneScrapHero from '@/components/sections/PuneScrapHero';
import PuneScrapMainContent from '@/components/sections/PuneScrapMainContent';
import PuneWhyChooseUs from '@/components/sections/PuneWhyChooseUs';

export const metadata = {
  title: 'Efficient Scrap Buying and Disposal Services in Pune | Austic',
  description: 'Discover reliable scrap buying services in Pune with Austic. We offer hassle-free disposal for office and Factory Contact us for best price.',
};

export default function PuneScrapPage() {
  return (
    <main className="pt-20"> {/* Add padding top to account for fixed navbar */}
      <PuneScrapHero />
      <PuneScrapMainContent />
      <PuneWhyChooseUs />
    </main>
  );
}