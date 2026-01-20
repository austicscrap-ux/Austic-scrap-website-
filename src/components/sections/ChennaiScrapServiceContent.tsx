'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

const ChennaiScrapServiceContent: React.FC = () => {
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
            <h1>Eco-Friendly Scrap Collection and Recycling Services in Chennai</h1>
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
                Comprehensive Disposal Solutions for Businesses in Chennai
              </h2>
              <p style={{ textAlign: 'left' }}>
                In Chennai’s vibrant industrial and corporate environments, effective management of surplus or outdated scrap materials is crucial. Austic Scrap provides customized scrap-buying services, focusing on a range of scrap types, including metals and electronic waste. We deliver a streamlined and professional service, ensuring businesses achieve maximum value for their scrap. Our skilled team supports operational efficiency and adherence to waste management regulations, offering a dependable and efficient solution for all your scrap disposal requirements.
              </p>
            </div>
            <div className="imteyaz_col-md-6 d-flex justify-content-center align-items-center order-2">
              <div className="imteyaz_logo-square" data-aos="zoom-in">
                <Image
                  src="/images/workstation scrap buyer"
                  alt="Workstation Scrap Buyer"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="imteyaz-col-12" data-aos="fade-right">
            <h3 className="imteyaz-heading text-center">Our Services in Chennai</h3>
            <div className="imteyaz-types">
              <div className="imteyaz-type" data-aos="fade-up">
                <strong>Office Furniture Scrap Collection </strong>
                <p>
                  When replacing old office furniture in Chennai, Austic Scrap is your trusted partner for seamless removal and recycling of desks, chairs, and other office equipment. Specializing in office furniture scrap management, we ensure that all items are responsibly dismantled, transported, and recycled, providing a reliable solution tailored to your city's needs. Our expert team handles every aspect of the process with efficiency and adherence to environmental standards, making office equipment disposal hassle-free.
                </p>
              </div>
              <div className="imteyaz-type" data-aos="fade-up" data-aos-delay="100">
                <strong>DG Set Disposal</strong>
                <p>
                  For industries in Chennai upgrading their power solutions, Austic Scrap provides a comprehensive service for the removal of old DG sets. We manage the entire process—dismantling, transporting, and recycling—while strictly adhering to all safety and environmental regulations. Our specialized DG set scrap management in Chennai ensures that your outdated equipment is efficiently and responsibly processed, supporting both sustainability and regulatory compliance.
                </p>
              </div>
              <div className="imteyaz-type" data-aos="fade-up" data-aos-delay="300">
                <strong>Chiller AC Plant Disposal</strong>
                <p>
                  In Chennai's extensive commercial and industrial sectors, large buildings frequently depend on chiller AC plants for climate control. As these systems age, Austic Scrap offers comprehensive dismantling and disposal services. Our expertise ensures the secure removal and environmentally responsible recycling of outdated chiller AC plants, adhering to the highest safety standards. We provide a seamless, efficient process for chiller AC scrap management, supporting sustainability and minimizing disruption to your operations.
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

export default ChennaiScrapServiceContent;
