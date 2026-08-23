import React from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.austicscrap.com';

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'RecyclingCenter',
    '@id': `${BASE_URL}/#organization`,
    name: 'Austic Scrap & E-Waste Recycling',
    alternateName: ['Austic Scrap', 'Austic Recycling', 'Austic Scrap Vendor'],
    url: BASE_URL,
    logo: `${BASE_URL}/images/favicon.png`,
    image: `${BASE_URL}/images/home-page.jpg`,
    description:
      'Austic Scrap is India’s premier corporate office scrap buyer, certified e-waste recycler, and IT Asset Disposition (ITAD) provider offering eco-friendly disposal and high market value.',
    telephone: '+91-6205518929',
    email: 'austicscrap@gmail.com',
    priceRange: '$$',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Bank Transfer, Cash, Cheque, UPI',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '40/c/1c/1/H Raja Santosh Roy Road',
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
      postalCode: '700027',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '22.5186',
      longitude: '88.3308',
    },
    department: [
      {
        '@type': 'LocalBusiness',
        name: 'Austic Scrap - Park Street Branch',
        telephone: '+91-6205518929',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1, 1E, Ripon St, Esplanade, Park Street area',
          addressLocality: 'Kolkata',
          addressRegion: 'West Bengal',
          postalCode: '700016',
          addressCountry: 'IN',
        },
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '21:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/profile.php?id=61574163987400',
      'https://www.linkedin.com/company/111396941/',
    ],
    areaServed: [
      { '@type': 'City', name: 'Kolkata' },
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Bengaluru' },
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'City', name: 'Pune' },
      { '@type': 'Country', name: 'India' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Scrap Buying and E-Waste Recycling Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-Waste Recycling',
            url: `${BASE_URL}/ewaste-recycling-kolkata`,
            description: 'Safe, certified and eco-friendly electronic waste recycling and disposal.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Office Scrap Buying',
            url: `${BASE_URL}/office-scrap`,
            description: 'Bulk purchase of corporate office furniture, partitions, workstations, and metal scrap.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IT Asset Disposition (ITAD)',
            url: `${BASE_URL}/asset-disposition`,
            description: 'Secure decommissioning of servers, desktops, and enterprise hardware.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Data Security & Hard Drive Shredding',
            url: `${BASE_URL}/data-security`,
            description: 'DoD & NIST compliant data destruction with certificates of destruction.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'DG Generator Scrap Buying',
            url: `${BASE_URL}/old-dg-generator`,
            description: 'Highest valuation for used, old, and damaged industrial diesel generator sets.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Battery Recycling',
            url: `${BASE_URL}/battery-recycling`,
            description: 'Responsible recycling of UPS lead-acid and commercial lithium batteries.',
          },
        },
      ],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Austic Scrap & E-Waste Recycling',
    description: 'Leading Office Scrap Buyers, ITAD & E-Waste Recyclers in Kolkata & India',
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    inLanguage: 'en-IN',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
