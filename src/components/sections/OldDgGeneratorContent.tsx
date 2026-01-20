'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

const OldDgGeneratorContent: React.FC = () => {
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
            <h1>Old DG Generator Scrap Buyer in Kolkata: Best Place to Sell Used, Damaged, and Obsolete Generators</h1>
            <Link href="/" className="main-btn">Home</Link>
            <Link href="/form" className="main-btn">Sale now</Link>
          </div>
        </div>
      </section>

      <section id="feature" className="feature-wrapper">
        <div className="feature-container" data-aos="fade-up">
          <div className="feature-row">
            <div className="feature-col content-area text-center text-md-start my-auto order-1">
              <h2 style={{ textAlign: 'center' }}>Old DG Generator Scrap Buyer in Kolkata: Best Place to Sell Used, Damaged, and Obsolete Generators</h2>
              <p>
                In the bustling city of Kolkata, where industries and corporate offices rely heavily on Diesel Generator (DG) sets for backup power, there comes a time when these generators become old, damaged, or obsolete. At Austic Scrap, we specialize in buying used and scrap DG generators from businesses all across Kolkata. Whether it’s a small office generator or a massive industrial setup, we offer the best value for your old generators, ensuring a smooth and eco-friendly disposal process.
              </p>
            </div>

            <div className="feature-col image-area d-flex justify-content-center align-items-center order-2">
              <div className="image-wrapper" data-aos="zoom-in">
                <picture>
                  <source srcSet="/images/e-waste-kolkata.webp" type="image/webp" />
                  <source srcSet="/images/e-waste-kolkata.jpg" type="image/jpeg" />
                  <img
                    src="/images/e-waste-kolkata.jpg"
                    alt="Workstation Scrap Buyer"
                  />
                </picture>
              </div>
            </div>
          </div>

          <div className="materials-handled">
            <strong>We Buy All Types of DG Generators from Corporate Offices & Industries</strong>
            <p>
              Kolkata’s industrial and corporate sector often requires constant power backup, especially during power outages, and DG generators play a crucial role in ensuring uninterrupted business operations. However, as technology advances or as these generators become outdated, it’s essential to dispose of them responsibly. We provide a hassle-free service for purchasing used, broken, or old generators and repurposing them in an environmentally friendly way.
            </p>
          </div>

          <div className="asset-col" data-aos="fade-right">
            <h3 className="asset-heading text-center">types of DG Generators we Buy</h3>
            <div className="asset-types">
              <div className="asset-type" data-aos="fade-up">
                <strong>Industrial Diesel Generators : </strong>
                <p>
                  Whether you have large, industrial-grade generators that are no longer in use or need an upgrade, we buy old and outdated industrial DG sets from factories and plants.
                </p>
              </div>
              <div className="asset-type" data-aos="fade-up" data-aos-delay="100">
                <strong>Corporate Office Generators:</strong>
                <p>
                  Offices in Kolkata often have medium-sized DG sets as backup power sources. If your business is replacing or discarding your generator, we’re ready to offer you the best price.
                </p>
              </div>
              <div className="asset-type" data-aos="fade-up" data-aos-delay="200">
                <strong>Silent Generators: </strong>
                <p>
                  Silent generators are popular in corporate and commercial settings. If you’re replacing or scrapping your old silent generator due to wear and tear or inefficiency, we can offer you an excellent rate for it.
                </p>
              </div>
            </div>
          </div>

          <div className="why-choose">
            <strong>Why Sell Your Old DG Generator to Us in Kolkata?</strong>
            <p>
              <span>Best Scrap Prices in Kolkata:</span>We offer highly competitive prices for your old and unused DG sets. Our pricing is transparent, and we ensure you get the best market value for your scrap generator.
            </p>
            <p>
              <span>Hassle-Free Process:</span> Selling your DG generator to us is simple and hassle-free. From inspection to dismantling and removal, we handle everything for you. Our experienced team ensures a smooth, quick, and safe transaction.
            </p>
            <p>
              <span> Environmentally Responsible Disposal: </span> We follow all environmental guidelines and ensure that your old DG generator is recycled or disposed of in an eco-friendly manner. Our goal is to reduce Kolkata’s electronic and mechanical waste and contribute to a greener city.
            </p>
            <p>
              <span>Serving Corporate Offices and Industries:</span> Whether you’re a small business with a single DG set or a large industry with multiple generators, we cater to all. Our team is equipped to handle generators of all sizes and capacities, ensuring a seamless scrap-buying process.
            </p>
            <p>
              <span>Quick Pickup Service Across Kolkata:</span>We offer fast and reliable pickup services from any location in Kolkata. Once you contact us, our team will reach your premises, assess the DG generator, and handle the transportation of your old DGset
            </p>
          </div>

          <strong>Contact Us for DG Generator Scrap Buying in Kolkata</strong>
          <p>If you have an old, unused, or damaged DG generator at your office or industrial site in Kolkata, don’t let it take up valuable space. Sell it to us at the best scrap price and contribute to a cleaner, greener Kolkata.</p>
        </div>
      </section>
    </>
  );
};

export default OldDgGeneratorContent;
