import { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "E-Waste Compliance & CPCB Guidelines | Austic Scrap & Recycling",
  description:
    "Learn about Austic Scrap's e-waste compliance practices, CPCB authorization, and adherence to E-Waste (Management) Rules, 2022. Certified and responsible recycling.",
  alternates: {
    canonical: "/ewaste-compliance",
  },
  keywords: [
    "E-waste compliance India",
    "CPCB authorized e-waste recycler",
    "E-waste management rules 2022",
    "Certified e-waste disposal",
    "E-waste regulations India",
    "SPCB authorized recycler Kolkata",
    "R2 certified recycling",
    "ISO 14001 e-waste",
  ],
  openGraph: {
    type: "website",
    url: "https://www.austicscrap.com/ewaste-compliance",
    title: "E-Waste Compliance & CPCB Guidelines | Austic Scrap",
    description:
      "CPCB authorized e-waste recycling. Learn about our compliance with E-Waste Management Rules 2022.",
    siteName: "Austic Scrap & E-Waste Recycling",
  },
};

export default function EWasteCompliancePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <BreadcrumbSchema items={[{ name: "E-Waste Compliance", url: "/ewaste-compliance" }]} />

      <section className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-primary">
          E-Waste Compliance & Regulatory Framework
        </h1>
        <p className="text-gray-500 mb-12">
          Our commitment to environmentally responsible e-waste management
        </p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. E-Waste (Management) Rules, 2022
            </h2>
            <p>
              Austic Scrap and Recycling operates in full compliance with the{" "}
              <strong>E-Waste (Management) Rules, 2022</strong> as notified by the Ministry of
              Environment, Forest and Climate Change (MoEFCC), Government of India. These rules
              establish the framework for collection, dismantling, recycling, and disposal of
              electronic waste in an environmentally sound manner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. CPCB & SPCB Authorization
            </h2>
            <p>
              We operate under authorization from the <strong>Central Pollution Control Board (CPCB)</strong>{" "}
              and relevant <strong>State Pollution Control Boards (SPCBs)</strong>. Our facilities and
              processes are regularly audited to ensure compliance with all environmental standards
              and regulations governing e-waste processing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Categories of E-Waste We Handle
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>IT Equipment:</strong> Computers, laptops, servers, monitors, printers, scanners, networking equipment.</li>
              <li><strong>Telecom Equipment:</strong> Routers, switches, PBX systems, mobile devices.</li>
              <li><strong>Consumer Electronics:</strong> TVs, audio systems, refrigerators, washing machines.</li>
              <li><strong>Electrical Equipment:</strong> UPS systems, batteries, transformers, cables.</li>
              <li><strong>Industrial Electronics:</strong> Control systems, measuring instruments, medical devices.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Our Recycling Process
            </h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Collection & Inspection:</strong> Doorstep pickup with detailed inventory
                documentation and asset tagging.
              </li>
              <li>
                <strong>Data Sanitization:</strong> Certified data destruction following NIST 800-88
                guidelines with destruction certificates provided.
              </li>
              <li>
                <strong>Segregation:</strong> Manual and automated sorting of materials by category —
                metals, plastics, circuit boards, hazardous components.
              </li>
              <li>
                <strong>Environmentally Sound Recycling:</strong> Recovery of precious metals and
                materials using approved processes with zero landfill commitment.
              </li>
              <li>
                <strong>Documentation:</strong> Complete chain-of-custody documentation and recycling
                certificates for corporate compliance records.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Certifications & Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">ISO 14001:2015</h3>
                <p className="text-sm text-gray-600">Environmental Management System certification ensuring systematic environmental impact reduction.</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">R2 Certified</h3>
                <p className="text-sm text-gray-600">Responsible Recycling certification for electronics refurbishing and recycling.</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">CPCB Authorized</h3>
                <p className="text-sm text-gray-600">Central Pollution Control Board authorization for e-waste handling and processing.</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">NIST 800-88</h3>
                <p className="text-sm text-gray-600">Data sanitization following National Institute of Standards and Technology guidelines.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Corporate Responsibilities
            </h2>
            <p>
              Under the E-Waste Management Rules, producers, consumers, and bulk consumers
              (organizations generating bulk e-waste) have specific responsibilities:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Bulk Consumers:</strong> Must ensure e-waste is channelized to authorized dismantlers or recyclers.</li>
              <li><strong>Record Keeping:</strong> Must maintain records of e-waste generated, stored, and handed over.</li>
              <li><strong>Annual Returns:</strong> Must file annual returns to the concerned SPCB.</li>
            </ul>
            <p className="mt-4">
              Austic Scrap helps corporate clients fulfill these compliance requirements by providing
              complete documentation, chain-of-custody records, and recycling certificates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact for Compliance</h2>
            <p>For compliance-related queries or to schedule a compliant e-waste pickup:</p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>Email:</strong> austicscrap@gmail.com</li>
              <li><strong>Phone:</strong> <a href="tel:+916205518929" className="hover:underline text-[#127749]">+91 62055 18929</a></li>
              <li><strong>Address:</strong> Kolkata, West Bengal, India</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
