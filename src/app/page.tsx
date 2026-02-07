import Hero from "@/components/ui/Hero";
import Marquee from "@/components/ui/Marquee";
import Features from "@/components/ui/Features";
import ServiceGrid from "@/components/ui/ServiceGrid";
import Appointment from "@/components/ui/Appointment";
import WorkingProcess from "@/components/ui/WorkingProcess";
import ScrapBuyingProcess from "@/components/ui/ScrapBuyingProcess";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import Testimonials from "@/components/ui/Testimonials";
import ClientMarquee from "@/components/ui/ClientMarquee";
import Locations from "@/components/sections/Locations";
import IndustriesSection from "@/components/sections/IndustriesSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Features />
      <ClientMarquee />
      <ServiceGrid />
      <IndustriesSection />
      <Appointment />
      <WorkingProcess />
      <ScrapBuyingProcess />
      <WhyChooseUs />
      <Testimonials />
      <Locations />
    </main>
  );
}
