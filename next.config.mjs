/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: '/asset',
        destination: '/asset-disposition',
        permanent: true,
      },
      {
        source: '/metal',
        destination: '/metal-recycling',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
