import React from "react";
import CityContent from "@/components/sections/CityContent";

export const metadata = {
  title: "Top E-Waste Recycling in Hyderabad | Office IT Equipment Disposal",
  description:
    "Leading e-waste recycling in Hyderabad with secure IT equipment disposal, data destruction, and corporate and bank sector electronic waste management.",
};

const HyderabadPage = () => {
  return (
    <CityContent
      cityName="Hyderabad"
      heroTitle="Reliable E-Waste disposal Management for Hyderabad’s Tech and Corporate Sectors"
      heroDescription="Efficient and secure e-waste solutions tailored for Hyderabad's growing technology hub."
      heroImage="/images/E-waste svg banner.jpg"
      introTitle="E-Waste Management Leadership in Hyderabad"
      introText="Hyderabad is the information technology and innovation focal point of India, where many IT startups, multinational companies, and also financial institutions exist. The city produces a lot of electric waste due to the fast-tech development. Austic Scrap and Recycling takes pride in providing high-quality e-waste recycling and IT Asset Disposition (ITAD) services specifically for the dynamic business environment in Hyderabad. Our expertise cuts across various sectors, including IT startups, corporate offices, and banks, to promote responsible disposal and recycling of obsolete electronic assets. We are committed to recovering as many valuable materials as possible from e-waste while reducing its negative impact on the environment, thereby driving forward sustainability for future generations in Hyderabad."
      introImage="/images/e-waste-hydrabad.jpg"
      whyNeedRecycling={{
        title: "Why We Need E-Waste Recycling In Hyderabad",
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
          description: "Safe and compliant battery recycling services.",
        },
      ]}
      itAssets={[
        {
          title: "IT Asset Disposition (ITAD) Services In Hyderabad",
          description:
            "Our ITAD services are tailored to meet the unique needs of Hyderabad’s IT industry. We provide secure and environmentally responsible disposal of IT assets, including computers, servers, and networking equipment. Our process includes comprehensive data destruction to ensure that sensitive information is completely erased before recycling.",
        },
        {
          title: "Corporate Office E-Waste Recycling in Hyderabad",
          description:
            "Corporate offices in Hyderabad are constantly upgrading their technology to stay competitive. Our Eco-Friendly E-Waste services offer a convenient and secure way to dispose of outdated electronics. We handle everything from the collection of e-waste to the secure destruction of data, ensuring that all electronic devices are recycled in compliance with environmental regulations.",
        },
        {
          title: "Battery & UPS System Recycling",
          description:
            "Batteries and UPS systems contain hazardous materials that require careful handling. Our services ensure that these items are disposed of safely, preventing environmental contamination and adhering to strict safety regulations. We also focus on the recovery of materials like lead and lithium, which can be reused in new batteries.",
        },
        {
          title: "Banking Sector E-Waste Solutions",
          description:
            "The banking sector in Hyderabad deals with highly sensitive information and requires secure disposal of electronic devices. Our services are designed to meet the stringent requirements of the banking industry, offering secure data destruction and responsible recycling of electronic equipment.",
        },
      ]}
      whyChoose={{
        title: "Why choose Austic for E-waste Recyling",
        points: [
          {
            title: "Advanced Technology",
            description:
              "We use the latest technology for data destruction and recycling, ensuring that your sensitive information is completely erased and your e-waste is processed in the most efficient way possible.",
          },
          {
            title: "Local Expertise",
            description:
              "With years of experience in the Hyderabad market, we have a deep understanding of the city’s regulatory landscape and industry needs. Our services are designed to meet local requirements while delivering the highest standards of quality.",
          },
          {
            title: "Comprehensive Services",
            description:
              "We offer a full range of e-waste management services, from IT asset disposition to data center decommissioning. Whatever your e-waste needs, we have the expertise and resources to meet them.",
          },
          {
            title: "Fair Pricing",
            description:
              "We believe in offering competitive rates without compromising on quality. Our pricing is transparent and fair, ensuring that you get the best value for your money.",
          },
          {
            title: "End-to-End Support",
            description:
              "From the initial consultation to the final disposal of e-waste, we provide end-to-end support to ensure that your electronic waste is managed in the most efficient and responsible way possible.",
          },
        ],
      }}
    />
  );
};

export default HyderabadPage;
