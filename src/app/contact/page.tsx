// src/app/contact/page.tsx
import React from "react";
import ContactDetails from "@/components/sections/ContactDetails";
import ContactForm from "@/components/common/ContactForm";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "Contact Us | Austic Scrap Solutions",
  description:
    "Get in touch with Austic Scrap for reliable e-waste and scrap management services. Call, email, or visit our Kolkata office.",
};

const contactPageFormFields: Array<{
  name: string;
  type: "text" | "email" | "tel" | "number" | "textarea";
  placeholder: string;
  required: boolean;
}> = [
  {
    name: "firstName",
    type: "text",
    placeholder: "Your Name or Company",
    required: true,
  },
  { name: "phone", type: "tel", placeholder: "Mobile Number", required: true },
  {
    name: "email",
    type: "email",
    placeholder: "Email Address",
    required: true,
  },
  {
    name: "address",
    type: "text",
    placeholder: "Pickup Address",
    required: true,
  },
  {
    name: "message",
    type: "textarea",
    placeholder: "Tell us about your scrap/recycling needs...",
    required: false,
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contact Us"
        subtitle="Reach out to our dedicated team for all your recycling and scrap management needs."
        backgroundImage="/images/home page.jpg"
      />

      <section className="py-20 bg-amber-50/30">
        <div className="container mx-auto px-4 lg:px-[86px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column: Info */}
            <div className="w-full lg:w-5/12 space-y-8">
              <div>
                <h5 className="text-[#127749] font-bold tracking-widest uppercase mb-3 text-sm font-secondary">
                  Get in Touch
                </h5>
                <h2 className="text-3xl md:text-4xl font-bold font-primary text-neutral-900 mb-4">
                  We&apos;re Here to Help
                </h2>
                <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                  Whether you have a question about our services, pricing, or
                  want to schedule a pickup, our team is ready to assist you.
                </p>
              </div>

              <ContactDetails />
            </div>

            {/* Right Column: Form */}
            <div className="w-full lg:w-7/12">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-neutral-100">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 font-primary mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-neutral-500 font-medium">
                    Fill out the form below and we&apos;ll get back to you
                    shortly.
                  </p>
                </div>

                <ContactForm
                  fields={contactPageFormFields}
                  submissionEndpoint="" // Add endpoint if needed
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[450px] bg-neutral-100 relative grayscale hover:grayscale-0 transition-all duration-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.710404419791!2d88.3530503!3d22.5549376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x20a4a1d9df8f9afa!2sScrap+Buyer!5e0!3m2!1sen!2sin!4v1625576000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Austic Scrap Location"
        ></iframe>
      </section>
    </main>
  );
}
