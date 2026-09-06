import { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Privacy Policy | Austic Scrap & Recycling",
  description:
    "Read the privacy policy of Austic Scrap & Recycling. Learn how we collect, use, and protect your personal data when you use our scrap buying and e-waste recycling services.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    type: "website",
    url: "https://www.austicscrap.com/privacy-policy",
    title: "Privacy Policy | Austic Scrap & Recycling",
    description:
      "How Austic Scrap collects, uses, and protects your personal data. Read our full privacy policy.",
    siteName: "Austic Scrap & E-Waste Recycling",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <BreadcrumbSchema items={[{ name: "Privacy Policy", url: "/privacy-policy" }]} />

      <section className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-primary">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-12">Last updated: September 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              Austic Scrap and Recycling (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting and respecting
              your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website{" "}
              <strong>www.austicscrap.com</strong> and use our scrap buying and e-waste recycling services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number, and company name when you fill out our contact form or request a quote.</li>
              <li>Location/city information for service coordination.</li>
              <li>Messages and inquiry details you provide through forms.</li>
            </ul>
            <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Browser type, operating system, and device information.</li>
              <li>IP address and general geographic location.</li>
              <li>Pages visited, time spent on pages, and navigation patterns.</li>
              <li>Referring website/source and UTM campaign parameters.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and provide scrap buying/recycling quotes.</li>
              <li>To coordinate doorstep pickup and service delivery.</li>
              <li>To send important service updates and communications.</li>
              <li>To improve our website, services, and customer experience.</li>
              <li>To analyze website traffic and usage patterns using analytics tools.</li>
              <li>To comply with legal obligations and industry regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Analytics & Tracking</h2>
            <p>
              We use website analytics and performance measurement tools to understand how visitors interact with our website.
              These analytics services collect anonymized, aggregated information such as page visits, browsing patterns, and session metrics
              to help us improve site functionality, optimize user experience, and ensure seamless service delivery.
              These tools do not capture sensitive financial data or personal credentials. You can manage or disable cookie-based
              analytics at any time via your browser settings or our cookie preferences banner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your
              personal data against unauthorized access, alteration, disclosure, or destruction. For
              corporate IT asset disposition, we follow <strong>NIST 800-88</strong> guidelines for
              certified data destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share
              information only with trusted service providers who assist in operating our website and
              conducting our business, subject to confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
            <p>Under applicable Indian data protection laws (including the Digital Personal Data Protection Act, 2023), you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate personal data.</li>
              <li>Request deletion of your personal data.</li>
              <li>Withdraw consent for data processing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>Email:</strong> austicscrap@gmail.com</li>
              <li><strong>Phone:</strong> +91 9088-495-495</li>
              <li><strong>Address:</strong> Kolkata, West Bengal, India</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
