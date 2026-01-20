// src/app/kolkatascrap/page.tsx
import KolkataScrapHero from '@/components/sections/KolkataScrapHero';
import KolkataScrapMainContent from '@/components/sections/KolkataScrapMainContent';
import KolkataWhyChooseUs from '@/components/sections/KolkataWhyChooseUs';

export const metadata = {
  title: 'Professional Office Scrap Buyers in Kolkata | Scrap Recycling Services',
  description: 'Austic Scrap offers professional scrap buying and recycling services in Kolkata. We purchase office furniture, workstations, IT scrap, and e-waste with competitive prices and eco-friendly disposal.',
};

export default function KolkataScrapPage() {
  return (
    <main className="pt-20">
      <KolkataScrapHero />
      <KolkataScrapMainContent />
      <KolkataWhyChooseUs />
    </main>
  );
}
