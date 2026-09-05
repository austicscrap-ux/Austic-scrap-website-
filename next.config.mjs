/** @type {import('next').NextConfig} */
const nextConfig = {
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
