import React from "react";
import CityContent from "@/components/sections/CityContent";

export const metadata = {
  title: "E-Waste Recycling & Disposal in Pune | IT Scrap Buyer | Austic",
  description:
    "Choose eco-friendly e-waste recycling in Pune. We provide IT asset disposition, secure data management, and responsible electronic waste disposal for corporate.",
};

const PunePage = () => {
  return (
    <CityContent
      cityName="Pune"
      heroTitle="E-Waste Management Solutions for Pune’s Evolving Tech and Industrial Sector"
      heroDescription="Austic Scrap and Recycling offers specialized solutions for Pune's unique blend of heritage and modern industry."
      heroImage="/images/Ewsate greenbackground and right logo.png"
      introTitle="E-Waste Management Leadership in Pune"
      introText="Pune, a perfect place balancing both heritage and contemporary, is famous for its institutions of learning, but it is also finding its way in the area of investments and industries. As this vibrant city carves its niche in IT and manufacturing, one problem looms large: the management of electronic waste. At Austic Scrap and Recycling, we pledge to offer solutions for e-waste management that specifically cater to the growing needs in Pune’s steppe business."
      introImage="/images/workstation scrap buyer"
      whyNeedRecycling={{
        title: "Why We Need E-Waste Recycling",
        description:
          "E-waste includes all types of old office equipment like computers, laptops, and UPS systems. These aren’t just discarded items; they contain harmful substances like lead and mercury that can damage the environment if not handled properly. Fortunately, there’s a positive side: these old electronics also have valuable materials like gold, silver, and copper inside. By recycling e-waste responsibly in a tech-focused city like Pune, we not only protect the environment but also recover these important resources and reduce the need to mine new ones. This practice meets legal requirements and helps Pune maintain its status as a leading tech city while promoting a more sustainable future.",
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
          description: "Safe recycling and disposal of battery waste.",
        },
      ]}
      itAssets={[
        {
          title: "IT Asset Disposal (ITAD) for Pune's Tech Industry",
          description:
            "The IT Asset Disposal services we provide will come in handy to all technology companies based in Pune that are constantly innovating and updating their IT infrastructures. We provide complete data eradication services and also observe all environmental standards during the recycling process.",
        },
        {
          title: "Corporate E-Waste Solutions",
          description:
            "As businesses in Pune continually upgrade their technology, we provide effective solutions for managing corporate e-waste. Our comprehensive services encompass everything from collection to recycling, all while ensuring adherence to local waste management regulations.",
        },
        {
          title: "Battery & Power System Recycling",
          description:
            "In a city where reliable power is crucial, the proper disposal of batteries and UPS systems is essential. Our recycling services ensure safe handling and disposal of these items, preventing environmental harm and recovering valuable materials for reuse. This service is particularly important for Pune’s energy-dependent industries.",
        },
        {
          title: "Data Center Equipment Decommissioning",
          description:
            "Pune’s data centers are critical to its IT infrastructure. Our decommissioning services include secure data destruction and the recycling of servers, networking equipment, and other data center components. We ensure that sensitive information is completely erased and that all materials are processed in an environmentally responsible manner.",
        },
        {
          title: "Manufacturing Industry E-Waste Management",
          description:
            "Our e-waste management services cater to Pune’s manufacturing industry as well. We focus on recovering valuable materials from outdated machinery and electronic components, thereby promoting sustainable practices within this vital sector.",
        },
      ]}
      whyChoose={{
        title: "Why Choose Austic for E-Waste Management in Pune?",
        points: [
          {
            title: "Get the Best Price",
            description:
              "At Austic Scrap and Recycling, we pride ourselves on offering the most competitive prices for electronic waste across Pune and Maharashtra. Our commitment to providing exceptional value sets us apart in the e-waste management industry, ensuring that you receive the best return on your electronic scrap.",
          },
          {
            title: "Cutting-Edge Data Security",
            description:
              "For Pune’s thriving tech and educational sectors, data security is paramount. Our services include advanced data destruction techniques that ensure your sensitive information is thoroughly erased before the recycling process begins. This added layer of security aligns with the city’s high standards for data privacy and protection.",
          },
          {
            title: "Expertise in Local Regulations",
            description:
              "Navigating the regulatory landscape in Pune can be complex. Austic’s deep understanding of local e-waste regulations ensures that our services comply with all necessary guidelines. We provide peace of mind by managing your e-waste in accordance with Pune’s specific environmental and legal requirements.",
          },
        ],
      }}
    />
  );
};

export default PunePage;
