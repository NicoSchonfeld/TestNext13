/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.picsum.photos"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
