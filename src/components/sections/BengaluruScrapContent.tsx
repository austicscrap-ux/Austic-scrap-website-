'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

const BengaluruScrapContent: React.FC = () => {
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
            <h1>Efficient Scrap Collection & Recycling Services in Bengaluru with Austic</h1>
            <Link href="/" className="main-btn">Home</Link>
            <Link href="/contact" className="main-btn">Sale Now</Link>
          </div>
        </div>
      </section>

      <section id="feature" className="imteyaz_wrapper wrapper">
        <div className="imteyaz_container" data-aos="fade-up">
          <div className="imteyaz_row">
            <div className="imteyaz_col-md-6 text-center text-md-start my-auto order-1">
              <h2 style={{ color: '#127749' }}>
                Scrap Collection Services: Eco-Friendly Solutions with Austic
              </h2>
              <p style={{ textAlign: 'left' }}>
                Bengaluru, with its rapid growth in tech and industry, creates a lot of scrap from different businesses. At Austic Scrap, we’re here to make dealing with it easier. We offer scrap pickup and disposal for offices, banking, factories, and more across Bengaluru. Whether it’s old metal, office furniture, ACs, or unused machinery equipment, we’re ready to help. We aim to make the whole process easy and stress-free while keeping things environmentally friendly. By working with us, businesses in Bengaluru can manage their scrap easily and help make the city cleaner and greener.
              </p>
            </div>
            <div className="imteyaz_col-md-6 d-flex justify-content-center align-items-center order-2">
              <div className="imteyaz_logo-square" data-aos="zoom-in">
                <picture>
                  <source srcSet="/images/office-workstation-scrap.webp" type="image/webp" />
                  <img src="/images/workstation scrap buyer" alt="Workstation Scrap Buyer" />
                </picture>
              </div>
            </div>
          </div>
          <div className="imteyaz-col-12" data-aos="fade-right">
            <h3 className="imteyaz-heading text-center">Our Services in Mumbai</h3>
            <div className="imteyaz-types">
              <div className="imteyaz-type" data-aos="fade-up">
                <strong>Office Furniture Scrap Collection </strong>
                <p>
                  Bengaluru’s corporate offices are constantly evolving, and with that comes the need to dispose of office furniture such as desks, chairs, and cabinets. Austic ensures that all items are recycled or repurposed in an environmentally friendly manner.
                </p>
              </div>
              <div className="imteyaz-type" data-aos="fade-up" data-aos-delay="100">
                <strong>DG Set Disposal</strong>
                <p>
                  Upgrading or replacing your DG sets? Austic specializes in buying old and used DG sets in Bengaluru. We provide professional removal and dismantling services, ensuring a smooth process and minimal disruption to your workspace. You’ll receive top value for your DG sets while supporting responsible disposal practices. Trust us to handle your DG set scrap efficiently so you can focus on your business operations.
                </p>
              </div>
              <div className="imteyaz-type" data-aos="fade-up" data-aos-delay="200">
                <strong>Metal Scrap Recycling</strong>
                <p>
                  Bengaluru’s industrial sector generates significant amounts of metal scrap, including steel, aluminum, and copper. Austic offers customized metal scrap disposal services to meet the needs of businesses across various industries. Our team ensures efficient and responsible handling of all types of metal scrap, helping you manage waste while minimizing environmental impact. Whether disposing of small or large volumes, Austic provides reliable, eco-friendly solutions that simplify the process and support sustainable practices in Bengaluru.
                </p>
              </div>
              <div className="imteyaz-type" data-aos="fade-up" data-aos-delay="300">
                <strong>Ductable Air Conditioner Disposal</strong>
                <p>
                  Austic specializes in the removal of outdated ductable AC systems for businesses. Our team ensures the safe dismantling and eco-friendly disposal of these large units with minimal disruption to your operations. We provide efficient, reliable services, helping you clear out old systems quickly and responsibly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <strong>Why Choose Austic?</strong>
          <p>
            Austic draws on extensive experience in the recycling field to expertly handle a wide range of scrap materials. We prioritize eco-friendly practices, working to minimize the environmental impact of each item we process. Our process is characterized by openness, featuring fair rates and consistent updates throughout. We offer bespoke services tailored to each client's specific needs, aiming for a seamless and rewarding experience.
          </p>
        </div>
      </section>
    </>
  );
};

export default BengaluruScrapContent;
