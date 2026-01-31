"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/Button";

const BengaluruScrapContent: React.FC = () => {
  const scrapItems = [
    {
      title: "Office Furniture Scrap Collection",
      description:
        "Bengaluru’s corporate offices are constantly evolving, and with that comes the need to dispose of office furniture such as desks, chairs, and cabinets. Austic ensures that all items are recycled or repurposed in an environmentally friendly manner.",
    },
    {
      title: "DG Set Disposal",
      description:
        "Upgrading or replacing your DG sets? Austic specializes in buying old and used DG sets in Bengaluru. We provide professional removal and dismantling services, ensuring a smooth process and minimal disruption to your workspace. You’ll receive top value for your DG sets while supporting responsible disposal practices.",
    },
    {
      title: "Metal Scrap Recycling",
      description:
        "Bengaluru’s industrial sector generates significant amounts of metal scrap, including steel, aluminum, and copper. Austic offers customized metal scrap disposal services to meet the needs of businesses across various industries. Our team ensures efficient and responsible handling of all types of metal scrap, helping you manage waste while minimizing environmental impact.",
    },
    {
      title: "Ductable Air Conditioner Disposal",
      description:
        "Austic specializes in the removal of outdated ductable AC systems for businesses. Our team ensures the safe dismantling and eco-friendly disposal of these large units with minimal disruption to your operations. We provide efficient, reliable services, helping you clear out old systems quickly and responsibly.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <SectionWrapper id="feature" className="bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
              Bengaluru Presence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-8 text-neutral-900 leading-tight">
              Scrap Collection Services:{" "}
              <span className="text-[#127749]">Eco-Friendly Solutions</span>{" "}
              with Austic
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                Bengaluru, with its rapid growth in tech and industry, creates a
                lot of scrap from different businesses. At Austic Scrap, we’re
                here to make dealing with it easier. We offer scrap pickup and
                disposal for offices, banking, factories, and more across
                Bengaluru.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                Whether it’s old metal, office furniture, ACs, or unused
                machinery equipment, we’re ready to help. We aim to make the
                whole process easy and stress-free while keeping things
                environmentally friendly. By working with us, businesses in
                Bengaluru can manage their scrap easily and help make the city
                cleaner and greener.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/workstation scrap buyer.jpeg"
                alt="Workstation Scrap Buyer"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[32px]" />
            </div>
          </motion.div>
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold font-primary mb-4 text-neutral-900">
              Our Services in <span className="text-[#127749]">Bengaluru</span>
            </h3>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
            {scrapItems.map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white p-10 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-50 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-110" />

                <h4 className="text-2xl font-bold font-primary mb-4 text-[#127749] group-hover:text-black transition-colors relative z-10 capitalize">
                  {item.title}
                </h4>
                <p className="text-neutral-500 leading-relaxed font-secondary relative z-10 group-hover:text-neutral-600 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper id="why-choose-us" className="bg-neutral-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
              Our Advantage
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-primary mb-8 text-neutral-900 leading-tight">
              Why Choose <span className="text-[#127749]">Austic?</span>
            </h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto rounded-full mb-8" />
            <p className="text-neutral-600 text-lg md:text-xl leading-relaxed font-secondary">
              Austic draws on extensive experience in the recycling field to
              expertly handle a wide range of scrap materials. We prioritize
              eco-friendly practices, working to minimize the environmental
              impact of each item we process. Our process is characterized by
              openness, featuring fair rates and consistent updates throughout.
              We offer bespoke services tailored to each client&apos;s specific
              needs, aiming for a seamless and rewarding experience.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default BengaluruScrapContent;
