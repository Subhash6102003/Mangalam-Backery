/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Mangalam-Backery',
  images: {
    unoptimized: true, // Required for static export
  },
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
