"use client";

import React from "react";
import Link from "next/link";

const Appointment = () => {
  return (
    <section 
      className="appointment_wrapper wrapper relative z-10 mt-[30px] bg-no-repeat bg-center bg-cover py-5 md:py-10"
      style={{ backgroundImage: 'url("/images/Ewsate greenbackground and right logo.png")' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full lg:w-4/5">
            <div className="text-overlay bg-transparent p-5 md:p-8 rounded-lg relative z-20 text-left">
              <h3 className="text-left text-white font-semibold mb-8 font-secondary text-lg md:text-2xl lg:text-3xl leading-relaxed md:leading-normal max-w-3xl">
                As a scrap buyer in Kolkata, we purchase office scrap, including
                furniture, workstations, and electronics, offering efficient and
                reliable solutions for businesses looking to dispose of their
                scrap responsibly.
              </h3>
              <div className="text-left mt-8 md:mt-10">
                <Link href="/contact" className="main-btn fill-btn inline-block no-underline px-8 py-3 text-base md:text-lg">
                  Request Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
