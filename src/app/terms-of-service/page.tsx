import { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Terms of Service | Austic Scrap & Recycling",
  description:
    "Read the terms and conditions for using Austic Scrap & Recycling's website and services. Understand your rights, responsibilities, and our service commitments.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    type: "website",
    url: "https://www.austicscrap.com/terms-of-service",
    title: "Terms of Service | Austic Scrap & Recycling",
    description:
      "Terms and conditions for using Austic Scrap's scrap buying and e-waste recycling services.",
    siteName: "Austic Scrap & E-Waste Recycling",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <BreadcrumbSchema items={[{ name: "Terms of Service", url: "/terms-of-service" }]} />

      <section className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-primary">
          Terms of Service
        </h1>
        <p className="text-gray-500 mb-12">Last updated: September 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website <strong>www.austicscrap.com</strong> and the services
              provided by Austic Scrap and Recycling (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you agree to
              be bound by these Terms of Service. If you do not agree with any part of these terms,
              please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
            <p>Austic Scrap provides the following services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Office scrap buying and collection (furniture, workstations, partitions, electronics).</li>
              <li>E-waste recycling and certified IT asset disposition (ITAD).</li>
              <li>Metal scrap buying (ferrous and non-ferrous metals).</li>
              <li>Battery recycling and old DG generator/AC buying.</li>
              <li>Certified data destruction and secure disposal services.</li>
              <li>Doorstep pickup and logistics support across India.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Pricing & Valuation</h2>
            <p>
              All scrap valuations and quotes are provided based on current market rates, condition of
              materials, and quantity. Prices are subject to change based on daily market fluctuations.
              Final pricing is confirmed upon physical inspection of the scrap materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Pickup & Collection</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Doorstep pickup is available across major Indian cities including Kolkata, Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, and Pune.</li>
              <li>Pickup scheduling is subject to availability and volume requirements.</li>
              <li>The seller is responsible for ensuring that scrap materials are legally owned and free of encumbrances.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security Commitment</h2>
            <p>
              For IT asset disposition and e-waste recycling services involving data-bearing devices,
              we provide certified data destruction following industry standards including NIST 800-88
              guidelines. Data destruction certificates are provided upon request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software,
              is the property of Austic Scrap and Recycling and is protected by applicable
              intellectual property laws. Unauthorized reproduction or distribution is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p>
              Austic Scrap shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising out of or related to your use of our website or services.
              Our total liability shall not exceed the amount paid by you for the specific service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
            <p>For questions regarding these Terms of Service, contact us at:</p>
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
