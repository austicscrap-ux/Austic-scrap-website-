import React from "react";
import CityContent from "@/components/sections/CityContent";

export const metadata = {
  title:
    "Chennai Advanced E-Waste Recycling | ITAD & Data Destruction Services",
  description:
    "Efficient e-waste recycling in Chennai for tech companies. We offer secure IT asset disposition, data destruction, and sustainable electronic waste management.",
};

const ChennaiPage = () => {
  return (
    <CityContent
      cityName="Chennai"
      heroTitle="Sustainable E-Waste Management for Chennai’s Growing Tech and Industrial Landscape"
      heroDescription="Reliable recycling solutions for Chennai's vibrant tech ecosystem."
      heroImage="/images/Ewsate greenbackground and right logo.png"
      introTitle="E-Waste Management Leadership in Chennai"
      introText="In Chennai’s vibrant industrial and corporate environments, effective management of surplus or outdated scrap materials is crucial. Austic Scrap provides customized scrap-buying services, focusing on a range of scrap types, including metals and electronic waste. We deliver a streamlined and professional service, ensuring businesses achieve maximum value for their scrap. Our skilled team supports operational efficiency and adherence to waste management regulations, offering a dependable and efficient solution for all your scrap disposal requirements."
      introImage="/images/e-waste-chennai.jpg"
      whyNeedRecycling={{
        title: "Why We Need E-Waste Recycling",
        description:
          "E-waste includes all types of old office equipment like computers, laptops, and UPS systems. These aren’t just discarded items; they contain harmful substances like lead and mercury that can damage the environment if not handled properly. Fortunately, there’s a positive side: these old electronics also have valuable materials like gold, silver, and copper inside. By recycling e-waste responsibly in a tech-focused city like Chennai, we not only protect the environment but also recover these important resources and reduce the need to mine new ones. This practice meets legal requirements and helps Chennai maintain its status as a leading tech city while promoting a more sustainable future.",
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
          description: "Eco-conscious disposal of used batteries.",
        },
      ]}
      itAssets={[
        {
          title: "IT Asset Disposition for Tech Companies",
          description:
            "Chennai tech companies are at the forefront of innovation, leading to rapid technology turnover. Our IT asset disposition services ensure the secure disposal of outdated equipment, with comprehensive data destruction and environmentally responsible recycling.",
        },
        {
          title: "Startup Ecosystem E-Waste Solutions",
          description:
            "Chennai startups often face the challenge of managing outdated electronics. Our Chennai startup e-waste solutions are designed to support these growing businesses, offering bulk purchasing of e-waste, secure data destruction, and eco-friendly recycling practices.",
        },
        {
          title: "Research Institution Equipment Recycling",
          description:
            "Chennai reputation as a research hub means that institutions frequently upgrade their equipment. Our Chennai research institution recycling services focus on recovering valuable materials from obsolete devices, supporting the city’s ongoing commitment to innovation.",
        },
      ]}
      whyChoose={{
        title: "Why choose Austic for E-waste Recyling",
        points: [
          {
            title: "Understanding of Local Needs",
            description:
              "In a city as dynamic as Chennai, it’s essential to choose an e-waste recycling partner that understands the unique challenges and opportunities of the tech ecosystem. Austic Scrap and Recycling stands out for our commitment to sustainability, data security, and customer satisfaction.",
          },
          {
            title: "Comprehensive Services",
            description:
              "Our comprehensive range of services is designed to meet the specific needs of Chennai startups, IT companies, and research institutions, ensuring that your e-waste is handled in the most responsible and efficient manner possible.",
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

export default ChennaiPage;
