import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Reliable Office Scrap Services in Mumbai | Scrap Vendors | Austic',
  description: 'Looking for Bulk scrap buyers in Mumbai? Austic offers eco-friendly solutions for office Disposal , industries disposal  and Organization Contact us today!',
};

export default function MumbaiScrapPage() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero" className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-black/50">
        <div className="absolute inset-0 -z-10">
             <Image
                src="/images/Ewsate greenbackground and right logo.png"
                alt="Hero Image"
                fill
                className="object-cover opacity-70"
                priority
             />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight font-secondary">
                Eco-Friendly Scrap Collection and Recycling in Mumbai for a Sustainable Future
            </h1>
            <div className="flex justify-center gap-4">
                <Link href="/" className="main-btn border-white hover:bg-white hover:text-black">
                    Home
                </Link>
                <Link href="/contact" className="main-btn fill-btn bg-secondary border-secondary">
                    Sale Now
                </Link>
            </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="wrapper bg-white py-16">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center mb-16">
                {/* Text Content */}
                <div className="w-full md:w-1/2 order-1 md:order-1 mb-10 md:mb-0 md:pr-12">
                    <h2 className="text-[#127749] text-3xl md:text-4xl font-bold mb-6 font-secondary">
                        Efficient Scrap Disposal and Sustainable Waste Solutions for Mumbai’s Businesses
                    </h2>
                    <p className="text-justify text-gray-600 leading-relaxed text-lg">
                        In Mumbai's busy business environment, managing waste effectively is essential. Austic offers reliable scrap buying services for offices, businesses, and banks. We handle everything from old equipment to office furniture, ensuring your workspace remains tidy and organized. Our team makes the process simple and efficient, taking care of all the details. Committed to eco-friendly practices, we help Mumbai’s companies dispose of scrap responsibly while contributing to a cleaner, more sustainable city.
                    </p>
                </div>
                {/* Image */}
                <div className="w-full md:w-1/2 order-2 md:order-2 flex justify-center">
                    <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <Image
                            src="/images/workstation scrap buyer"
                            alt="Workstation Scrap Buyer"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Scrap Buying Services List */}
            <div className="mb-16">
                <h3 className="text-center text-3xl font-bold mb-12 text-[#127749] font-secondary">Our Scrap Buying Services</h3>
                <div className="space-y-12 max-w-4xl mx-auto">
                    {/* Item 1 */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <strong className="block text-xl md:text-2xl text-text-black mb-4 font-secondary">Workstation Scrap</strong>
                        <p className="text-justify text-gray-600 leading-relaxed">
                            Do you have old workstations taking up valuable space in your
                            Mumbai office? You aren’t alone on this one. It appears that the
                            workstation tends to accumulate centuries’ worth of obsolete
                            furniture and devices; however, Austic has the right solution
                            for your problem. We specifically deal with purchasing and
                            disassembling shunned office workstations alongside their other
                            components like used tables, old chairs, etc. We want to help
                            everyone who is considering removing their workstation scrap
                            material. we are here to pay the best price for your second-hand
                            scrap in the market
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <strong className="block text-xl md:text-2xl text-text-black mb-4 font-secondary">Old DG Set scrap</strong>
                        <p className="text-justify text-gray-600 leading-relaxed">
                            If you have an obsolete DG set that is no longer useful, Austic
                            is here to help. We specialize in purchasing secondhand DG sets
                            in Mumbai, ensuring that you get the best value for your
                            outdated Old Diesel Generator. Our team handles everything from
                            safe disassembly to the responsible removal and transport of
                            your DG set. We take care of the entire process, from start to
                            finish, so you don’t have to worry about a thing. Trust Austic
                            to make the removal of your old DG set easy and hassle-free.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <strong className="block text-xl md:text-2xl text-text-black mb-4 font-secondary">Old Office Air Conditioner</strong>
                        <p className="text-justify text-gray-600 leading-relaxed">
                            In Mumbai's intense heat, air conditioners are vital in
                            corporate offices, but dealing with old or non-functional units
                            can be challenging, especially ducted AC systems, which are
                            heavy and difficult to handle. Austic specializes in buying all
                            types of office air conditioners, including ducted, split, and
                            cassette AC systems. Our expert technicians ensure the safe
                            removal of your old AC units, carefully managing any hazardous
                            materials. We prioritize eco-friendly disposal, making the
                            process seamless for you while ensuring that your outdated air
                            conditioners are responsibly handled.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose Austic Text */}
            <div className="bg-[#f9f9f9] p-8 md:p-12 rounded-xl border-l-4 border-secondary">
                 <strong className="block text-2xl text-[#127749] mb-4 font-secondary">Why Choose Austic?</strong>
                 <p className="text-gray-700 leading-relaxed text-lg">
                    Austic draws on extensive experience in the recycling field to
                    expertly handle a wide range of scrap materials. We prioritize
                    eco-friendly practices, working to minimize the environmental impact
                    of each item we process. Our process is characterized by openness,
                    featuring fair rates and consistent updates throughout. We offer
                    bespoke services tailored to each client's specific needs, aiming for
                    a seamless and rewarding experience.
                 </p>
            </div>

        </div>
      </section>
    </main>
  );
}