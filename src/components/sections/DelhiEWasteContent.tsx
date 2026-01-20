'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

const DelhiEWasteContent: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <Image
            src="/images/Ewsate greenbackground and right logo.png"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="hero-image"
          />
          <div className="hero-text">
            <h1>Eco-Friendly E-Waste Recycling for Delhi’s Corporate and Educational Institutions</h1>
            <p>
              Your subtext or description goes here. Make it catchy and informative.
            </p>
            <Link href="#" className="main-btn">Learn More</Link>
          </div>
        </div>
      </section>

      <section id="feature" className="feature-wrapper">
        <div className="feature-container" data-aos="fade-up">
          <div className="feature-row">
            <div className="feature-col content-area text-center text-md-start my-auto order-1">
              <h2>E-Waste Management Leadership in Delhi</h2>
              <p>
                Delhi is taking proactive measures to address the escalating issue of electronic waste as older devices are increasingly discarded. The city is adopting innovative recycling strategies through collaborations between government initiatives and private enterprises, with Austic Scrap and Recycling at the forefront of efforts to assist businesses in responsibly disposing of obsolete electronics. By emphasizing the careful handling and recovery of valuable materials, Delhi is promoting a culture of responsible e-waste management. This forward-thinking strategy not only benefits the environment but also generates economic opportunities, establishing Delhi as a model for other cities in sustainable electronic waste management.
              </p>
            </div>
            <div className="feature-col image-area d-flex justify-content-center align-items-center order-2">
              <div className="image-wrapper" data-aos="zoom-in">
                <picture>
                  <source srcSet="/images/e-waste-delhi.webp" type="image/webp" />
                  <source srcSet="/images/e-waste-delhi.jpg" type="image/jpeg" />
                  <img src="/images/e-waste-delhi.jpg" alt="Five outdated monitors from different brands prepared for e-waste disposal and recycling in Delhi NCR. " loading="lazy" />
                </picture>
              </div>
            </div>
          </div>

          <div className="materials-handled">
            <strong>Scrap Materials We Handle</strong>
            <p>
              Office Waste: We manage everything from outdated documents to excess stationery with care and professionalism. Workstations: We collect old office workstations, making sure they are either refurbished or recycled in an eco-friendly manner. Metal Scrap: We offer competitive rates for various metals like aluminum and steel. Electrical Scrap: We handle all forms of electrical waste, ensuring safe disposal and adherence to regulations. Furniture Scrap: We recycle old office furniture, contributing to reduced landfill waste. Wooden Items: We buy different types of wooden scraps, making sure they are reused or recycled efficiently. Office Cabinets and Panels: We process old office cabinets and panels through our recycling programs. Server Room Equipment: Our experts are adept at securely recycling server room equipment, and prioritizing data protection.
            </p>
          </div>

          <div className="why-choose">
            <strong>Why We Need E-Waste Recycling</strong>
            <p>
              The definition of e-waste can be referred to as a huge series of electronics that are disposable and include office computers, laptops, UPS systems, and batteries. These devices often contain toxic substances, which get released into the environment in the case of poor disposal and pose great danger to human health and the planet. Also, aside from being an eyesore, e-waste is an ore of valuable material value, like gold, silver, and copper, which can efficiently be recovered and reused in manufacturing, saving these resources from being wasted.
            </p>
          </div>

          <ul className="scrap-list">
            <li> <span style={{ color: '#127749' }}>Office Computers & Laptops:</span> Our company recycles office computers and laptops that are at the end of their service life, with data protection and environmental protection in view.</li>
            <li><span>Desktops & CPUs: </span> Our safe disposal solutions recover useful resources—from big desktops to essential CPUs.</li>
            <li><span>UPS Systems & Batteries:</span> Since UPS systems and batteries come with hazardous materials, we handle them with extra care to ensure their responsible disposal.</li>
            <li>Battery</li>
          </ul>

          <div className="asset-col" data-aos="fade-right">
            <h3 className="asset-heading text-center">Types of IT Assets</h3>
            <div className="asset-types">
              <div className="asset-type" data-aos="fade-up">
                <strong>End-to-end IT Asset Disposition Services</strong>
                <p>
                  We understand how businesses have issues handling legacy IT assets in the office and across other areas involving varieties of electronic equipment. Our IT asset disposition service provides IT asset managers, IT leaders, system administrators, and procurement professionals with an efficient and secure process. The guarantee of data security in the certified destruction of sensitive information is paramount, having been irretrievably erased. Besides, our e-waste recycling processes are completely in compliance with the existing environmental regulations that ensure maximum material recovery and minimize electronic waste generation. Partner with us for a dependable, effective, and responsible solution for every challenge connected with the management of IT assets.
                </p>
              </div>
              <div className="asset-type" data-aos="fade-up" data-aos-delay="100">
                <strong>Office Workstation scrap</strong>
                <p>
                  Is your office filled up with old workstations or office furniture? We understand—it happens in offices. That’s why Austic is here! We are devoted to buying and disposing of old office workstations in Delhi. Our labor and team will carefully dismantle the office workstation along with the old chairs. Let us handle the heavy lifting so you can enjoy a more organized workspace!
                </p>
              </div>
              <div className="asset-type" data-aos="fade-up" data-aos-delay="200">
                <strong>IT Companies and software offices scrap</strong>
                <p>
                  In IT companies and the tech corporate world, staying up-to-date often means upgrading their IT assets. But what happens to the old IT asset that gets outdated is very hectic for corporate officers to maintain. So, Austic is here to buy all kinds of old and used IT asset scrap in Delhi. We understand how important it is to keep tech industries' data safe, so we handle everything—from securely wiping old devices to recycling them responsibly.
                </p>
              </div>
            </div>
          </div>

          <div className="why-choose">
            <strong>Why choose Austic for E-waste Recyling</strong>
            <p><span>Proven Expertise:</span> With several decades of experience in e-waste recycling, we bring depth and understanding to every project we undertake with the best in industry standards and regulations.</p>
            <p><span>Second-to-None Data Security:</span> Protection of your most critical information comes first. We make sure to provide certified data destruction so that the data is totally and irrevocably eradicated.</p>
            <p><span>Sustainability Commitment:</span> Our recycling processes are designed not only to minimize the harm to the environment but also to maximize the return of useful materials. We care about a greener planet.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DelhiEWasteContent;
