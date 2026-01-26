import React from "react";
import CityContent from "@/components/sections/CityContent";

export const metadata = {
  title: "E-Waste Recycling in Delhi NCR | Electronic Waste Management",
  description:
    "Professional e-waste recycling in Delhi. We offer expert IT asset disposal and recycling solutions for your electronic waste",
};

const DelhiPage = () => {
  return (
    <CityContent
      cityName="Delhi"
      heroTitle="Eco-Friendly E-Waste Recycling for Delhi’s Corporate and Educational Institutions"
      heroDescription="Your trusted partner for responsible electronic waste disposal in the capital."
      heroImage="/images/Ewsate greenbackground and right logo.png"
      introTitle="E-Waste Management Leadership in Delhi"
      introText="Delhi is taking proactive measures to address the escalating issue of electronic waste as older devices are increasingly discarded. The city is adopting innovative recycling strategies through collaborations between government initiatives and private enterprises, with Austic Scrap and Recycling at the forefront of efforts to assist businesses in responsibly disposing of obsolete electronics. By emphasizing the careful handling and recovery of valuable materials, Delhi is promoting a culture of responsible e-waste management. This forward-thinking strategy not only benefits the environment but also generates economic opportunities, establishing Delhi as a model for other cities in sustainable electronic waste management."
      introImage="/images/e-waste-delhi.jpg"
      scrapMaterials={[
        {
          title: "Office Waste",
          description:
            "We manage everything from outdated documents to excess stationery with care and professionalism.",
        },
        {
          title: "Workstations",
          description:
            "We collect old office workstations, making sure they are either refurbished or recycled in an eco-friendly manner.",
        },
        {
          title: "Metal Scrap",
          description:
            "We offer competitive rates for various metals like aluminum and steel.",
        },
        {
          title: "Electrical Scrap",
          description:
            "We handle all forms of electrical waste, ensuring safe disposal and adherence to regulations.",
        },
        {
          title: "Furniture Scrap",
          description:
            "We recycle old office furniture, contributing to reduced landfill waste.",
        },
        {
          title: "Wooden Items",
          description:
            "We buy different types of wooden scraps, making sure they are reused or recycled efficiently.",
        },
        {
          title: "Office Cabinets and Panels",
          description:
            "We process old office cabinets and panels through our recycling programs.",
        },
        {
          title: "Server Room Equipment",
          description:
            "Our experts are adept at securely recycling server room equipment, and prioritizing data protection.",
        },
      ]}
      whyNeedRecycling={{
        title: "Why We Need E-Waste Recycling",
        description:
          "The definition of e-waste can be referred to as a huge series of electronics that are disposable and include office computers, laptops, UPS systems, and batteries. These devices often contain toxic substances, which get released into the environment in the case of poor disposal and pose great danger to human health and the planet. Also, aside from being an eyesore, e-waste is an ore of valuable material value, like gold, silver, and copper, which can efficiently be recovered and reused in manufacturing, saving these resources from being wasted.",
      }}
      scrapList={[
        {
          title: "Office Computers & Laptops",
          description:
            "Our company recycles office computers and laptops that are at the end of their service life, with data protection and environmental protection in view.",
        },
        {
          title: "Desktops & CPUs",
          description:
            "Our safe disposal solutions recover useful resources—from big desktops to essential CPUs.",
        },
        {
          title: "UPS Systems & Batteries",
          description:
            "Since UPS systems and batteries come with hazardous materials, we handle them with extra care to ensure their responsible disposal.",
        },
        {
          title: "Battery",
          description: "Responsible recycling of all types of batteries.",
        },
      ]}
      itAssets={[
        {
          title: "End-to-end IT Asset Disposition Services",
          description:
            "We understand how businesses have issues handling legacy IT assets in the office and across other areas involving varieties of electronic equipment. Our IT asset disposition service provides IT asset managers, IT leaders, system administrators, and procurement professionals with an efficient and secure process. The guarantee of data security in the certified destruction of sensitive information is paramount, having been irretrievably erased. Besides, our e-waste recycling processes are completely in compliance with the existing environmental regulations that ensure maximum material recovery and minimize electronic waste generation. Partner with us for a dependable, effective, and responsible solution for every challenge connected with the management of IT assets.",
        },
        {
          title: "Office Workstation scrap",
          description:
            "Is your office filled up with old workstations or office furniture? We understand—it happens in offices. That’s why Austic is here! We are devoted to buying and disposing of old office workstations in Delhi. Our labor and team will carefully dismantle the office workstation along with the old chairs. Let us handle the heavy lifting so you can enjoy a more organized workspace!",
        },
        {
          title: "IT Companies and software offices scrap",
          description:
            "In IT companies and the tech corporate world, staying up-to-date often means upgrading their IT assets. But what happens to the old IT asset that gets outdated is very hectic for corporate officers to maintain. So, Austic is here to buy all kinds of old and used IT asset scrap in Delhi. We understand how important it is to keep tech industries' data safe, so we handle everything—from securely wiping old devices to recycling them responsibly.",
        },
      ]}
      whyChoose={{
        title: "Why choose Austic for E-waste Recyling",
        points: [
          {
            title: "Proven Expertise",
            description:
              "With several decades of experience in e-waste recycling, we bring depth and understanding to every project we undertake with the best in industry standards and regulations.",
          },
          {
            title: "Second-to-None Data Security",
            description:
              "Protection of your most critical information comes first. We make sure to provide certified data destruction so that the data is totally and irrevocably eradicated.",
          },
          {
            title: "Sustainability Commitment",
            description:
              "Our recycling processes are designed not only to minimize the harm to the environment but also to maximize the return of useful materials. We care about a greener planet.",
          },
        ],
      }}
    />
  );
};

export default DelhiPage;
