import React from 'react';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  image?: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.austicscrap.com';

export default function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  image = '/images/home-page.jpg',
}: ServiceSchemaProps) {
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url.startsWith('/') ? url : `/${url}`}`;
  const fullImage = image.startsWith('http') ? image : `${BASE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${fullUrl}#service`,
    name,
    serviceType,
    description,
    url: fullUrl,
    image: fullImage,
    provider: {
      '@type': 'RecyclingCenter',
      '@id': `${BASE_URL}/#organization`,
      name: 'Austic Scrap & E-Waste Recycling',
      telephone: '+91-6205518929',
      email: 'austicscrap@gmail.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Free corporate inspection and high-recovery market quotation',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
