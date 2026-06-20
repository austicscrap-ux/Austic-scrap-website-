import React from "react";
import CityContent from "@/components/sections/CityContent";

export const metadata = {
  title:
    "Bengaluru’s Advanced E-Waste Recycling | ITAD & Data Destruction Services",
  description:
    "Efficient e-waste recycling in Bengaluru for tech companies. We offer secure IT asset disposition, data destruction, and sustainable electronic waste management.",
};

const BengaluruPage = () => {
  return (
    <CityContent
      cityName="Bengaluru"
      heroTitle="Efficient E-Waste Recycling for Bengaluru’s Tech-Driven Ecosystem"
      heroDescription="Supporting the Silicon Valley of India with premier e-waste management solutions."
      heroImage="/images/Ewsate greenbackground and right logo.png"
      introTitle="E-Waste Management Leadership in Bengaluru"
      introText="Bengaluru, 'the Silicon Valley of India,' is a leader in Bengaluru’s technology and innovation and entrepreneurship industries. With a vast array of Bengaluru’s IT companies, Bengaluru’s startups, and Bengaluru’s research institutions, the city generates a significant amount of electronic waste. Managing this e-waste responsibly is critical for sustaining Bengaluru’s reputation as a leader in both technology and environmental stewardship. At Austic Scrap and Recycling, we provide specialized Bengaluru e-waste management services tailored to Bengaluru’s dynamic tech ecosystem. Our focus is on secure disposal, data protection, and the recovery of valuable materials from electronic waste, all while supporting the city’s commitment to sustainability and innovation."
      introImage="/images/laptop-set.jpg"
      whyNeedRecycling={{
        title: "Why We Need E-Waste Recycling",
        description:
          "E-waste includes all types of old office equipment like computers, laptops, and UPS systems. These aren’t just discarded items; they contain harmful substances like lead and mercury that can damage the environment if not handled properly. Fortunately, there’s a positive side: these old electronics also have valuable materials like gold, silver, and copper inside. By recycling e-waste responsibly in a tech-focused city like Bengaluru, we not only protect the environment but also recover these important resources and reduce the need to mine new ones. This practice meets legal requirements and helps Bengaluru maintain its status as a leading tech city while promoting a more sustainable future.",
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
          description: "Eco-friendly disposal of batteries.",
        },
      ]}
      itAssets={[
        {
          title: "IT Asset Disposition for Tech Companies",
          description:
            "Bengaluru’s tech companies are at the forefront of innovation, leading to rapid technology turnover. Our IT asset disposition services ensure the secure disposal of outdated equipment, with comprehensive data destruction and environmentally responsible recycling.",
        },
        {
          title: "Startup Ecosystem E-Waste Solutions",
          description:
            "Bengaluru startups often face the challenge of managing outdated electronics. Our Bengaluru startup e-waste solutions are designed to support these growing businesses, offering bulk purchasing of e-waste, secure data destruction, and eco-friendly recycling practices.",
        },
        {
          title: "Research Institution Equipment Recycling",
          description:
            "Bengaluru’s reputation as a research hub means that institutions frequently upgrade their equipment. Our Bengaluru research institution recycling services focus on recovering valuable materials from obsolete devices, supporting the city’s ongoing commitment to innovation.",
        },
      ]}
      whyChoose={{
        title: "Why choose Austic for E-waste Recyling",
        points: [
          {
            title: "Understanding of Tech Ecosystem",
            description:
              "In a city as dynamic as Bengaluru, it’s essential to choose an e-waste recycling partner that understands the unique challenges and opportunities of the tech ecosystem. Austic Scrap and Recycling stands out for our commitment to sustainability, data security, and customer satisfaction.",
          },
          {
            title: "Comprehensive Services",
            description:
              "Our comprehensive range of services is designed to meet the specific needs of Bengaluru’s startups, IT companies, and research institutions, ensuring that your e-waste is handled in the most responsible and efficient manner possible.",
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

export default BengaluruPage;
