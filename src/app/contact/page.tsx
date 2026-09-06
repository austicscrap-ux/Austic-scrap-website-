// src/app/contact/page.tsx
import HeroSection from "@/components/ui/HeroSection";
import ContactPageContent from "@/components/sections/ContactPageContent";

export const metadata = {
  title: "Contact Us | Austic Scrap Solutions",
  description:
    "Get in touch with Austic Scrap for reliable e-waste and scrap management services. Call, email, or visit our Kolkata office.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Austic Scrap Solutions",
    description: "Get in touch with Austic Scrap for reliable e-waste and scrap management services.",
    url: "https://www.austicscrap.com/contact",
    siteName: "Austic Scrap & E-Waste Recycling",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Austic Scrap | Get a Free Quote",
    description: "Reach out for e-waste and scrap management services. Call, email, or visit us.",
  },
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
