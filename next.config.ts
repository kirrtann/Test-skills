/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  experimental: {
    optimizePackageImports: ['react-icons', '@tanstack/react-query'],
  },
};

module.exports = nextConfig;
