import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import SectionWrapper from "@/components/common/SectionWrapper";

export const metadata: Metadata = {
  title: "Reliable Office Scrap Services in Mumbai | Scrap Vendors | Austic",
  description:
    "Looking for Bulk scrap buyers in Mumbai? Austic offers eco-friendly solutions for office Disposal , industries disposal  and Organization Contact us today!",
};

export default function MumbaiScrapPage() {
  const scrapItems = [
    {
      title: "Workstation Scrap",
      description:
        "Do you have old workstations taking up valuable space in your Mumbai office? You aren’t alone on this one. It appears that the workstation tends to accumulate centuries’ worth of obsolete furniture and devices; however, Austic has the right solution for your problem. We specifically deal with purchasing and disassembling shunned office workstations alongside their other components like used tables, old chairs, etc. We want to help everyone who is considering removing their workstation scrap material. we are here to pay the best price for your second-hand scrap in the market",
    },
    {
      title: "Old DG Set scrap",
      description:
        "If you have an obsolete DG set that is no longer useful, Austic is here to help. We specialize in purchasing secondhand DG sets in Mumbai, ensuring that you get the best value for your outdated Old Diesel Generator. Our team handles everything from safe disassembly to the responsible removal and transport of your DG set. We take care of the entire process, from start to finish, so you don’t have to worry about a thing. Trust Austic to make the removal of your old DG set easy and hassle-free.",
    },
    {
      title: "Old Office Air Conditioner",
      description:
        "In Mumbai's intense heat, air conditioners are vital in corporate offices, but dealing with old or non-functional units can be challenging, especially ducted AC systems, which are heavy and difficult to handle. Austic specializes in buying all types of office air conditioners, including ducted, split, and cassette AC systems. Our expert technicians ensure the safe removal of your old AC units, carefully managing any hazardous materials. We prioritize eco-friendly disposal, making the process seamless for you while ensuring that your outdated air conditioners are responsibly handled.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/Ewsate greenbackground and right logo.png"
          alt="Office Scrap Collection in Mumbai"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-[2px]"></div>

        <div className="container mx-auto px-4 lg:px-[86px] relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full font-secondary">
              Mumbai Operations
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-primary text-white leading-tight max-w-5xl mx-auto">
              Eco-Friendly Scrap Collection &{" "}
              <span className="text-secondary">Recycling in Mumbai</span>
            </h1>
            <p className="text-neutral-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto font-secondary leading-relaxed">
              Sustainable waste management and scrap buying for Mumbai's
              corporate offices and industrial hubs. Turning waste into value
              with fairness and transparency.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <Link href="/">
                <Button className="px-10 py-4 bg-white text-primary font-bold rounded-full hover:bg-secondary hover:text-white transition-all shadow-xl text-lg">
                  Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="px-10 py-4 bg-secondary text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all shadow-xl text-lg">
                  Sale Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
      </section>

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
              Sustainable Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-8 text-neutral-900 leading-tight">
              Efficient Scrap Disposal for{" "}
              <span className="text-[#127749]">Mumbai&apos;s Businesses</span>
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                In Mumbai&apos;s busy business environment, managing waste
                effectively is essential. Austic offers reliable scrap buying
                services for offices, businesses, and banks. We handle
                everything from old equipment to office furniture, ensuring your
                workspace remains tidy and organized.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                Our team makes the process simple and efficient, taking care of
                all the details. Committed to eco-friendly practices, we help
                Mumbai&apos;s companies dispose of scrap responsibly while
                contributing to a cleaner, more sustainable city.
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
              Our Scrap Buying <span className="text-[#127749]">Services</span>
            </h3>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
    </main>
  );
}
