// src/app/ewaste/page.tsx
import EwasteHero from "@/components/sections/EwasteHero";
import ServiceCardsSection from "@/components/sections/ServiceCardsSection";

export const metadata = {
  title: "Service Page Of Austic",
  description: "Description for E-waste Service Page", // Placeholder, will update if specific meta description is found
};

const ewasteRecyclingCards = [
  {
    title: "IT & Non IT Recycling",
    shortDescription:
      "IT and non-IT recycling and scrap management with AUSTIC SCRAP, your trusted partner in sustainable waste",
    longDescription:
      "IT and non-IT recycling and scrap management with AUSTIC SCRAP, your trusted partner in sustainable waste disposal Our experienced team specializes in recycling a wide range of IT and non-IT equipment, ensuring environmentally-friendly processes and complete data destruction to protect your privacy and security. From computers and servers to household electronics and office equipment, we handle all types of scrap with efficient and timely pickups tailored to your needs. By choosing AUSTIC SCRAP, you benefit from reliable, high-quality service while making a positive impact on the environment. Contact us today for your IT and non-IT recycling and scrap needs, and contribute to a cleaner, greener future. Trust AUSTIC SCRAP for expert and responsible waste management solutions.",
  },
  {
    title: "E-Waste Disposal",
    shortDescription:
      "Discover the ultimate e-waste disposal solution with AUSTIC SCRAP, your trusted partner in responsible",
    longDescription:
      "Discover the ultimate e-waste disposal solution with AUSTIC SCRAP, your trusted partner in responsible electronic waste management. With over [number] years of proven expertise, we are Kolkata's leading authority in secure and environmentally-friendly e-waste recycling. Our certified professionals ensure seamless disposal and complete data destruction, prioritizing your privacy and security at every step. We handle all types of e-waste, including computers, mobile phones, and more, offering tailored pickups that fit your schedule. At AUSTIC SCRAP, we are committed to delivering reliable, high-quality service that exceeds industry standards. Join hundreds of satisfied clients who trust us for our commitment to a cleaner, greener future. Contact us today to schedule your e-waste disposal and experience the AUSTIC SCRAP difference.",
  },
  {
    title: "Computer Recycling",
    shortDescription:
      "Experience the pinnacle of responsible computer recycling with AUSTIC SCRAP, your trusted",
    longDescription:
      "Experience the pinnacle of responsible computer recycling with AUSTIC SCRAP, your trusted partner sustainable electronic waste management. With our extensive expertise, we provide a seamless and secure service, ensuring your outdated computers are recycled in an environmentally-friendly manner. Our certified professionals prioritize complete data destruction to safeguard your privacy and security. From desktops to laptops, we handle all types of computers with efficient and timely pickups tailored to your needs. Choosing AUSTIC SCRAP for computer recycling means benefiting from reliable, high-quality service while making a positive impact on the environment. Contact us today to schedule your computer recycling and contribute to a cleaner, greener future. Trust AUSTIC SCRAP for expert computer recycling.",
  },
  {
    title: "Laptop Recycling",
    shortDescription:
      "Our Laptop Recycling and Second-Hand Laptop Buying Service offers a seamless, eco-friendly solution",
    longDescription:
      "Our Laptop Recycling and Second-Hand Laptop Buying Service offers a seamless, eco-friendly solution With years of expertise in e-waste management, we ensure your outdated devices are recycled in compliance with environmental standards, protecting both your data and the Security. Our certified professionals handle every step, from secure data wiping to material recovery, ensuring a trustworthy and efficient process. For those seeking affordable, reliable laptops, our selection of refurbished devices undergoes rigorous testing and quality checks, guaranteeing top performance and longevity. Choose us for a sustainable, cost-effective approach to laptop recycling and purchasing.",
  },
];

const officeFurnitureCards = [
  {
    title: "Office Furniture",
    shortDescription:
      "We offer a seamless solution for businesses looking to dispose of surplus or outdated office furniture,",
    longDescription:
      "We offer a seamless solution for businesses looking to dispose of surplus or outdated office furniture, including desks, tables, and shelves. Specializing in eco-friendly practices, we purchase these items from corporate offices, banks, and various organizations, ensuring a smooth process from collection to recycling. By partnering with us, you contribute to sustainability, as we repurpose or recycle the furniture, reducing landfill waste. Our competitive pricing and efficient service make us your ideal choice for responsible office furniture disposal",
  },
  {
    title: "Office Chair Disposal",
    shortDescription:
      "Our company provides an eco-friendly solution for disposing of used office chairs. We offer",
    longDescription:
      "Our company provides an eco-friendly solution for disposing of used office chairs. We offer competitive prices and efficient service to corporate offices, banks, and other organizations. We manage the entire process, from collection to recycling, ensuring minimal disruption to your operations. By choosing us, you support sustainable practices as we repurpose or recycle the chairs, minimizing environmental impact. Trust us for a reliable and responsible approach to managing your office chair disposal needs.",
  },
  {
    title: "WorkStation Removal",
    shortDescription:
      "We specialize in buying used workstations from corporate offices, banks, organizations, offering an eco-friendly",
    longDescription:
      "We specialize in buying used workstations from corporate offices, banks, organizations, offering an eco-friendly disposal solution with minimal business disruption. Our comprehensive service includes dismantling, collection, and recycling, focusing on sustainability by repurposing or recycling the workstations. Partner with us for competitive pricing and efficient service, contributing to a greener environment while managing your office workspace upgrades effectively.",
  },
  {
    title: "Office Cabinet",
    shortDescription:
      "For businesses looking to dispose of old office cabinets, we provide a reliable and eco-friendly solution",
    longDescription:
      "For businesses looking to dispose of old office cabinets, we provide a reliable and eco-friendly solution We purchase office cabinet scrap from corporate offices, banks, and organizations, handling the entire process from collection to recycling. Our commitment to sustainability ensures that the cabinets are repurposed or recycled, reducing waste and supporting environmental goals. Choose us for competitive prices, efficient service, and responsible disposal of your office cabinet scrap.",
  },
];

const metalScrapCards = [
  {
    title: "Iron Scrap Buyer",
    shortDescription:
      "Austic Scrap in Kolkata buys iron scrap with competitive prices, quick evaluations, and eco-friendly practices. kasjif",
    longDescription:
      "Austic Scrap in Kolkata buys iron scrap with competitive prices, quick evaluations, and eco-friendly practices. kasjif With over [number] years of proven expertise, we are Kolkata's leading authority in secure and environmentally-friendly e-waste recycling. Our certified professionals ensure seamless disposal and complete data destruction, prioritizing your privacy and security at every step. We handle all types of e-waste, including computers, mobile phones, and more, offering tailored pickups that fit your schedule. At AUSTIC SCRAP, we are committed to delivering reliable, high-quality service that exceeds industry standards. Join hundreds of satisfied clients who trust us for our commitment to a cleaner, greener future. Contact us today to schedule your e-waste disposal and experience the AUSTIC SCRAP difference.",
  },
  {
    title: "Steel Scrap Buyer",
    shortDescription:
      "Austic Scrap in Kolkata buys steel scrap with fair pricing, quick evaluations, and reliable service for sustainability.",
    longDescription:
      "Austic Scrap in Kolkata buys steel scrap with fair pricing, quick evaluations, and reliable service for sustainability. the procurement of steel scrap from corporate offices, factories, industries, organizations, and institutions. As one of the profound metal scrap buyers, we understand the value of steel since it is an extremely strong and long-lasting material and can be reused several times. We deal transparently and in a consumer-friendly way. Our process involves very competitive prices, fast evaluation, instant payment, and a smooth transportation process. We ensure that your steel scrap is going to be recycled efficiently and effectively. Selling your scrap steel to Austic Scrap means having a professional and, at the same time, sustainable processing procedure. The team at Austic Scrap stands behind fair pricing and reliable service, making this company one of the more noticed partners within the metal scrap industry. Sell your steel scrap to Austic Scrap and act for a more sustainable future.",
  },
  {
    title: "Aluminum Scrap Buyer",
    shortDescription:
      "Sell your aluminum scrap to Austic Scrap in Kolkata for competitive prices, quick evaluations, and prompt service.",
    longDescription:
      "Sell your aluminum scrap to Austic Scrap in Kolkata for competitive prices, quick evaluations, and prompt service. one of the leading purchasers in buying aluminum scrap from various corporate offices, factories, industries, organizations, institutions, etc. As a professional metal scrap buyer, we appreciate the price value of aluminum for lightness, resistance to corrosion, and good conductivity. We pledge ourselves to efficiently and responsibly recycle your aluminum scrap at competitive prices, quick evaluation, quick payment, and smooth transportation—making it easy and hassle-free. Our team promotes green and sustainable development and delivers fair and professional service. Sell your aluminium scrap to Austic Scrap and be a part of a greener tomorrow.",
  },
  {
    title: "Copper Scrap Buyer",
    shortDescription:
      "Partner with Austic Scrap in Kolkata to sell copper scrap from various sources, with quick evaluations and payment.",
    longDescription:
      "Partner with Austic Scrap in Kolkata to sell copper scrap from various sources, with quick evaluations and payment. Austic Scrap, based in Kolkata, is your trusted associate for selling copper scrap. We look for sources from which metal scrap can be acquired, whether corporate offices, factories, industries, organizations, or institutions. Coppers are very valuable because of their great ability to conduct electricity and are ductile in nature; hence we shall responsibly recycle them to benefit both our clients and the environment. We offer very competitive prices and make the process easy with quick evaluations, immediate payment, and hassle-free transport. Our friendly and professional team is focused on maximizing returns while being on an eco-friendly mission. Partner with Austic Scrap to sell copper scrap and help us make a positive difference on the planet.",
  },
];

export default function EwastePage() {
  return (
    <main>
      <EwasteHero />
      <ServiceCardsSection
        sectionTitle="E-WASTE RECYCLING & DISPOSAL"
        cards={ewasteRecyclingCards}
        titleColorClass="text-neutral-900"
      />
      <ServiceCardsSection
        sectionTitle="Office Furniture Recycling"
        cards={officeFurnitureCards}
        titleColorClass="text-neutral-900"
      />
      <ServiceCardsSection
        sectionTitle="Metal Scrap Recycling"
        cards={metalScrapCards}
        titleColorClass="text-neutral-900"
      />
    </main>
  );
}
