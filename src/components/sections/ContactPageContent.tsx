"use client";

import React, { useState } from "react";
import ContactInfo from "@/components/sections/ContactInfo";
import GetInTouchForm from "@/components/common/GetInTouchForm";
import ScheduleCallForm from "@/components/common/ScheduleCallForm";

export default function ContactPageContent() {
  const [activeTab, setActiveTab] = useState<'getInTouch' | 'scheduleCall'>('getInTouch');

  return (
    <>
      <section className="py-20 bg-amber-50/30">
        <div className="container mx-auto px-4 lg:px-21.5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>

            {/* Right Column: Forms with Tabs */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden">
                
                {/* Tab Navigation */}
                <div className="flex border-b border-neutral-200">
                  <button
                    onClick={() => setActiveTab('getInTouch')}
                    className={`flex-1 px-6 py-4 text-center font-medium transition-all duration-200 ${
                      activeTab === 'getInTouch'
                        ? 'text-[#127749] border-b-2 border-[#127749] bg-[#127749]/5'
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Get in Touch
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab('scheduleCall')}
                    className={`flex-1 px-6 py-4 text-center font-medium transition-all duration-200 ${
                      activeTab === 'scheduleCall'
                        ? 'text-[#127749] border-b-2 border-[#127749] bg-[#127749]/5'
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                      </svg>
                      Schedule a Call
                    </div>
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-8 md:p-10">
                  {activeTab === 'getInTouch' ? (
                    <div>
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-neutral-900 font-primary mb-2">
                          Send Us a Message
                        </h3>
                        <p className="text-neutral-500 font-medium">
                          Fill out the form below and we'll get back to you shortly.
                        </p>
                      </div>
                      <GetInTouchForm />
                    </div>
                  ) : (
                    <div>
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-neutral-900 font-primary mb-2">
                          Schedule Your Consultation
                        </h3>
                        <p className="text-neutral-500 font-medium">
                          Choose your preferred date and time, and we'll call you to discuss your scrap management needs.
                        </p>
                      </div>
                      <ScheduleCallForm />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-112.5 bg-neutral-100 relative grayscale hover:grayscale-0 transition-all duration-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.710404419791!2d88.3530503!3d22.5549376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x20a4a1d9df8f9afa!2sScrap+Buyer!5e0!3m2!1sen!2sin!4v1625576000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Austic Scrap Location"
        />
      </section>
    </>
  );
}
