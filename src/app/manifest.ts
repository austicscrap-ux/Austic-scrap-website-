import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Austic Scrap & E-Waste Recycling',
    short_name: 'Austic Scrap',
    description: 'Leading Office Scrap Buyers, IT Asset Disposition & E-Waste Recycling in Kolkata & Pan India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#127749',
    icons: [
      {
        src: '/images/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
