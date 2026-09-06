import DataSecurityContent from "@/components/sections/DataSecurityContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Integrity & Data Protection Services in Kolkata | Austic",
  description:
    "Ensure your sensitive information remains uncompromised with Austic's certified data destruction and integrity protection services. Secure, compliant, and reliable.",
  alternates: {
    canonical: "/data-security",
  },
  keywords: [
    "data destruction services Kolkata",
    "certified data wiping India",
    "hard drive shredding service",
    "NIST 800-88 data sanitization",
    "corporate data destruction certificate",
    "secure data disposal Kolkata",
    "hard drive degaussing service",
    "SSD destruction service India",
    "DoD compliant data erasure",
    "IT data security disposal",
  ],
  openGraph: {
    title: "Data Integrity & Data Protection Services | Austic Scrap",
    description: "Certified data destruction and integrity protection services. Secure, compliant, and reliable.",
    url: "https://www.austicscrap.com/data-security",
    siteName: "Austic Scrap & E-Waste Recycling",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Protection Services | Austic Scrap",
    description: "Certified data destruction and integrity protection services in Kolkata.",
  },
};

export default function DataSecurityPage() {
  return (
    <main>
      <DataSecurityContent />
    </main>
  );
}
