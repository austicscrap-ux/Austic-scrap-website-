"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqsData: FAQItem[] = [
  {
    category: "Services & Scrap Types",
    question: "What types of scrap and e-waste does Austic Scrap buy?",
    answer:
      "We purchase all types of corporate office scrap and electronic waste. This includes IT assets (computers, laptops, servers, networking switches, UPS systems, cables), office workstations, cubicles, modular partitions, chairs, old air conditioners, chillers, commercial DG generator sets, industrial batteries, and ferrous/non-ferrous metal scrap (copper, aluminum, brass, iron, steel).",
  },
  {
    category: "Pricing & Valuation",
    question: "How do you calculate the price and valuation for our scrap?",
    answer:
      "Our valuation is transparent and based on real-time market scrap indexes, commodity weight, material grade, and the operational condition of reusable IT hardware. We offer instant on-site inspections or photo/inventory valuations to give you the highest competitive market quote with zero hidden deductions.",
  },
  {
    category: "Data Security & Compliance",
    question: "Do you provide certified data destruction for servers and hard drives?",
    answer:
      "Yes, absolutely. We strictly follow DoD 5220.22-M and NIST 800-88 compliance standards. We offer both on-site physical degaussing/shredding and secure off-site data sanitization. Upon completion, we issue a tamper-proof, serialized Certificate of Data Destruction for your compliance and legal audit records.",
  },
  {
    category: "Logistics & Dismantling",
    question: "How does the corporate dismantling and scrap pickup process work?",
    answer:
      "Our end-to-end process involves 4 simple steps: 1) Initial inventory audit and quote agreement, 2) Scheduled arrival of our trained dismantling crew, 3) Safe uninstallation and sorting with zero damage to your office premises, and 4) Loading onto our authorized transport vehicles followed by instant payment settlement.",
  },
  {
    category: "Coverage & Locations",
    question: "Which cities across India does Austic Scrap operate in?",
    answer:
      "Our headquarters and primary processing facility are located in Kolkata, West Bengal. We provide dedicated corporate scrap pickup and e-waste management hubs across all major Indian metro regions, including Bengaluru, Delhi NCR, Mumbai, Hyderabad, Chennai, and Pune, with pan-India enterprise logistics support.",
  },
  {
    category: "Turnaround Time",
    question: "How quickly can you arrange an inspection and doorstep pickup?",
    answer:
      "For metro cities like Kolkata, Delhi, Bengaluru, and Mumbai, our field team can visit your facility within 24 to 48 hours of your inquiry. For large-scale multi-floor corporate dismantling or plant clearances, we create a tailored logistics roadmap to ensure minimum disruption to your ongoing business operations.",
  },
  {
    category: "Environmental Standards",
    question: "Are your recycling methods compliant with Indian Pollution Control Board (CPCB) norms?",
    answer:
      "Yes. Austic Scrap is fully committed to responsible environmental stewardship. We partner with authorized recycling facilities adhering to the E-Waste (Management) Rules established by the Ministry of Environment, Forest and Climate Change (MoEFCC) and the Central Pollution Control Board (CPCB). We maintain zero-landfill disposal protocols.",
  },
  {
    category: "Payment Terms",
    question: "What payment methods and settlement terms do you provide?",
    answer:
      "We offer 100% upfront, transparent payment settlement before scrap leaves your premises. Payments can be processed via direct Bank RTGS / NEFT transfer, UPI, or corporate cheques, accompanied by official weighing slips and commercial GST invoices.",
  },
  {
    category: "Heavy Equipment",
    question: "Can you handle bulk industrial machinery, heavy chillers, and DG sets?",
    answer:
      "Yes. We specialize in industrial decommissioning. Our technical team is equipped with heavy-duty lifting equipment, gas cutting gear, cranes, and logistics vehicles to safely remove large diesel generator sets, centralized HVAC air-conditioning plants, industrial transformers, and manufacturing machinery.",
  },
  {
    category: "Booking & Contact",
    question: "How can I book a free consultation or schedule an on-site scrap valuation?",
    answer:
      "You can book a free 1-on-1 consultation directly via our Calendly scheduler by clicking the 'Book Free Consultation' button on our website. Alternatively, you can call us or WhatsApp our response team directly at +91-6205518929 or submit your scrap inventory on our Contact page.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate Google Schema JSON-LD for rich snippet search results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <SectionWrapper
      id="faqs"
      className="bg-amber-50/30 border-y border-amber-100/50 relative overflow-hidden"
    >
      {/* Schema.org FAQPage JSON-LD for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#127749]/10 text-[#127749] text-sm font-bold tracking-wider uppercase mb-4">
          <Sparkles size={16} />
          Got Questions? We Have Answers
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-primary text-neutral-900 mb-4 md:mb-6 leading-tight">
          Frequently Asked <span className="text-[#127749]">Questions</span>
        </h2>
        <p className="text-neutral-600 text-base md:text-lg font-secondary leading-relaxed">
          Everything you need to know about our corporate scrap buying, e-waste recycling,
          data destruction certifications, and doorstep pickup process.
        </p>
      </div>

      {/* FAQ Accordion List - Full Width 2 Columns Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-start">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                viewport={{ once: true }}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#127749]/40 shadow-sm"
                    : "bg-white border-neutral-200/80 hover:border-neutral-300"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-4.5 py-3.5 sm:px-5 sm:py-3.5 flex items-center justify-between gap-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#127749] rounded-xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <div className="flex-1 pr-1">
                    <span className="text-[10px] font-bold text-[#127749] tracking-wider uppercase mb-0.5 block">
                      {faq.category}
                    </span>
                    <h3
                      className={`text-[13.5px] sm:text-[14.5px] font-bold font-primary leading-snug transition-colors duration-200 ${
                        isOpen ? "text-[#127749]" : "text-neutral-900"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#127749]/10 text-[#127749] rotate-180"
                        : "bg-neutral-100 text-neutral-500"
                    }`}
                  >
                    <ChevronDown size={14} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-4.5 pb-3.5 sm:px-5 sm:pb-4 pt-0 text-neutral-600 text-xs sm:text-[13px] font-secondary leading-relaxed border-t border-neutral-100">
                        <p className="pt-2.5">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
    </SectionWrapper>
  );
}
