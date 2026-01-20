'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const AppointmentSection: React.FC = () => {
  return (
    <section 
      className="relative py-12 md:py-20 my-8 bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/Ewsate greenbackground and right logo.png')",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12 text-center">
            <div className="relative z-20 bg-transparent p-5 rounded-md">
              <h3 className="text-white text-2xl md:text-3xl font-semibold mb-8 text-justify md:text-center md:max-w-4xl md:mx-auto">
                As a scrap buyer in Kolkata, we purchase office scrap, including
                furniture, workstations, and electronics, offering efficient and
                reliable solutions for businesses looking to dispose of their
                scrap responsibly.
              </h3>
              <Link href="/contact">
                <Button variant="fill" className="mt-5">
                  Request Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
