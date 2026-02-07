// src/app/contact/page.tsx
import HeroSection from "@/components/ui/HeroSection";
import ContactPageContent from "@/components/sections/ContactPageContent";

export const metadata = {
  title: "Contact Us | Austic Scrap Solutions",
  description:
    "Get in touch with Austic Scrap for reliable e-waste and scrap management services. Call, email, or visit our Kolkata office.",
};

export default function ContactPage() {
  return (
    <main>
      <HeroSection
        title="Contact Us"
        subtitle="Reach out to our dedicated team for all your recycling and scrap management needs. We're here to help you go green."
      />
      <ContactPageContent />
    </main>
  );
}
