"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/Button";

const HyderabadScrapContent: React.FC = () => {
  const scrapItems = [
    {
      title: "Scrap Collection",
      description:
        "We offer fast and reliable scrap collection services across Hyderabad, providing efficient solutions for various types of recyclable materials. Our team handles the collection of metals, plastics, electronics, and more, ensuring environmentally responsible disposal. We specialize in both ferrous and non-ferrous metals, a wide range of plastic waste, and safe management of e-waste like computers and phones. Our services are tailored to meet the needs of residents and businesses in Hyderabad, offering flexible scheduling, quick pickups, and competitive rates.",
    },
    {
      title: "Office Workstation Buyer",
      description:
        "In Hyderabad, Austic extends its services to include the buying of old workstations from businesses looking to upgrade or dispose of their office setups. We ensure a smooth and eco-friendly disposal process, helping companies manage space and resources efficiently while adhering to sustainability practices.",
    },
    {
      title: "DG Set & Chiller AC System Collection",
      description:
        "For businesses and industries in Hyderabad, managing the disposal of old DG sets and chiller AC systems requires careful handling. Austic offers specialized services for the safe collection, dismantling, and disposal of these bulky systems. Our expert team ensures that all processes comply with local safety regulations and environmental guidelines.",
    },
    {
      title: "Corporate Office Furniture Disposal",
      description:
        "Planning an office renovation or relocating in Hyderabad? Austic is your trusted partner for the hassle-free disposal of old office furniture. As a leading buyer of office desks, chairs, filing cabinets, and other furnishings, we ensure a smooth collection and recycling process.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/Ewsate greenbackground and right logo.png"
          alt="Office Scrap Collection in Hyderabad"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-[2px]"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full font-secondary">
              Pearl City Services
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-primary text-white leading-tight max-w-5xl mx-auto">
              Reliable Scrap Collection &{" "}
              <span className="text-secondary">Disposal in Hyderabad</span>
            </h1>
            <p className="text-neutral-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto font-secondary leading-relaxed">
              Professional scrap management for Hyderabad's booming IT and
              industrial sectors. Transparent pricing and sustainable disposal
              for all office assets.
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
              Hyderabad Presence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-8 text-neutral-900 leading-tight">
              Scrap Collection Services:{" "}
              <span className="text-[#127749]">Reliable Solutions</span> for
              Businesses
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                In Hyderabad, a city known for its booming corporate and
                industrial sectors, efficient scrap management is crucial for
                maintaining both productivity and sustainability. Austic Scrap
                offers tailored scrap buying solutions to meet the unique needs
                of businesses across the city.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-secondary">
                Whether it&apos;s old office furniture, outdated machinery, or
                metal scrap, Austic ensures a smooth, stress-free process that
                prioritizes both environmental sustainability and adherence to
                local regulations. With a focus on customer satisfaction, they
                provide dependable scrap collection and disposal services,
                helping businesses declutter while supporting a cleaner, more
                sustainable Hyderabad, all while offering competitive prices for
                scrap materials.
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
                src="/images/workstation scrap buyer"
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
              Our Services in <span className="text-[#127749]">Hyderabad</span>
            </h3>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
            <motion.div
              className="group bg-white p-10 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-50 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-110" />
              <h4 className="text-2xl font-bold font-primary mb-4 text-[#127749] group-hover:text-black transition-colors relative z-10 capitalize">
                Scrap Collection
              </h4>
              <p className="text-neutral-500 leading-relaxed font-secondary relative z-10 group-hover:text-neutral-600 transition-colors">
                We offer fast and reliable scrap collection services across
                Hyderabad, providing efficient solutions for various types of
                recyclable materials. Our team handles the collection of metals,
                plastics, electronics, and more, ensuring environmentally
                responsible disposal.
              </p>
            </motion.div>

            <motion.div
              className="group bg-white p-10 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-50 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-110" />
              <h4 className="text-2xl font-bold font-primary mb-4 text-[#127749] group-hover:text-black transition-colors relative z-10 capitalize">
                Office Workstation Buyer
              </h4>
              <p className="text-neutral-500 leading-relaxed font-secondary relative z-10 group-hover:text-neutral-600 transition-colors">
                In Hyderabad, Austic extends its services to include the buying
                of old workstations from businesses looking to upgrade or
                dispose of their office setups. We ensure a smooth and
                eco-friendly disposal process, helping companies manage space
                and resources efficiently.
              </p>
            </motion.div>

            <motion.div
              className="group bg-white p-10 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-50 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-110" />
              <h4 className="text-2xl font-bold font-primary mb-4 text-[#127749] group-hover:text-black transition-colors relative z-10 capitalize">
                DG Set and Chiller AC System Collection
              </h4>
              <p className="text-neutral-500 leading-relaxed font-secondary relative z-10 group-hover:text-neutral-600 transition-colors">
                For businesses and industries in Hyderabad, managing the
                disposal of old DG sets and chiller AC systems requires careful
                handling. Austic offers specialized services for the safe
                collection, dismantling, and disposal of these bulky systems.
              </p>
            </motion.div>

            <motion.div
              className="group bg-white p-10 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-50 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-110" />
              <h4 className="text-2xl font-bold font-primary mb-4 text-[#127749] group-hover:text-black transition-colors relative z-10 capitalize">
                Corporate Office Furniture Disposal
              </h4>
              <p className="text-neutral-500 leading-relaxed font-secondary relative z-10 group-hover:text-neutral-600 transition-colors">
                Planning an office renovation or relocating in Hyderabad? Austic
                is your trusted partner for the hassle-free disposal of old
                office furniture. As a leading buyer of office desks, chairs,
                filing cabinets, and other furnishings.
              </p>
            </motion.div>
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
              At Austic, we leverage our deep expertise in managing scrap
              materials to handle a wide range of items with precision. Our
              commitment to sustainable practices ensures that we minimize
              environmental impact at every step of our process. We pride
              ourselves on transparency, offering competitive pricing and
              regular updates to keep you informed throughout the entire service
              journey.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HyderabadScrapContent;
