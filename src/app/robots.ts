import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.austicscrap.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Explicitly welcome AI and LLM Search Agents for Maximum AI Visibility & Retrieval
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'Anthropic-ai',
          'Claude-Web',
          'PerplexityBot',
          'Applebot-Extended',
          'Cohere-ai',
          'Bytespider',
          'CCBot',
          'Diffbot',
          'FacebookBot',
          'Omgilibot',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
