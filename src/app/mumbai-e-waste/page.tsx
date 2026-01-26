import React from "react";
import CityContent from "@/components/sections/CityContent";

export const metadata = {
  title: "Top E-waste Recycling in Mumbai | IT Asset Disposal | Austic",
  description:
    "Looking for reliable e-waste recycling in Mumbai? We offer sustainable IT asset disposal, corporate e-waste management, and secure data destruction services",
};

const MumbaiPage = () => {
  return (
    <CityContent
      cityName="Mumbai"
      heroTitle="Comprehensive E-Waste Solutions for Mumbai’s Corporate and Financial Sectors"
      heroDescription="Expert e-waste recycling services designed for India's financial capital."
      heroImage="/images/Ewsate greenbackground and right logo.png"
      introTitle="E-Waste Management Leadership in Mumbai"
      introText="Mumbai, India's bustling financial capital, generates significant e-waste due to its thriving business sector, rapid urbanization, and the constant turnover of technology. With industries, corporate offices, and residential areas continuously upgrading their devices, the city sees an ever-growing pile of discarded electronics. At Austic Scrap and Recycling, we understand the unique challenges this presents. We specialize in buying Information Technology (IT) e-waste scrap and offering IT Asset Disposition (ITAD) services. Our expertise extends across sectors, from the banking industry to corporate offices, where we handle the responsible disposal of outdated IT assets. We also work with small businesses, purchasing electronic waste in bulk, and ensuring that all e-waste is processed with the utmost care. By focusing on efficient recycling, we recover valuable materials like metals, plastics, and rare earth elements, helping to reduce the environmental footprint and promote sustainability in Mumbai."
      introImage="/images/e-waste-mumbai.jpg"
      whyNeedRecycling={{
        title: "Best E-Waste Recycling & Disposal Services in Mumbai",
        description:
          "When we talk about e-waste, we're referring to more than just old office equipment like computers, laptops, and UPS systems. These discarded electronics often harbor hazardous materials like lead and mercury. If they're not disposed of properly, these toxins can seep into our soil, water, and air, causing serious harm to both our health and the environment. But it's not all bad news. Inside these old gadgets are valuable resources like gold, silver, and copper, just waiting to be recovered. By recycling e-waste, we’re not only protecting the planet from further damage but also making good use of these materials, cutting down the need to extract new raw resources. This kind of responsible management helps us move towards a more sustainable future, where electronic waste is handled in a way that benefits everyone.",
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
          description: "Responsible disposal of battery waste.",
        },
      ]}
      itAssets={[
        {
          title: "IT Asset Disposition (ITAD) Services In Mumbai",
          description:
            "Our ITAD services ensure secure disposal of IT assets, from data destruction to recycling. We adhere to stringent environmental standards and utilize advanced technology for total data erasure, safeguarding sensitive information.",
        },
        {
          title: "Corporate Office E-Waste Recycling In Mumbai",
          description:
            "We offer specialized e-waste recycling for Mumbai's corporate offices, including secure data destruction and recycling of electronics like computers and laptops. Our services are designed to support responsible electronic waste management and minimize environmental footprints.",
        },
        {
          title: "Battery & UPS System Recycling",
          description:
            "Batteries and UPS systems require careful handling due to their hazardous components. Our Mumbai services ensure safe disposal, preventing environmental contamination and adhering to safety standards.",
        },
      ]}
      whyChoose={{
        title: "Why choose Austic for E-waste Recyling",
        points: [
          {
            title: "Advanced Technology",
            description:
              "Cutting-edge data destruction technology ensures complete data erasure.",
          },
          {
            title: "Local Expertise",
            description:
              "Deep understanding of Mumbai’s regulations and industry needs.",
          },
          {
            title: "Eco-Friendly Practices",
            description:
              "Commitment to sustainability with a focus on recycling and reuse.",
          },
          {
            title: "Comprehensive Services",
            description:
              "Full range of e-waste management services to meet all needs.",
          },
          {
            title: "Competitive Rates",
            description: "Fair pricing with high recycling standards.",
          },
        ],
      }}
    />
  );
};

export default MumbaiPage;
