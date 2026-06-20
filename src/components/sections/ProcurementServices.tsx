// src/components/sections/ProcurementServices.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface ServiceCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const servicesData: ServiceCardProps[] = [
  {
    href: "/corporate-office-scrap", // Adjusted path
    imageSrc: "/images/office-furniture-scrap.jpg",
    imageAlt: "Corporate Scrap",
    title: "Corporate Scrap",
    description:
      "Our Kolkata-based scrap company buy corporate office scrap, ensuring eco-friendly disposal and top prices.",
  },
  {
    href: "/asset-disposition", // Fixed path
    imageSrc: "/images/IT Asset Disposition Buyer.jpeg",
    imageAlt: "IT Asset Disposition",
    title: "IT Asset Disposition",
    description:
      "IT Asset Disposition services prioritize security for IT disposal, ensuring the best price and offering the best service in Kolkata",
  },
  {
    href: "/ewaste-recycling-kolkata", // Adjusted path
    imageSrc: "/images/e-waste-recycling-kolkata.jpeg",
    imageAlt: "E-waste Recycling",
    title: "E-waste Recycling",
    description:
      "Buy corporate Office E-waste item such as computers and Laptop for recycling ensuring data security and environmental protection",
  },
  {
    href: "/old-ac-buyer", // Fixed path
    imageSrc: "/images/Air con-compressed.jpg",
    imageAlt: "Air Conditioner",
    title: "Air Conditioner",
    description:
      "Specializing in buying used AC units from commercial buildings, we ensure hassle-free pickup and responsible recycling.",
  },
  {
    href: "/electrical", // Adjusted path
    imageSrc: "/images/electrical scrap-compressed.jpg",
    imageAlt: "Electrical Scrap",
    title: "Electrical Scrap",
    description:
      "Purchase old office electric scrap such as wires cables and used electronic device from caproate office",
  },
  {
    href: "/metal", // Adjusted path
    imageSrc: "/images/coppper crop.jpg",
    imageAlt: "Metal Scrap",
    title: "Metal Scrap",
    description:
      "We specialize in purchasing and recycling various types of metal scrap, including aluminum, copper, and steel in Kolkata",
  },
  {
    href: "/battery-recycling", // Adjusted path
    imageSrc: "/images/bettery recycling.jpeg",
    imageAlt: "Battery Recycling",
    title: "Battery Recycling",
    description:
      "We specialize in purchasing workstations and office furniture from corporate, institution, and banking sector",
  },
  {
    href: "/old-dg-generator", // Adjusted path
    imageSrc: "/images/dg set crop.jpg",
    imageAlt: "Old DG Generator",
    title: "Old DG Generator",
    description:
      "We buy old office furniture like outdated desk, Office Scrap, cabinets, office chair to minimize office waste effectively",
  },
];

const ProcurementServices: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <section className="bg-procurement-yellow py-12">
      <div className="container mx-auto px-4 lg:px-[86px]">
        <div className="text-center mb-10">
          <h3 className="text-text-black-dark text-3xl font-bold font-josefin-sans">
            Procurement Sources and services
          </h3>
        </div>
        <div className="flex flex-wrap -mx-2">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ${
                index >= 4 && !isExpanded ? "hidden lg:block" : "block"
              }`}
            >
              <Link
                href={service.href}
                className="block bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg h-full"
              >
                <div className="overflow-hidden">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    width={500}
                    height={300}
                    className="w-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-xl font-semibold text-text-black-dark mb-2">
                    {service.title}
                  </h2>
                  <p className="text-text-black-dark text-justify text-base">
                    {service.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {!isExpanded && (
        <div className="flex items-center justify-center text-center my-8 lg:hidden">
          <div className="flex-grow h-px bg-gray-300 mx-4"></div>
          <Button
            variant="default"
            className="bg-btn-blue text-white hover:bg-btn-dark-green"
            onClick={() => setIsExpanded(true)}
          >
            Explore All Services
          </Button>
          <div className="flex-grow h-px bg-gray-300 mx-4"></div>
        </div>
      )}

      {/* View More Services Button (Desktop Only) */}
      <div className="hidden lg:flex items-center justify-center text-center my-8">
        <div className="flex-grow h-px bg-gray-300 mx-4"></div>
        <Link href="/service">
          <Button
            variant="default"
            className="bg-btn-blue text-white hover:bg-btn-dark-green"
          >
            Explore All Services
          </Button>
        </Link>
        <div className="flex-grow h-px bg-gray-300 mx-4"></div>
      </div>
    </section>
  );
};

export default ProcurementServices;
