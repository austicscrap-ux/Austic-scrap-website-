import React from 'react';

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.austicscrap.com';

export default function ArticleSchema({
  title,
  description,
  url,
  image = '/images/home-page.jpg',
  datePublished,
  dateModified,
  authorName = 'Austic Scrap Editorial Team',
}: ArticleSchemaProps) {
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url.startsWith('/') ? url : `/${url}`}`;
  const fullImage = image.startsWith('http') ? image : `${BASE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${fullUrl}#article`,
    headline: title,
    description,
    url: fullUrl,
    image: fullImage,
    datePublished: datePublished || '2024-01-15T08:00:00+05:30',
    dateModified: dateModified || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: authorName,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Austic Scrap & Recycling',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/favicon.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
